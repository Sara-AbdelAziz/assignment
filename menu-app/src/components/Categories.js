import React, { Component } from 'react';
import Category from './Category';
//import CategoriesService from '../services/CategoriesService';
import axios from 'axios';


class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            currentCategory:null
        };
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories')
           .then(res => {
            this.setState({  categories: res.data});
          })
          
    }
    handleChange = event => {
        this.setState({ currentCategory: event.target.value });
    }
    handleSubmit = event => {       
            event.preventDefault();
            event.target.parentNode.querySelector('input').value=null;
            if(this.state.currentCategory){
                fetch('https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: '4564',
                        name: this.state.currentCategory,
                        items:[]
                    })
                }).then(res => {
                    
                    return res.json();
                })  
                .then(data => {
                    console.log(data);
                    let oldComments = this.state.categories;
                    console.log(oldComments);
                    this.setState({categories:oldComments.concat(data),currentCategory:null});
                }) 
                .catch(err => {
                    console.log(err);
                });
            }else{
                return ;
            }
           
           
          
    }
    render() {
        
        return (
        <div>
            <form name="categoryForm" onSubmit={this.handleSubmit}>
                <label>
                    Category:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add Category</button>
            </form>
            <div  className="categories accordion" id="accordionExample"> 
            
            
                <Category categories={this.state.categories}/>
            </div>
         </div>
        );
    }
}

export default Categories;