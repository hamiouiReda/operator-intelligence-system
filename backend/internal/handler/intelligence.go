package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListIntelligence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List intelligence endpoint",
	})
}

func GetIntelligence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get intelligence endpoint",
	})
}

func CreateIntelligence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create intelligence endpoint",
	})
}

func UpdateIntelligence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update intelligence endpoint",
	})
}

func DeleteIntelligence(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete intelligence endpoint",
	})
}
