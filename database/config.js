const path = require('path');

module.exports = {
  modelPath: path.resolve(__dirname, './models'),
  //   new Sequelize config
  config: {
    dialect: 'sqlite',
    storage: 'database/sqlite_test.sqlite',
    // model options 全局默认值 https://sequelize.org/master/class/lib/model.js~Model.html
    define: {
      raw: true,
      freezeTableName: false,
      createdAt: 'create_time',
      updatedAt: 'update_time',
      // dialectOptions: {},
      // pool: {
      //   max: 20,
      //   min: 1,
      // },
    },
  },
};
