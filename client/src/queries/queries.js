import { gql } from '@apollo/client';

const getAuthorQuery = gql`
{
    authors {
    name
    id
    }
}
  
`;

const getBooksQuery = gql`
{
    books {
    name
    id
    }
}
  
`;

const addBookMutation = gql`
mutation{
addBook(name:"", genre:"", authorId:""){
    name
    id
}
}
`;

export { getAuthorQuery, getBooksQuery, addBookMutation }