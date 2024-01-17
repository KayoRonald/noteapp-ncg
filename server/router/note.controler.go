package router

import (
	"github.com/KayoRonald/noteapp/serve/controllers"
	"github.com/gofiber/fiber/v2"
)

// BookRoutes sets up the routes for the book API.
//
// It takes an instance of the fiber.App struct as a parameter.
// It does not return anything.
func BookRoutes(app *fiber.App) {
	v1 := app.Group("note")
	v1.Get("/", controllers.GetNote)
	v1.Post("/", controllers.PostNote)
	v1.Delete("/:id", controllers.DeleteNote)
}
