import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaquesCaroselComponent } from './destaques-carosel.component';

describe('DestaquesCaroselComponent', () => {
  let component: DestaquesCaroselComponent;
  let fixture: ComponentFixture<DestaquesCaroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestaquesCaroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquesCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
