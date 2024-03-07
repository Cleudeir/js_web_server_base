import { DataTypes, Model, Sequelize } from "sequelize";

class Database {
  public sequelize: Sequelize | null;
  constructor() {
    this.sequelize = null;
  }

  public async connect() {
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

  public async create() {
    if (!this.sequelize) {
      console.error("Database connection not established.");
      return;
    }
    class User extends Model {}

    User.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize: this.sequelize,
        modelName: "User",
      }
    );

    try {
      await this.sequelize.sync();
      const user = this.sequelize.models.User;
      await user.create({ firstName: "copm", lastName: "copm" });
      console.log("User created successfully.", await user.findAll());
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
}

export default new Database();
