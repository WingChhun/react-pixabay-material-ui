import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {API_KEY} from "../../constants.js";

class Search extends Component {

    constructor(props)
    {
        super(props);

        this.state = {

            searchText: '',
            amount: 15,
            apiUrl: "https://pixabay.com/api",
            apiKey: API_KEY,
            images: []
        }
    }

    //todo: handle Changes, use partial function syntax to prevent re-render
    handleChange = field => event => {

        const {searchText, amount} = this.state;
        switch (field) {

            case "amount":
                console.log("amount ", field);

                break;

            case "search":
                console.log('search', field);
                break;

            default:

                return;
        }

    }

    render()
    {

        const {searchText, amount} = this.state;

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
                    onChange={this.handleChange("amount")}>

                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                    <MenuItem value ={1} primaryText="Hello"/>
                </SelectField>

            </div>
        )

    }

}

export default Search;
