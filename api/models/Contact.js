/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	residence: {
  		type: "string",
  		required: true
  	},
  	telephone: {
  		type: "string",
  		required: true
  	},
  	email: {
  		type: "string",
  		required: true
  	},
  	text: {
  		type: "string",
  		required: true
  	}

  }
};

