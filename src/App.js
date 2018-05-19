import React, {Component} from 'react';

import {generateRandomBooks, calculateThe10SelectedBooks} from './Utils/helpers';
import {DatePickerComponent} from './Components/DatePickerComponent/DatePickerComponent';
import {DisplayBookComponent} from './Components/DisplayBooksComponent/DisplayBookComponent'
import {FindTextFieldCOmponent} from './Components/FindTextComponent/FindTextComponent';
import {formatContentWithSpan} from './Utils/SelectedBooksWithClasses'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minDate: 0,
            maxDate: 0,
            chosenDate: null,
            books: [],
            selectedBooks: [],
            selectedBooksWithClasses: []
        };
    }

    componentDidMount() {
        const storeGeneratedData = generateRandomBooks();
        this.setState({
            books: storeGeneratedData[0],
            minDate: storeGeneratedData[1],
            maxDate: storeGeneratedData[2]
        })
    }

    onDatePickerOnChangeHandler = (x, chosenDate) => {
        let selectedBooks = calculateThe10SelectedBooks(chosenDate, this.state.books);
        this.setState({
                ...this.state,
                chosenDate: chosenDate,
                selectedBooks: selectedBooks,
                selectedBooksWithClasses: selectedBooks.slice()
            }, () => console.log(this.state.selectedBooks === this.state.selectedBooksWithClasses)
        )
    };

    onFindTextFieldChangeHandler = (e) => {
        e.preventDefault();
        let {selectedBooks} = this.state;

        let selectedBooksWithClasses = formatContentWithSpan(e.target.value, selectedBooks);

        this.setState({
             selectedBooksWithClasses: selectedBooksWithClasses
        });

    };


    render() {
        const {minDate, maxDate, chosenDate, selectedBooksWithClasses} = this.state;
        return (
            <div className="App">
                {chosenDate && <FindTextFieldCOmponent
                    onFindTextFieldChangeHandler={this.onFindTextFieldChangeHandler}
                />
                }

                {
                    minDate && <DatePickerComponent
                        onDatePickerOnChangeHandler={this.onDatePickerOnChangeHandler}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                }

                <div className="App">
                    {chosenDate && <DisplayBookComponent
                        selectedBooksWithClasses={selectedBooksWithClasses}
                    />}
                </div>
            </div>
        );
    }
}

export default App;
