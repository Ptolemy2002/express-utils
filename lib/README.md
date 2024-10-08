# Express Utils
This library contains miscellaneous utilities for Express development.

The functions are not exported as default, so you can import them in one of the following ways:
```
// ES6
import { functionName } from '@ptolemy2002/express-utils';
// CommonJS
const { functionName } = require('@ptolemy2002/express-utils');
```

## Middleware
The following middleware functions are available in the library:

### asyncErrorHandler
#### Description
This is a wrapper for asynchronous express functions that allows catching asynchronous errors and handling them as if they were synchronous.

#### Parameters
- `fn` (Function): The asynchronous function to be wrapped.

#### Returns
`Function` - A function that can be used as an express route handler or middleware.

### errorOrNext
#### Description
This function is middleware that allows very basic error handling. If an error is passed to it, it will respond with the specified status code and message. If no error is passed, it will call the next middleware.

#### Parameters
- `args` (Object): An object containing the following properties:
  - `status` (Number): The status code to be sent in the response. Defaults to 500.
  - `message` (String): The message to be sent in the response. Defaults to 'Internal Server Error'.

#### Returns
`Function` - A function that can be used as an express route handler or middleware.

## Peer Dependencies
- `express^4.21.0`

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run example-uninstall` - Uninstalls all dependencies for the example app
- `npm run example-install` - Installs all dependencies for the example app
- `npm run example-reinstall` - Uninstalls and then Reinstalls all dependencies for the example app
- `npm run example-start` - Starts the example app after building the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump
Hyper Icon