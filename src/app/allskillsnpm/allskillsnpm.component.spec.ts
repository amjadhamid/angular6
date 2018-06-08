import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllskillsnpmComponent } from './allskillsnpm.component';

describe('AllskillsnpmComponent', () => {
  let component: AllskillsnpmComponent;
  let fixture: ComponentFixture<AllskillsnpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllskillsnpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllskillsnpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
