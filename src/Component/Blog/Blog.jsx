import React from "react";

const Blog = () => {
  return (
    <div className="my-20">
      <div className="my-6">
        <img
          className="h-96 w-full rounded-2xl"
          src="https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg"
          alt="blog"
        />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="w-1/2">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                An access token and a refresh token are commonly used in
                authentication and authorization protocols. <br /> <br />
                Access Token: An access token is a credential that is issued by
                an authentication server upon successful authentication of a
                user. It is a short-lived token with an expiration time,
                typically ranging from a few minutes to a few hours. The access
                token contains information about the user and their granted
                permissions or scopes. It is used to authenticate and authorize
                the user when making requests to protected resources, APIs, or
                services. <br /> <br />
                Refresh Token: A refresh token is a long-lived token that is
                also issued by the authentication server during the initial
                authentication process. It is used to obtain a new access token
                when the current one expires. Unlike the access token, the
                refresh token is not sent with every request to the server but
                is stored securely on the client-side. When the access token
                expires, the client can use the refresh token to request a new
                access token without requiring the user to reauthenticate.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
              <p>
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                broad categories of databases with different approaches to data
                storage and retrieval. Here's a comparison between SQL and NoSQL
                databases. <br />
                - SQL: SQL databases follow a rigid, predefined schema where
                data is organized into tables with rows and columns. Each table
                has a specific structure defined by columns with specified data
                types. <br />
                <br />- NoSQL: NoSQL databases offer a flexible schema or
                schema-less design. They typically use a variety of data models,
                such as key-value, document, columnar, or graph. This
                flexibility allows for dynamic and unstructured data storage.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is express js? What is Nest JS?
            </div>
            <div className="collapse-content">
              <p>
                Express.js: Express.js is a popular and widely used web
                application framework for Node.js. It provides a minimalistic
                and flexible approach to building web applications and APIs.
                Express.js simplifies the process of handling HTTP requests,
                routing, middleware management, and generating responses. It
                offers a robust set of features while remaining unopinionated,
                allowing developers to structure their applications according to
                their needs. With Express.js, you can create server-side
                applications, RESTful APIs, and even full-stack web
                applications. <br /> <br />
                NestJS: NestJS is a progressive Node.js framework for building
                scalable and efficient server-side applications. It is inspired
                by Angular, leveraging TypeScript and adopting a modular and
                component-based architecture. NestJS combines elements of
                object-oriented programming, functional programming, and
                reactive programming to provide a robust and extensible
                foundation for building enterprise-grade applications. It offers
                a rich set of features such as dependency injection, declarative
                modules, middleware support, decorators for routing and
                validation, WebSocket integration, and more. NestJS promotes a
                structured and organized approach to application development
                while leveraging the power of Node.js and TypeScript.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is MongoDB aggregate and how does it work
            </div>
            <div className="collapse-content">
              <p>
                Express.js: Express.js is a popular and widely used web
                application framework for Node.js. It provides a minimalistic
                and flexible approach to building web applications and APIs.
                Express.js simplifies the process of handling HTTP requests,
                routing, middleware management, and generating responses. It
                offers a robust set of features while remaining unopinionated,
                allowing developers to structure their applications according to
                their needs. With Express.js, you can create server-side
                applications, RESTful APIs, and even full-stack web
                applications. <br /> <br />
                NestJS: NestJS is a progressive Node.js framework for building
                scalable and efficient server-side applications. It is inspired
                by Angular, leveraging TypeScript and adopting a modular and
                component-based architecture. NestJS combines elements of
                object-oriented programming, functional programming, and
                reactive programming to provide a robust and extensible
                foundation for building enterprise-grade applications. It offers
                a rich set of features such as dependency injection, declarative
                modules, middleware support, decorators for routing and
                validation, WebSocket integration, and more. NestJS promotes a
                structured and organized approach to application development
                while leveraging the power of Node.js and TypeScript.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/23/00/faq-2027970_1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
