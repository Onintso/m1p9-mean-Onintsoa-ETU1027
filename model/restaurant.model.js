const mongoose = require("mongoose");

const RestoSchema = mongoose.Schema({
  nom: String,
  localisation : String,
  ouverture: String,
  specificite : String
});

module.exports = mongoose.model("Restaurant", RestoSchema);