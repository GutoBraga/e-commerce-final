import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasDescricaoComponent } from './caracteristicas-descricao.component';

describe('CaracteristicasDescricaoComponent', () => {
  let component: CaracteristicasDescricaoComponent;
  let fixture: ComponentFixture<CaracteristicasDescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristicasDescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
