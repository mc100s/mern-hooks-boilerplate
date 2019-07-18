# React Summary

- [Resources](#resources)
- [How to use React?](#how-to-use-react)
- [VS Code extensions for React](#vs-code-extensions-for-react)
- [Import/Export](#importexport)
- [Hello React](#hello-react)
- [JSX](#jsx)
- [React Components and Props](#react-components-and-props)
- [React State Hook](#react-state-hook)
- [React Props VS State](#react-props-vs-state)
- [React Lifecycle](#react-lifecycle)
- [React and Events](#react-and-events)
- [React and Conditional Rendering](#react-and-conditional-rendering)
- [React Lists and Keys](#react-lists-and-keys)
- [React Forms](#react-forms)
- [React Router](#react-router)
- [Using Axios with React](#using-axios-with-react)
- [Code Examples](#code-examples)
- [Coming soon](#coming-soon)


## Resources
- [React Official Documentation](https://reactjs.org/): They have a good [tutorial](https://reactjs.org/docs/hello-world.html), [advanced guides](https://reactjs.org/docs/jsx-in-depth.html) and [API Reference (list of all methods)](https://reactjs.org/docs/react-api.html)
- [React Router Offical Documentation](https://reacttraining.com/react-router/web/guides/)
- **[MERN Boilerplate](https://github.com/mc100s/mern-hooks-boilerplate)**

## How to use React?

### With Codepen 
To use React, you can either play on Codepen with this [Hello World React example on Codepen](https://reactjs.org/redirect-to-codepen/hello-world).

### With CodeSanbox

If you want something very quick to use, very close to what you can have with VS Code, you can go on CodeSanbox.io: https://codesandbox.io/s/new

### With `create-react-app` 
Or you can create a React application with your terminal:

```sh
# To create a new React app
$ npx create-react-app my-app
$ cd my-app

# To start the React app
$ npm start # or yarn start
```

Then you have the following architecture:
- **`node_modules/`**
- **`public/`**: All the files here are accessible by the user
  - `index.html`: The HTML page displayed
- **`src/`**: All the React code
  - `App.css`
  - `App.js`
  - `App.test.js`
  - `index.css`
  - `index.js`: The main file
  - `logo.svg`
  - `serviceWorker.js`
- `.gitignore`
- `package.json`

## VS Code extensions for React

To have many useful shortcuts, you can install [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets).

```js
// Shortcut: imp→	
import moduleName from 'module'

// Shortcut: imn→	
import 'module'

// Shortcut: imd→	
import { destructuredModule } from 'module'

// Shortcut: exp→ (→ is TAB)
export default moduleName

// Shortcut: exd→
export { destructuredModule } from 'module'

// Shortcut: rfc→ (React Function Component)
import React from 'react'

export default function Filename() {
  return (
    <div>
      $1
    </div>
  )
}
```

## Import/Export

```js
// variables.js

// There is maximum 1 export default
export default 10

export const a = 1
export let b = 2
export function c () {
  return 3
}
```


```js
// playground.js

import x, { a, b, c } from "./variables.js";

console.log(x)   // => 10
console.log(a)   // => 1
console.log(b)   // => 2
console.log(c()) // => 3


import { a as apple, b as banana, c as carrot } from "./variables.js";

console.log(apple)    // => 1
console.log(banana)   // => 2
console.log(carrot()) // => 3
```

## [Hello React](https://reactjs.org/docs/hello-world.html)

The minimum code you need for React

```html
<!-- index.html -->
<html>
<head>
  <title>React App</title>
</head>
<body>
  <!-- The React content will be injected in this div -->
  <div id="root"></div>

  <!-- If you use create-react-app, you don't need to include any JS, it's done autmoatically -->
  <script src="index.js"></script>  
</body>
</html>
```

```js
// index.js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
```

Page rendered (Chrome inspector):
```html
<html>
<head>
  <title>React App</title>
</head>
<body>
  <div id="root"><h1>Hello, world!</h1></div>
</body>
</html>
```

## [JSX](https://reactjs.org/docs/introducing-jsx.html)

JSX is a syntax extension to JavaScript. 

```js
const element = <h1>Hello, world!</h1>
```

A JSX will be always wrap in 1 tag, opened and closed.

```js
// Syntax error, 2 children
const wrongElement = (
  <section>first section</section>
  <section>second section</section>
)

// No syntax error, everything is wrapped by "<div>"
const rightElement1 = (
  <div>
    <section>first section</section>
    <section>second section</section>
  </div>
)

// No syntax error, everything is wrapped by "<>", that is invisible in the DOM
const rightElement2 = (
  <>
    <section>first section</section>
    <section>second section</section>
  </>
)

// Syntax error, the tag is never closed
const wrongImage = <img src="...">

// No syntax error, the tag is self closing
const rightImage = <img src="..." />
```

To embedding JavaScript expressions in JSX, you need to use `{}`

```js
// Simple example with expression
const x = 6
const y = 7
const element1 = <div>Product: {x} * {y} = {x*y}</div>
// renders ====> <div>Product: 6 * 7 = 42</div>

// Simple example with expression
const element2 = <div>Random number: {Math.floor(100 * Math.random())}</div>
// renders ====> <div>Random number: 87</div>

// Simple example with a JavaScript expression in an attribute 
// You mustn't wrap {} by quotes
const picture = "https://media.giphy.com/media/cFdHXXm5GhJsc/giphy.gif"
const element3 = <img src={picture} />
// DON'T DO:     <img src="{picture}" />
// renders ====> <img src="https://media.giphy.com/media/cFdHXXm5GhJsc/giphy.gif" />

const name = 'Smith'
const gender = 'female'
const element4a = <div>Hi {gender === 'male' ? 'Mr' : 'Mrs'} {name}!</div>
const element4b = <div>Hi Mr{gender === 'female' && 's'} {name}!</div>
// both render => <div>Hi Mrs Smith!</div>

const numbers = [1,2,4,8,16]
const element5 = <div>Numbers: {numbers}</div>
// renders ====> <div>Numbers: 124816</div>

const element6 = <ul>{numbers.map((number,i) => <li key={i}>{number}</li>)}</ul>
// renders ====> <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>4</li>
//                 <li>8</li>
//                 <li>16</li>
//               </ul>
```


## [React Components and Props](https://reactjs.org/docs/components-and-props.html)

A detailed component API reference is available [here](https://reactjs.org/docs/react-component.html).

2 differents syntaxes to write a component:
- **Function Component**: Can only take props and renders its return value.
- **Class Component**: Can use props and state and renders the return value of the `render` method (old way when there were no hooks).

```js
// Function Component definition
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}

// Another Function Component definition
function App() {
  return (
    <div>
      {/* Component usage: it's the same for function and class components */}
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

```html
<!-- Content rendered (Chrome inspector) -->
<div id="root">
  <div> <!-- Rendered from <App /> -->
    <h1>Hello Alice</h1> <!-- Rendered from <Welcome1 name="Alice" /> -->
    <h1>Hello Bob</h1>   <!-- Rendered from <Welcome1 name="Bob" /> -->
  </div>
</div>
```

There is one props special: `props.children`, explained in the following example:

```js
function MyComponent(props) {
  return <div>{props.children}</div>
}

// In some other components
// ...

{/* It works */}
<MyComponent children="My value" />

{/* Recommanded syntax */}
<MyComponent>My value</MyComponent>
```

A more complex example is available [here](https://codepen.io/maxencebouret/pen/orRyxp). 

## [React State Hook](https://reactjs.org/docs/hooks-state.html)

A component can have values hooked, like in the following example.

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state hook named `count`, with a setter named `setCount`, initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* The state hook is displayed */}
      <p>You clicked {count} times</p>

      {/* The state hook is changed on click with `setCount` */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

[Try it on CodePen.](https://codepen.io/maxencebouret/pen/KjLeGg)


These are some rules about hooks:
- Declare a state hook like this: `const [myState, setMyState] = useState(myInitialValue)`
- Never change the state hook directly, always use the setter (`setMyState`)
- Only call hooks at the top level, don’t call hooks inside loops, conditions, or nested functions
- Only call hooks from React functions (components or custom hooks)

You have below a more complex example where the state hook is an object.

```js
function App(props) {
  const [state, setState] = useState({
    random: null,
    history: []
  })

  function handleClick() {
    let r = 1+Math.floor(100*Math.random()) // random value between 1 and 100
    // Set state values
    setState({
      random: r,
      history: [...state.history , r]
    })
  }

  return (
    <div>
      <button onClick={() => handleClick()}>New random value</button> <br/>
      
      {/* Get state values */}
      random: {state.random} <br />
      history: {state.history.map((x,i) => <li key={i}>{x}</li>)} <br />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

[Try it on CodePen](https://codepen.io/maxencebouret/pen/ydWEoO?editors=0010)

## React Props VS State

![Generic Component](https://user-images.githubusercontent.com/5306791/61312024-7d235280-a7ef-11e9-9445-279f8336c160.png)

A component takes props as a parameter (from the outside), has a state/hook internally and renders some HTML.

![image](https://user-images.githubusercontent.com/5306791/61312310-15b9d280-a7f0-11e9-9e3b-0c203605f518.png)

### Example with a fake Like button

![image](https://user-images.githubusercontent.com/5306791/61312527-7d701d80-a7f0-11e9-9cbd-227505d288f4.png)



## React Lifecycle

- **First render of the component (mount)**
  - Execute the code of the component and initialize the states hooks => DOM rendered
  - Execute the functions inside useEffect

- **Other renders of the same component (update)**
  - Execute the code of the component and reuse the states hooks => DOM rendered
  - Execute the cleanups functions of the useEffect
  - Execute the functions inside useEffect

- **Destruction of the component (unmount)**
  - Execute the cleanups functions of the useEffect


### Example


```js

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// index.js
function DisplayInfo(props) {
  console.log("    (1) DisplayInfo");
  useEffect(() => {
    console.log("    (2) DisplayInfo (useEffect)");
    return () => {
      console.log("    (3) DisplayInfo (useEffect cleanup)");
    };
  });
  return (
    <div>
      Hello {props.name}, your name as {props.name.length} characters!
    </div>
  );
}

function App(props) {
  console.log("(1) App");
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("(2) App (useEffect)");
    return () => {
      console.log("(3) App (useEffect cleanup)");
    };
  });
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      {/* When the input is changed, handleChange is triggered and set state.name to the input value */}
      <input
        type="text"
        value={name}
        onChange={event => handleChange(event)}
        placeholder="Type a name"
      />

      {name !== "" && <DisplayInfo name={name} />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

[Try it on CodeSandbox](https://codesandbox.io/s/react-lifecycle-example-rpslr) and check the console!


## [React and Events](https://reactjs.org/docs/handling-events.html)

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase
- With JSX you pass a function as the event handler

**Examples**

```js
function alertTheAnswer() {
  alert(42)
}

{/* These 3 buttons are the same and display 42 on click */}

<button onClick={() => alert(42)}>
  What is the answer to life, the universe and everything? 
</button>

<button onClick={() => { alert(42) }}>
  What is the answer to life, the universe and everything? 
</button>

<button onClick={alertTheAnswer}>
  What is the answer to life, the universe and everything? 
</button>
```


### [List of events](https://reactjs.org/docs/events.html)

Event Types | Event Names | Event Properties
-- | -- | --
Clipboard Events | `onCopy` `onCut` `onPaste` | `clipboardData`
Composition Events | `onCompositionEnd` `onCompositionStart` `onCompositionUpdate` | `data` 
Keyboard Events | `onKeyDown` `onKeyPress` `onKeyUp` | `altKey` `charCode` `ctrlKey` `getModifierState(key)` `key` `keyCode` `locale` `location` `metaKey` `repeat` `shiftKey` `which` 
Focus Events | `onFocus` `onBlur` | `relatedTarget` 
Form Events | `onChange` `onInput` `onInvalid` `onSubmit` | 
Mouse Events | `onClick` `onContextMenu` `onDoubleClick` `onDrag` `onDragEnd` `onDragEnter` `onDragExit` `onDragLeave` `onDragOver` `onDragStart` `onDrop` `onMouseDown` `onMouseEnter` `onMouseLeave` `onMouseMove` `onMouseOut` `onMouseOver` `onMouseUp` | `altKey` `button` `buttons` `clientX` `clientY` `ctrlKey` `getModifierState(key)` `metaKey` `pageX` `pageY` `relatedTarget` `screenX` `screenY` `shiftKey`
Selection Events | `onSelect` | 
Touch Events | `onTouchCancel` `onTouchEnd` `onTouchMove` `onTouchStart` | `altKey` `changedTouches` `ctrlKey` `getModifierState(key)` `metaKey` `shiftKey` `targetTouches` `touches` 
UI Events | `onScroll` | `detail` `view` 
Wheel Events | `onWheel` | `deltaMode` `deltaX` `deltaY` `deltaZ` 
Media Events | `onAbort` `onCanPlay` `onCanPlayThrough` `onDurationChange` `onEmptied` `onEncrypted` `onEnded` `onError` `onLoadedData` `onLoadedMetadata` `onLoadStart` `onPause` `onPlay` `onPlaying` `onProgress` `onRateChange` `onSeeked` `onSeeking` `onStalled` `onSuspend` `onTimeUpdate` `onVolumeChange` `onWaiting` | 
Image Events | `onLoad` `onError` | 
Animation Events | `onAnimationStart` `onAnimationEnd` `onAnimationIteration` | `animationName` `pseudoElement` `elapsedTime` 
Transition Events | `onTransitionEnd` | `propertyName` `pseudoElement` `elapsedTime` 
Other Events | `onToggle` | 



## [React and Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

```js
// Component that display a login or logout button based on props.isLoggedIn
function MyComponent(props) {
  function showButton() {
    if (props.isLoggedIn)
      return <LogoutButton />
    else 
      return <LoginButton />
  }

  let button
  if (props.isLoggedIn)
    button = <LogoutButton />
  else 
    button = <LoginButton />

  return (
    <div>
      {/********** Method 1: Variable **********/}
      {button}
      {/********** Method 2: Function **********/}
      {showButton()}
      {/********** Method 3: Ternary **********/}
      {props.isLoggedIn ? <LogoutButton /> : <LoginButton />}
      {/********** Method 4: Inline If with Logical && Operator **********/}
      {props.isLoggedIn && <LogoutButton />}        
      {!props.isLoggedIn && <LoginButton />}        
    </div>
  )
}
```


## [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

```js
const students = ['Alice', 'Bob', 'Charly', 'David']

// Component that display a list of students
function MyComponent (props) {
  function showList() {
    let list = []
    for (let i = 0; i < students.length; i++) {
      list.push(<li key={i}>{students[i]}</li>)
    }
    return list
  }

  let list = []
  for (let i = 0; i < students.length; i++) {
    list.push(<li key={i}>{students[i]}</li>)
  }

  return (
    <ul>
      {/********** Method 1: Variable **********/}
      {list}
      {/********** Method 2: Function **********/}
      {showList()}
      {/********** Method 3: Map **********/}
      {students.map((student,i) => <li key={i}>{student}</li>)}
    </ul>
  )
}
```



## [React Forms](https://reactjs.org/docs/forms.html)

When we use forms in React, we generally follow this methodology.

First, for each items on the form (`<input />`, `<textarea />` and `<select></select>`), we set a property `value`(generally with a state) and a property `onChange`. 

**Example**:

```js
// Init with 3 state values
const [state, setState] = useState({
  firstName: "",
  occupation: "",
  debt: false,
})
```

```js
// Component method
function handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  });
}
```

```js
// Some code in the render

{/* This input display "state.firstname" and update this value on change  */}
<input type="text" name="firstname" value={state.firstname} onChange={handleChange} /> 

{/* This textarea display "state.occupation" and update this value on change  */}
<textarea name="occupation" value={state.occupation} onChange={handleChange} /> 

{/* This select display "state.debt" and update this value on change  */}
<select name="debt" value={state.debt} onChange={handleChange}>
  <option value={true}>Yes</option>
  <option value={false}>No</option>
</select>
```

Then, we need to listen at the form submission, with `onSubmit`.


**Example**:
```js
function handleSubmit = (event) => {
  event.preventDefault() // To avoid going to the action page of the form

  // The code to be executed when the user submit the form (click on a button)
}
```

```js
// Some code in the render

<form onSubmit={handleSubmit}>
  {/* ... */}
</form>
```

**Full example of a component that display a list of characters and let the user add some.** Be careful, it's a shared API ;)

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App(props) {
  const [state, setState] = useState({
    characters: [],
    name: "", // Default value for the form
    occupation: "", // Default value for the form
    debt: false, // Default value for the form
    weapon: "" // Default value for the form
  });
  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value // the value of the input
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const character = {
      name: state.name,
      occupation: state.occupation,
      debt: state.debt,
      weapon: state.weapon
    };
    axios
      .post("https://ih-crud-api.herokuapp.com/characters", character)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
  function handleClick() {
    setState({ ...state, characters: [] });
    axios.get("https://ih-crud-api.herokuapp.com/characters").then(response => {
      setState({
        ...state,
        characters: response.data
      });
    });
  }
  return (
    <div>
      <h2>Add a character</h2>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        Occupation:
        <textarea
          name="occupation"
          value={state.occupation}
          onChange={handleChange}
        />
        <br />
        Debt:
        <select name="debt" value={state.debt} onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        Weapon:
        <input
          type="text"
          name="weapon"
          value={state.weapon}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h2>Display all characters</h2>
      <button onClick={handleClick}>Display the characters from the API</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Debt</th>
            <th>Weapon</th>
          </tr>
        </thead>
        <tbody>
          {state.characters.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.occupation}</td>
              <td>{c.debt ? "Yes" : "No"}</td>
              <td>{c.weapon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

[Try it on CodeSandbox](https://codesandbox.io/s/react-lifecycle-example-9t8pr)

## [React Router](https://reacttraining.com/react-router/web/guides/)

### Installation
```
$ npm install react-router-dom
```

### Import

```javascript
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
```

### React Router Components

<table>
  <tr>
    <th> Component </th>
    <th> Description </th>
    <th width="30%"> Main Props </td>
  </tr>
  <tr>
    <td><code>&lt;BrowserRouter&gt;</code></td>
    <td>Router Component that should wrap your application</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Route&gt;</code></td>
    <td>When the url matches its props <code>path</code>, it renders its content</td>
    <td>
      <ul>
        <li><code>path</code>: string</li>
        <li><code>component</code>: Component</li>
        <li><code>render</code>: func</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Switch&gt;</code></td>
    <td>Group <code>&lt;Route&gt;</code> together and display maximum 1</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Link&gt;</code></td>
    <td>Replace the <code>&lt;a&gt;</code> tag of HTML in React Router</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
        <li><code>to</code>: object</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;NavLink&gt;</code></td>
    <td>A special version of the <code>&lt;Link&gt;</code> that will add styling attributes to the rendered element when it matches the current URL</td>
    <td>
      <ul>
        <li><code>activeClassName</code>: string</li>
        <li><code>activeStyle</code>: object</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Redirect&gt;</code></td>
    <td>Will navigate to a new location</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
      </ul>
    </td>
  </tr>
</table>


### `match`

A component displayed with `<Route>` has access to `match` (as `props.match` or as `({ match }) => ()`) and it is an object containing the following properties:

Property | Type | Description
-- | -- | --
**`params`**| object | Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
`isExact`| bool | `true` if the entire URL was matched (no trailing characters)
`path`| string | The path pattern used to match. Useful for building nested `<Route>`s
`url`| string | The matched portion of the URL. Useful for building nested `<Link>`s


### The Minimum Website with `react-router-dom`

First, we have to enable the routing in the React application with `<BrowserRouter>`
```js
// src/index.js

// Many imports...
// We import "BrowserRouter" and name it "Router"
import { BrowserRouter as Router } from 'react-router-dom';

// We need to wrap <App /> by <Router> to use routing inside it
ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
```

Second, we have to set some routes, with `<Route />` (and `<Switch>`), generally in `App.js` (and sometimes in extra files).
```js
// src/components/App.js
import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import MyNavbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <MyNavbar />

      {/* With <Switch>, maximum 1 route is executed */}
      {/* The Home component will be displayed if the URL is exactly "/" */}
      {/* The About component will be displayed if the URL starts with "/about" */}
      {/* "404" will be rendered in any case (if the previous routes failed) */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
```

Third, everytime we want to go to another page/URL, we never use `<a>` but `<Link>` or `<NavLink>`

```js
// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        {/* Add the class "bold" if the URL match the path (if nothing is precised, the default would be "active") */}
        <li><NavLink exact to="/" activeClassName="bold">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="bold">About</NavLink></li>
      </ul>
    </nav>
  )
}
```

```css
/* src/index.css */
.bold {
  font-weight: bold;
}
```

### How to create a route with some variable in the URL

Let's say we want to be able to extract the end of the following URL:
- http://localhost:3000/country/France
- http://localhost:3000/country/Germany

First, we have to create a `<Route>` with some pattern. Example:

```js
// Any component file, for example: src/components/App.js
<Route path="/country/:countryName" component={CountryDetail}/>
```

Then, we can create the component. Example: 

```js
// src/components/CountryDetail.js
import React, { Component } from 'react'

export default function CountryDetail(props) {
  return (
    <div>
      {/* We can access the value with: props.match.params.countryName */}
      Country: {props.match.params.countryName}
    </div>
  )
}
```

Finally, we can have some link to this route. Example:
```js
// Any component file

// In render
let countries = ['France','Germany','Spain','Netherlands']
return (
  <div>
    {countries.map(c => <Link key={c} to={"/country/"+c}>{c}</Link>)}
  </div>
)
```


## Using Axios with React

### Installation 
```
$ npm install axios
```

```javascript
import axios from 'axios'
```

### Example of GET request
```javascript 
// Display all users from the API
function PersonList(props) {
  const [persons, setPersons] = useState(null) // init to null
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        setState({ persons });
      })
  })

  // If state.persons is null, it means we don't have the data from the API yet
  if (!persons) {
    return <div>Loading...</div>
  }

  return (
    <ul>
      { persons.map(person => <li>{person.name}</li>) }
    </ul>
  )
}
```

### Example of POST request

```javascript
// Add a person thanks to the API
function AddPerson(props) {
  const [state, setState] = useState({ name: '' })

  funciton handleChange(event) {
    setState({ 
      ...state,
      [event.target.name]: event.target.value 
    });
  }

  function handleSubmit(event) => {
    event.preventDefault();
    const user = {
      name: state.name
    };
    axios.post(`https://jsonplaceholder.typicode.com/users`, user)
      .then(res => {
        console.log(res.data)
        // Redirect to the Home page
        props.history.push('/')
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
```

### Base instance

```javascript
// src/api.js (in the client folder)
import axios from 'axios';

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
  withCredentials: true
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
  }
  throw err
}

export default {
  service: service,

  // Promise to return all users
  getUsers() {
    return service
      .get('/users')
      .then(res => res.data)
      .catch(errHandler)
  },

  // Promise to return 1 user
  getUser(id) {
    return service
      .get('/users/'+id)
      .then(res => res.data)
      .catch(errHandler)
  },

  // Promise to create a user
  addUser(user) {
    return service
      .post('/users', user)
      .then(res => res.data)
      .catch(errHandler)
  },
}
```

```javascript
// src/index.js
import api from './api';

// ...
api.getUser(1)
  .then(user => {
    console.log(user);
  })
// ...
```

Some hints when you use an API in a React website:
- If you want to display some data from an API, generally 

## Code Examples
- [React Data Binding (with components A, B, C, D)](https://codesandbox.io/s/p7y3jk8pq0)
- [Lab corrections and examples](https://github.com/ironhack-berlin-2018-october-ft)
  - [React Many Examples](https://github.com/ironhack-berlin-2018-october-ft/react-many-examples)
  - [Bulma Components](https://github.com/ironhack-berlin-2018-october-ft/lab-bulma-components)
  - [IronContacts](https://github.com/ironhack-berlin-2018-october-ft/lab-react-ironcontacts)
  - [Iron Nutrition](https://github.com/ironhack-berlin-2018-october-ft/lab-react-ironnutrition)
  - [Thinking in React](https://github.com/ironhack-berlin-2018-october-ft/thinking-in-react)
  - [Wiki Countries](https://github.com/ironhack-berlin-2018-october-ft/lab-wiki-countries)
  - [IronBeers](https://github.com/ironhack-berlin-2018-october-ft/lab-react-ironbeers)

## Extra done in class
- Inline styling
- Reactstrap (React + Bootstrap)
- Mapbox and React
- React and SCSS


