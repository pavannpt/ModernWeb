import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgprimeComponent } from './ngprime.component';

describe('NgprimeComponent', () => {
  let component: NgprimeComponent;
  let fixture: ComponentFixture<NgprimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgprimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
