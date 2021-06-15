import React from 'react';
import IMAGE from '../../assets/logo.png';
import { Menu, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class HomepageComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
        this.state = { isMenuOpen: false };
    }

    handleClick(e: any) {
        if (this.state.isMenuOpen) {
            this.setState({ isMenuOpen: false });
        } else {
            this.setState({ isMenuOpen: true });
        }
    }

    handleRoute(path: String) {
        this.props.history.push(path);
    }

    render() {
        return (
            <>
                <div className="flex-horizontal">
                    <img src={IMAGE} alt='logo' onClick={this.handleClick} />
                    <h1>Random Dog Generator</h1>
                </div>

                <Menu
                    id="simple-menu"
                    anchorEl={null}
                    keepMounted
                    open={this.state.isMenuOpen}
                    onClose={this.handleClick}
                >
                    <MenuItem onClick={() => this.handleRoute("/")}>Random Dog</MenuItem>
                    <MenuItem onClick={() => this.handleRoute("/breed-list")}>Breed List</MenuItem>
                    <MenuItem onClick={() => this.handleRoute("/dog-by-breed")}>Dog by Breed</MenuItem>
                </Menu>
            </>
        )
    }
}

export default withRouter(HomepageComponent);