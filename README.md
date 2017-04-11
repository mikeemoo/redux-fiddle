Redux-fiddle is just some experiments based around sharing data between a react/redux frontend and a socket server. For this I'm using socket.io and express on the server.

Redux actions can be flagged as remote actions which means they're automatically sent up to the socket server when dispatched. The server can respond with actions, which are automatically dispatched to the bus and interpreted just like a local redux action.

# Requirements

* Node
* Redis (easily removed)

# Running redux-fiddle

* ```npm install```
* ```npm run build```
