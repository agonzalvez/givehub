//or charities
const Charities = require('./Charities');
//const lgbt = require('./lbgt');
//const mentalHealth = require('./mentalHealth');
//const socialJustice = require('./socialJustice');
//const womensData = require('./womensData');
const UserProfile = require('./userPrfofile');

userProfile.hasMany(Charities, {
    foreignKey: 'charity_id',
    onDelete: 'CASCADE'
  });
  
  Charities.belongsTo(userProfile, {
    foreignKey: 'charities_id'
  });
  
  module.exports = { User, Charities };