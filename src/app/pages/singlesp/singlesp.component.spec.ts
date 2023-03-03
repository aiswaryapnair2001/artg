import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglespComponent } from './singlesp.component';

describe('SinglespComponent', () => {
  let component: SinglespComponent;
  let fixture: ComponentFixture<SinglespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglespComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
