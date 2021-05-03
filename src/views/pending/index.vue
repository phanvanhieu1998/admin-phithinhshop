<template>
  <div>
	  {{list}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data(){
		return{
			
		}
	},
	mounted(){
		this.listOrders()
	},
	methods:{
		listOrders(){
			this.$store.dispatch('orders/listOrders')
		}
	},
	computed:{
		...mapState({
			list : state => state.orders.listOrders
		})
	}

}
</script>

<style>

</style>