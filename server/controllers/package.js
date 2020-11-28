const Package = require('../db/models/package'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a package
// ***********************************************//

exports.getAllPackages = async (req, res) => {
  console.log('hsad 1run');
  try {
    const thePackages = await Package.find({ user: req.user._id });
    res.status(200).json(thePackages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createPackage = async (req, res) => {
  console.log('hsad 2run');
  try {
    const package = new Package({
      ...req.body,
      user: req.user._id
    });
    await package.save();

    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPackages = async (req, res) => {
  try {
    const thePackages = await Package.find({ user: req.user._id });
    res.status(200).json(thePackages);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOnePackage = async (req, res) => {
  console.log('hsad 3run');
  try {
    const thePackage = await Package.findOne({ _id: req.params.id });
    res.status(200).json(thePackage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json(req.user);
};
// ***********************************************//
// Update a package
// ***********************************************//
exports.updatePackage = async (req, res) => {
  console.log('hsad4 run');
  const updates = Object.keys(req.body);
  // console.log(updates);
  try {
    const package = await Package.findOne({
      _id: req.params.id
    });
    // console.log(package);
    // if (!package) return res.status(404).json({ message: 'Stage not found' });
    updates.forEach((update) => (package[update] = req.body[update]));
    await package.save();
    res.status(200).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Delete a package
// ***********************************************//
exports.deletePackage = async (req, res) => {
  console.log('hsad 5run');
  try {
    const packageToDelete = await Package.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    res.status(200).send('Package has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
