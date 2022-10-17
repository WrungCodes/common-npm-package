import { CustomError } from './custom-error';

export class InsufficentBalanceError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Insufficent Balance');

    Object.setPrototypeOf(this, InsufficentBalanceError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Insufficent Balance' }];
  }
}
