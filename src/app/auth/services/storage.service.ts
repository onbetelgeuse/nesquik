import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = localStorage;

  constructor() { }

  public get<T>(key: string): T | null {

    let value: string = this.storage[key];

    if (value != null) {
      var model = JSON.parse(value);
      if (model.payload != null && model.expiry != null) {

        let now = new Date();
        let expiryDate = new Date(model.expiry);

        if (now > expiryDate) {
          this.storage.removeItem(key);
          return null;
        }
      }
      return <T>JSON.parse(value).payload;
    }
    return null;
  }

  public set(key: string, value: any, expirySeconds?: number): void {

    let expiryDate = null;

    if (expirySeconds !== null) {
      expiryDate = new Date();
      expiryDate.setSeconds(expiryDate.getSeconds() + expirySeconds);
    }

    this.storage[key] = JSON.stringify({
      payload: value,
      expiry: expiryDate
    });
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }
}
