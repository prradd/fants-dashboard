import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFantComponent } from './add-fant.component';

describe('AddFantComponent', () => {
  let component: AddFantComponent;
  let fixture: ComponentFixture<AddFantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
