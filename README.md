note-app--server
A basic REST API built using **Node.js** and **Express.js** to handle note-related operations.

This project focuses on understanding backend fundamentals, server creation, API endpoints, and HTTP methods.

### Features

- **GET** – Fetch all notes.
- **POST** – Create a new note.
- **PATCH** – Update an existing note's description.
- **DELETE** – Delete a note using its index.

### Tech Stack
- Node.js
- Express.js
- JavaScript

### API Base URL
`http://localhost:3000`

### Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Fetch all notes |
| PATCH | `/api/notes/:index` | Update a note |
| DELETE | `/api/notes/:index` | Delete a note |
