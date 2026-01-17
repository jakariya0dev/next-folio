---
title: "Different Ways to Calling API in JavaScript"
date: "03-23-2025"
author: "Jakariya H."
readingTime: "3 min"
category: "programming"
tags: ["ajax", "frontend", "javascript", "api call", "web development", "axios"]
description: "In JavaScript, there are multiple ways to call an API. Below are the most common approaches, along with examples and a comparison of which is better:"
thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pU5RgDelBROkI1gEP48lzg.png"
mediumLink: "https://jakariya.medium.com/different-ways-to-calling-api-in-javascript-5ae77129b0a0"
---

In JavaScript, there are multiple ways to call an API. Below are the most common approaches, along with examples and a comparison of which is better:


## 1. Using XMLHttpRequest (Old Method)

The `XMLHttpRequest (XHR)` API is one of the earliest ways to make HTTP requests in JavaScript. It requires more code and is not as modern as other approaches.

**Example:**

```javascript
const makeRequest = (method, url, data) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data))
        }

        xhr.onerror = () => {
            console.log('error is here');
        }

        xhr.send(JSON.stringify(data));

}

// Get Request
getData('GET', 'url');

// Post Request
const sendData = () => {
    makeRequest('POST', 'url', { JS Object });
}

// Update Request
const updateData = () => {
    makeRequest('PUT', 'url', { JS Object }});
}

// Partialy update
const updateSingleData = () => {
    makeRequest('PATCH', 'url', { JS Object });
}

// Delete Request
const deleteData = () => {
    makeRequest('DELETE', 'url');
}

deleteData();
```

🔴 **Drawbacks:**

- Verbose and complex.
- Hard to manage and debug.
- Requires manual event handling.

## 2. Using fetch API (Modern Approach)

The fetch API is the modern way to make HTTP requests. It returns a Promise and is much simpler than `XMLHttpRequest`.

**Example:**

```javascript
// GET Request
fetch("url")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// POST Request
fetch("url", 
    {
      method: "PATCH",
      body: JSON.stringify({ JS: 'Obj'}),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

✅ **Advantages:**

- Simpler and more readable.
- Supports promises and can be used with async/await.
- More flexible for handling different types of requests.

## 3. Using fetch with async/await (Better Readability)

Using `async/await` with fetch makes the code even more readable and easier to handle.

**Example:**

```javascript
async function fetchData() {
    try {
        let response = await fetch("url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
```

✅ **Advantages:**

- Cleaner and easier to read.
- More synchronous-like structure.
- Better error handling with `try...catch`.

## 4. Using Axios (Popular Library)

Axios is a popular third-party library that simplifies HTTP requests.

**Installation:**
`npm install axios`
**Example:**

```javascript
const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error));
```


✅ **Advantages:**
- Automatic JSON parsing.
- Better error handling than fetch.
- Supports request/response interceptors.
- Works in both browser and Node.js.

## 5. Using jQuery.ajax (Old but still used)

If you’re using jQuery, you can use .ajax() to make API calls.

**Example:**

```javascript
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.error("Error:", error);
    }
});
```

🔴 **Drawbacks:**

- Requires jQuery, which is unnecessary for modern projects.
- Larger file size compared to fetch or Axios.

## 6. Using GraphQL Queries

If the API supports GraphQL, you can fetch specific data using a GraphQL query.

**Example:**

```javascript
const query = `
  query {
    post(id: 1) {
      title
      body
    }
  }
`;

fetch("https://graphqlplaceholder.typicode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

✅ **Advantages:**

- Fetches only required data, reducing payload size.
- Efficient for complex queries.

## 7. Using WebSockets (For Real-time Data)

If you need real-time updates, WebSockets are a better alternative.

**Example:**

```javascript
const socket = new WebSocket("wss://example.com/socket");

socket.onopen = function () {
    console.log("Connected to WebSocket");
    socket.send("Hello Server!");
};

socket.onmessage = function (event) {
    console.log("Received:", event.data);
};
```

✅ **Advantages:**

- Ideal for real-time applications (e.g., chat apps, stock price updates).
- Faster than repeated API calls.
  
🔥 **Which One is the Best?**
MethodProsConsBest Use CaseXMLHttpRequestWorks in all browsersComplex and outdatedAvoid using itfetchSimple, built-inNeeds manual error handlingBest for modern appsfetch + async/awaitClean syntax, easy to readStill needs error handlingRecommended for most appsAxiosAutomatic JSON parsing, better error handlingRequires installationBest for complex appsjQuery.ajaxWorks with jQueryLarge file size, not modernAvoid unless using jQueryGraphQLFetches only required dataAPI must support GraphQLBest for large-scale appsWebSocketsReal-time updatesMore complex setupBest for real-time apps

**Final Recommendation:**

- For simple API calls: Use fetch with async/await.
- For better error handling: Use Axios.
- For real-time apps: Use WebSockets.
- For efficient data fetching: Use GraphQL.

🚀 If you’re working on a modern project, fetch or Axios is the best choice!