package middleware

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"time"
)

// 20 requests per 1 minute max
func Limiter() fiber.Handler {
	return limiter.New(limiter.Config{
		Max:        20,
		Expiration: 1 * time.Minute,
		KeyGenerator: func(c *fiber.Ctx) string {
			fmt.Println(c.IP())
			return c.IP()
		},
		LimiterMiddleware: limiter.SlidingWindow{},
	})
}
