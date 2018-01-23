import React from 'react';

// this.props is used to access properties of component. So we can make Component dynamic 
// this.props is used for the communication between components
const Header = (props) => (
        // below route <div>
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {/* below is much more efficient. Subtitle will be shown only if it present */}
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>  
        </div>
    );

// below default props for Header
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;