module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define("Curso", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Curso.associate = (models) => {
    // Relacionamento com Aluno (Um curso tem muitos alunos)
    Curso.hasMany(models.Aluno, {
      foreignKey: "cursoId", // Chave estrangeira na tabela Aluno
      as: "alunos", // Alias utilizado nas consultas
    });

    // Relacionamento com Materia (Um curso tem muitas matérias)
    Curso.hasMany(models.Materia, {
      foreignKey: "cursoId", // Chave estrangeira na tabela Materia
      as: "materias", // Alias utilizado nas consultas
    });
  };

  return Curso;
};
