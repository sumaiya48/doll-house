const Blogs = () => {
    return (
        <div className="px-4 py-6 bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg")` }}>
            <h2 className="text-center font-bold text-4xl py-3 "> QUESTION & ANSWER</h2>
            <div className="max-w-2xl mx-auto">
                <div>
                    <h3 className="font-bold text-xl">Question : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className="pb-4"> <span className="font-bold ">Ans: Access Token: </span> An access token is a credential that is issued by an authentication server to a client after the client successfully authenticates. It allows the client to access protected resources on a resource server. <br />
                    <span className="font-bold">Refresh Token: </span>A refresh token is a credential used to obtain a new access token without re-authenticating the user. It is issued along with the access token during the initial authentication process. <br />

    <span className="font-bold">How They Work Together</span> <br />
    <span className="font-bold"> Authentication:</span> The client authenticates with the authentication server (e.g., via user credentials, social login, etc.). <br />
    <span className="font-bold">Token Issuance: </span> The authentication server issues an access token and a refresh token to the client. <br />
    <span className="font-bold">Accessing Resources: </span> The client uses the access token to access protected resources. <br />
    <span className="font-bold">Token Expiration:</span>  When the access token expires, the client sends the refresh token to the authentication server.
    </p>
                    <h3 className="font-bold text-xl">Question : Compare SQL and NoSQL databases?</h3>
                    <p className="pb-4"><span className="font-bold">Ans:</span>The five critical differences between SQL and NoSQL are: <br />

    SQL databases are relational, and NoSQL databases are non-relational. <br />
    SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    <h3 className="font-bold text-xl">Question : What is express js? What is Nest JS ?</h3>
                    <p className="pb-4"><span className="font-bold">Ans:</span><span className="font-bold">Express.js</span> ExpressJS is unopinionated, providing developers with the freedom to implement code according to their specific needs. It lacks a set of pre-defined rules, allowing for multiple possibilities in coding approaches. <br />
                    <span className="font-bold">Nest JS: </span>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
    </p>
                    <h3 className="font-bold text-xl">Question : What is MongoDB aggregate and how does it work ?</h3>
                    <p className="pb-4"><span className="font-bold">Ans: MongoDB</span>MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. <br />

                    <span className="font-bold">How MongoDB Aggregation Works</span> <br />
    Pipeline Structure: An aggregation pipeline is composed of multiple stages, each performing a different operation on the data. The output of one stage becomes the input for the next. This modular approach allows for complex data transformations and computations. <br />

    <span className="font-bold">Common Stages: </span><br />

    $match: Filters documents based on specified criteria. <br />
    $group: Groups documents by a specified key and can apply aggregate functions like sum, avg, min, and max. <br />
    $sort: Sorts the documents by a specified field in ascending or descending order. <br />
    $project: Reshapes each document in the stream, adding, removing, or modifying fields.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
