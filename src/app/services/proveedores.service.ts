import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =
      'https://pymesbackend.azurewebsites.net/api/proveedores/';
  }

  get() {
    let params = new HttpParams();
    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  post(obj: Articulo) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
