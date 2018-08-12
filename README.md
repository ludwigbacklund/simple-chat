# Simple chat

A simple chat client & WebSocket server for local chatting. Open up the client in different browser windows to chat between multiple participants.

## Requirements

`yarn` or `npm` (tested with `yarn` v.1.9.4)

`Node` (tested with v.10.8.0)

A browser (tested with `Google Chrome` v.67.0.3396.87)

## Quick start

Run `yarn` or `npm install` to install all project dependencies

Run `yarn client` or `npm client` to start the development server for the chat client at `localhost:3000`

Run `yarn server` or `npm server` to start the WebSocket server at `localhost:3001`

You can also run `yarn build` to build the app for production in `./build` and then host it locally with something like [serve](https://www.npmjs.com/package/serve)

## Configuration

To make the application work across all devices on your local network and not just one, change the `IP` variable in `./src/utils/initSocket.js` to the local IP address of whatever device is running the WebSocket server, e.g `192.168.1.48`.
