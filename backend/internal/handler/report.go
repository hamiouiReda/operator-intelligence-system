package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListReports(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List reports endpoint",
	})
}

func GetReport(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get report endpoint",
	})
}

func CreateReport(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create report endpoint",
	})
}

func UpdateReport(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update report endpoint",
	})
}

func DeleteReport(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete report endpoint",
	})
}
