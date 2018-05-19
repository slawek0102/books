import React from 'react';
import Paper from 'material-ui/Paper';

import {formatDate} from "../../Utils/helpers";
import Parser from 'html-react-parser';
// import { render } from 'react-dom';
import './DisplayBookComponent.css';

export const DisplayBookComponent = (props) => {
    const {selectedBooksWithClasses} = props;
    return (
        <div>
            {
                selectedBooksWithClasses.map((country) => {

                    return (
                        <Paper key={country.id} zDepth={3} className='paper'>
                            <div><b>{country.title}</b></div>
                            <br/>
                            <div>Published: {formatDate(country.randomDate)}</div>
                            <hr/>
                            <div className='content'>{Parser(country.bookContent)}</div>
                        </Paper>
                    )
                })
            }
        </div>



    )

};


