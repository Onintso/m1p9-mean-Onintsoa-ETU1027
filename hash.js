//Loading the crypto module in node.js
var crypto = require('crypto');
//creating hash object 
var hash = crypto.createHash('sha1');

const jwt = require('jsonwebtoken')
// chargement du fichier d'env
require('dotenv').config();
// accès au variables
//process.env.ACCESS_TOKEN_SECRET;

//passing the data to be hashed
exports.hash_pwd = (mdp) => {
		data = hash.update(mdp, 'utf-8');
//Creating the hash in the required format
		return data.digest('hex');
	};
exports.generate_token = (user) => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}
