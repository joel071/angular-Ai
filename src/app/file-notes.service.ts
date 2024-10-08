import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileNotesService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNotesFromFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    
    return this.http.post(`${this.baseUrl}/extract_notes`, formData);
  }
}