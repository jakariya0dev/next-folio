---
title: "React JS Components and It’s Uses"
date: "03-23-2025"
author: "Jakariya H."
readingTime: "2 min"
category: "programming"
tags: ["react.js", "frontend", "javascript", "react props", "web development"]
description: "A component in React is a reusable, independent piece of UI that can be used to build complex interfaces by composing multiple components together."
thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IPXtah7cFMnlcO3S5LYrUg.png"
mediumLink: "https://jakariya.medium.com/react-js-components-and-its-uses-09f207367873"
---

## What is a Component in React?

A component in React is a reusable, independent piece of UI that can be used to build complex interfaces by composing multiple components together.

### As LEGO Blocks 🧱

Think of React components as LEGO pieces. Each component is a small, independent building block that can be combined to create a larger structure (the full web app).
For example':'

- A Button component 🟦
- A Navbar component 🟨
- A Card component 🟥

Together, they form a **Dashboard Page!**

#### As JavaScript Functions 🛠

A component is just a JavaScript function that returns JSX (HTML-like syntax in JavaScript).

**For Example**

```javascript
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

Just like functions in JavaScript:

- They take input (props)
- They return output (JSX)
- They can be reused anywhere

#### As Human Body Parts 🦾

Imagine a React component-based website as a human body:

- Hand Component ✋ = Buttons and interactive elements
- Head Component 🧠 = Contains the title and metadata
- Leg Component 🦿 = Navigation menu
Each part works independently but together makes the whole body function.

#### As UI Layers (Separation of Concerns) 🎭

React components help separate concerns like:

- Presentation Components → UI-only components (e.g., Button, Card)
- Container Components → Handle logic, fetch data, and pass it to child components
- Higher-Order Components (HOC) → Components that wrap other components to add functionality

#### As Function + HTML Hybrid 🔄

Unlike traditional web development where HTML and JavaScript are separate, React components **merge both together:**

```javascript
function Welcome() {
  return <h1>Welcome to My Website</h1>;
}
```

#### There are two main types of React components:

1. Functional Components (Recommended)
2. Class Components (Older method)

### 1. Functional Components (Modern & Recommended)

Functional components are simple JavaScript functions that return JSX (UI elements).

#### Example of a Functional Component

```javascript
function Welcome() {
  return <h1>Hello, Welcome to React!</h1>;
}

export default Welcome;
```

#### 👉 How to use it in another component (like App.js)?

```javascript
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

### 2. Class Components (Older Method)

Class components were used before functional components with hooks were introduced. They use the render() method to return JSX.

#### Example of a Class Component

```javascript
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, Welcome to React!</h1>;
  }
}

export default Welcome;
```

#### 👉 Usage in another component is the same:

```javascript
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```

#### Why Use Components?

✅ Reusability → Write once, use multiple times
✅ Maintainability → Breaks down UI into small pieces
✅ Performance → Renders only the necessary parts
✅ Scalability → Easy to extend and modify

React components are the **heart** of a React application. They allow developers to break down UI into small, manageable parts, making code more readable, reusable, and scalable.