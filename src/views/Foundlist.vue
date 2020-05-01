<template>
    <div class="foundlist">
        <button @click="add">添加</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>创建时间</th>
                        <th>收支类型</th>
                        <th>收支描述</th>
                        <th>收支</th>
                        <th>支出</th>
                        <th>现金</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in tableData" :key="index">
                        <td>{{index +1}}</td>
                        <td>{{date | formaDate}}</td>
                        <td>{{item.describe}}</td>
                        <td>{{item.type}}</td>
                        <td>{{item.income}}</td>
                        <td>{{item.expend}}</td>
                        <td>{{item.cash}}</td>
                        <td>{{item.remark}}</td>
                        <td>
                            <button>编辑</button>
                            <button @click="del(item)">删除</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="收支类型" :label-width="formLabelWidth">
                        <el-input v-model="form.type"></el-input>
                    </el-form-item>
                    <el-form-item label="收支描述" :label-width="formLabelWidth">
                        <el-input v-model="form.describe"></el-input>
                    </el-form-item>
                    <el-form-item label="收入" :label-width="formLabelWidth">
                        <el-input v-model="form.income"></el-input>
                    </el-form-item>
                    <el-form-item label="支出" :label-width="formLabelWidth">
                        <el-input v-model="form.expend"></el-input>
                    </el-form-item>
                    <el-form-item label="现金" :label-width="formLabelWidth">
                        <el-input v-model="form.cash"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                        <el-input v-model="form.remark"></el-input>
                    </el-form-item>
                    
                </el-form>submit
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="Submit">确 定</el-button>
                </div>
            </el-dialog>

  </div>
</template>

<script>
 var padaDate = function(value){
        return value<10?'0'+value:value;
    }
export default {
    name:"foundlist",
    data(){
        return{
            tableData:[],
            dialogFormVisible:false,
            form:{},
            formLabelWidth:"80",
            date:new Date()
        }
    },
    filters: {
            formaDate(valve){
                var date = new Date();
                var year = date.getFullYear();
                var month = padaDate(date.getMonth()+1);
                var day = padaDate(date.getDate());

                return year+'年'+month+'月'+day+'日';
            }
    },
    created(){
        this.reload();
    },
    methods:{
        del(item){
            this.$axios.get(`/api/profiles/delete/${item._id}`).then(response=>{
                this.reload();
            }).catch(error=>{
                console.log(error)
            })
        },
        reload(){
            this.$axios.get('/api/profiles').then(response=>{
            this.tableData=response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        add(){
            this.dialogFormVisible=true
        },
        Submit(){
            this.dialogFormVisible=false;
            this.$axios.post("/api/profiles/add",this.form).then(response=>{
                if(response.status == 200){
                    this.reload();
                }
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    
}
</script>

<style scoped>
.foundlist{
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
}
table th,table td{
    border: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
table{
    width: 100%;
    border: 1px solid #ccc;
}
</style>