SUMMARY FOR BOTH EXAM

Q1 AND Q2 ANSWERS:

Frontend:

It took me about 9 hours to complete the frontend exam because I had to learn React with TypeScript from scratch. I have experience with React Native, but TypeScript is a new language for me. I had to research the following topics:

    TypeScript basics
    React with TypeScript
    React router
    React components
    React state management

Backend:

It took me about 6 hours to complete the backend exam because I had to learn Node.js from scratch. I have no experience creating REST APIs, so I had to learn the following topics:

    Node.js basics
    Express.js
    REST API design

Q3.

If I had used a database for the backend project, I would have used MongoDB. IT is also a popular choice for Node.js developers.

To delete an employee from MongoDB, you can use the deleteOne() method. The deleteOne() method takes a query document as its argument. The query document specifies the criteria for which documents to delete. For example, the following query document would delete the employee with the ID of 123:

{
id: 123
}

To execute the query, you would call the deleteOne() method on the collection that contains the employee documents. For example, the following code would delete the employee with the ID of 123 from the employees collection:

db.employees.deleteOne({ id: 123 });
