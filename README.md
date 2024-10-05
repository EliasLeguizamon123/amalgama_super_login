# Elías Leguizamón - Amalgama challenge

## Overview

This project is a web application built with **Vite**, **React**, and **TypeScript**, following the principles of **Clean Architecture**. It is structured to ensure maintainability, scalability, and separation of concerns. 

Key technologies used include:

- **Vite**: Fast build tool and development server.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Chakra UI**: Component library for building accessible React applications.
- **Formik/Yup**: Libraries for handling forms and validations.
- **React Router**: Routing library for managing navigation within the app.

---

## Features

- **Clean Architecture**: Organizes code to separate concerns and make it maintainable and scalable.
- **Responsive Design**: Built with **Chakra UI** to ensure a consistent and accessible UI.
- **Form Handling and Validation**: Powered by **Formik** for form state management and **Yup** for validation schemas.
- **Client-side Routing**: Managed with **React Router** for navigating between pages.

---

## Project Structure

The project follows the **Clean Architecture** pattern, dividing the code into distinct layers:

```plaintext
src/
│
├── components/        # Reusable UI components (Chakra UI-based)
├── hooks/             # Custom React hooks
├── pages/             # Application pages (views)
├── routes/            # Route definitions (React Router)
├── services/          # Business logic and API calls
└── App.tsx            # Main application component
```

## Libraries and Tools

### Core Libraries

- **Vite**: Fast build tool and development server.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.

### UI and Styling

- **Chakra UI**: Component library for building accessible React applications.

### Form Management

- **Formik**: Library for building forms with React.
- **Yup**: Library for schema-based form validation.

### Routing

- **React Router**: Routing library for managing navigation within the app.

## Setup

1. Clone the repository and navigate to the project folder.

```bash
git clone https://github.com/EliasLeguizamon123/amalgama_super_login.git
```

2. Navigate to the project folder.

```bash
cd amalgama_super_login
```

3. Install the dependencies.

```bash
npm install
# or 
yarn install
```

4. Start the development server.

```bash
npm run dev
# or
yarn dev
```

This will run the app on `http://localhost:5173/`