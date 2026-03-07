# Circle

A real-time social media app where people connect, share threads, and follow each other. See [Live demo](https://ui-circle.up.railway.app/)

---

## Screenshots

<!-- Login -->
<img width="983" height="684" alt="Screenshot from 2026-03-07 15-31-30" src="https://github.com/user-attachments/assets/2ad8659b-69dd-4013-9964-7a8902dd58e8" />

<!-- Home -->
<img width="1832" height="910" alt="Screenshot from 2026-03-07 15-33-16" src="https://github.com/user-attachments/assets/ae877006-1cf4-4e2a-bb28-173f6ec91f3b" />

<!-- Thread Detail -->
<img width="1832" height="910" alt="Screenshot from 2026-03-07 15-34-35" src="https://github.com/user-attachments/assets/06f2dd3b-1f2c-4eb0-9606-3ceb6c26cfa3" />

<!-- User Profile -->
<img width="1832" height="910" alt="Screenshot from 2026-03-07 15-35-39" src="https://github.com/user-attachments/assets/5e6408ce-3015-487d-8654-9b46c7df529c" />


---

## Tech Stack

**Backend**
- Node.js + Express
- TypeScript
- PostgreSQL + Prisma ORM
- Redis
- Socket.io (real-time)
- JWT authentication
- Zod validation

**Frontend**
- React 19 + React Router v7
- Vite
- Redux Toolkit
- Tailwind CSS + ShadCN UI
- Axios
- Socket.io client

---

## Features

- 🔐 Auth — register, login, JWT-based session
- 🧵 Threads — create, view, and delete posts
- 💬 Replies — comment on threads
- ❤️ Likes — like threads and replies
- 👥 Follow system — follow/unfollow users
- 🔍 Search — find users
- 🖼️ Image uploads — attach images to threads and profile
- ⚡ Real-time updates via Socket.io

---

## Project Structure
```
circle/
├── be/          # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── lib/
│   │   └── prisma/
│   └── package.json
└── ui/          # React frontend
    ├── app/
    │   ├── routes/
    │   ├── components/
    │   ├── services/
    │   ├── store/
    │   └── dto/
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL
- Redis

### Backend
```bash
cd be
cp .env.example .env   # fill in your env vars
npm install
npm run db:migrate
npm run db:generate
npm run db:seed
npm run dev
```

### Frontend
```bash
cd ui
cp .env.example .env   # fill in your env vars
npm install
npm run dev
```

---

## Environment Variables

### Backend (`be/.env`)
```env
PORT=8080
HOST=http://localhost
DATABASE_URL=postgresql://user:password@localhost:5432/circle
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
FRONTEND_URL=http://localhost:5173
```

### Frontend (`ui/.env`)
```env
VITE_API_URL=http://localhost:8080/api/v1
VITE_SOCKET_URL=http://localhost:8080
```

---

## Deployment

Deployed on [Railway](https://railway.app) as two separate services (BE + FE) with PostgreSQL and Redis plugins.

---

## License

ISC © [mnabil1718@gmail.com](mailto:mnabil1718@gmail.com)
