<template>
  <div id="app">

<!-- Form -->
<el-button size="mini" type="primary" @click="dialogFormAdd = true">add category</el-button>

<el-dialog title="add category" :visible.sync="dialogFormAdd">
  <el-form :model="form">
    <el-form-item label="name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="description" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
  
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormAdd = false">Cancel</el-button>
    <el-button type="primary"  @click="addCategory">Confirm</el-button>
  </span>
</el-dialog>

      <el-table class="haha"
      v-loading="loading"
    :data="listData"
    style="width: 100%">
    <el-table-column
      label="Date"
      width="400">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="400">
      <template slot-scope="scope">
      
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
         
      
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

<!--  -->

    <!--  -->
 

    <el-pagination 
      
      background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
    </el-pagination>

  </div>
  
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
 export default {
    data() {
      return {
       loading:false,
        dialogFormAdd: false,
        form: {
          name: '',
          description:''
        },
        formLabelWidth: '120px'
      };
      
    },
    methods:{
      addCategory(){
          
        return this.$store.dispatch('category/add',this.form)
        .then((res) =>{
          
            console.log(res)
            this.dialogFormAdd = false
            
            this.form.name = ''
            this.form.description = ''
            this.loadData()
        })
      },
      
      loadData(){
        this.loading=true
      this.$store.dispatch('category/listCategory').then((res)=>{
        console.log(res)
        this.loading = false
      })
      .catch((error)=>{
        this.loading = false
      })
        
      },
      
      set_page(page){
        this.$store.commit('category/set_page',page)
         this.loadData()
    }
    },
    mounted(){
   
      this.loadData()
    },
    computed:{
      ...mapState({
          listData: state => state.category.listData,
          totalData : state => state.category.totalData,
          page: state =>state.category.page,
          limit : state =>state.category.limit
      }),
     

    }

    
    
    
  };
</script>

<style>
.haha{
  margin: 0 auto;
}
</style>
