# Operator Intelligence System (OIS)

Enterprise-grade operational cockpit for managing companies, projects, missions, intelligence, documents, and AI agents.

## Stack

### Frontend
- **Angular 18+** - Modern web framework
- **TypeScript** - Type-safe development
- **Angular Material 3** - Premium UI components
- **RxJS** - Reactive programming
- **TanStack Query** - Data fetching & caching
- **Angular Forms (Reactive)** - Form management
- **Framer Motion/Angular Animations** - Smooth interactions
- **Monaco Editor** - Code editing
- **Heroicons** - SVG icons

### Backend
- **Go 1.21+** - High-performance backend
- **Gin Framework** - REST API
- **PostgreSQL** - Primary database
- **Redis** - Caching & sessions
- **JWT** - Authentication
- **Clean Architecture** - Maintainable code

## Project Structure

```
operator-intelligence-system/
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Services, guards, interceptors
│   │   │   ├── shared/      # Shared components & utilities
│   │   │   ├── features/    # Feature modules
│   │   │   │   ├── dashboard/
│   │   │   │   ├── command-center/
│   │   │   │   ├── intelligence/
│   │   │   │   ├── knowledge/
│   │   │   │   ├── projects/
│   │   │   │   ├── reports/
│   │   │   │   ├── ai-agents/
│   │   │   │   ├── automation/
│   │   │   │   └── settings/
│   │   │   ├── layouts/     # Layout components
│   │   │   └── app.component.ts
│   │   ├── assets/          # Images, icons, fonts
│   │   ├── styles/          # Global styles, Material theme
│   │   ├── environments/    # Environment configs
│   │   └── main.ts
│   ├── angular.json
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
├── backend/                  # Go application
│   ├── cmd/
│   │   └── api/            # Main API executable
│   ├── internal/
│   │   ├── domain/         # Business logic
│   │   ├── service/        # Service layer
│   │   ├── repository/     # Data access
│   │   ├── handler/        # HTTP handlers
│   │   ├── middleware/     # Middlewares
│   │   ├── config/         # Configuration
│   │   └── utils/          # Utilities
│   ├── pkg/
│   │   ├── models/         # Shared models
│   │   ├── errors/         # Error handling
│   │   └── logger/         # Logging
│   ├── migrations/         # Database migrations
│   ├── tests/              # Integration tests
│   ├── main.go
│   ├── go.mod
│   ├── Dockerfile
│   └── README.md
├── docker-compose.yml      # Local development environment
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Go 1.21+
- PostgreSQL 14+
- Redis 7+
- Docker & Docker Compose (optional)

### Development Setup

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
go mod download
go run main.go
```

#### With Docker
```bash
docker-compose up
```

## Phases

1. ✅ **Phase 1** - Project Architecture
2. **Phase 2** - Routing & API Setup
3. **Phase 3** - Responsive Layout
4. **Phase 4** - Home Dashboard
5. **Phase 5** - All Modules Implementation
6. **Phase 6** - Reusable Components Library
7. **Phase 7** - State Management
8. **Phase 8** - Sample Data Generation
9. **Phase 9** - Animations & Interactions
10. **Phase 10** - Production Polishing

## Design System

### Colors (Material Design 3 Dark)
- **Background**: #0B0F19
- **Surface**: #131A2A
- **Primary**: #3B82F6 (Blue)
- **Success**: #22C55E (Green)
- **Warning**: #F59E0B (Amber)
- **Danger**: #EF4444 (Red)
- **Text**: #F8FAFC (Slate 50)
- **Secondary**: #94A3B8 (Slate 400)

### Borders & Spacing
- **Border Radius**: 16px
- **Spacing**: 4px grid system

## License

MIT
