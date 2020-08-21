import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyentregaComponent } from './bodyentrega.component';

describe('BodyentregaComponent', () => {
  let component: BodyentregaComponent;
  let fixture: ComponentFixture<BodyentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
