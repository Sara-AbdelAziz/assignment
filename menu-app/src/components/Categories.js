import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {

    constructor() {
        super();

        this.state = {
            categories: []
        };
    }

    componentDidMount(){
        let url="https://my-json-server.typicode.com/Sara-AbdelAziz/data/categories";
        fetch(url)
          .then(resp => resp.json())
          .then(data => this.setState({categories : data}) )
           
            
          
      }

    render() {
        
        return (
         <div  className="categories accordion" id="accordionExample"> 
           
          
            <Category categories={this.state.categories}/>
         </div>
        );
    }
}

export default Categories;