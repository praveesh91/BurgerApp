import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showSideDrawer: true
        }
    }
    
    sideDrawerClosed = () =>{
        this.setState({showSideDrawer:false})
    }

    render(){
        return(
            <Aux>
                <Toolbar />
                <SideDrawer closed={this.sideDrawerClosed} open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </Aux>
        );
    }
}
export default Layout;