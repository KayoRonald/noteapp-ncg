package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Note struct {
	gorm.Model
	ID          string `gorm:"type:uuid;primaryKey" json:"id"`
	Title       string `gorm:"not null" json:"title"`
	Description string `gorm:"not null" json:"description"`
	CreatedAt   *time.Time
	UpdatedAt   *time.Time
}

func (u *Note) BeforeSave(tx *gorm.DB) (err error) {
	u.ID = uuid.New().String()
	return
}
