export interface ValidationErrorDetail {
  propertyName: string
  errorMessage: string
  attemptedValue?: unknown
  severity?: string
}

export class ArrError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly details?: unknown
  ) {
    super(message)
    this.name = 'ArrError'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class ValidationError extends ArrError {
  constructor(
    message: string,
    public readonly validationErrors: ValidationErrorDetail[]
  ) {
    super(message, 400, validationErrors)
    this.name = 'ValidationError'
  }
}

export class NotFoundError extends ArrError {
  constructor(message: string = 'Resource not found') {
    super(message, 404)
    this.name = 'NotFoundError'
  }
}

export class UnauthorizedError extends ArrError {
  constructor(message: string = 'Invalid API key') {
    super(message, 401)
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends ArrError {
  constructor(message: string = 'Access forbidden') {
    super(message, 403)
    this.name = 'ForbiddenError'
  }
}

export class ConflictError extends ArrError {
  constructor(message: string = 'Resource conflict') {
    super(message, 409)
    this.name = 'ConflictError'
  }
}

export class ServerError extends ArrError {
  constructor(message: string = 'Internal server error', statusCode: number = 500) {
    super(message, statusCode)
    this.name = 'ServerError'
  }
}

export class TimeoutError extends ArrError {
  constructor(message: string = 'Request timeout') {
    super(message, 408)
    this.name = 'TimeoutError'
  }
}

export class NetworkError extends ArrError {
  constructor(message: string = 'Network error', cause?: Error) {
    super(message, 0, cause)
    this.name = 'NetworkError'
    if (cause) {
      this.cause = cause
    }
  }
}
