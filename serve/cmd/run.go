package server

import (
	"fmt"
	"os"

	"github.com/KayoRonald/noteapp/serve/handlers"
	"github.com/KayoRonald/noteapp/serve/middleware"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func Run(app *fiber.App) error {
	port := os.Getenv("port")

	app.Use(logger.New())
	app.Use(middleware.CorsMiddleware())
	app.Use(middleware.Limiter())
	app.Use(handlers.NotFound)

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "Hello World",
		})
	})

	if port == "" {
		fmt.Println("Environment specified PORT, '3000' otherwise")
		port = "3000"
	}

	fmt.Printf("Exposed PORT, '%v' otherwise\n", port)
	app.Listen(":" + port)
	return nil
}
