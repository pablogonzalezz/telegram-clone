# Telegram Clone
![](telegram-clone.gif)

This project was generated using Electron + Angular frameworks.


## Development server
```Shell
# Install all dependencies
npm install

# Run development server
npm run dev
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contribution
If you want to contribute to this project, see the [CONTRIBUTION.md](CONTRIBUTION.md) file.

### Hacktoberfest 2021
Want to join [Hacktoberfest 2021](https://hacktoberfest.digitalocean.com/) and have your PR approved on this repo? It's simple!
* Go to [conversations.json](src/assets/conversations.json) file
* Add a conversation with your name and photo following the format below
```JSON
 {
  "id":2,
  "name": "John Doe",
  "status": "Online",
  "image": "assets/default-user-image.png",
  "messages": [
      {
          "sender": "sender", "time": "14:27", "message": "Hi, i am john doe! :)"
      }
  ]
}
```
* And that's it 😁 Your message should appear in the app messages.
