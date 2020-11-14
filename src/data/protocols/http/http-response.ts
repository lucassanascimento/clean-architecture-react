export enum HttpStatusCode  {
	noContent = 204,
	anathorized = 401
}

export type HttpResponse = {
	statusCode: HttpStatusCode
	body?: any
}