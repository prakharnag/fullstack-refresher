Class Component
Functional Component

// Below is called a react fragment
<>
<>

Props short for properties -> are a way to pass data from one component to another component. Typically it done from a parent component to a child
component.

For styling -> inline CSS takes priority over the external css


State - it is the react component brain

State is a built-in React object that is used to contain data or information about the component. A component's state can change over time;

const [variableName, setVariableName] = useState(in this we can provide default value of the state);

In react hooks starts with "use" like = useState, useEffect
hooks are special functions that lets us tap into react features like state management

useState - for managing state
useEffect - for handling side effects like data fetching.
useContext - for sharing data across components
useRef - for accessing DOM elements directly
useCallback - for optimizing callback functions

## useEffect runs twice when the component mounts, this happens
### because the strict mode is on and in developement. When the 
app is deployed in production then this does not occur. If we dont 
want this to happen in development, then we can remove the <StrictMode> 
from the main.jsx

To run the useEffect only when something changes we can use dependency array (deps: []), which we pass as a second parameter. 

Whatever variable we pass in this, react will check if it has changed, if yes then only it will run useEffect otherwise not.

We can also pass a empty deps array, to run useEffect only when a component is mounted.

Event Bubbling 

Example:
 <div className= 'card' onClick = {() => setCount((prevState) => prevState + 1)}>
      <h2> { title }<br/> { count }</h2>
      <button onClick = {() => setHasLiked(!hasLiked)}>{hasLiked ? 'Liked' : 'Like'}</button>
    </div>

Event bubbling is a type of event propagation where the event first triggers on the deepest target element and then propagtes to the top element over it, until 
it reaches the parent element.
To stop event bubbling or propagation we can use:
e.stopPropagation() to prevent button clicks from triggering the div's onClick

Conditional Rendering
We can conditionally render components in react using ternary operator or logical && operator.



