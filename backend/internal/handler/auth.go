package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Register endpoint",
	})
}

func Login(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Login endpoint",
	})
}

func RefreshToken(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Refresh token endpoint",
	})
}

func Logout(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Logout endpoint",
	})
}
