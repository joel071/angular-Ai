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
  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }


  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
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
        },
      });
    }
  }
}
