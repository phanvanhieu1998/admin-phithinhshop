<template>
  <div class="dashboard-container">
	  <div class="dashboard__top">
		<el-row :gutter="20">
			<el-col :span="9">
				<el-card class="box-card">
					<el-row :gutter="20">
						<el-col :span="14">
							<div class="dashboard__top__text">
								<h2>Chào mừng bạn!</h2>
								<span >Trang quản trị của Phí Thịnh Shop</span>
								<span>Có 0 sản phẩm có sẵn</span>
								<span>Có 6 khách hàng mới </span>
						
							</div>
						</el-col>
						<el-col :span="10">
							<div class="dashboard__top__img">
								<img src="@/images/profile.png">
							</div>
						</el-col>
				</el-row>
				
				</el-card>
			</el-col>

			<el-col :span="5">
				<el-card class="box-card">
					<div class="box-card-flex">
						<div class="box-card-icon">
							<i class="el-icon-first-aid-kit"></i>
						
						</div>
				
						<div>
							<span>Đơn hàng thành công</span>
						</div>
						
					</div>
					<div style="padding-top:25px">
							1
							<i style="color:red" class="el-icon-arrow-down"></i>
							<i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
					</div>
					<div style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">
						<span>	<el-badge :hidden="true" >
								<el-button style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px" size="mini">+ 01</el-button>
							</el-badge> So với tháng trước</span>
					</div >
				</el-card>
			</el-col>

			<el-col :span="5">
				<el-card class="box-card">
					<div class="box-card-flex">
						<div class="box-card-icon">
							<i class="el-icon-ice-tea"></i>
						</div>
						<div>
							<span style="line-height:40px">Doanh thu</span>
						</div>
					</div>

					<div style="padding-top:25px">
							1
							<i style="color:red" class="el-icon-arrow-down"></i>
							<i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
					</div>
					<div style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">
							<el-badge :hidden="true" >
								<el-button style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px" size="mini">+4444 VNĐ</el-button>
							</el-badge>
							<span> So với tháng trước</span>
					</div>

				</el-card>
			</el-col>

			<el-col :span="5">
				<el-card class="box-card">
					<div class="box-card-flex">	
						<div class="box-card-icon">
							<i class="el-icon-ice-drink"></i>
							
						</div>
						<div>
							<span>Doanh thu trung bình 1 đơn </span>
						</div>
					</div>

					<div style="padding-top:25px">
						1
						<i style="color:red" class="el-icon-arrow-down"></i>
							<i style="color: #34c38f!important;" class="el-icon-arrow-up"></i>
					</div>
					<div style="padding-top:15px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">
							<el-badge :hidden="true" >
								<el-button style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px" size="mini">4444 VNĐ</el-button>
							</el-badge>
						<span> So với tháng trước</span>
					</div>
				
				</el-card>
			</el-col>
		</el-row>
	  </div>
	 <el-row :gutter="20">
		<el-col :span="16">
			<el-card class="box-card">
				 
				 <el-row :gutter="20">
					<el-col :span="8">
						<div class="income">
							<h3>Thu nhập</h3>
							<span>Tháng này</span>
							<span>6666,666 VNĐ</span>

							<span>
									<el-badge :hidden="true" >
								<el-button style="background-color:rgba(52,195,143,.18);color:#34c38f;padding:3px" size="mini">+44455 VNĐ</el-button>
							</el-badge>
								 so với tháng trước</span>
							<span>Tháng trước</span>
							<span>580,000 VNĐ</span>
						
						</div>
					</el-col>
					<el-col :span="16">
						<LineChart/>
					</el-col>
				
				</el-row>
			</el-card>

		</el-col>

		<el-col :span="8">
			<el-card class="box-card">
				  <PieChart/>
			</el-card>
				 
		</el-col>
	
	</el-row>
	
	 
  </div>
</template>

<script>
import PieChart from '@/components/charts/PieChart'
import { mapGetters } from 'vuex'
import LineChart from '@/components/charts/LineChart'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components:{
	PieChart,
    LineChart
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container{
	width: 100%;
	background-color: rgb(237, 239, 247);
	height: 100%;
	padding: 20px;
}
.dashboard__top{
	padding-bottom: 30px;
}
.dashboard__top__text{
	display: flex;
	flex-direction: column;
}
.dashboard__top__text h2{
	margin: 0;
}
.dashboard__top__img img{
	position: absolute;
	top:50px;
	width: 100%;
	
}
.dashboard__top__text span{
	padding-top: 20px;
}
.dashboard__top__img{
	position: relative;
}
.box-card-icon{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius:50% ;
	background-color: rgb(237, 239, 247);
	margin-right: 15px;
	
}
.box-card-icon i{
	color: #556ee6;
}
.box-card-icon h4{
	margin: 0;
}
.box-card-flex{
	display: flex;
}
.income span{
	margin-top: 20px;
}
.income{
	display: flex;
	flex-direction: column;
}


</style>
