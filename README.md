# ReactNativeToDoList

A simple ToDo list created using ReactNative.

## Overview

The code provides a simple ToDo list to show a list of ToDo items, Add a new ToDo item and then either update or delete the item.

The REST server [ToDoListServer](https://github.com/mySimonID/TodoListServer/blob/master/README.md) is used to manage the interactions with the mongoDB which holds the ToDo items.

## Using

This project assumes that the [ToDoListServer](https://github.com/mySimonID/TodoListServer/blob/master/README.md) has been set-up on a Docker instance.

The file dbServer.js in the src/db folder has a line: const baseURL = 'http://192.168.1.15:49160/';

This refers to the instance of Docker that has been set-up using a local IP address on port 49160. You will have to specify a different IP address and/or port number depending on where you deploy the server.

The code has only, so far, been testing on an Android emulator to test.

Read this article [Setting up the development environment](https://reactnative.dev/docs/environment-setup#docsNav) for more info.

Once the enviroment has been set-up, then use the following command to run in an emulator.

- react-native run-android

## Future enhancements
- [ ] Implement authentication
- [ ] Implement auto-synch

## License
[MIT](https://choosealicense.com/licenses/mit/)


