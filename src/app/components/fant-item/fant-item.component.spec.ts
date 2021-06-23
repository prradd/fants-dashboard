import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantItemComponent } from './fant-item.component';

describe('FantItemComponent', () => {
  let component: FantItemComponent;
  let fixture: ComponentFixture<FantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


