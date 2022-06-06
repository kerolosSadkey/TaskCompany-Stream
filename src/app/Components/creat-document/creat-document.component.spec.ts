import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatDocumentComponent } from './creat-document.component';

describe('CreatDocumentComponent', () => {
  let component: CreatDocumentComponent;
  let fixture: ComponentFixture<CreatDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
