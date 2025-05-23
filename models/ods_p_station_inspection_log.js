const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ods_p_station_inspection_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pch: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "批次流水号"
    },
    oid: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "原始数据id"
    },
    qytyxydm: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "信用代码"
    },
    xzqhbm: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "所属区域编码"
    },
    sjtp_cd: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "数据类型"
    },
    jsclfs: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "接收处理方式"
    },
    sjbgsj: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "数据变更时间"
    },
    fk_cz_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "外键"
    },
    xjrxm: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "巡检人姓名"
    },
    sbyh: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "上报隐患,文字描述"
    },
    sffzyh_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "是否存在隐患"
    },
    xjsj: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "巡检时间"
    },
    yhsfzd_cd: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "隐患是否重大"
    },
    sjhqfs: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "数据获取方式"
    },
    sjtbr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "数据填报人"
    },
    sjcrsj: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "数据插入时间"
    },
    sync_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "同步状态：0-未同步，1-已同步"
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "锁定状态：0-未锁定，1-已锁定"
    },
    sync_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后同步时间"
    }
  }, {
    sequelize,
    tableName: 'ods_p_station_inspection_log',
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
        name: "ods_p_station_inspection_log_oid_qytyxydm_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oid" },
          { name: "qytyxydm" },
        ]
      },
      {
        name: "ods_p_station_inspection_log_pch_idx",
        using: "BTREE",
        fields: [
          { name: "pch" },
        ]
      },
    ]
  });
};
