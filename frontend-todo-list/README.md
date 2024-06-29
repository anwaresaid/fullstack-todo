# Getting Started with the ecommerce website

this is a PWA web application using react, redux and typescript.
it can run offline normally with the same functionality as when it's running online.

### `how to use`

- run the app, enter an item to the todo list and click submit.
- after filling all the todo items that you want to the list you can click on the checkbox for the ones that are completed.
- you can remove an item by clicking the x icon infront of the item.

## Available Scripts

In the project directory, you can run:

### `npm start` to run the app noramlly

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### to run the app as a PWA follow the steps:

- npm run build.
- npm install -g serve
- serve -s build
  and the app should be running as a PWA, you can run it with no need for internet after the first run.
