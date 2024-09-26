## RSC React Server Components

RSC is a new way to build React applications. It allows you to write your components in a way that is familiar to you, but run them in a Node.js environment. This means that you can build your entire application in React, without having to worry about the limitations of the browser.

- Server Components are written in React and run on the server.
- Server Components can fetch data and run server-side logic.

- Client Components are written in React and run in the browser.
- Client Components can't fetch data or run server-side logic.
- Hooks can be used in client componets.

## Routing

- Next.js has a file-system based router built on the `file-based routing` convention.
- The `pages` directory is special in Next.js. Each `.js` file inside the `pages` directory is treated as a route.

Routing Conventions
- all rouutes must be place in the app folder
- every file that corresponds to a route must be named as pages.js or pages.tsx

// Nested Routes

- Nested routes are supported in Next.js by creating a folder inside the `pages` directory.
- The folder name is used as part of the route.

// Dynamic Routes

- Dynamic routes are supported in Next.js by creating a file inside the `pages` directory with square brackets `[]` in the filename.
- The square brackets `[]` indicate that the route is dynamic.

// Nested Dynamic Routes

- Nested dynamic routes are supported in Next.js by creating a folder inside the `pages` directory with square brackets `[]` in the folder name.
- The square brackets `[]` indicate that the route is dynamic.

// Catch-All Segments
