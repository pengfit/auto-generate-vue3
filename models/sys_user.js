const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "用户ID"
    },
    user_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "用户昵称(与手机号保持一致)"
    },
    user_type: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "00",
      comment: "用户类型（00系统用户）"
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "",
      comment: "手机号码"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
      comment: "密码"
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0",
      comment: "帐号状态（0 正常 1 停用）"
    },
    reset_pass: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0",
      comment: "是否修改密码（0 未修改， 1 已修改）"
    },
    del_flag: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0",
      comment: "删除标志（0代表存在 1代表删除）"
    },
    login_ip: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: "",
      comment: "最后登录IP"
    },
    login_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后登录时间"
    },
    create_by: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "",
      comment: "创建者"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    update_by: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "",
      comment: "更新者"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "备注"
    }
  }, {
    sequelize,
    tableName: 'sys_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sys_user_user_name_IDX",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_name" },
          { name: "del_flag" },
        ]
      },
      {
        name: "sys_user_phonenumber_IDX",
        using: "BTREE",
        fields: [
          { name: "phone_number" },
        ]
      },
    ]
  });
};
