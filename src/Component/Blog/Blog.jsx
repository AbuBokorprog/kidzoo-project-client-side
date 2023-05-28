import React from "react";
import useRoute from "../../RouteHook/UseRoute";

const Blog = () => {
  useRoute("Blogs");
  return (
    <div className="my-20">
      <div className="my-6">
        <img
          className="h-96 w-full rounded-2xl"
          src="https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg"
          alt="blog"
        />
      </div>
      <div className="">
        <div className="">
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
                <i>
                  An access token and a refresh token are commonly used in
                  authentication and authorization protocols.
                </i>
                <br /> <br />
                <span className="font-medium">Access Token:</span> An access
                token is a credential that is issued by an authentication server
                upon successful authentication of a user. It is a short-lived
                token with an expiration time, typically ranging from a few
                minutes to a few hours. The access token contains information
                about the user and their granted permissions or scopes. It is
                used to authenticate and authorize the user when making requests
                to protected resources, APIs, or services. <br /> <br />
                <span className="font-medium">Refresh Token:</span> A refresh
                token is a long-lived token that is also issued by the
                authentication server during the initial authentication process.
                It is used to obtain a new access token when the current one
                expires. Unlike the access token, the refresh token is not sent
                with every request to the server but is stored securely on the
                client-side. When the access token expires, the client can use
                the refresh token to request a new access token without
                requiring the user to reauthenticate. <br />
                <br /> <br />
                <span className="font-medium">
                  Access token and refresh token works:
                </span>{" "}
                1. The client (e.g., a web or mobile application) initiates the
                authentication process by sending the user to the authentication
                server. <br /> 2. The user enters their credentials and the
                authentication server verifies them. If the authentication is
                successful, the server generates an access token and a refresh
                token. <br /> 3. The server sends the access token back to the
                client, which stores it securely (e.g., in memory or in a secure
                storage mechanism). <br /> 4. The refresh token is also sent
                back to the client, but it is stored securely and not accessible
                to unauthorized parties. Common secure storage mechanisms
                include encrypted cookies, secure HTTP-only cookies, or local
                storage with proper security measures. <br /> 5. When the client
                needs to access a protected resource or make API requests, it
                includes the access token in the request headers for
                authentication and authorization. <br /> 6. If the access token
                expires, the client can use the refresh token to request a new
                access token from the authentication server. The server verifies
                the refresh token and, if valid, issues a new access token,
                which is sent back to the client. The refresh token is also
                refreshed or rotated during this process.
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
                <i>
                  SQL (Structured Query Language) and NoSQL (Not Only SQL) are
                  two broad categories of databases with different approaches to
                  data storage and retrieval. Here's a comparison between SQL
                  and NoSQL databases.
                </i>
                <br /> <br /> <br />
                <span className="font-medium">SQL:</span> SQL databases follow a
                rigid, predefined schema where data is organized into tables
                with rows and columns. Each table has a specific structure
                defined by columns with specified data types. <br />
                <br /> <span className="font-medium">NoSQL:</span> NoSQL
                databases offer a flexible schema or schema-less design. They
                typically use a variety of data models, such as key-value,
                document, columnar, or graph. This flexibility allows for
                dynamic and unstructured data storage.
              </p>
              <br /> <br />
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>SQL</th>
                      <th className="px-5">noSQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stands for Structured Query Language</td>
                      <td>Stands for Not Only SQL</td>
                    </tr>
                    <tr>
                      <td>Relational database management system (RDBMS)</td>
                      <td> Non-relational database management system</td>
                    </tr>
                    <tr>
                      <td>
                        Suitable for structured data with predefined schema
                      </td>
                      <td>
                        Suitable for unstructured and semi-structured data
                      </td>
                    </tr>
                    <tr>
                      <td>Data is stored in tables with columns and rows</td>
                      <td>Data is stored in collections or documents</td>
                    </tr>
                    <tr>
                      <td>
                        Follows ACID properties (Atomicity, Consistency,
                        Isolation, Durability) for transaction management
                      </td>
                      <td>Does not necessarily follow ACID properties</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                <i>
                  Express is a minimalist and flexible framework that is easy to
                  use and has a large community of developers. NestJS, on the
                  other hand, is a newer framework that provides additional
                  features such as dependency injection, a modular architecture,
                  and an intuitive CLI.
                </i>
              </p>{" "}
              <br />
              <p>
                <span className="font-medium">Express.js:</span> Express.js is a
                popular and widely used web application framework for Node.js.
                It provides a minimalistic and flexible approach to building web
                applications and APIs. Express.js simplifies the process of
                handling HTTP requests, routing, middleware management, and
                generating responses. It offers a robust set of features while
                remaining unopinionated, allowing developers to structure their
                applications according to their needs. With Express.js, you can
                create server-side applications, RESTful APIs, and even
                full-stack web applications. <br /> <br />
                <span className="font-medium">NestJS:</span> NestJS is a
                progressive Node.js framework for building scalable and
                efficient server-side applications. It is inspired by Angular,
                leveraging TypeScript and adopting a modular and component-based
                architecture. NestJS combines elements of object-oriented
                programming, functional programming, and reactive programming to
                provide a robust and extensible foundation for building
                enterprise-grade applications. It offers a rich set of features
                such as dependency injection, declarative modules, middleware
                support, decorators for routing and validation, WebSocket
                integration, and more. NestJS promotes a structured and
                organized approach to application development while leveraging
                the power of Node.js and TypeScript.
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
                <span className="font-medium">Aggregation:</span>
                Aggregation is a way of processing a large number of documents
                in a collection by means of passing them through different
                stages. The stages make up what is known as a pipeline. The
                stages in a pipeline can filter, sort, group, reshape and modify
                documents that pass through the pipeline. <br /> <br />
                <span className="font-medium">mongoDB Aggregation Work:</span>
                <br /> <br />
                <span className="font-medium">$match:</span> This stage filters
                the documents in the collection based on specific criteria,
                similar to the find operation. It uses MongoDB's query syntax to
                match documents that satisfy the specified conditions. <br />
                <br />
                <span className="font-medium">$group:</span> This stage groups
                documents together based on a specified key or keys. It allows
                you to perform various calculations and aggregations on the
                grouped data, such as calculating the sum, average, minimum, or
                maximum values for specific fields. <br /> <br />
                <span className="font-medium">$project:</span> This stage
                reshapes the documents in the pipeline by including or excluding
                fields, creating computed fields, renaming fields, or changing
                their data types. It helps to transform the data according to
                your requirements. <br /> <br />
                <span className="font-medium">$sort:</span> This stage sorts the
                documents in the pipeline based on one or more fields, either in
                ascending or descending order. <br /> <br />
                <span className="font-medium">$limit and $skip:</span> These
                stages allow you to limit the number of documents returned or
                skip a certain number of documents in the pipeline.
                <br /> <br /> <span className="font-medium">$unwind:</span> This
                stage deconstructs an array field from input documents and
                outputs a new document for each element in the array. This is
                useful when you want to perform aggregations on individual array
                elements.
                <br /> <br /> <span className="font-medium">$lookup:</span> This
                stage performs a left outer join with another collection in the
                same database or another database, allowing you to combine data
                from multiple collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
