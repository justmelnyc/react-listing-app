# Auto1 Car Listing SPA

## Note:

- This project was bootstrapped with Create React App
- Please run the mockServer before testing it.
- Also enable CORS in mockserver.

### Features of the project

- Best Practices are been followed
- Code Quality is maintained by `TSLint` and `Prettier`
- Static type checking enabled using `TypeScript`
- Performance Optimizations are made eg) using `functional components` majorly
- Dynamic imports acheived using `React.lazy`
- Clear code organization and project structure
- Test coverage `80%` achieved
- Basic setup using `.env` variables are implemented
- Error states and Loading states are handled

### Further enhancements

- Setup `Docker`
- Setup `storybook`
- If application scales, splitting few functionality as `HOC` or `render props`
- Improve performance using libraries like `reselect` memorize. Though not required at this point of time.
- Use `PureComponent` and `React.memo` whereever applicable
- Better test cases covering all edge cases and async actions
- Better usage of TypeScript. Add typescript to test files as well

### Scripts

Before running any script, please install npm dependencies with either `npm install` or `yarn`.

##### `npm run dev-start`

Runs the server at `http://localhost:3000` in development mode with Redux devtools enabled.

##### `npm start`

Runs the server at `http://localhost:8080` in production mode.

##### `npm run build`

Runs build and generates production-optimized static files.

##### `npm run coverage`

Generates Test Coverage report

##### `npm run test`

Runs the test cases in watch mode.

##### `npm run lint`

Runs tslint.

##### `npm run format`

Runs Prettier and auto formats the files.
