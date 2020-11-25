const Package = require('../db/models/package'),
  User = require('../db/models/user');
mongoose = require('mongoose');
// ***********************************************//
// Create a task
// ***********************************************//
exports.createPackage = async (req, res) => {
  try {
    const package = new Package({
      ...req.body,
      user: req.user._id
    });
    await package.save();
    // const theUser = await User.findOne({
    //   _id: req.user._id
    // });
    // theUser.packages.push(package);
    // await theUser.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllPackages = async (req, res) => {
  try {
    const thePackage = await Package.find({ user: req.user._id });
    res.status(200).json(thePackage);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOnePackage = async (req, res) => {
  try {
    const thePackage = await Package.findOne({ _id: req.params.id });
    res.status(200).json(thePackage);
  } catch (error) {
    res.status(400).json(error);
  }
  res.json(req.user);
};
// ***********************************************//
// Update a task
// ***********************************************//
exports.updatePackage = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'name',
    'width',
    'depth',
    'stageArea',
    'comments',
    'anythingElse'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const package = await Package.findOne({
      _id: req.params.id
    });
    if (!package) return res.status(404).json({ message: 'Stage not found' });
    updates.forEach((update) => (package[update] = req.body[update]));
    await package.save();
    res.status(200).json(package);
  } catch (error) {
    res.status(400).json({ error });
  }
};
// ***********************************************//
// Delete a task
// ***********************************************//
exports.deletePackage = async (req, res) => {
  try {
    const packageToDelete = await Package.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    console.log(packageToDelete);
    // const theUser = await User.findOne({ _id: req.user._id });
    // theUser.packages = await theUser.packages.filter(
    //   (package) => packageToDelete._id !== package
    // );
    // const packageIndex = theUser.packages.indexOf(req.params.id);
    // await theUser.packages.splice(packageIndex);
    // if (!thePackage) return res.status(404).json({ message: 'Package not found' });
    // await theUser.save();
    res.status(200).send('Package has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
