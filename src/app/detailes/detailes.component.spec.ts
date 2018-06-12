import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesComponent } from './detailes.component';

describe('DetailesComponent', () => {
  let component: DetailesComponent;
  let fixture: ComponentFixture<DetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
