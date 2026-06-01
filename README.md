# My Portfolio

Full-stack personal portfolio website built with the MERN stack.

## What this includes

- React landing page with hero, about, skills, projects, process, and contact sections
- Express API for saving contact submissions to MongoDB
- Vite-based frontend and Node.js backend in a single workspace

## Setup

1. Copy `.env.example` to `.env` and add your MongoDB URI.
2. Install dependencies with `npm install` from the project root.
3. Start both apps with `npm run dev`.

## Environment

- `server/.env` should contain your Atlas connection string.
- `CLIENT_URL` should match the frontend dev server.
- `PORT` defaults to `5005`.
