import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleweComponent } from './singlewe.component';

describe('SingleweComponent', () => {
  let component: SingleweComponent;
  let fixture: ComponentFixture<SingleweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
