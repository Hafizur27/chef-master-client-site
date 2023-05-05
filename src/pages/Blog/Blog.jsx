/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
};

const Blog = () => {
  return (
    <Container className="mt-4">
      <Pdf
        targetRef={ref}
        filename="course.pdf"
        options={options}
        x={0.3}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            type="button"
            className="btn btn-success my-4"
          >
            Save as Pdf
            <span>Pdf</span>
          </button>
        )}
      </Pdf>

      <div ref={ref}>
        <div>
          <h3 className="fw-bold">
            1. What is the differences between uncontrolled and controlled
            components?
          </h3>
          <p>
            In software engineering, uncontrolled and controlled components
            refer to two different approaches for building user interfaces in a
            web application. <br />
            Uncontrolled components are components that manage their own state
            internally, and are often built using simple HTML form elements.
            They do not rely on any external state management libraries or
            frameworks. Uncontrolled components are typically easier to
            implement and require less code, but they can be harder to test and
            debug, and may result in a less maintainable codebase over time.{" "}
            <br />
            On the other hand, controlled components are components that rely on
            an external state management system, such as React state or Redux.
            These components receive their initial state and any updates to
            their state through props, and they emit events to notify the parent
            component of any changes. Controlled components provide more
            fine-grained control over the user interface, and make it easier to
            reason about and test the state of the application. However, they
            can require more code and be more complex to implement initially.
          </p>
        </div>
        <div>
          <h3 className="fw-bold">
            2.How to validate React props using PropTypes ?
          </h3>
          <p>
            React PropTypes is a built-in library in React that allows you to
            declare the data types of the props passed to a component. You can
            use PropTypes to validate the props of a component, and to provide
            helpful warnings in the browser console if the props are not of the
            expected type. <br />
            Here's how you can use PropTypes to validate the props of a React
            component: <br />
            Import the PropTypes library at the top of your component file:{" "}
            <br />
            import PropTypes from 'prop-types'; <br />
            Below are the validators for the basic data types: <br />
            PropTypes.any: The prop can be of any data type <br />{" "}
            PropTypes.bool: The prop should be a Boolean <br />{" "}
            PropTypes.number: The prop should be a number <br />
            PropTypes.string: The prop should be a string <br /> PropTypes.func:
            The prop should be a function <br /> PropTypes.array: The prop
            should be an array <br />
            PropTypes.object: The prop should be an object <br />{" "}
            PropTypes.symbol: The prop should be a symbol
          </p>
        </div>
        <div>
          <h3 className="fw-bold">
            3. What is the difference between nodejs and express js.
          </h3>
          <p>
            Node.js and Express.js are both widely used in building web
            applications, but they are different in their approach and
            functionality. <br />
            Node.js is a runtime environment that allows developers to run
            JavaScript code on the server-side. It provides an event-driven,
            non-blocking I/O model, which makes it lightweight and efficient.
            Node.js allows developers to build scalable and high-performance web
            applications, APIs, and command-line tools using JavaScript. <br />
            Express.js, on the other hand, is a web application framework that
            is built on top of Node.js. It provides a set of tools and features
            for building web applications in a structured and organized way.
            Express.js is designed to simplify the process of building web
            applications by providing middleware, routing, and other utilities,
            which can be used to handle HTTP requests and responses. <br /> Here
            are some of the key differences between Node.js and Express.js:{" "}
            <br />
            Purpose: Node.js is a runtime environment for running JavaScript on
            the server-side, while Express.js is a web application framework
            built on top of Node.js. <br /> Functionality: Node.js provides a
            set of low-level APIs for handling I/O operations, while Express.js
            provides a set of higher-level APIs for building web applications
            and APIs. <br />
            Features: Express.js provides features like routing, middleware,
            template engines, and more, which are not included in Node.js by
            default. <br />
            Modularity: Node.js is highly modular and allows developers to use
            external libraries and modules to extend its functionality.
            Express.js also follows the same approach and provides a wide range
            of modules and middleware for various use cases. <br />
            Learning curve: Node.js can have a steeper learning curve, as
            developers need to learn how to use its low-level APIs. Express.js,
            on the other hand, has a more straightforward and structured API,
            which makes it easier for developers to build web applications.
          </p>
        </div>
        <div>
          <h3 className="fw-bold">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            In React, a custom hook is a function that starts with the prefix
            "use" and allows you to extract common logic from React components
            and reuse it across multiple components. Custom hooks enable you to
            encapsulate and share functionality that can be used across multiple
            components, just like regular functions allow you to encapsulate and
            reuse functionality within a single component. <br /> Custom hooks
            can be used to abstract away complex logic or functionality that is
            shared across multiple components. This can help reduce code
            duplication and make your code more modular and reusable. Custom
            hooks can also help improve the readability and maintainability of
            your code by allowing you to separate concerns and logic into
            smaller, more manageable pieces. <br /> Here are some common
            scenarios where you might want to create a custom hook: <br />
            Managing component state: If you have complex state logic that needs
            to be reused across multiple components, you can create a custom
            hook to manage that state logic and reuse it across all the
            components that need it. <br />
            Fetching data: If you have API calls that are needed in multiple
            components, you can create a custom hook to handle the API call and
            reuse it across all the components that need it. <br />
            Animations and transitions: If you have complex animations or
            transitions that need to be used in multiple components, you can
            create a custom hook to manage the animation or transition logic and
            reuse it across all the components that need it. <br /> Form
            validation: If you have form validation logic that needs to be used
            in multiple components, you can create a custom hook to handle the
            validation logic and reuse it across all the components that need
            it.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
