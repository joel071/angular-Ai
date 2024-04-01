import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileNotesService {

  private baseUrl = 'https://d9c3-34-143-141-101.ngrok-free.app';

  constructor(private http: HttpClient) { }

  getNotesFromFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/extract_notes`, formData, {
      responseType: 'json',
    });

    return this.http.request(req);
  }
}
