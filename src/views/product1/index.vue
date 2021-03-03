<template>
  <div id="app">


      <el-table class="haha"
      v-loading="loading"
    :data="listData"
    style="width: 100%">
     <el-table-column
      label="ID"
      width="100">
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.id}}</span>
      </template>
     
    </el-table-column>

     <el-table-column
      label="Images"
      >
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.images[0]"
            ></el-image>
			
      </template>  

    </el-table-column>
    <el-table-column
       label="Sản phẩm"
     >
        <template slot-scope="scope">

			<h5>Mã sản phẩm: </h5>
			<span> {{ scope.row.sku}}</span><br>
			<h5>Tên sản phẩm: </h5>
			<span>{{scope.row.name}}</span><br>
			<h5>Màu sắc: </h5>
			<span style="color:red">{{scope.row.colors[0,1]}}</span><br>
			<h5>Kích thước: </h5>
			<span>{{scope.row.sizes[0]}}</span><br>
			<h5>Thương hiệu: </h5>
			<span>{{scope.row.brand.name}}</span><br>		
			<h5>Danh mục: </h5>
			<span>{{scope.row.category.name}}</span><br>
			<h5>Nhà cung cấp: </h5>
			<span>{{scope.row.supplier.name}}</span><br>
      </template>
    </el-table-column>  
	    <el-table-column
       label="Gía"
    >
        <template slot-scope="scope">
			<h5>Gía nhập: </h5>
			 <el-input v-if="editing && editingItem.id == scope.row.id" v-model="editingItem.import_price"></el-input>
			<span > {{scope.row.import_price}} VNĐ</span><br>
			<h5>Gía bán: </h5>
			<span>  {{scope.row.status}} VNĐ</span><br>
		
      </template>
    </el-table-column>  
    <el-table-column
      label="Gía"
     >
      <template slot-scope="">
      
           
      
      </template>
    </el-table-column>
    <el-table-column>
      
         <template slot="header" slot-scope="" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      
      <template slot-scope="scope">
        <el-button v-if=" editing && editingItem.id == scope.row.id"
        @click="handleUpdate()"
        size="mini"
        >Update</el-button>
        <el-button v-else
          size="mini"
         
          @click="handleEdit(scope.row)"><i class="el-icon-edit"></i> Edit</el-button>
       
          <el-popconfirm
              confirm-button-text='OK'
              cancel-button-text='No, Thanks'
              icon="el-icon-info"
              icon-color="red"
              title="Are you sure to delete this?"
              @onConfirm="deleteProduct(scope.row)"
            >
              <el-button  slot="reference" size="mini" type="danger" ><i class="el-icon-delete"></i> Delete </el-button>
            </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

<!--  -->

    <!--  -->
 

    <el-pagination  class="pagination"
      
      background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
    </el-pagination>

  </div>
  
</template>

<script>




import {mapState} from 'vuex'
 export default {
    data() {
      return {
        search:'',
       loading:false,
        dialogFormAdd: false,
        form: {
          name: '',
          description:'',
          images:''
        },
        formLabelWidth: '120px',
        editing:false,
		editingItem:{
			category_id:'',
			supplier_id:'',
			brand_id:'',
		}
      
			
		
      };
      
    },
    methods:{
		
      addProduct(){
          
        return this.$store.dispatch('product/addProduct',this.form)
        .then((res) =>{
          
            console.log(res)
            this.dialogFormAdd = false
            
            
            this.loadData()
          
            
        })
      },
	  


 
      handleEdit(row){
		
         this.editing=true
		 
         this.editingItem = Object.assign(this.editingItem, row)
		this.editingItem.category_id = row.category.id
		this.editingItem.brand_id = row.brand.id
		this.editingItem.supplier_id = row.supplier.id
		console.log(this.editingItem)
	
	
        
      
      },
      handleUpdate(){
		  console.log('kaka11')
        this.editing=false
		console.log(this.category_id)
        this.$store.dispatch('product/handleUpdate',this.editingItem).then((res) =>{
          this.loadData()
		  
        })
         
      },
          open1() {
        this.$message({
          message: 'Success',
          type: 'success'
        });
      },
      
    

      deleteProduct(row){
         this.$store.dispatch('product/deleteProduct',row).then((res)=>{
            this.loadData()
         })
           
           
      
      },
      
      loadData(){
        this.loading=true
         this.$store.dispatch('product/listProduct').then((res)=>{
       
        this.loading = false
      })
      .catch((error)=>{
        this.loading = false
      })
        
      },
      
      set_page(page){
        this.$store.commit('product/set_page',page)
         this.loadData()
    }
    },
    mounted(){
	
      this.loadData()
    },
    computed:{
      ...mapState({
          listData: state => state.product.listData,
		  
          totalData : state => state.product.totalData,
          page: state =>state.product.page,
          limit : state =>state.product.limit
      }),
	  
     

    }

    
    
    
  };
</script>

<style>
.pagination{
  margin:0 auto;

}
h5{
	margin: 0;
	display: inline-block;
}
</style>
