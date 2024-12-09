# P-Pals Project

P-Pals is a web application that combines an Angular 18 front-end with a Node.js REST API backend. This README provides instructions for setting up and running the project locally.

## Application Features

You can use the application either as a guest or as a logged-in user:

-   **Guest Users**:

    -   Can view public posts and comments.
    -   Can register a new account.

-   **Logged-In Users**:
    -   Can view and edit their user profile.
    -   Can create posts about animals.
    -   Can comment on every public post on the website.
    -   Can interact with comments by liking them (once per comment) or editing/deleting their own comments.
    -   Have a dedicated page to view and manage their own posts.

## Project Structure

The repository contains the following folders:

-   **`p-pals/`**: Contains the Angular front-end project.
-   **`resources/`**: Contains resources for MongoDB database.
-   **`Rest-api/`**: Contains the Node.js REST API server.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/KristiyanKaraychev/p-pals.git
    cd p-pals
    ```

2. Install dependencies for both the front-end and the back-end:

    ### For the Angular Front-End:

    ```bash
    cd p-pals
    npm install
    ```

    ### For the REST API Back-End:

    ```bash
    cd ../rest-api
    npm install
    ```

## Running the Project

To start the application, you need to run both the REST API server and the Angular front-end. Open two terminal windows or tabs and follow these steps:

### 1. Start the REST API Server:

Navigate to the `rest-api` folder and run:

```bash
npm start
```

The server will start and listen for requests on `http://localhost:3000` by default.

### 2. Start the Angular Front-End:

Navigate to the `p-pals` folder and run:

```bash
ng serve
```

The Angular application will start and be accessible at `http://localhost:4200` by default.

## Folder Details

### `p-pals/`

This folder contains the Angular front-end application. Use this directory to:

-   Develop and test the user interface.
-   Manage components, services, and other Angular modules.

### `rest-api/`

This folder contains the REST API server. Use this directory to:

-   Develop and test API endpoints.
-   Manage database interactions and other back-end logic. Ensure MongoDB is properly connected to handle data storage.

### `URL_list.txt`

This file contains a list of URLs pointing to images of animals. These images can be used to create posts or upload/update profile picture.
