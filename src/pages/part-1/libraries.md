import Header from './Header.md';
<Header />

### Libraries

I've tried to limit the number of libraries used in this workshop to lower the learning curve as much as possible. That said, there are several key libraries in use that I would like to review for your familiarity.

#### React

React is a JavaScript library for building web applications. Its component-based structure makes it a great fit for building component libraries.

#### Styled-Components

Styled-Components is a CSS-in-JS library that allows us to scope our styles to our components. This helps ensure:

* styles are properly scoped to their component
* unanticipated style collisions are minimized
* styles can be predictably extended

#### React Styleguidist

React Styleguidist is a really great tool for documenting React components. It has great defaults, but is also highly configurable. It uses react-docgen under the hood to parse component attributes.

#### Babel

Babel is a JavaScript compiler that allows developers to write modern JS and ensure that it works across all browsers. In particular, we will be using Babel to build our library before it is published to npm.

#### npm & Yarn

Yarn and npm are package managers for JavaScript modules. They manage all the dependencies for our library. I'll be using Yarn for local development, and we'll be publishing our libraries to npm (if you want).
