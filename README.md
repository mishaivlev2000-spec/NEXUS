# NEXUS - B2B IT Infrastructure Marketplace MVP

Full-stack prototype for a dark enterprise SaaS marketplace where customers, vendors, distributors, integrators, and installation companies collaborate around IT infrastructure products and projects.

## Stack
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Auth: JWT + basic company-role onboarding
- Database: PostgreSQL schema included (`backend/sql/schema.sql`) with in-memory fallback for quick MVP usage

## Features
- Company-based signup with role selection
- Company profiles directory
- Infrastructure marketplace catalog and quote requests
- Project marketplace (publish/respond flow starter)
- Messaging center
- Unified dashboard with notifications
- Admin/settings entry point for moderation workflows

## Run
```bash
npm install
npm install --prefix backend
npm install --prefix frontend
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:4000

## Notes
- Set `JWT_SECRET` and optional `DATABASE_URL` in environment for production usage.
