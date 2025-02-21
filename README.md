# ReactTS Component Library
React component library for React applications using TypeScript and Vite

## Description
This component library is can be used with React applications that use TypeScript.

## Installation
To install, clone the repo to your project and run `npm install`

Compoonents are created in /src/components

Each component requires an index.ts file which exports the component:
```
  export * from './<Component Name>
```

A main index.ts is also required to export all components:
```
  export * from './<Component Name 1>
  export * from './<Component Name 2>
  .
  .
  .
  .
  .
  
```

## Link library to app
In `react-component-lib` run:
  ```
    npm run build
    npm link
  ```

Head to your application directory. Run:
  ```
    npm link <library name>
    npm link react-component-lib
  ```

Run npm run dev to see the component in the app
  ```
    npm run dev
  ```

