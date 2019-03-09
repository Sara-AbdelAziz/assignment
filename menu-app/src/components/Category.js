import React from 'react';
import Item from './Item';

const Category = (props) => (
 
 <div>
     {props.categories.map((category,i) => <div key={i} className="card">
        <div className="card-header"  id={'heading'+i}>
            <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={'#collapse'+i} aria-expanded="false" aria-controls={'collapse'+i}>
                {category.name}
            </button>
            </h2>
        </div>

        <div  id={'collapse'+i} className="collapse" aria-labelledby="{'heading'+i}" data-parent="#accordionExample">
            <div className="card-body">
                <Item items={category.items}/>
            </div>
        </div>
      </div>)}
    

 </div>
);

export default Category;





