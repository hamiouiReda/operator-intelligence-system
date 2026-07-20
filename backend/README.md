# OIS Backend - Go API

High-performance REST API built with Go, Gin, PostgreSQL, and Redis.

## Architecture

```
internal/
├── domain/           # Business logic & entities
├── service/          # Business rules implementation
├── repository/       # Data access layer
├── handler/          # HTTP request handlers
├── middleware/       # HTTP middlewares
├── config/           # Configuration management
└── utils/            # Utility functions

pkg/
├── models/           # Shared data models
├── errors/           # Error handling
└── logger/           # Logging utilities
```

## Setup

### Prerequisites
- Go 1.21+
- PostgreSQL 14+
- Redis 7+

### Installation

```bash
cd backend
go mod download
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp ../.env.example .env
```

### Running

```bash
go run cmd/api/main.go
```

### Building

```bash
go build -o bin/ois ./cmd/api
./bin/ois
```

### Testing

```bash
go test ./...
go test -v ./...
go test -cover ./...
```

## API Endpoints

### Health
- `GET /health` - Health check

### Authentication
- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/logout` - Logout

### Users
- `GET /api/v1/users` - List users
- `GET /api/v1/users/:id` - Get user
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Projects
- `GET /api/v1/projects` - List projects
- `POST /api/v1/projects` - Create project
- `GET /api/v1/projects/:id` - Get project
- `PUT /api/v1/projects/:id` - Update project
- `DELETE /api/v1/projects/:id` - Delete project

### More endpoints to be implemented...

## Development

### Code Style
- Follow Go conventions
- Use `gofmt` for formatting
- Use `golint` for linting

### Structure
- Keep handlers thin
- Business logic in services
- Data access in repositories
- Domain entities separate

## Deployment

### Docker

```bash
docker build -t ois-backend .
docker run -p 8000:8000 ois-backend
```

### Docker Compose

```bash
cd ..
docker-compose up backend
```
