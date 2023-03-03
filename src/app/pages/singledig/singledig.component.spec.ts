import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledigComponent } from './singledig.component';

describe('SingledigComponent', () => {
  let component: SingledigComponent;
  let fixture: ComponentFixture<SingledigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
