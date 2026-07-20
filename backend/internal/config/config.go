package config

import (
	"os"
	"strconv"
)

type Config struct {
	Env         string
	Port        int
	FrontendURL string

	// Database
	DBHost     string
	DBPort     int
	DBUser     string
	DBPassword string
	DBName     string
	DBSSLMode  string

	// Redis
	RedisHost string
	RedisPort int

	// JWT
	JWTSecret  string
	JWTExpiry  string
}

func LoadConfig() *Config {
	cfg := &Config{
		Env:         getEnv("ENV", "development"),
		Port:        getEnvInt("PORT", 8000),
		FrontendURL: getEnv("FRONTEND_URL", "http://localhost:4200"),

		DBHost:     getEnv("DB_HOST", "localhost"),
		DBPort:     getEnvInt("DB_PORT", 5432),
		DBUser:     getEnv("DB_USER", "ois_user"),
		DBPassword: getEnv("DB_PASSWORD", "change_me"),
		DBName:     getEnv("DB_NAME", "ois"),
		DBSSLMode:  getEnv("DB_SSL_MODE", "disable"),

		RedisHost: getEnv("REDIS_HOST", "localhost"),
		RedisPort: getEnvInt("REDIS_PORT", 6379),

		JWTSecret: getEnv("JWT_SECRET", "dev_secret_key_change_in_production"),
		JWTExpiry: getEnv("JWT_EXPIRY", "24h"),
	}

	return cfg
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

func getEnvInt(key string, defaultValue int) int {
	if value := os.Getenv(key); value != "" {
		if intVal, err := strconv.Atoi(value); err == nil {
			return intVal
		}
	}
	return defaultValue
}
