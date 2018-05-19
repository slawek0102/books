import React from 'react';
import TextField from 'material-ui/TextField';

import './FindTextComponent.css';

export const FindTextFieldCOmponent = (props) => {


    return (
        <TextField
            hintText="Enter your string"
            fullWidth={true}
            onChange={props.onFindTextFieldChangeHandler}
        />
    )
}