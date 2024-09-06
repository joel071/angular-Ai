import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  baseUrl = environment.apiUrl;
  noteDetails: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const encodedDescription = params.get('description');
      if (encodedDescription) {
        const description = decodeURIComponent(encodedDescription);
        this.fetchNoteDetails(description);
      }
    });
  }

  fetchNoteDetails(description: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload = { description: description };

    this.http.post(`${this.baseUrl}/notedetail`, payload, { headers }).subscribe({
      next: (response: any) => {
        this.noteDetails = response;
      },
      error: (error) => {
        console.error('Error fetching note details:', error);
      }
    });
  }
}