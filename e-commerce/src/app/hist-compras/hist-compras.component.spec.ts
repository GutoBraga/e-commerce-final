import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistComprasComponent } from './hist-compras.component';

describe('HistComprasComponent', () => {
  let component: HistComprasComponent;
  let fixture: ComponentFixture<HistComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
