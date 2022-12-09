export interface IErrorResponse {
  message: string;
  error: string;
  name: string;
  httpCode: number;
  log: number;
  methodName: string;
  isOperational: boolean;
}
