const db = require("../models");

module.exports = {
  findAll: function(req, res) {

  },
  findOne: function(req, res) {
    db.Project.find({ title: req.params.projectTitle })
      .then(articles => {
        console.log(articles);
        res.json(articles);
      })
      .catch(err => res.status(422).json(err));
  },
  createOne: function(req, res) {
    db.Project.create(req.body).then(res => res.json(res)).catch(err => res.status(422).json(err))
  },
  update: function(req, res) {

  },
  remove: function(req, res) {

  }
};
