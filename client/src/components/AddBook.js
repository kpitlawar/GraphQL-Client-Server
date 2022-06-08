import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorQuery, addBookMutation } from '../queries/queries'



function AddBook() {
    const author = useQuery(getAuthorQuery);
    const [addBook] = useMutation(addBookMutation);

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const displayAuthors = () => {
        if (author.loading) {
            return (<option disabled>Loading authors</option>);
        } else if (author.error) {
            return (<option disabled>Error</option>);
        }
        else {
            return author.data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }

    const submitForm = (e) => {
        addBook();
        console.log(name);
        console.log(genre);
        console.log(authorId);
    }
    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => { setGenre(e.target.value) }} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => { setAuthorId(e.target.value) }}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button onClick={submitForm}>+</button>
        </form>
    );
}

export default AddBook;
