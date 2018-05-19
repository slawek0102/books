
import React from 'react';
import DatePicker from 'material-ui/DatePicker';


export const DatePickerComponent = (props) => {
    const {minDate, maxDate} = props;
    return(
        <div>
            <h4>Wybiorę 10 ostatnich książek wydanych przed zadana datą</h4>
            <DatePicker hintText="Choose the date"
                        onChange={(x, chosenDate) => props.onDatePickerOnChangeHandler(x, chosenDate)}
                        minDate={minDate}
                        maxDate={maxDate}
            />
        </div>
    );
};

