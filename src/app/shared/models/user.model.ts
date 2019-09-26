export interface User {
  readonly email: string;
  readonly externalId?: string;
  readonly firstName: string;
  readonly id: number;
  readonly lastName: string;
  readonly roles: string[];
  readonly username: string;
}
