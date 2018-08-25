import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';

import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            images: props.images,
            open: false,
            currentImg: ""

        }
    }

    componentWillReceiveProps = props => {
        this.setState({images: props.images});
    }

    renderImageList = () => {
        const {images} = this.state;
        let imageListContent;

        return imageListContent = (images.map(img => {

            let actionIcon = (
                <IconButton onClick={this.handleOpen(img)}>
                    <ZoomIn color="white"/>
                </IconButton>
            );
            let subtitle = (

                <span>by
                    <strong>{img.user}</strong>
                </span>
            );
            return (
                <GridTile
                    actionIcon={actionIcon}
                    subtitle={subtitle}
                    title={img.tags}
                    key={img.id}>

                    <img src={img.largeImageURL}/>

                </GridTile>
            )
        }))
    };

    handleOpen = img => event => {
        const {largeImageURL} = img;

        this.setState({currentImg: img.largeImageURL, open: true})
    }

    handleClose = () => {
        this.setState({open: false});
    }

    renderDialog = () => {

        const actions = [< FlatButton label = {
                "Close"
            }
            primary onClick = {
                this.handleClose
            } />];
        return (
            <Dialog
                actions
                ={actions}
                modal={false}
                open
                ={this.state.open}
                onRequestClose={this.handleClose}>
                <img
                    src={this.state.currentImg}
                    alt=""
                    style={{
                    width: '100%'
                }}/>
            </Dialog>
        );
    }
    render() {
        const {images} = this.state;

        return (

            <div>
                <GridList cols={3}>
                    {this.renderImageList()}

                </GridList >
                {this.renderDialog()}

            </div>
        )
    }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};
ImageResults.defaultProps = {
    images: []
}

export default ImageResults;