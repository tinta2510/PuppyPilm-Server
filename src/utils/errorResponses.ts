export class ErrorResponse extends Error {
  statusCode: number;

  constructor(message: string, status_code: number) {
    super(message);
    this.statusCode = status_code; // HTTP status code for Bad Request
    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(message: string) {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export class NotFoundError extends ErrorResponse {
  constructor(message: string) {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class InternalServerError extends ErrorResponse {
  constructor(message: string) {
    super(message, 500);
  }
}


