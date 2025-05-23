<template>
  <div>
    <h2>ods_p_station_hd_attr List</h2>
    <el-table :data="tableData || []" style="width: 100%">
      
        <el-table-column
          prop="id"
          label=""
          min-width="120"
        />
      
        <el-table-column
          prop="pch"
          label="批次流水号"
          min-width="120"
        />
      
        <el-table-column
          prop="oid"
          label="原始数据id"
          min-width="120"
        />
      
        <el-table-column
          prop="qytyxydm"
          label="信用代码"
          min-width="120"
        />
      
        <el-table-column
          prop="xzqhbm"
          label="所属区域编码"
          min-width="120"
        />
      
        <el-table-column
          prop="sjtp_cd"
          label="数据类型"
          min-width="120"
        />
      
        <el-table-column
          prop="jsclfs"
          label="接收处理方式"
          min-width="120"
        />
      
        <el-table-column
          prop="sjbgsj"
          label="数据变更时间"
          min-width="120"
        />
      
        <el-table-column
          prop="yhly_cd"
          label="隐患来源"
          min-width="120"
        />
      
        <el-table-column
          prop="fk_cz_id"
          label="外键"
          min-width="120"
        />
      
        <el-table-column
          prop="yhms"
          label="隐患描述"
          min-width="120"
        />
      
        <el-table-column
          prop="yhdj_cd"
          label="隐患等级"
          min-width="120"
        />
      
        <el-table-column
          prop="yhdz"
          label="隐患位置地址（厂站地址）"
          min-width="120"
        />
      
        <el-table-column
          prop="yhsbsj"
          label="隐患上报时间"
          min-width="120"
        />
      
        <el-table-column
          prop="pcryxm"
          label="排查人员姓名"
          min-width="120"
        />
      
        <el-table-column
          prop="pcdwmc"
          label="排查单位名称（厂站巡检填燃气企业名称）"
          min-width="120"
        />
      
        <el-table-column
          prop="pcfs_cd"
          label="排查方式"
          min-width="120"
        />
      
        <el-table-column
          prop="zgqx"
          label="整改期限"
          min-width="120"
        />
      
        <el-table-column
          prop="zgyq"
          label="整改要求"
          min-width="120"
        />
      
        <el-table-column
          prop="zgsj"
          label="整改时间"
          min-width="120"
        />
      
        <el-table-column
          prop="zgzt_cd"
          label="整改状态（默认为未整改；整改后再次推送,状态变为‘已整改未销号’）"
          min-width="120"
        />
      
        <el-table-column
          prop="zrrxm"
          label="隐患责任人姓名"
          min-width="120"
        />
      
        <el-table-column
          prop="sjhqfs"
          label="数据获取方式"
          min-width="120"
        />
      
        <el-table-column
          prop="sjtbr"
          label="数据填报人"
          min-width="120"
        />
      
        <el-table-column
          prop="sjcrsj"
          label="数据插入时间"
          min-width="120"
        />
      
        <el-table-column
          prop="fk_xjjl_id"
          label="外键"
          min-width="120"
        />
      
        <el-table-column
          prop="sync_status"
          label="同步状态：0-未同步，1-已同步"
          min-width="120"
        />
      
        <el-table-column
          prop="locked"
          label="锁定状态：0-未锁定，1-已锁定"
          min-width="120"
        />
      
        <el-table-column
          prop="sync_time"
          label="最后同步时间"
          min-width="120"
        />
      
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [] // You will fetch or pass actual data here later
    };
  }
}
</script>
