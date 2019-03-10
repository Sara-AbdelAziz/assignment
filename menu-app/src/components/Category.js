import React from 'react';
import Item from './Item';

const Category = (props) => (
 
 <div>            
     {props.categories.map((category,i) => <div key={i} className="card">
        <div className="card-header"  id={'heading'+i}>
            

            {category.editing? <div><input type="text" value={category.name} onChange={(e) => props.onChangeCategory(e,category)}/><button className="sm-font" onClick={() => props.onSave(category)}>save</button></div> : <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={'#collapse'+i} aria-expanded="false" aria-controls={'collapse'+i}>
                {category.name}
            </button>
            <button onClick={() => props.onEdit(category)} className="sm-font">edit</button>
            </h2>}

            
            

        </div>

        <div  id={'collapse'+i} className="collapse" aria-labelledby="{'heading'+i}" data-parent="#accordionExample">
            <div className="card-body">
                <Item items={category.items} 
                onEditItem={props.onEditItem} 
                onSaveItem={props.onSaveItem} 
                onChangeItem={props.onChangeItem}
                 categoryId={category.id}/>
            </div>
        </div>
      </div>)}
    

 </div>
);

export default Category;





