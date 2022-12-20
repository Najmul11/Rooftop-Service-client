 const qna=[
    {
        id:'001',
        ques:'What is the difference between SQL and NoSQL?',
        ans:'NoSQL database has much more flexibility than SQL database.QL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.'
    },
    {
        id:'002',
        ques:'What is JWT, and how does it work?',
        ans:'JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. It is a token-based stateless authentication mechanism.In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. With that token user can be identified. An expiry time can also be set on the token'
    },
    {
        id:'003',
        ques:'What is the difference between javascript and NodeJS?',
        ans:'Javascript is a single threded programming language. NodeJs is javascript runtime environment. It is not programming language.'
    },
    {
        id:'004',
        ques:'How does NodeJS handle multiple requests at the same time?',
        ans:'NodeJs handles multiple requests with event loop. When nodeJs receives multiple requests, it place them into EventQue and process them.'
    }
]
export default qna;