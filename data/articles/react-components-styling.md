---
title: "Different Ways to Styling React Component"
date: "03-25-2025"
author: "Jakariya H."
readingTime: "2 min"
category: "programming"
tags: ["react.js", "frontend", "javascript", "react props", "web development"]
description: "In React, you can style components in several ways, depending on our preference and project requirements. Here are the most common methods"
thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MiHnHNWxnLWrX_HlPLZqcA.png"
mediumLink: "https://jakariya.medium.com/different-ways-to-styling-react-component-0d8bd2795858"
---

In React, you can style components in several ways, depending on our preference and project requirements. Here are the most common methods:

## 1. CSS Stylesheets (External CSS)

Create a separate .css file and import it into your component.
#### Example:

```CSS
/* styles.css */

.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
```

```javascript
import "./styles.css";

function Button() {
  return <button className="button">Click Me</button>;
}
export default Button;
```

## 2. Inline Styles

Use the style attribute with a JavaScript object.
#### Example:

```javascript
function Button() {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Click Me</button>;
}
export default Button;
```

## 3. CSS Modules

Scoped CSS styles using .module.css files to avoid class name conflicts.
#### Example:

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
```

```javascript
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
export default Button;
```

## 4. Styled Components (CSS-in-JS)

Uses the styled-components library for styling.
#### Example:

```javascript
npm install styled-components
```

```javascript
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

function App() {
  return <Button>Click Me</Button>;
}
export default App;
```

## 5. Tailwind CSS

Utility-first CSS framework for quick styling.
#### Example:

```javascript
function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>;
}
export default Button;
```

## 6. SASS/SCSS

Use pre-processors like SASS or SCSS for better styling structure.
#### Example:

```javascript
/* styles.scss */
$primary-color: blue;

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
```

```javascript
import "./styles.scss";

function Button() {
  return <button className="button">Click Me</button>;
}
export default Button;
```

## 7. CSS-in-JS with Emotion

Similar to styled-components but with Emotion library.
#### Example:

`npm install @emotion/react @emotion/styled`

```javascript
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

function Button() {
  return <button css={buttonStyle}>Click Me</button>;
}
export default Button;
```

## 8. Vanilla Extract (TypeScript-based CSS-in-JS)

A modern approach to CSS-in-JS with TypeScript.
#### Example:

```javascript
import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  border: "none",
  cursor: "pointer",
});
```

```javascript
import { button } from "./styles.css";

function Button() {
  return <button className={button}>Click Me</button>;
}
export default Button;
```

Each method has its advantages depending on the project size, maintainability, and performance considerations.