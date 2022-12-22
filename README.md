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

## --Video 269 : Working with Links

- for navigation we need to use <Link> component from react-router-dom
- it is a wrapper component which takes a path prop and renders a anchor tag with href prop set to the path prop
- it also takes a className prop which is passed to the anchor tag
- it also takes a onClick prop which is passed to the anchor tag
- it helps to crate an illusion of navigation between pages for the users expereince

```js
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}
```

---

## --Video 270 : Using NavLinks

1. NavLink is a wrapper component which takes a path prop and renders a anchor tag with href prop set to the path prop.
2. it takes a activeClassName prop which is passed to the anchor tag when it is active.
3. it is very helpfull when we want to style the active link in a header component.

code before:

```js
import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
```

After using NavLink:

```js
import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
```

---

## --Video 271 : Adding dynamic routes with params

1. here we learnt to add dynamic routes with params
2. the params are the values which are passed to the route and are used to render different components
3. we can use the params in the component which is rendered by the route
4. it is helpfull when showing individual items of a list in more detail

```js
// here we are using the (":productId")param to show the product detail of the product which is clicked
<Route path="/product-detail/:productId">
  <ProductDetail />
</Route>
```

---

## --Video 272 : Extracting Route Params

1. here we learnt to extract the params from the route
2. we can use the useParams hook to extract the params from the route
3. it is helpfull when we want to use the params in the component which is rendered by the route
4. useParams hook returns an object which has the params as key value pairs

```js
"/product-detail/:productId"; // if this is the url
// here we are using the useParams hook to extract the params from the route
const params = useParams();
//params object looks like this
//     {productId: "some entered Value"}
return (
  <section>
    <h1>{params.productId}</h1>
    <p>{params.productId}</p>
  </section>
);
```

---

## --Video 273 : Using "Switch" and "exact" for configuring routes

### About Switch

1. Switch is a wrapper component provided by react-router-dom which is used to wrap the routes
2. it is used to render only one route at a time
3. it is helpfull when we have multiple routes which have same path but different components like "/products" and "/products/:productId"
4. it renders the first route which matches the path and ignores the rest starting from the top of the routes and searching for a match till bottom.

### About exact

1. exact is a prop which is passed to the Route component
2. it is used to match the path exactly
3. in default behaviour we write "/products" and "/products/:productId" and when we go to "/products" it renders both the routes as both the routes have "/products" in their path
4. to avoid this we use exact prop in the "/products" route so that it matches the path exactly and renders only that route only when the path is "/products" and not when it is "/products/:productId" or any other path which starts with "/products"

```js
<Switch>
  <Route path="/welcome">
    <Welcome />
  </Route>
  // for only "/products" path this below route will be rendered due to exact prop
  and will not render if route is "/productsasdfcs" or "/produc"
  <Route path="/products" exact>
    <Products />
  </Route>
  <Route path="/products/:productId">
    <ProductDetail />
  </Route>
</Switch>
```

---

## --Video 274 : Working with nested routes

1. here we learnt to use nested routes
2. nested routes are routes which are nested inside other routes like
   - "/products" is a route
   - "/products/:productId" is a nested route
   - "/products/:productId/reviews" is a nested route inside "/products/:productId"
3. we can use nested routes to show the details of a product and the reviews of that product in the same page
4. its just like dynamic routes , the nested route is only rendered when the parent route is rendered

```js
// here we are using nested routes
// "/products" is a route
// "/products/:productId" is a nested route
// "/products/:productId/reviews" is a nested route inside "/products/:productId"
<Switch>
  <Route path="/welcome">
    <Welcome />
  </Route>
  <Route path="/products" exact>
    <Products />
  </Route>
  <Route path="/products/:productId">
    <ProductDetail />
  </Route>
  <Route path="/products/:productId/reviews">
    <ProductReviews />
  </Route>
</Switch>;

// and welcome.js looks like this
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      // this is a nested route
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};
```

---

## --Video 275 : Redirecting the User

1. here we learnt to redirect the user to a different route
2. we can use the Redirect component provided by react-router-dom to redirect the user to a different route
3. it is helpfull when we want to redirect the user to a different route when a condition is met

```js
// here we are using the Redirect component to redirect the user to a different route
// if the user is not authenticated then he will be redirected to the login page
// if the user is authenticated then he will be redirected to the products page
// we can use the Redirect component inside the Switch component
<Switch>
  <Route path="/welcome">
    <Welcome />
  </Route>
  <Route path="/products" exact>
    <Products />
  </Route>
  <Route path="/products/:productId">
    <ProductDetail />
  </Route>
  <Route path="/products/:productId/reviews">
    <ProductReviews />
  </Route>
  // if the user is not authenticated then he will be redirected to the login page
  // if the user is authenticated then he will be redirected to the products page
  <Route path="/auth">
    {isAuth ? <Redirect to="/products" /> : <Auth />}
  </Route>
  <Redirect to="/welcome" />
</Switch>;


// this is also a valid example

<Route path="/" exact>
  <Redirect to="/welcome" />
</Route>
<Route path="/welcome">
  <Welcome />
</Route>

```

---

## --Video 276 : Time to practice (onwards to a new project)

1. here we are provided with an empty project setup file which we will use to practice
   react-router by building multiple pages.
   and using many other features of react-router.
2. added the \_276_to_292_sec_20_practice_project folder in which we will practice realworld scenarios and use react-router at its full potential.

3. created three components

   - AllQuotes.js
   - QuoteDetail.js
   - NewQuote.js

4. created three routes in \_276_to_292_sec_20_practice_project 's App.js

   - "/quotes" for AllQuotes.js
   - "/quotes/:quoteId" for QuoteDetail.js
   - "/new-quote" for NewQuote.js

5. used the exact prop in the "/quotes" route so that it renders only when the path is "/quotes" and not when it is "/quotes/:quoteId"

6. used the Switch component to render only one route at a time.

7. used the `<BrowserRouter>` component to wrap the App.js component which will activate the react-router-dom features in the App.js component

code of App.js

```js
<Switch>
  <Route path="/quotes" exact>
    <AllQuotes />
  </Route>
  <Route path="/quotes/:quoteId">
    <QuoteDetail />
  </Route>
  <Route path="/new-quote">
    <NewQuote />
  </Route>
</Switch>
```

---

## --Video 277 : Practice Redirecting and extracting params

1. used useParams() hook to extract the params from the url and use them in the component

2. also used Redirect component to redirect the user to a different route

---

## --Video 278 : practicing nested routes

1. used nested routes to show the details of a quote and the comments of that quote in the same page
2. used the useParams() hook to extract the params from the url and use them in the component

---

## --Video 279 : Adding a Layout Wrapper Component

1. made a layout component which will wrap all the components and will contain the navigation links
2. used the NavLink component to add the navigation links

code is below

```js
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
```

---

## --Video 280 : Adding Dummy Data & More Content

1. added dummy data in the AllQuotes.js component.
2. used the map() method to render the dummy data in the AllQuotes.js component.

code for AllQuotes.js

```js
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
```

Code for QuoteList.js

```js
const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
```

Code for QuoteItem.js

```js
const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className="btn">View Fullscreen</a>
    </li>
  );
};
```

3. also added the add-quote form.

Code for NewQuote.js

```js
const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};
```

---

## --Video 281 : Outputting Data on the "Details" Page

1. used the useParams() hook to extract the params from the url and use them in the component
2. used the find() method to find the quote with the id that is extracted from the url
3. used the highlightedQuote component to show the details of the quote

---

## --Video 282 : Adding a "Not Found" Page

1. used the Switch component to render only one route at a time.
2. used the path="\*" to render the NotFound component when the url does not match any of the routes
3. Code :

```js
<Route path="*">
  <NotFound />
</Route>
```

## --Video 283 : Implementing Programmatic (Imperative) Navigation

1. Programmatic navigation is used to navigate to a different page using javascript code.
2. used the useHistory() hook to get the history object which has the push() method to navigate to a different page.

USAGE :

```js
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
```

---

## --Video 284 : Preventing Possibly Unwanted Route Transitions with the "Prompt" Component

1. used the Prompt component to show a message when the user tries to navigate to a different page without saving the data.
2. used the useState() hook to set the isFormFocused state to true when the user focuses on the form and to false when the user blurs the form.
3. used the isFormFocused state to show the prompt component when the user tries to navigate to a different page.

USAGE :

```js
import { Prompt } from "react-router-dom";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isFormFocused, setIsFormFocused] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const focusFormHandler = () => {
    setIsFormFocused(true);
  };

  const finishFormHandler = () => {
    setIsFormFocused(false);
  };

  return (
    <Card>
      <Prompt
        when={isFormFocused}
        message={(location) =>
          `Are you sure you want to leave? All your entered data will be lost! And visit ${location.pathname}`
        }
      />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={focusFormHandler}
        onBlur={finishFormHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};
```

---

## --Video 285 : Working with Query Parameters

1. used the useLocation() hook to get the location object which has the search property which contains the query parameters.
2. used the URLSearchParams() constructor to get the query parameters as an object.
3. used the query parameters to show a message when the user tries to add a quote without entering any data.
4. it is benefitial when u r using the same component for different purposes.like sorting asc and dsc.

Code:

```js
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = props.quotes.sort((quoteA, quoteB) => {
    if (isSortingAscending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
  function changeSortingHandler() {
    history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
```

---

## -- Video 286 : Getting Creative With Nested Routes

1. we used the react router's nested routes to show the comments of a quote on the details page. and also we are able to navigate to the comments page using the Link component along with the <Route> wrapper component to render the comments page conditionally like we used to do with the state based rendering.

Code:

```js
<Fragment>
  <HighlightedQuote text={quote.text} author={quote.author} />
  <Route path={`/quotes/${params.quoteId}`} exact>
    <div className="centered">
      <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
        Load Comments
      </Link>
    </div>
  </Route>

  <Route path={`/quotes/${quote.quoteId}/comments`}>
    <Comments />
  </Route>
</Fragment>
```
