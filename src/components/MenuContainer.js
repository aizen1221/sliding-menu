import React, {Component} from "react";
import MenuButton from "./menuButton/MenuButton"
import Menu from "./menu/Menu";

class MenueContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu ();

        console.log("clicked");
        e.stopPropagation();
    }
    
    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return ( 
            <React.Fragment>
            <MenuButton handleMouseDown={this.handleMouseDown}/>
            <Menu handleMouseDown={this.handleMouseDown}
                  menuVisibility={this.state.visible}/>
            <div>
                <div>
                    <p>Content with an Unordered List</p>
                    <ul>
                        <li>First Item</li>
                        <li>Second Item</li>
                        <li>Third Item</li>
                        <li>Fourth Item</li>
                        <li>Fifth Item</li>
                        <li>Sixth Item</li>
                        <li>Seventh Item</li>
                    </ul>
                    <p>Wait for it......</p>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default MenueContainer;