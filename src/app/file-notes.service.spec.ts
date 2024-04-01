import { TestBed } from '@angular/core/testing';

import { FileNotesService } from './file-notes.service';

describe('FileNotesService', () => {
  let service: FileNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
