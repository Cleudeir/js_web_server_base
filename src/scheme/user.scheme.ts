import { DataTypes } from "sequelize";
import Database from "../class/Database";

export async function userScheme() {
  await Database.createTable("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}
