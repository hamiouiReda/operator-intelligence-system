package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListAgents(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List agents endpoint",
	})
}

func GetAgent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get agent endpoint",
	})
}

func CreateAgent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create agent endpoint",
	})
}

func UpdateAgent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update agent endpoint",
	})
}

func DeleteAgent(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete agent endpoint",
	})
}
