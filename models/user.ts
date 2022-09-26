'use strict';

import {
  DateDataType,
  DoubleDataType,
  Model,
  UUIDV4
} from 'sequelize';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  salary: DoubleDataType
  birth: DateDataType;
  active: Boolean;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> 
  implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    email!: string;
    salary!: DoubleDataType;
    birth!: DateDataType;
    active!: Boolean;
  
    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Project, {
        through: 'ProjectAssignments'
      })
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [3, 100]
    }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        len: [1, 999999]
      }
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};