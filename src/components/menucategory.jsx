import React from 'react';
import CategoryItem from './categoryitem';

class MenuCategory extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isOpen : false
		};
	}

	toggleMenu = () => {
		this.setState({
			isOpen : !this.state.isOpen
		});
	};

    render() {

    	let className = "acc-content";
    	if(this.state.isOpen){
    		className += " open";
    	}

        return (
            <div className="menuCategory">
                <div className="acc-btn" onClick={this.toggleMenu}>
                    <h1 className="selected">Afbeelding</h1>
                </div>
                <div className={className}>
                  <div className="acc-content-inner">
                  	<CategoryItem type="aardbei.jpg" />
                  	<CategoryItem type="appel.jpg" />
                  </div>
                </div>
            </div>
        );
    }

}
export default MenuCategory;