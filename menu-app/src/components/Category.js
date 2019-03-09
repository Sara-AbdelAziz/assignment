import React from 'react';

const Category = (categories) => (
    
        <div className="card-deck">
            {
                categories.map(category => <div key={Category.id} movie={Category.name} ></div>)
            }
        </div>
    
);


export default Category;