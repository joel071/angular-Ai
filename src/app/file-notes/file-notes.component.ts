import { Component } from '@angular/core';
import { FileNotesService } from '../file-notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-notes',
  templateUrl: './file-notes.component.html',
  styleUrls: ['./file-notes.component.css']
})
export class FileNotesComponent {

  data: any;

  currentFile: File | null = null;

  isLoading = false;

  fileName: string = '';

  constructor(private fileNote: FileNotesService, private router: Router) { }

  selectFile(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.currentFile = file;
      this.fileName = file.name;
    } else {
      this.currentFile = null;
      this.fileName = '';
    }
  }

  onSubmit() {
    if (this.currentFile) {
      this.isLoading = true;
      this.fileNote.getNotesFromFile(this.currentFile).subscribe({
        next: (response) => {
          this.data = response.answer;
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error occurred while fetching data:", error);
          this.isLoading = false;
        }
      });
    }
  }

  onNoteClick(description: string) {
    // Encode the description to handle special characters in the URL
    const encodedDescription = encodeURIComponent(description);
    this.router.navigate(['/note-detail', encodedDescription]);
  }
}