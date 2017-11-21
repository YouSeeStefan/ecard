import React from 'react';
import MenuCategory from './menucategory';

class Menu extends React.Component {

    

    render() {
        return (
            <div className="acc-container">
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
                <MenuCategory />
            </div>
        );
    }

}
export default Menu;