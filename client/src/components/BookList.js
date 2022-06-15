import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries'




function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);
    const book = data;
    if (loading) return <p>Loading books...</p>;
    if (error) return <p>Error :{error}</p>;
    return(
        <div id='book-list-view'>
            {
                book.books.map(book => (
                    <ul id='book-list'>
                        <li key={book.id}>{book.name}</li>
                    </ul>
                    ))
            }
        </div>
    )
}

export default BookList;
