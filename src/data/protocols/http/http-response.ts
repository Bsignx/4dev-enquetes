export enum HttpStatusCode {
  unauthorized = 401,
  badRequest = 400,
  noContent = 204,
  notFound = 404,
  ok = 200,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
