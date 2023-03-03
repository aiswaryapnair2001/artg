import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewtComponent } from './singlewt.component';

describe('SinglewtComponent', () => {
  let component: SinglewtComponent;
  let fixture: ComponentFixture<SinglewtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglewtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglewtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
