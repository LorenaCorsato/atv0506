const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

// Instancia o Sequelize com as configurações definidas em config.json
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Aluno = require("./aluno")(sequelize, DataTypes);
db.Curso = require("./curso")(sequelize, DataTypes);
db.Materia = require("./materia")(sequelize, DataTypes);
db.Professor = require("./professor")(sequelize, DataTypes);

// Associações
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
