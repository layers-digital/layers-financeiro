class DomainError extends Error {
  constructor(message) {
    super(message)
   // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name

    // This clips the constructor invocation from the stack trace.
    Error.captureStackTrace(this, this.constructor)
  }
}

class InternalError extends DomainError {
  constructor(message) {
    super(message)
    this.status = 500
    this.data = { message }
  }
}

class Unauthorized extends DomainError {
  constructor(message) {
    super(message)
    this.status = 401
    this.data = { message }
  }
}

class BadRequest extends DomainError {
  constructor(message) {
    super(message)
    this.status = 400
    this.data = { message }
  }
}

class AxiosError extends DomainError {
  constructor(error) {
    super(`The request: ${error.request.method} ${error.response.config.url} has failed. Response: ${JSON.stringify(error.response.data)}`)
    this.status = error.response.status
    this.data = { error }
  }
}

module.exports = {
  InternalError,
  Unauthorized,
  BadRequest,
  AxiosError
}