<template>
  <div>
	  hehe
  </div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	methods:{
		listOders(){
			this.$store.dispatch('orders/listOrders')
		}
	}
}
</script>

<style>

</style>