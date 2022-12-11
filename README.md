# --Video 265 : Module introduction :

### Here we will learn

1. untill now we have made single page applications using react
2. which in the end means that we are making only one page and rendering data conditionally
3. but having page urls help us to navigate through the whole project and also we can share a specific route of a page in our website to anyone.
4. we will learn how to add multiple pages in a single page application
5. what is client side routing (using react-router)
6. Advanced features like dynamic routes and nested routes

---

# --Video 266: What is routing and why?

1. react single page applications have a disadvantage of having only one route the "/" where we are also present and it is due to lack of routing
2. to avoid this we need to add routing in our reactapps
   > 1. so that user has a hint where is he right now in the whole project
   > 2. so that we could add eventListners in our Project which may take the user at a perticular path
   > 3. this elevates the user exp of ur project
3. in simple html and js we used to shift from page a to page b to show the user different contents
4. but there was a disadvantage of this like when a user shifts from page A to page B we loose the state of Page A and cnnot access that state in Page B
5. but here in react we just have one page and to mimic this above behaviour we need to have routes
6. this could be done via writing our own js logic or use a third part js library to manage our routes.
7. and theres a library to handle this type of functionality and is named as REACT-ROUTER.

---

# --Video 267 : Installing React-Router

1. got to [React Router Page.](https://reactrouter.com/en/main)

Command to install react-router-dom (not just react-router).

```console
npm install react-router-dom@5
```

add @5 in the end as we are using react router version 5

---

# --Video 268 : Defining and using Routes

### using react router for creating routes is like conditionally rendering components like

```js
// our-domain.com/ ==> ComponentA
// our-domain.com/products ==> ComponentB
```

Steps to create and use React router <Route></Route> component

1. create multiple components which u wanna make routes of
2. import Route wrapper component from reat-router-dom
3. pass the component which u wanna show at a perticular path
4. give the pass prop to the <Route> wrapper component
5. wrap your <App/> component in index.js with <BrowserRouter> wrapper to get access to the pages
6. it is recomended to have a separete pages folder for different pages which wrap your whole ui of a page and use that single component in app.js to keep the App.js JSX clean.

Code for usage of <Route> component

```js
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
```

Code for usage of <BrowserRouter/> component

```js
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---
