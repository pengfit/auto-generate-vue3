<template>
  <div>
     <!-- 搜索条件 -->
    <el-form :model="searchQuery" label-width="50px" inline class="search-form">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
          <el-form-item>
            <el-button type="primary" @click="handleSearch" :icon="Search">查询</el-button>
            <el-button @click="handleReset" :icon="Refresh">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
          prop="czbh"
          label="企业系统内的厂站编号"
          min-width="120"
        />
      
        <el-table-column
          prop="czmc"
          label="厂站名称"
          min-width="120"
        />
      
        <el-table-column
          prop="czlx_cd"
          label="厂站类型"
          min-width="120"
        />
      
        <el-table-column
          prop="jcnd"
          label="建设年代"
          min-width="120"
        />
      
        <el-table-column
          prop="czdz"
          label="厂站地址"
          min-width="120"
        />
      
        <el-table-column
          prop="zdmj"
          label="占地面积"
          min-width="120"
        />
      
        <el-table-column
          prop="geom"
          label="经纬度geomtry"
          min-width="120"
        />
      
        <el-table-column
          prop="jzsjylfw"
          label="进站设计压力范围"
          min-width="120"
        />
      
        <el-table-column
          prop="fzsjylfw"
          label="出站设计压力范围"
          min-width="120"
        />
      
        <el-table-column
          prop="jgysjl_cd"
          label="竣工验收结论"
          min-width="120"
        />
      
        <el-table-column
          prop="geom_bhfw"
          label="保护范围geomtry"
          min-width="120"
        />
      
        <el-table-column
          prop="zzcqqps"
          label="自主产权气瓶数量"
          min-width="120"
        />
      
        <el-table-column
          prop="czfzr"
          label="厂站负责人"
          min-width="120"
        />
      
        <el-table-column
          prop="fzrlxfs"
          label="厂站负责人联系方式"
          min-width="120"
        />
      
        <el-table-column
          prop="bz"
          label="备注"
          min-width="120"
        />
      
        <el-table-column
          prop="jsdw"
          label="建设单位名称"
          min-width="120"
        />
      
        <el-table-column
          prop="jgysrq"
          label="竣工验收日期"
          min-width="120"
        />
      
        <el-table-column
          prop="syzt_cd"
          label="使用状态"
          min-width="120"
        />
      
        <el-table-column
          prop="bh"
          label="充装证编号（厂站为充装站时填写）"
          min-width="120"
        />
      
        <el-table-column
          prop="czjz"
          label="充装介质（厂站为充装站时填写）"
          min-width="120"
        />
      
        <el-table-column
          prop="fzrq"
          label="发证日期（厂站为充装站时填写）"
          min-width="120"
        />
      
        <el-table-column
          prop="dqrq"
          label="充装证到期日期（厂站为充装站时填写）"
          min-width="120"
        />
      
        <el-table-column
          prop="rgql"
          label="日供气量，单位:立方米"
          min-width="120"
        />
      
        <el-table-column
          prop="cqrj"
          label="厂站储气容积，单位:立方米"
          min-width="120"
        />
      
        <el-table-column
          prop="sjhqfs"
          label="数据获取方式，1=企业对接,2=平台对接,3=主管部门对接,4=填报,5=其他"
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
          prop="geom_lon"
          label="经度"
          min-width="120"
        />
      
        <el-table-column
          prop="geom_lat"
          label="纬度"
          min-width="120"
        />
      
        <el-table-column
          prop="geom_bhfw_lon"
          label="经度"
          min-width="120"
        />
      
        <el-table-column
          prop="geom_bhfw_lat"
          label="纬度"
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
