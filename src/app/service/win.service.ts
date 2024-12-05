import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinService {

  constructor() { }
  parameters: any = {};

  setData(params: any): void {
    this.parameters = params;
  }

}
