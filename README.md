# TaskFlow - Task Management Application

A demonstration project for parallel development with Claude Code.

## Architecture

- **Frontend**: React + TypeScript
- **API**: Express.js + Node.js
- **Database**: PostgreSQL + Prisma
- **Auth**: JWT + OAuth2

## Development Workflow

Each component is developed in parallel using Git worktrees:
- `../taskflow-frontend` - UI components
- `../taskflow-api` - REST endpoints  
- `../taskflow-db` - Database schema
- `../taskflow-auth` - Authentication system