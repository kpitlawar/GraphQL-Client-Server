import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries'



function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading books...</p>;
    if (error) return <p>Error :{error}</p>;
    return data.books.map(book => (
        <li key={book.id}>{book.name}</li>
    ));
}

export default BookList;
