import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';


class NavBar extends Component {

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (<AppBar title ={'PixaBay Image Finder'}/>)
    }

}

export default NavBar;
