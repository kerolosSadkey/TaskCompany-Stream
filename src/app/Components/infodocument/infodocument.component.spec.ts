import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodocumentComponent } from './infodocument.component';

describe('InfodocumentComponent', () => {
  let component: InfodocumentComponent;
  let fixture: ComponentFixture<InfodocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
