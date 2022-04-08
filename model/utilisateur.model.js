const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    num: Number,
    mail: String,
    mdp : String,
    type: String
});

module.exports = mongoose.model("User", UserSchema);