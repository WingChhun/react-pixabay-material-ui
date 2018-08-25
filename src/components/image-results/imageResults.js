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
            images: props.images
        }
    }

    renderImageList = () => {
        const {images} = this.props;
        let imageListContent;

        return imageListContent = (images.map(img => {

            let actionIcon = (
                <IconButton>
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

    render() {
        const {images} = this.state

        return (

            <GridList cols={3}>
                {this.renderImageList()}

            </GridList>

        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};

ImageResults.defaultProps = {
    images: []
};

export default ImageResults;