package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListDocuments(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List documents endpoint",
	})
}

func GetDocument(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get document endpoint",
	})
}

func CreateDocument(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create document endpoint",
	})
}

func UpdateDocument(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update document endpoint",
	})
}

func DeleteDocument(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete document endpoint",
	})
}
