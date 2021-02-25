import request from '@/utils/request'

class UsersAPI  {
    addCategory(data){
         return request({
           url: '/categories',
           method: 'post',
           data
         })
       }
    
    listCategory(data){
        return request({
            url : '/categories',
            method:'get',
            params:data
        })
    }
    
  }
  const Users = new UsersAPI("users");
  export { Users as default };
  