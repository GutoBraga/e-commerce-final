import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhePedidoComponent } from './acompanhe-pedido.component';

describe('AcompanhePedidoComponent', () => {
  let component: AcompanhePedidoComponent;
  let fixture: ComponentFixture<AcompanhePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
