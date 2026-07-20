package logger

import (
	"log"
	"os"
)

type Logger struct {
	logger *log.Logger
}

func NewLogger() *Logger {
	return &Logger{
		logger: log.New(os.Stdout, "[OIS] ", log.LstdFlags|log.Lshortfile),
	}
}

func (l *Logger) Info(message string) {
	l.logger.Printf("[INFO] %s", message)
}

func (l *Logger) Error(message string) {
	l.logger.Printf("[ERROR] %s", message)
}

func (l *Logger) Warn(message string) {
	l.logger.Printf("[WARN] %s", message)
}

func (l *Logger) Debug(message string) {
	l.logger.Printf("[DEBUG] %s", message)
}
