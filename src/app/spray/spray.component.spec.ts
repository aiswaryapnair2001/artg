import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprayComponent } from './spray.component';

describe('SprayComponent', () => {
  let component: SprayComponent;
  let fixture: ComponentFixture<SprayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
