package errors

import "fmt"

type AppError struct {
	Code    int
	Message string
	Error   error
}

func NewAppError(code int, message string, err error) *AppError {
	return &AppError{
		Code:    code,
		Message: message,
		Error:   err,
	}
}

func (e *AppError) String() string {
	return fmt.Sprintf("[%d] %s: %v", e.Code, e.Message, e.Error)
}

// Common errors
var (
	ErrNotFound       = NewAppError(404, "Resource not found", nil)
	ErrUnauthorized   = NewAppError(401, "Unauthorized", nil)
	ErrForbidden      = NewAppError(403, "Forbidden", nil)
	ErrBadRequest     = NewAppError(400, "Bad request", nil)
	ErrInternalServer = NewAppError(500, "Internal server error", nil)
)
