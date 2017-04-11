Redux-fiddle is just some experienced around sharing data between the react/redux frontend and a socket server. For this I'm using socket.io

Redux actions can be flagged as remote actions which means they're automatically sent up to the socket server. Remote actions from the socket server are dispatched into the bus just like local redux actions.

# Requirements

Node

# Running redux-fiddle

* ```npm install```
* ```npm run build```
