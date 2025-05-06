module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define("Aluno", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Aluno.associate = (models) => {
    Aluno.belongsTo(models.Curso, {
      foreignKey: "cursoId",
      as: "Curso",
    });
  };

  return Aluno;
};
