const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ods_p_station_attr', {
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
    czbh: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "企业系统内的厂站编号"
    },
    czmc: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "厂站名称"
    },
    czlx_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "厂站类型"
    },
    jcnd: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "建设年代"
    },
    czdz: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "厂站地址"
    },
    zdmj: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      comment: "占地面积"
    },
    geom: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "经纬度geomtry"
    },
    jzsjylfw: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "进站设计压力范围"
    },
    fzsjylfw: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "出站设计压力范围"
    },
    jgysjl_cd: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "竣工验收结论"
    },
    geom_bhfw: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "保护范围geomtry"
    },
    zzcqqps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "自主产权气瓶数量"
    },
    czfzr: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "厂站负责人"
    },
    fzrlxfs: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "厂站负责人联系方式"
    },
    bz: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "备注"
    },
    jsdw: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "建设单位名称"
    },
    jgysrq: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "竣工验收日期"
    },
    syzt_cd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "使用状态"
    },
    bh: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "充装证编号（厂站为充装站时填写）"
    },
    czjz: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "充装介质（厂站为充装站时填写）"
    },
    fzrq: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "发证日期（厂站为充装站时填写）"
    },
    dqrq: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "充装证到期日期（厂站为充装站时填写）"
    },
    rgql: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
      comment: "日供气量，单位:立方米"
    },
    cqrj: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
      comment: "厂站储气容积，单位:立方米"
    },
    sjhqfs: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "数据获取方式，1=企业对接,2=平台对接,3=主管部门对接,4=填报,5=其他"
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
    geom_lon: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "经度"
    },
    geom_lat: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "纬度"
    },
    geom_bhfw_lon: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "经度"
    },
    geom_bhfw_lat: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "纬度"
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
    tableName: 'ods_p_station_attr',
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
        name: "ods_p_station_attr_oid_qytyxydm_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oid" },
          { name: "qytyxydm" },
        ]
      },
      {
        name: "ods_p_station_attr_pch_idx",
        using: "BTREE",
        fields: [
          { name: "pch" },
        ]
      },
    ]
  });
};
