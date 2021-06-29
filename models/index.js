const Charities = require('./Charities');
const UserProfile = require('./userProfile');
const UserList = require('./userList');



 UserProfile.belongsToMany(Charities, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserList,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'favorite_charities'
  });
  
  Charities.belongsToMany(UserProfile, {
    // Define the third table needed to store the foreign keys
    through: {
      model: UserList,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'charity_member'
  });

  module.exports = { UserProfile, UserList, Charities };
