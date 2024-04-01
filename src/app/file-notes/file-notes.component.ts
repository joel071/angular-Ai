import { Component } from '@angular/core';
import { FileNotesService } from '../file-notes.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-notes',
  templateUrl: './file-notes.component.html',
  styleUrl: './file-notes.component.css'
})
export class FileNotesComponent {

  data: any;

  currentFile: File | null = null;

  constructor(private fileNote: FileNotesService) { }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

  onSubmit() {
    if (this.currentFile) {
      this.fileNote.getNotesFromFile(this.currentFile).subscribe(
        response => {
          if (response instanceof HttpResponse) {
            // If the response is an instance of HttpResponse, extract the JSON body
            this.data = response.body?.answer;
          } else {
            console.error("Unexpected server response format:", response);
          }
        },
        error => {
          console.error("Error occurred while fetching data:", error);
        }
      );
    }
  }
}
