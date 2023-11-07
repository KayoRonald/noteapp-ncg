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
		"data":   note,
		"status": "sucess",
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
		"data":   note,
		"status": "sucess",
	})
}

func DeleteNote(c *fiber.Ctx) error {
	id := c.Query("id")
	// id := c.Params("id")
	note := new(models.Note)
	result := database.Database.Db.Where("id = ?", id).Delete(&note)
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Nenhum encontrado neste ID",
			"status":  "err",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Livro deletado com sucesso!",
		"status":  "sucess",
	})
}
