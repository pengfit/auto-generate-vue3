<template>
  <div>
    <h2>ods_p_station_inspection_log List</h2>
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
          prop="fk_cz_id"
          label="外键"
          min-width="120"
        />
      
        <el-table-column
          prop="xjrxm"
          label="巡检人姓名"
          min-width="120"
        />
      
        <el-table-column
          prop="sbyh"
          label="上报隐患,文字描述"
          min-width="120"
        />
      
        <el-table-column
          prop="sffzyh_cd"
          label="是否存在隐患"
          min-width="120"
        />
      
        <el-table-column
          prop="xjsj"
          label="巡检时间"
          min-width="120"
        />
      
        <el-table-column
          prop="yhsfzd_cd"
          label="隐患是否重大"
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
