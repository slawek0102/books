export const formatContentWithSpan = (selectedString, books) => {

    let highlightedString = "<span className = 'span__highlight'>" + selectedString + "</span>";


    books.map((book) => {
        let newBookContent = book.bookContent.split(selectedString).join(highlightedString);

        console.log(newBookContent);

        // book.bookContent = newBookContent   //// Czemu ta linia nie dziala???


        return book
    });


    return books;
};

