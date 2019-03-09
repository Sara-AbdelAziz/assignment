import React, { Component } from 'react';

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
         <div className="categories"> 
           
          {this.state.categories.map((category,i) => <div key={i} >
            {category.name}
            {category.items.map((items,x) => <div key={x} >{items.name}</div>)}
            <hr/>
          </div>)}

         </div>
        );
    }
}

export default Categories;