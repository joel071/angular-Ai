import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { FileNotesComponent } from './file-notes/file-notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'chatBot', component: ChatBotComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'fileNotes', component: FileNotesComponent},
  { path: 'note-detail/:description', component: NoteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }