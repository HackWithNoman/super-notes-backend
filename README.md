# Super Notes

A simple note-taking REST API built with Express.js and PostgreSQL.

## Features

- **User Auth:** Secure registration and login using JWT.
- **Personal Notes:** Users can create, read, and manage their own notes.
- **Admin Dashboard:** Special privileges to oversee all system content and users.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Security:** Bcrypt (Hashing), JSON Web Tokens (Auth)

## Getting Started

### 1. Prerequisites

- Node.js (v18+)
- PostgreSQL instance

### 2. Installation

```bash
git clone https://github.com/HackWithNoman/super-notes-backend.git
cd super-notes-backend
pnpm install

```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/supernotes
JWT_SECRET=your_super_secret_key

```

### 4. Run the App

```bash
# Development mode
pnpm dev
```
