import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { HeaderMainComponent } from './header-main.component';	
import { HistComprasComponent } from './hist-compras.component';


  let component: HeaderMainComponent;	  
  let component: HistComprasComponent;
  let fixture: ComponentFixture<HeaderMainComponent>;	  
  let fixture: ComponentFixture<HistComprasComponent>;


  beforeEach(async(() => {	 
    TestBed.configureTestingModule({
      declarations: [ HeaderMainComponent ],    
      declarations: [ HistComprasComponent ]
    })	  
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMainComponent);	    
    fixture = TestBed.createComponent(HistComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
