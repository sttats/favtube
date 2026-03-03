package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.GET("/api/go/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from Go backend!",
		})
	})

	r.Run(":3002") // Listen and serve on port 3002
}
