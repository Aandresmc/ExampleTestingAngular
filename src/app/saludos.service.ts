import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DataApiJsonPlaceHolder {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export abstract class ISaludarService {
  abstract saludar(nombre: String): String;
}

@Injectable()
export class SaludarService implements ISaludarService {
  constructor(private http: HttpClient) {}

  saludar(nombre: String) {
    console.log('entro al saludar real');

    this.getDataApiPlaceHolder().subscribe((data) => console.log(data));
    return `Hi ${nombre}!`;
  }

  getDataApiPlaceHolder() {
    return this.http.get<DataApiJsonPlaceHolder>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
}

@Injectable()
export class SaludarServiceMock implements ISaludarService {
  saludar(nombre: String) {
    return `Hi ${nombre}!`;
  }
}
