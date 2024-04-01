import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNotesComponent } from './file-notes.component';

describe('FileNotesComponent', () => {
  let component: FileNotesComponent;
  let fixture: ComponentFixture<FileNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
