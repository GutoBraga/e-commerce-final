import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderentregaComponent } from './headerentrega.component';

describe('HeaderentregaComponent', () => {
  let component: HeaderentregaComponent;
  let fixture: ComponentFixture<HeaderentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
