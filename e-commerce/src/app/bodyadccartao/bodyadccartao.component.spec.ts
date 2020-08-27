import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyadccartaoComponent } from './bodyadccartao.component';

describe('BodyadccartaoComponent', () => {
  let component: BodyadccartaoComponent;
  let fixture: ComponentFixture<BodyadccartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyadccartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyadccartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
