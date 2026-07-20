package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListProjects(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List projects endpoint",
	})
}

func GetProject(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get project endpoint",
	})
}

func CreateProject(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create project endpoint",
	})
}

func UpdateProject(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update project endpoint",
	})
}

func DeleteProject(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete project endpoint",
	})
}
