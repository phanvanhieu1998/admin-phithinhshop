import Orders from '@/api/orders'


const state = {
    listOrders: [],


}

const mutations = {

    SET_LIST_ORDERS: (state, data) => state.listOrders = data,

}

const getters = {

}

const actions = {

    listOrders({ commit }) {

        return new Promise((resolve, reject) => {
            Orders.listOrders()
                .then(res => {
                    resolve(res.data.result)

                    commit('SET_LIST_ORDERS', res.data.result)

                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    // handleUpdate({commit},item){
    // 	return new Promise((resolve,reject) =>{
    // 	  Contact.handleUpdate(item)
    // 	  .then(res =>{
    // 		resolve(res)


    // 	  })
    // 	  .catch(error =>{
    // 		reject(error)
    // 	  })
    // 	})
    //   },
    //   deleteContact({ commit },item) {

    // 	return new Promise((resolve, reject) => {
    // 	  Contact.deleteContact(item) 
    // 		.then(response => {
    // 		  resolve(response);
    // 		})
    // 		.catch(error => {
    // 		  reject(error);
    // 		});
    // 	});
    //   },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}