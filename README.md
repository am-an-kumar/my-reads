# My Reads

## Table of Contents

- [Instructions](#instructions) - [Demo](#demo) - [Setting Up Locally](#setting-up-locally) - [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing) - [Known Bugs](#known-bugs) - [Features To Add](#features-to-add)

## Instructions

My Reads is an application that lets you manage the books you are reading, or want to read or have already read.

### Demo

To see a demo, click [here](https://am-an-kumar.github.io/my-reads/)

### Setting Up Locally

Follow these steps to run the project locally

- clone this repo and install the dependencies
- start the frontend server by running - npm run dev or npm run dev:hot

### Features

- Keep books in 3 separate shelves, namely: - currently reading - want to read - read
- Search for books and add them to any of the above shelves.
- Remembers your book shelves without you having to login or sign up.
- Provides a type ahead field while searching for books.
- On clicking a book, you get to see the detailed information about it.
- Notifications when an action is complete.

## Dependencies

This project mainly uses:

- react
- react-router

Check the package.json for the full list. You can take a look at the [boilerplate setup](https://github.com/am-an-kumar/react-boilerplate) that i used for this project.

## Contributing

### Known Bugs

- On opening the [demo link](https://am-an-kumar.github.io/my-reads/), the browser redirects to (https://am-an-kumar.github.io). Which is fine until you refresh the page. The issue is concerned with react router. For production, it is taking '/' as https://am-an-kumar.github.io/.

### Features To Add

- On the search page, there should be a way to know if a book is already in any of the shelves of a user.

Apart from these, project is pretty much complete. Feel free to use it in what ever way you need. In case you can spot any other bug, please create a pull request. Follow the standard coding practices if you feel like creating a pull request.
