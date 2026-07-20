package main

import (
	"fmt"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/hamiouiReda/operator-intelligence-system/backend/internal/config"
	"github.com/hamiouiReda/operator-intelligence-system/backend/internal/handler"
)

func main() {
	// Load configuration
	cfg := config.LoadConfig()

	// Set Gin mode
	if cfg.Env == "production" {
		gin.SetMode(gin.ReleaseMode)
	} else {
		gin.SetMode(gin.DebugMode)
	}

	// Create router
	router := gin.New()

	// Middleware
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	// CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:4200", cfg.FrontendURL},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
			"timestamp": gin.H{},
		})
	})

	// API v1 routes
	v1 := router.Group("/api/v1")
	{
		// Auth routes
		auth := v1.Group("/auth")
		{
			auth.POST("/register", handler.Register)
			auth.POST("/login", handler.Login)
			auth.POST("/refresh", handler.RefreshToken)
		}

		// User routes
		users := v1.Group("/users")
		{
			users.GET("", handler.ListUsers)
			users.GET(":id", handler.GetUser)
		}

		// Project routes
		projects := v1.Group("/projects")
		{
			projects.GET("", handler.ListProjects)
			projects.POST("", handler.CreateProject)
			projects.GET(":id", handler.GetProject)
			projects.PUT(":id", handler.UpdateProject)
			projects.DELETE(":id", handler.DeleteProject)
		}

		// Mission routes
		missions := v1.Group("/missions")
		{
			missions.GET("", handler.ListMissions)
			missions.POST("", handler.CreateMission)
			missions.GET(":id", handler.GetMission)
		}

		// Intelligence routes
		intelligence := v1.Group("/intelligence")
		{
			intelligence.GET("", handler.ListIntelligence)
			intelligence.POST("", handler.CreateIntelligence)
			intelligence.GET(":id", handler.GetIntelligence)
		}

		// Document routes
		docs := v1.Group("/documents")
		{
			docs.GET("", handler.ListDocuments)
			docs.POST("", handler.CreateDocument)
			docs.GET(":id", handler.GetDocument)
		}

		// Report routes
		reports := v1.Group("/reports")
		{
			reports.GET("", handler.ListReports)
			reports.POST("", handler.CreateReport)
			reports.GET(":id", handler.GetReport)
		}

		// AI Agent routes
		agents := v1.Group("/agents")
		{
			agents.GET("", handler.ListAgents)
			agents.POST("", handler.CreateAgent)
			agents.GET(":id", handler.GetAgent)
		}
	}

	// Start server
	port := fmt.Sprintf(":%d", cfg.Port)
	log.Printf("Starting OIS backend on %s (env: %s)", port, cfg.Env)

	if err := router.Run(port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
