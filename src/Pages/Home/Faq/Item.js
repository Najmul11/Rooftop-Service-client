import React from 'react';

const Item = ({title, description}) => {
    return (
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5">
            <div className="collapse-title text-xl font-medium">
                {title}
            </div>
            <div className="collapse-content"> 
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Item;