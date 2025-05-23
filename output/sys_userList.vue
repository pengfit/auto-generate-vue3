<template>
  <div>
    <h2>sys_user List</h2>
    <el-table :data="tableData || []" style="width: 100%">
      
        <el-table-column
          prop="id"
          label="用户ID"
          min-width="120"
        />
      
        <el-table-column
          prop="user_name"
          label=""
          min-width="120"
        />
      
        <el-table-column
          prop="nick_name"
          label="用户昵称(与手机号保持一致)"
          min-width="120"
        />
      
        <el-table-column
          prop="user_type"
          label="用户类型（00系统用户）"
          min-width="120"
        />
      
        <el-table-column
          prop="phone_number"
          label="手机号码"
          min-width="120"
        />
      
        <el-table-column
          prop="password"
          label="密码"
          min-width="120"
        />
      
        <el-table-column
          prop="status"
          label="帐号状态（0 正常 1 停用）"
          min-width="120"
        />
      
        <el-table-column
          prop="reset_pass"
          label="是否修改密码（0 未修改， 1 已修改）"
          min-width="120"
        />
      
        <el-table-column
          prop="del_flag"
          label="删除标志（0代表存在 1代表删除）"
          min-width="120"
        />
      
        <el-table-column
          prop="login_ip"
          label="最后登录IP"
          min-width="120"
        />
      
        <el-table-column
          prop="login_date"
          label="最后登录时间"
          min-width="120"
        />
      
        <el-table-column
          prop="create_by"
          label="创建者"
          min-width="120"
        />
      
        <el-table-column
          prop="create_time"
          label="创建时间"
          min-width="120"
        />
      
        <el-table-column
          prop="update_by"
          label="更新者"
          min-width="120"
        />
      
        <el-table-column
          prop="update_time"
          label="更新时间"
          min-width="120"
        />
      
        <el-table-column
          prop="remark"
          label="备注"
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
