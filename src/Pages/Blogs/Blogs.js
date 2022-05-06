import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container pt-4'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header className='fw-bold'>Javascript vs Node.js</Accordion.Header>
    <Accordion.Body>
   <h5>	
Javascript is a programming language that is used for writing scripts on the website. <br/>
 NodeJS is a Javascript runtime environment.<br/>
 Javascript can only be run in the browsers.<br/>We can run Javascript outside the browser with the help of NodeJS.<br/>
 Javascript is basically used on the client-side. <br/>Node.js is mostly used on the server-side.


 </h5>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>SQL vs NOSQL</Accordion.Header>
    <Accordion.Body>
    <h5>
    SQL databases are primarily called RDBMS or Relational Databases. <br/>NoSQL databases are primarily called as Non-relational or distributed database.<br/>
    Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems. <br/>	NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.<br/>
    Structured query language (SQL).<br/>	No declarative query language.
    </h5>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is the purpose of JWT and how does it work?</Accordion.Header>
    <Accordion.Body>
<h5>
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.<br/> Each JWT contains encoded JSON objects, including a set of claims.<br/> JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JSON Web Token is a standard used to create access tokens for an application.<br/>

It works this way the server generates a token that certifies the user identity, and sends it to the client.<br/>

The client will send the token back to the server for every subsequent request so the server knows the request comes from a particular identity.
</h5>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;