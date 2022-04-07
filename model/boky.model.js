const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
 //_id: String,
  nom:String,
  auteur: String
});
module.exports = mongoose.model("Boky", AppSchema);