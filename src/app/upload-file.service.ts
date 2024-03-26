import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private baseUrl = 'https://7c9c-104-196-174-235.ngrok-free.app';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/read_pdf`, formData, {
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
