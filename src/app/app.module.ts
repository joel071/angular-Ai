import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from './chatbot.service';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { UploadFileService } from './upload-file.service';
import { HttpClientModule } from '@angular/common/http';
import { FileNotesComponent } from './file-notes/file-notes.component';
import { FileNotesService } from './file-notes.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent,
    DashboardComponent,
    UploadComponent,
    FileNotesComponent,
    SpinnerComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [ChatbotService, UploadFileService, FileNotesService, SpinnerComponent, NoteDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
