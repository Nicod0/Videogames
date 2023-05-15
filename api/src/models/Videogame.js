const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [1, 200],
            msg: "el nombre debe tener entre 1 a 200 caracteres",
          },
        },
      },
      descripcion: {
        type: DataTypes.STRING(2000),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [10, 2000],
            msg: "la descripción tiene que tener entre 10 y 2000 caracteres",
          },
        },
      },
      plataformas: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        unique: true,
        validate: {
          isUrl: {
            msg: "la imagen debe estar en formato URL",
          },
        },
      },
      fechaDeLanzamiento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isDate: {
            msg: "la fecha tiene que estar en formato: xxxx-xx-xx",
          },
        },
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
