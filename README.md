# FeastFlyer Frontend

This is the frontend for FeastFlyer, a modern food delivery application. It's built with React, TypeScript, and Vite, and it's designed to be fast, responsive, and user-friendly.

## Features

*   **Modern UI:** The user interface is built with React and styled with Tailwind CSS, using a combination of custom components and components from the `shadcn/ui` library.
*   **Authentication:** We use Auth0 for secure and easy-to-implement authentication, including social login and passwordless options.
*   **Data Fetching:** We use `react-query` to manage server state, providing a great developer experience and a more responsive user interface.
*   **Routing:** We use `react-router-dom` for client-side routing, allowing for a seamless single-page application experience.
*   **Form Handling:** We use `react-hook-form` and `zod` for efficient and type-safe form validation.
*   **TypeScript:** The entire codebase is written in TypeScript, providing static typing and improved developer experience.

## Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** A collection of re-usable components built using Radix UI and Tailwind CSS.
*   **Auth0:** A flexible, drop-in solution to add authentication and authorization services to your applications.
*   **React Query:** A library for fetching, caching, and updating data in React applications.
*   **React Router:** A standard library for routing in React.
*   **React Hook Form:** A library for building performant, flexible, and extensible forms with easy-to-use validation.
*   **Zod:** A TypeScript-first schema declaration and validation library.

## Getting Started

### Prerequisites

*   Node.js
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/FeastFlyer.git
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd FeastFlyer/frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env.local` file in the `frontend` directory and add the following environment variables:
    ```
    VITE_AUTH0_DOMAIN=<your_auth0_domain>
    VITE_AUTH0_CLIENT_ID=<your_auth0_client_id>
    VITE_AUTH0_CALLBACK_URL=http://localhost:5173
    VITE_API_BASE_URL=http://localhost:7000/api
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

The server will be running on `http://localhost:5173`.
