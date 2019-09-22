import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = sessionStorage;

  constructor() {}

  public get<T>(key: string): T | null {
    const value: string = this.storage[key];

    if (value != null) {
      const model = JSON.parse(value);
      if (model.payload != null && model.expiry != null) {
        const now = new Date();
        const expiryDate = new Date(model.expiry);

        if (now > expiryDate) {
          this.storage.removeItem(key);
          return null;
        }
      }
      return JSON.parse(value).payload as T;
    }
    return null;
  }

  public set(key: string, value: any, expirySeconds?: number): void {
    let expiryDate = null;

    if (expirySeconds) {
      expiryDate = new Date();
      expiryDate.setSeconds(expiryDate.getSeconds() + expirySeconds);
    }

    this.storage[key] = JSON.stringify({
      payload: value,
      expiry: expiryDate,
    });
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }
}
