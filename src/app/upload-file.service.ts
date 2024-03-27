import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private baseUrl = 'https://3d6f-34-125-112-211.ngrok-free.app';

  constructor(private http: HttpClient) { }

  upload(file: File, fileName: string, fileDescription: string): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName); // Append file name
    formData.append('fileDescription', fileDescription); // Append file description
    const req = new HttpRequest('POST', `${this.baseUrl}/read_pdf`, formData, {
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
