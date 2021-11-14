import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupemployeComponent } from './supemploye.component';

describe('SupemployeComponent', () => {
  let component: SupemployeComponent;
  let fixture: ComponentFixture<SupemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupemployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
