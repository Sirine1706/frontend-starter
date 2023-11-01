# React Best Practices

- [React Best Practices](#react-best-practices)
  - [Significant File Organization](#significant-file-organization)
    - [small-scale project structure](#small-scale-project-structure)
    - [large-scale project structure](#large-scale-project-structure)
  - [Small and Specific Functional Components](#small-and-specific-functional-components)
  - [Avoid Excessive Use of State](#avoid-excessive-use-of-state)
  - [Avoid Using Indexes as Key Props](#avoid-using-indexes-as-key-props)
  - [Use Fragments Instead of Divs When Possible](#use-fragments-instead-of-divs-when-possible)
  - [Follow Naming Conventions](#follow-naming-conventions)
  - [Avoid Repetitive Code](#avoid-repetitive-code)
  - [Use Object Destructuring for Props](#use-object-destructuring-for-props)
  - [Write Tests for Each React Component](#write-tests-for-each-react-component)
  - [Structured Import Order](#structured-import-order)
  - [Use a Linter](#use-a-linter)
  - [Lazy Loading in React](#lazy-loading-in-react)
  - [USe Reusable Hooks](#use-reusable-hooks)
  - [Higher-Order Components (HOC)](#higher-order-components-hoc)
  - [Separating State Business Logic from UI](#separating-state-business-logic-from-ui)

<br>

---

<br><br>

## Significant File Organization

Files that serve similar functions and are designed to work with a certain feature, should be kept together. For instance, all the styling files and other files related to a single component should be in the same location.

With the help of this practice, the developers can easily find related items in a single location. Consequently, users won’t have to search the entire project for a specific file. No matter how large the project becomes, the file will always be located where it should be.

Developers can also opt for a component-centric file structure. This entails putting all the documents about one component in a single folder. For example, one can create a folder called NavBar that contains the navigation bar component itself, the styled-components, and any other JavaSript and asset files.

It is simple to reuse, share, and debug a component when all of its files are contained in a single folder.

### small-scale project structure

<br>

```
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- routes            # routes configuration
|
+-- stores           # global state stores
|
+-- __tests__              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

### large-scale project structure

<br>

```
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- routes            # routes configuration
|
+-- stores           # global state stores
|
+-- __tests__              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
|
+-- modules           # modules folder can contain all the modules of the application
|   |
|   +-- auth          # auth module
|   |   |
|   |   +-- components    # components used in auth module
|   |   |
|   |   +-- hooks         # hooks used in auth module
|   |   |
|   |   +-- pages         # pages used in auth module
|   |   |
|   |   +-- stores        # stores used in auth module
|   |   |
|   |   +-- types         # types used in auth module
|   |   |
|   |   +-- utils         # utils used in auth module
|   |   |
|   |   +-- index.tsx     # entry point of auth module
|   |
|   +-- home          # home module
|   |   |
|   |   +-- components    # components used in home module
|   |   |
|   |   +-- hooks         # hooks used in home module
|   |   |
|   |   +-- pages         # pages used in home module
|   |   |
|   |   +-- stores        # stores used in home module
|   |   |
|   |   +-- types         # types used in home module
|   |   |
|   |   +-- utils         # utils used in home module
|   |   |
|   |   +-- index.tsx     # entry point of home module
|   |
|   +-- index.tsx    # entry point of modules
|
+-- index.tsx         # entry point of application
```

<br>

---

<br>

## Small and Specific Functional Components

When developing with React, it's beneficial to create small and specific functional components. While React allows building large components that handle multiple tasks, it's recommended to structure them in a way that each component has a clear and focused purpose.

In React, developers strive to create reusable UI components. By breaking down functionality into smaller components, the code becomes more readable, easier to understand, and simpler to maintain. Each component should have a concise and focused implementation, typically consisting of around 100 to 200 lines of code. This approach improves code usability and makes it more approachable for other developers to comprehend and make modifications.

Here's an example illustrating the concept of small and specific functional components:

```
// ParentComponent.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

const ParentComponent = () => {
return (

<div>
<Header />
<div className="container">
<Sidebar />
<Content />
</div>
<Footer />
</div>
);
};

export default ParentComponent;

// Header.js
import React from "react";

const Header = () => {
return (

<header>
<h1>My App</h1>
{/_ Other header content _/}
</header>
);
};

export default Header;

// Sidebar.js
import React from "react";

const Sidebar = () => {
return (

<div className="sidebar">
{/_ Sidebar content _/}
</div>
);
};

export default Sidebar;

// Content.js
import React from "react";

const Content = () => {
return (

<div className="content">
{/_ Content _/}
</div>
);
};

export default Content;

// Footer.js
import React from "react";

const Footer = () => {
return (

<footer>
{/_ Footer content _/}
</footer>
);
};

export default Footer;
```

In the example above, the parent component ParentComponent is composed of smaller components such as Header, Sidebar, Content, and Footer. Each of these components has a specific responsibility within the overall UI structure. Breaking down the functionality into smaller components improves code organization, reusability, and maintainability.

<br>

---

<br>

## Avoid Excessive Use of State

State management in React is a powerful feature, but it's important to use it judiciously. Excessive use of state can lead to complex code and potential performance issues. Therefore, it is recommended to minimize the use of state whenever possible.

One approach to reduce state usage is to declare it only when necessary. For example, if you need to fetch user data from an API, consider storing the entire user object in a single state variable instead of maintaining separate state variables for each property.

Instead of the following code:

```
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
```

Consider using a single state variable for the user object:

```
const [user, setUser] = useState({});
```

By storing the user object in a single state variable, you can simplify your code and reduce the amount of state management required. This approach allows you to access and update the user object as a whole, providing a cleaner and more efficient solution.

<br>

---

<br>

## Avoid Using Indexes as Key Props

In React, keys are used to uniquely identify items in an array during rendering. They help React efficiently update and manage the elements in the list.

While it may be tempting to use the index of an array as the key prop, this approach can lead to issues, especially when the list is expected to change dynamically. Consider the following example:

```
const Items = () => {
  const arr = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <>
      {arr.map((elem, index) => {
        <li key={index}>{elem}</li>;
      })}
    </>
  );
};
```

Using the index as the key prop may seem convenient, but it can cause unexpected behavior. For instance, if you add a new item at the beginning of the list, the index of each item will shift, resulting in the "Item1" key being reassigned. This can lead to incorrect rendering and potential bugs.

To avoid such issues, it's recommended to use a unique identifier as the key instead of relying on the array index. If your data items have a unique ID or some other distinguishing property, use that as the key. This ensures that the identity of each item remains consistent, even if the order or content of the list changes.

By using a unique value as the key, you maintain the integrity of your list and ensure accurate rendering and updates when changes occur.

<br>

---

<br>

## Use Fragments Instead of Divs When Possible

In React, components typically return JSX code wrapped in a single tag, commonly a `div`, to create a container for the component's content. However, it is advisable to opt for React fragments (`<>...</>`) instead of` <div>` tags where possible.

Using `<div>` tags can increase the size of the DOM, especially in large-scale projects. The more DOM nodes or tags you have, the more memory your website consumes, and the more processing power your browser requires to load the website. This can result in slower page speeds and potentially a suboptimal user experience.

To mitigate these issues, consider using fragments instead of `<div>` tags, particularly when returning a single element from a component. Fragments allow you to group multiple elements without adding an extra layer of DOM nodes.

Here's an example that demonstrates the use of fragments:

```
const Button = () => {
  return (
    <>
      <button>Display</button>
    </>
  );
};
```

By using fragments, you avoid introducing unnecessary `<div>` tags into the DOM structure, which can help optimize performance and improve the efficiency of your React application.

<br>

---

<br>

## Follow Naming Conventions

When naming your components in React, it's important to use consistent and meaningful names to enhance code readability and maintainability. Here are two common naming conventions to follow:

- **PascalCase** for Components:
  Use PascalCase (also known as UpperCamelCase) to name your React components. This convention helps differentiate components from other non-component JSX files.
  Examples: TextField, NavMenu, SuccessButton

- **camelCase** for Internal Functions:
  Use camelCase (starting with a lowercase letter) to name functions declared inside React components. These functions typically handle specific actions or logic within the component.
  Examples: handleInput(), showElement()

By adhering to these naming conventions, you make your code more consistent, self-explanatory, and easier to understand for other developers working on the project. Consistent naming also helps avoid naming conflicts and improves the maintainability of your codebase.

<br>

---

<br>

## Avoid Repetitive Code

Repetitive code can lead to maintenance issues and make your codebase harder to manage. To improve code organization and promote reusability, it's important to identify duplicate code segments and refactor them into reusable components.

For instance, let's consider a navigation menu that is used in multiple components. Instead of duplicating the navigation code in each component, it's more efficient to create a separate component for the menu and reuse it wherever needed.

By adopting a component-based architecture, you can break down your project into smaller, reusable components that can be easily maintained and composed together to build complex applications. This approach promotes code reusability, reduces code duplication, and improves overall development efficiency.

Here's an example to illustrate this concept:

```
// NavigationMenu.js
import React from "react";

const NavigationMenu = () => {
  // Navigation menu code goes here

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
```

Now, instead of repeating the navigation menu code in each component, you can simply import and use the NavigationMenu component wherever needed:

```
import React from "react";
import NavigationMenu from "./NavigationMenu";

const HomePage = () => {
  return (
    <div>
      <NavigationMenu />
      {/* Rest of the home page content */}
    </div>
  );
};

export default HomePage;
```

By encapsulating the navigation menu logic and presentation within a reusable component, you not only eliminate repetitive code but also ensure consistency and ease of maintenance throughout your application.

<br>

---

<br>

## Use Object Destructuring for Props

When working with React components, you can simplify your code and improve readability by using object destructuring for props. Instead of accessing the props object directly, you extract the specific prop values you need into separate variables.

Here's an example that illustrates the difference:

```
without Object Destructuring
const Button = (props) => {
  return <button>{props.text}</button>;
};

// With Object Destructuring
const Button = ({ text }) => {
  return <button>{text}</button>;
};
```

In the first example, the component receives the props object and accesses the text prop using props.text. This approach requires repeated references to the props object throughout the component.

In the second example, object destructuring is used to extract the text prop directly from the props object. By specifying { text } in the function parameter, you create a variable named text that holds the value of the text prop. This allows you to refer to text directly within the component without the need for props.text.

Using object destructuring for props enhances code readability and reduces the verbosity of accessing props. It's especially useful when a component has multiple props, as it simplifies the code and makes it easier to understand which props are being used.

<br>

---

<br>

## Write Tests for Each React Component

Writing tests for your React components is crucial to ensure their correctness and reduce the possibility of errors. Tests help verify that your components behave as expected and maintain the desired functionality throughout the development process. One popular testing framework for React is Jest, which provides a comprehensive environment for executing tests.

By writing tests for each component, you can validate their behavior and catch potential issues early on. These tests act as a safety net, allowing you to refactor and make changes with confidence, knowing that the existing functionality remains intact.

Here's an example of how you can write a test for a simple React component using Jest:

```
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the component correctly', () => {
  render(<MyComponent />);

  // Perform assertions to verify the expected behavior
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
```

In this example, we import the necessary testing utilities from @testing-library/react, including the render function, which renders the component under test. We then use the screen object to perform assertions and validate the expected behavior. In this case, we're checking if the component renders the text "Hello, World!".

<br>

---

<br>

## Structured Import Order

Maintaining a structured import order in your React application is essential as it helps you better understand the composition of your components. By following a consistent import structure, you can quickly identify the different types of imports and their sources.

A common convention is to group similar imports together. For example, you can separate external or third-party imports from local imports. Consider the following example:

```
import { Routes, Route } from "react-router-dom";
import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "@headlessui/react";
import Home from "./Home";
import logo from "./logo.svg";
import "./App.css";
```

In the above code, we first group the third-party libraries together, which are libraries we installed separately.

Next, we import local files such as stylesheets, images, and components.

While this example showcases a relatively small codebase for simplicity, it's important to be consistent with this import format to enhance understanding for both yourself and other developers working on the React app.

You can further group your local imports based on file types if it suits your preferences. For example, you can separate components, images, stylesheets, hooks, and other file types under separate sections in your local imports.

Here's an extended example illustrating this approach:

```
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import logo from "./logo.svg";
import closeBtn from "./close-btn.svg";
import "./App.css";
import "Home.css";
```

<br>

---

<br>

## Use a Linter

Using a linter tool is crucial for improving code quality in your JavaScript and React projects. One widely adopted linter tool is ESLint. But how exactly does it enhance code quality?

A linter tool promotes consistency throughout your codebase. By configuring ESLint with specific rules, you can establish coding standards that all developers working on the project should adhere to. These rules might include guidelines for using double quotes instead of single quotes, enforcing braces around arrow functions, following a consistent naming convention, and much more.

The linter tool analyzes your code and alerts you whenever a rule violation is detected. The offending keyword or line is typically highlighted in red.

Since each developer has their own coding style, linter tools help maintain code uniformity across the project.

Linter tools also assist in identifying and fixing bugs efficiently. They can highlight spelling errors, unused variables, and other issues during development. In some cases, these bugs can even be automatically fixed as you write code.

ESLint and similar tools are integrated into popular code editors, providing real-time linting capabilities. You can also customize ESLint configurations to align with your specific coding requirements.

<br>

---

<br>

## Lazy Loading in React

Lazy loading is an important technique to improve the performance of your React application, especially as it grows in size. By implementing lazy loading, you can reduce the initial load time for your web pages, resulting in faster and more responsive user experiences. Lazy loading allows you to load specific parts of your application only when they are needed, rather than loading the entire app upfront.

In React, lazy loading is achieved through a technique called code splitting. By default, React bundles and deploys the entire application, but with code splitting, you can split your bundles into smaller chunks and load them on-demand.

Here's an example of how you can implement lazy loading in React:

```
import React, { lazy, Suspense } from 'react';

// Define a lazy-loaded component
const Dashboard = lazy(() => import('./Dashboard'));

// Render the lazy-loaded component with Suspense
const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default App;
```

In the code above, we import the lazy function from React and use it to dynamically import the Dashboard component only when it's needed. The import('./Dashboard') syntax creates a separate bundle for the Dashboard component.

Next, we wrap the lazy-loaded component with the Suspense component. The Suspense component allows us to show a fallback UI, such as a loading spinner, while the lazy-loaded component is being loaded. In the example, we display the message "Loading..." as the fallback UI.

By implementing lazy loading, you can improve the initial load time of your React application by loading only the necessary components when they are required. This can greatly enhance the user experience, especially for larger applications where loading the entire app upfront might cause delays.

<br>

---

<br>

## USe Reusable Hooks

Hooks in React provide additional functionality and allow you to work with component state and perform side effects without the need for class components. By creating reusable hooks, you can avoid duplicating logic across multiple files and easily import them wherever needed in your application.

Let's consider an example of creating a reusable hook for fetching data from external APIs:

```
import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]);

  return { data };
}

export default useFetchData;
```

In the code above, we've defined a hook called useFetchData that fetches data from an API. This hook can now be imported and used in any component without the need to rewrite the fetching logic.

The possibilities for creating custom hooks in React are endless. You can tailor them to suit different functionalities and scenarios in your application. The key principle is to identify functionalities that need to be reused across multiple components and encapsulate them in reusable hooks.

<br>

---

<br>

## Higher-Order Components (HOC)

One of the powerful features in React is the ability to create Higher-Order Components (HOCs), which provide a way to enhance and reuse component functionality. HOCs allow you to wrap a component with additional logic and behaviors, making them a valuable tool for code reusability and composition.

By using HOCs, you can extract common functionality from multiple components and encapsulate it within a higher-order component. This allows you to abstract away complex logic and create reusable building blocks that can be applied to different components.

Here's an example of how you can create a simple HOC in React:

```
import React from "react";

const withLogger = (WrappedComponent) => {
return class WithLogger extends React.Component {
componentDidMount() {
console.log("Component is mounted!");
}

    render() {
      return <WrappedComponent {...this.props} />;
    }

};
};

const MyComponent = () => {
return <div>Hello, World!</div>;
};

const EnhancedComponent = withLogger(MyComponent);

export default EnhancedComponent;
```

In the code above, we define a higher-order component withLogger, which wraps the MyComponent and adds a componentDidMount lifecycle method to log a message when the component is mounted. The withLogger function returns a new component that renders the WrappedComponent with the added functionality.

By applying the withLogger HOC to MyComponent, we create an enhanced version of the component that logs a message when it's mounted.

Using HOCs, you can easily reuse and compose component functionality across your application, improving code maintainability and reducing duplication.

Note that HOCs have some limitations and might be replaced by other patterns like render props or hooks in certain cases. However, understanding HOCs is still valuable as they provide a foundation for understanding more advanced patterns in React.

<br>

---

<br>

## Separating State Business Logic from UI

To enhance reusability, testability, and maintainability of your React components, it's important to separate the state management logic from the UI logic. Combining both in a single component can make it less impactful and more challenging to work with, especially when it comes to managing state.

A recommended approach is to extract the state management logic into its own hook or custom function. This allows you to encapsulate the state-related code and keep it separate from the UI components. Here's an example:

```
// useCustomHook.js
import { useState } from 'react';

export function useCustomHook() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    // State update logic
  };

  // Other state management functions and variables

  return { value, handleClick };
}

// MyComponent.jsx
import { useCustomHook } from './useCustomHook';

function MyComponent() {
  const { value, handleClick } = useCustomHook();

  return <Element value={value} onClick={handleClick} />;
}
```

In this example, the useCustomHook function encapsulates the state management logic and returns the necessary state variables and functions. The MyComponent component then uses this custom hook to access the state and functions provided by useCustomHook. By separating the state logic, you improve reusability and make it easier to test and refactor the components.

Remember to choose appropriate names for your custom hooks and ensure they accurately reflect the purpose and functionality of the state management logic they encapsulate.

---
