# Nodejs Example

A very basic nodejs template that can be used for testing, interviews etc.


## Setup

1. Install nodejs (should work with most versions)
1. run npm install
1. copy the .env-sample file to .env and change the values as appropriate
1. run npm start


## What it does

Starts an HTTP server on the configured port with option basic authorization.


## Requests

The following requests are available:


### /

This route is always unauthenticated so that it can be used as a health check. It just returns the text 'ok' and a 200 code


### /time

This route is optionally authenticated. If the correct authentication is given it returns the current date in the following
format.

```javascript
{
  "iso":"2022-03-30T09:40:58.036Z",
  "timestamp":1648633258036
}
```