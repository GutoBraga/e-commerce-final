import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyloginComponent } from './bodylogin.component';

describe('BodyloginComponent', () => {
  let component: BodyloginComponent;
  let fixture: ComponentFixture<BodyloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
