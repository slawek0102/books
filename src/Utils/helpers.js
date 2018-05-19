import DateGenerator from 'random-date-generator';
import getlorem from 'getlorem';


export const generateRandomBooks = () => {
    const minDate = new Date(1900, 1, 1);
    const maxDate = new Date(Date.now());

    const books = [];

    for (let i = 1; i <= 1000; i++) {
        books.push({
            id: i,
            title: `Ksiazka nr ${String(i)}`,
            randomDate: DateGenerator.getRandomDate(minDate, maxDate),
            bookContent: getlorem.sentences(5)
        })
    }
    return [books, minDate, maxDate]
};


export const formatDate = (date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = date.getDate();
    let dayToString;
    let monthToString;

    if (day.toString().length === 1) {
        dayToString = "0" + day.toString();
    } else {
        dayToString = day.toString()
    }

    if (month.toString().length === 1) {
        monthToString = "0" + month.toString();
    } else {
        monthToString = month.toString()
    }
    return (year + " - " + monthToString + " - " + dayToString);
};

export const calculateThe10SelectedBooks = (chosenDate, books) => {
     return books.sort((a, b) => b.randomDate.getTime() - a.randomDate.getTime()
    ).filter((book) => ((book.randomDate.getTime() < chosenDate.getTime()))).slice(0, 10);
};

