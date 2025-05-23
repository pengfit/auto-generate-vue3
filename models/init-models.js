var DataTypes = require("sequelize").DataTypes;
var _ods_p_station_attr = require("./ods_p_station_attr");
var _ods_p_station_hd_attr = require("./ods_p_station_hd_attr");
var _ods_p_station_inspection_log = require("./ods_p_station_inspection_log");
var _sys_user = require("./sys_user");

function initModels(sequelize) {
  var ods_p_station_attr = _ods_p_station_attr(sequelize, DataTypes);
  var ods_p_station_hd_attr = _ods_p_station_hd_attr(sequelize, DataTypes);
  var ods_p_station_inspection_log = _ods_p_station_inspection_log(sequelize, DataTypes);
  var sys_user = _sys_user(sequelize, DataTypes);


  return {
    ods_p_station_attr,
    ods_p_station_hd_attr,
    ods_p_station_inspection_log,
    sys_user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
