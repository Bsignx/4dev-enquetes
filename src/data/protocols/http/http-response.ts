export enum HttpStatusCode {
  unathorized = 401,
  badRequest = 400,
  noContent = 204,
  notFound = 404,
  ok = 200,
  serverError = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
