import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterentregaComponent } from './footerentrega.component';

describe('FooterentregaComponent', () => {
  let component: FooterentregaComponent;
  let fixture: ComponentFixture<FooterentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
