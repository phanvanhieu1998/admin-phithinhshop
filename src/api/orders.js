import request from '@/utils/request'

class OrdersAPI {

    listOrders() {
        return request({
            url: '/orders',
            method: 'get',

        })
    }
    deleteOrders(data) {
            return request({
                url: `/orders/${data.id}`,
                method: 'delete',
            })
        }
        //  handleUpdate(data){
        //    return request({
        //      url:`/contacts/${data.id}`,
        //      method:'put',
        //      data
        //    })
        //  }

}
const Orders = new OrdersAPI("orders");
export { Orders as default };