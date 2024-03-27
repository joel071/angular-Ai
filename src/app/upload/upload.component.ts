import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  
  currentFile?: File;
  message = '';
  fileName: string = ''; // Variable to store file name
  fileDescription: string = ''; // Variable to store file description
  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

  onDescriptionChange(event: any): void {
    this.fileDescription = event.target.value;
  }
  onFileNameChange(event: any): void {
    this.fileName = event.target.value;
  }

  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile, this.fileName, this.fileDescription).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
          this.fileName = ''; // Reset file name
          this.fileDescription = ''; // Reset file description
        },
      });
    }
  }
}
