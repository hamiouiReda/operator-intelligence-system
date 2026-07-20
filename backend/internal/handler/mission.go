package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ListMissions(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "List missions endpoint",
	})
}

func GetMission(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Get mission endpoint",
	})
}

func CreateMission(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Create mission endpoint",
	})
}

func UpdateMission(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Update mission endpoint",
	})
}

func DeleteMission(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete mission endpoint",
	})
}
