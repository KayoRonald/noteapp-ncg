package main

import (
	server "github.com/KayoRonald/noteapp/serve/cmd"
	"github.com/KayoRonald/noteapp/serve/database"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	database.ConnectDB()
	err := server.Run(app)
	if err != nil {
		panic(err)
	}
}
