import React, {Component} from "react";
import "./Menu.css";

class Menu extends Component {
    render() {
        var visibility="hide";

        if (this.props.menuVisibility) {
        var visibility="show";
        }

        return (
            <React.Fragment>
            <div id="flyoutMenu"
                 onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                 <h2><a href="#">Home</a></h2>
                 <h2><a href="#">About</a></h2>
                 <h2><a href="#">Contact</a></h2>
                 <h2><a href="#">Search</a></h2>
                 <h2>BLAM!!! GET REKT WIX!!! -Jose UwU
             </h2>
             </div>
             
             </React.Fragment>
        );
    }
}

export default Menu;