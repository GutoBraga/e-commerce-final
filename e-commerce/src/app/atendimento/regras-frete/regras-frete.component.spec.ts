import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasFreteComponent } from './regras-frete.component';

describe('RegrasFreteComponent', () => {
  let component: RegrasFreteComponent;
  let fixture: ComponentFixture<RegrasFreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasFreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
