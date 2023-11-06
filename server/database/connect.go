package database

import (
	"fmt"
	"os"

	"github.com/KayoRonald/noteapp/serve/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type DbInstance struct {
	Db *gorm.DB
}

var (
	Database DbInstance
)

// ConnectDB connects to the database and initializes the Database struct.
//
// It does not take any parameters.
// It does not return any values.
func ConnectDB() {
	db, err := gorm.Open(sqlite.Open("api.db"), &gorm.Config{})

	if err != nil {
		fmt.Println("Failed to connect to the database! \n", err)
		os.Exit(2)
	}
	fmt.Println("Connected Successfully to Database")

	// db.Logger = logger.Default.LogMode(logger.Info)
	fmt.Println("Running Migrations")
	db.AutoMigrate(&models.Note{})

	Database = DbInstance{
		Db: db,
	}
}
