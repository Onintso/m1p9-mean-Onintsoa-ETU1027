const App = require("../model/utilisateur.model.js");
const hash = require("../hash.js");
// Create and Save a new Message
exports.create = (req, res) => {
  const message = new App({
    nom: req.body.nom,
    prenom: req.body.prenom,
    num: req.body.num,
    mail: req.body.mail,
    //mdp : hash.hash_pwd(req.body.mdp),
    mdp : hash.hash_pwd(req.body.mdp),
    type: req.body.type
  });
  message
    .save()
    .then((data) => {
      res.send({status:200,data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  App.find()
    .then((data) => {
      res.send({status:200, resultFound: data.length,
        data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.messageId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.messageId,
    {
      message: req.body.message,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.messageId,
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  App.findByIdAndRemove(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.messageId,
      });
    });
};

exports.findComplet = (req, res) => {
    App.aggregate([{
        $lookup:{
            from: "category", //or Races.collection.name
            localField: "cat",
            foreignField: "_id",
            as: "category"
        },
        
      }])
      .then((data) => {
        res.send({status:200, resultFound: data.length,
          data: data });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
    };

    exports.login = (req, res) => {
      var token = null;
      const mail = req.body.mail;
      App.find(
        {
          mail : mail,
          mdp: hash.hash_pwd(req.body.mdp),//call pwd's generator
          type : "1"
        }
      )
        .then((data) => {
          if(data.length == 1) 
            token =hash.generate_token(mail);
          if(data.length == 0)
            throw 'Veuillez verifier vos identifiants!'
          res.send({status:200, resultFound: data.length,
            data: data, token: token });
        })
        .catch((err) => {
          res.send({
            status : 500,
            message: err.toString(),
          });
        });
    };
