---
title: "Props in React.js and How to Use It"
date: "03-23-2025"
author: "Jakariya H."
readingTime: "3 min"
category: "programming"
tags: ["react.js", "frontend", "javascript", "react props", "web development"]
description: "Props (short for Properties) in React are used to pass data from a parent component to a child component. Props are read-only and help make components reusable and dynamic."
thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o9A-WOZLFSTQgoy3JuRrRQ.png"
mediumLink: "https://jakariya.medium.com/props-in-react-js-and-how-to-use-it-2e91f1ace849"
---



## Props in React

Props (short for Properties) in React are used to pass data from a parent component to a child component. Props are read-only and help make components reusable and dynamic.

## Different Ways to Use Props in React

### 1. Passing Props to Functional Components

Props are passed as attributes in the child component and accessed using props in the function.

#### Example

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

#### 👉 Usage in Parent Component (App.js)

```javascript
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Hadi" />
      <Greeting name="John" />
    </div>
  );
}

export default App;
```

#### 🛠 Output

```bash
Hello, Hadi!
Hello, John!
```

### 2. Using Destructuring in Functional Components

Instead of `props.name`, you can use destructuring to make the code cleaner.

#### Example

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

👉 Usage in App.js remains the same.

### 3. Passing Multiple Props

You can pass multiple props as attributes.

#### Example

```javascript
function UserInfo({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

export default UserInfo;
```

#### 👉 Usage in App.js

```javascript
import UserInfo from "./UserInfo";

function App() {
  return (
    <div>
      <UserInfo name="Hadi" age={30} />
      <UserInfo name="John" age={25} />
    </div>
  );
}

export default App;
```

#### 🛠 Output

```bash
Name: Hadi, Age: 30
Name: John, Age: 25
```

### 4. Passing Props to Class Components

For class components, props are accessed using this.props.

#### Example

```javascript
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

👉 Usage in App.js remains the same.

### 5. Default Props (Providing Default Values)

If a prop is not passed, you can set default values using defaultProps.

#### Example

```javascript
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

**OR Using `defaultProps`:**

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest",
};

export default Greeting;
```

👉 *If used without a prop (`<Greeting />`), it will default to "Guest".*

### 6. Passing Objects as Props

You can pass objects instead of multiple individual props.

#### Example

```javascript
function UserInfo({ user }) {
  return (
    <p>
      Name: {user.name}, Age: {user.age}
    </p>
  );
}

export default UserInfo;
```

#### 👉 Usage in App.js

```javascript
import UserInfo from "./UserInfo";

function App() {
  const user = { name: "Hadi", age: 30 };
  
  return <UserInfo user={user} />;
}

export default App;
```

### 7. Passing Functions as Props (Callback Functions)

Props can be used to send functions from parent to child components.

#### Example

```javascript
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
```

#### 👉 Usage in `App.js`

```javascript
import Button from "./Button";

function App() {
  const showMessage = () => {
    alert("Button Clicked!");
  };
 return <Button handleClick={showMessage} />;
}

export default App;
```

### 8. Passing JSX as Props

You can pass JSX elements as props.

#### Example

```javascript
function Card({ children }) {
  return <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>;
}

export default Card;
```

#### 👉 Usage in `App.js`

```javascript
import Card from "./Card";

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is a description.</p>
    </Card>
  );
}

export default App;
```

Props make React components reusable and dynamic.
