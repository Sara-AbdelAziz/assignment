import React, { Component } from 'react';
import Category from './Category';
//import CategoriesService from '../services/CategoriesService';
import axios from 'axios';


class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            currentCategory:null,
            
            
        };
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories')
           .then(res => {
            res.data.map(c => c.editing=false);
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
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: (new Date().getTime()),
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

    handleEdit= category =>{
        let editedCategories= this.state.categories.filter (c => {
            if(c.id==category.id){
                    c.editing=true;
            }
            return c;
        });
        this.setState({categories:editedCategories});
    }

    handleSave= category =>{
        let editedCategories= this.state.categories.filter (c => {
            if(c.id==category.id){
                    c.editing=false;
            }
            return c;
        });
        this.setState({categories:editedCategories});
        axios.put(`https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories/${category.id}`, category).then(response => {
            console.log("aaaaaaaa "+response.data.id);
        })
    }


    handleChangeCategory= (e,category)=> {
        category.name=e.target.value;
        console.log("aaaaaaaaaaaaaaaaaaaaa "+this.state.abc);
        let editedCategories= this.state.categories.filter (c => {
            if(c.id==category.id){
                    c.name=e.target.value;
            }
            return c;
        });
        
        this.setState({categories:editedCategories});


    }

    render() {
        
        return (
        <div>
            <form name="categoryForm" onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add Category</button>
            </form>
            <div  className="categories accordion" id="accordionExample"> 
            
            
                <Category editing={this.state.editing}
                 categories={this.state.categories}
                 onEdit={this.handleEdit} 
                 onSave={this.handleSave} 
                 onChangeCategory={this.handleChangeCategory} />
                 
            </div>
         </div>
        );
    }
}

export default Categories;