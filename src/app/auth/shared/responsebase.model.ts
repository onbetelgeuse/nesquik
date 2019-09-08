export class ResponseBase<T> {
  constructor(public status, public message, public data?: T) {}
}
