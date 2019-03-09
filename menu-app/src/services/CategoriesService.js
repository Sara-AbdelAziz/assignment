import axios from 'axios';

export default class CategoriesService {
 
    static getCategories() {
                return axios.get('https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories');
              
    }   
    static addCategory() {
        return fetch('https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '4564',
                name: event.target.parentNode.querySelector('input').value,
                items:[]
            })
        })
      
}   

  
      

}


