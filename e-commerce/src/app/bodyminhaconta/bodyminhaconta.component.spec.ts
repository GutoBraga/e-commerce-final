import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyminhacontaComponent } from './bodyminhaconta.component';

describe('BodyminhacontaComponent', () => {
  let component: BodyminhacontaComponent;
  let fixture: ComponentFixture<BodyminhacontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyminhacontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyminhacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
