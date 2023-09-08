package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID        			string `gorm:"type:uuid;primaryKey" json:"id"`
	Title      			string    `gorm:"not null" json:"title"`
	Description     string    `gorm:"unique" json:"description"`
	CreatedAt 			*time.Time
	UpdatedAt 			*time.Time
}

func (u *User) BeforeSave(tx *gorm.DB) (err error){
	u.ID = uuid.New().String()
	return
}