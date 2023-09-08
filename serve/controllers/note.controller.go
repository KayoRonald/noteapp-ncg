package controllers

import (
	"github.com/KayoRonald/noteapp/serve/database"
	"github.com/KayoRonald/noteapp/serve/models"
	"github.com/gofiber/fiber/v2"
)
// Handler
func GetNote(c *fiber.Ctx) error {
	note := []models.Note{}
	database.Database.Db.Find(&note)
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"data": note,
		"status":  "sucess",
	})
}

func PostNote(c *fiber.Ctx) error {
	note := new(models.Note)
	if err := c.BodyParser(note); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": err.Error(),
			"status":  "err",
		})
	}
	database.Database.Db.Create(note)
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"data": note,
		"status":  "sucess",
	})
}