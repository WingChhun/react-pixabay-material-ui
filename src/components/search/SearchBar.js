import React, {Component} from 'react';

import axios from 'axios';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from "../image-results/imageResults";
import {API_KEY} from "../../constants.js";

class Search extends Component {

    constructor(props)
    {
        super(props);

        this.state = {

            searchText: '',
            amount: 15,
            apiUrl: "https://pixabay.com/api",

            images: []
        }
    }

    //todo: handle Changes, use partial function syntax to prevent re-render
    handleChange = field => event => {

        const {searchText, amount} = this.state;
        const value = event
            .target
            .value
            .trim();

        switch (field) {

            case "amount":
                console.log("amount ", field);

                break;

            case "search":
                console.log('search', value);

                this.setState({
                    searchText: value
                }, () => {

                    this.getAPI();
                });
                return;

            default:

                return;
        }

    }

    handleAmountChange = (event, index, value) => {

        this.setState({amount: value})

    }

    getAPI = () => {

        const {apiUrl, searchText, amount} = this.state;
        axios
            .get(`${apiUrl}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => {
                console.log(err)
            })

    }

    render() {

        const {images, searchText, amount} = this.state;

        return (
            <div>

                <TextField
                    name={'searchText'}
                    value
                    ={searchText}
                    onChange={this.handleChange("search")}
                    fullWidth
                    floatingLabelText="Search For Images"/>

                <br/>
                <SelectField
                    name="amount"
                    value={amount}
                    floatingLabelText="Amount"
                    onChange={this.handleAmountChange}>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                </SelectField>
                <br/> {images.length > 0 && (<ImageResults images={images}/>)}

            </div>
        )
    }
}

export default Search