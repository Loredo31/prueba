import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContrasena2Component } from './recuperar-contrasena2.component';

describe('RecuperarContrasena2Component', () => {
  let component: RecuperarContrasena2Component;
  let fixture: ComponentFixture<RecuperarContrasena2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarContrasena2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperarContrasena2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
