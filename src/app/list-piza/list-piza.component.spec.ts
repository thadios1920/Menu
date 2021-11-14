import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizaComponent } from './list-piza.component';

describe('ListPizaComponent', () => {
  let component: ListPizaComponent;
  let fixture: ComponentFixture<ListPizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
