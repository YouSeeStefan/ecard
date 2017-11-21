import React from 'react';

class CategoryItem extends React.Component {

    render() {
 
        return (
            <div className="CategoryItem">
                    <img src={`/fruit/${this.props.type}`} alt="" />
            </div>
        );
    }

}
export default CategoryItem;