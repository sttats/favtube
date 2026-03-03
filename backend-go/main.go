package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	// CORS ヘッダーを全レスポンスに付与
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	r.GET("/api/go/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from Go backend!",
		})
	})

	r.Run(":3002")
}
