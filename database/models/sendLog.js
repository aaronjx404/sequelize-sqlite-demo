const { DataTypes } = require('sequelize');

module.exports = [
  // attributes
  {
    taskId: {
      type: DataTypes.STRING,
    },
    wordId: {
      type: DataTypes.STRING,
    },
    wordType: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  //   otherOptions
  {
    modelName: 'SendLog',
  },
];
