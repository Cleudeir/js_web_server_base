import { DataTypes, Model, Sequelize } from "sequelize";

class Database {
  public sequelize: Sequelize | null;
  constructor() {
    this.sequelize = null;
    this.connect();
  }

  private async connect() {
    this.sequelize = new Sequelize("database", "username", "password", {
      host: "localhost",
      dialect: "postgres",
    });
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  public async close() {
    if (this.sequelize) {
      await this.sequelize.close();
    }
  }

  public async create(body: object, user: object | null) {
    class User extends Model {}

    User.init(
      {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
      },
      {
        // Other model options go here
        sequelize: this.sequelize, // We need to pass the connection instance
        modelName: "User", // We need to choose the model name
      }
    );

    // the defined model is the class itself
    console.log(User === this.sequelize.models.User); // true
  }
}

export default new Database();
