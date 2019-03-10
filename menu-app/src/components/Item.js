import React from 'react';

const Item = (props) => (
 
 <div>
    {props.items.map((item,x) => <div key={x} >
    <div className="row">
        <div className="col-lg-3">Name:</div>
        {item.editing? <div className="col-lg-9"><input type="text" value={item.name} onChange={(e) => props.onChangeItem(e,item,"name",props.categoryId)}/>
        <button className="sm-font" onClick={() => props.onSaveItem(item,props.categoryId)}>save</button></div> : 
        <div className="col-lg-9">{item.name}<button onClick={() => props.onEditItem(item,props.categoryId)} className="sm-font">edit</button></div>}
        
        
    </div>
    <div className="row"><div className="col-lg-3">Description:</div><div className="col-lg-9">{item.description}</div></div>
    <div className="row"><div className="col-lg-3">Price:</div><div className="col-lg-9">{item.price}</div></div>
        <hr/>
    </div>)}
 </div>
);

export default Item;