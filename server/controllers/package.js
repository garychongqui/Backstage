const Package = require('../db/models/package'),
  User = require('../db/models/user');
mongoose = require('mongoose');

// ***********************************************//
// Create a task
// ***********************************************//
exports.getAllPackages = async (req, res) => {
  try {
    const thePackages = await Package.find({ user: req.user._id });
    res.status(200).json(thePackages);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.createPackage = async (req, res) => {
  try {
    const package = new Package({
      ...req.body,
      user: req.user._id
    });
    await package.save();
    const theUser = await User.findOne({
      _id: req.user._id
    });
    theUser.packages.push(package);
    await theUser.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPackage = async (req, res) => res.json(req.user);

// ***********************************************//
// Update a task
// ***********************************************//

exports.updatePackage = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const stage = await Stage.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    updates.forEach((update) => (stage[update] = req.body[update]));
    await stage.save();
    res.status(200).json(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Delete a task
// ***********************************************//
exports.deletePackage = async (req, res) => {
  try {
    console.log('delete controller has run');
    const package = await Package.findOneAndDelete({
      _id: req.params.id
      // owner: req.user._id
    });
    const theUser = await User.findOne({ _id: req.user._id });
    const packageIndex = theUser.packages.indexOf(req.params.id);
    theUser.packages.splice([packageIndex]);
    await theUser.save();
    if (!package) return res.status(404).json({ message: 'Package not found' });
    res.status(200).send('Package has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
