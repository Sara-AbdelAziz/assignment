import React from 'react';

const Item = (props) => (
 
 <div>
    {props.items.map((items,x) => <div key={x} >
    <div className="row"><div className="col-lg-3">Name:</div><div className="col-lg-9">{items.name}</div></div>
    <div className="row"><div className="col-lg-3">Description:</div><div className="col-lg-9">{items.description}</div></div>
    <div className="row"><div className="col-lg-3">Price:</div><div className="col-lg-9">{items.price}</div></div>
        <hr/>
    </div>)}
 </div>
);

export default Item;