const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ods_p_station_hd_attr', {
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
    yhly_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "隐患来源"
    },
    fk_cz_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "外键"
    },
    yhms: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "隐患描述"
    },
    yhdj_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "隐患等级"
    },
    yhdz: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "隐患位置地址（厂站地址）"
    },
    yhsbsj: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "隐患上报时间"
    },
    pcryxm: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "排查人员姓名"
    },
    pcdwmc: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "排查单位名称（厂站巡检填燃气企业名称）"
    },
    pcfs_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "排查方式"
    },
    zgqx: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "整改期限"
    },
    zgyq: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "整改要求"
    },
    zgsj: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "整改时间"
    },
    zgzt_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "整改状态（默认为未整改；整改后再次推送,状态变为‘已整改未销号’）"
    },
    zrrxm: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "隐患责任人姓名"
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
    fk_xjjl_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "外键"
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
    tableName: 'ods_p_station_hd_attr',
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
        name: "ods_p_station_hd_attr_oid_qytyxydm_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oid" },
          { name: "qytyxydm" },
        ]
      },
      {
        name: "ods_p_station_hd_attr_pch_idx",
        using: "BTREE",
        fields: [
          { name: "pch" },
        ]
      },
    ]
  });
};
