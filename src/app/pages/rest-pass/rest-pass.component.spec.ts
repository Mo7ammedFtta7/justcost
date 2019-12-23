import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPassComponent } from './rest-pass.component';

describe('RestPassComponent', () => {
  let component: RestPassComponent;
  let fixture: ComponentFixture<RestPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
