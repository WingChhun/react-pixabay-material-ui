import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
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

    render()
    {
        return (
            <div>

                <TextField/>
                <SelectField/>

            </div>
        )

    }

}

export default Search;
