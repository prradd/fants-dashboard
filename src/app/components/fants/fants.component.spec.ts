import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantsComponent } from './fants.component';

describe('FantsComponent', () => {
  let component: FantsComponent;
  let fixture: ComponentFixture<FantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
