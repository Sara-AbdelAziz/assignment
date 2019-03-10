import React from 'react';

const Item = (props) => (
 
 <div>
    {props.items.map((item,x) => <div key={x} >
    <div className="row">
        <div className="col-lg-3">Name:</div>
        {item.editing? <div className="col-lg-9"><input type="text" className="width-70" value={item.name} onChange={(e) => props.onChangeItem(e,item,"name",props.categoryId)}/>
        <button className="sm-font float-end" onClick={() => props.onSaveItem(item,props.categoryId)}>save</button></div> : 
        <div className="col-lg-9">{item.name}<button onClick={() => props.onEditItem(item,props.categoryId)} className="sm-font float-end">edit</button></div>}
    </div>
    <div className="row">
        <div className="col-lg-3">Description:</div>
        {item.editing? <div className="col-lg-9"><input type="text" className="width-70" value={item.description} onChange={(e) => props.onChangeItem(e,item,"description",props.categoryId)}/>
        <button className="sm-font none" onClick={() => props.onSaveItem(item,props.categoryId)}>save</button></div> : 
        <div className="col-lg-9">{item.description}<button onClick={() => props.onEditItem(item,props.categoryId)} className="sm-font none">edit</button></div>}
    </div>
    <div className="row">
        <div className="col-lg-3">Price:</div>
        {item.editing? <div className="col-lg-9"><input type="text" className="width-70" value={item.price} onChange={(e) => props.onChangeItem(e,item,"price",props.categoryId)}/>
        <button className="sm-font none" onClick={() => props.onSaveItem(item,props.categoryId)}>save</button></div> : 
        <div className="col-lg-9">{item.price}<button onClick={() => props.onEditItem(item,props.categoryId)} className="sm-font none">edit</button></div>}
    </div>

    
    
        <hr/>
    </div>)}
 </div>
);

export default Item;