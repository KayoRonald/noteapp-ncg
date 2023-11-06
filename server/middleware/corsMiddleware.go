package middleware

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// CorsMiddleware returns a Fiber handler that enables Cross-Origin Resource Sharing (CORS).
//
// It configures the CORS middleware with the following settings:
// - AllowOrigins: Allows requests from any origin, both http and https.
// - AllowHeaders: Allows the Origin, Content-Type, and Accept headers.
// - AllowMethods: Allows GET, POST, PUT, and DELETE methods.
// - AllowCredentials: Allows credentials to be sent with the requests.
//
// Returns:
// - A Fiber handler that enables CORS.
func CorsMiddleware() fiber.Handler {
	return cors.New(cors.Config{
		AllowOrigins:     "http://*, https://*",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowMethods:     "GET, POST, PUT, DELETE",
		AllowCredentials: true,
	})
}
