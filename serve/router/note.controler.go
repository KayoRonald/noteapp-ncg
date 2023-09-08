package router

import (
	"github.com/KayoRonald/noteapp/serve/controllers"
	"github.com/gofiber/fiber/v2"
)

func BookRoutes(app *fiber.App) {
	v1 := app.Group("note")
	v1.Get("/", controllers.GetNote)
	v1.Post("/", controllers.PostNote)
}