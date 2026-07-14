import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* correoValidoProfe */
/**
 * Página de Contacto: datos de contacto, redes sociales y un
 * formulario reactivo simple para que el usuario envíe un mensaje.
 * (El envío es solo simulado con un mensaje de éxito).
 */
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  contactoForm: FormGroup;
  mostrarExito = false;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(regexCorreo)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /** Getter de acceso rápido a los controles del formulario */
  get f() {
    return this.contactoForm.controls;
  }

  /**
   * Simula el envío del mensaje de contacto: valida, muestra éxito
   * y limpia el formulario.
   */
  onSubmit(): void {
    this.mostrarExito = false;

    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      return;
    }

    this.mostrarExito = true;
    this.contactoForm.reset();
    setTimeout(() => (this.mostrarExito = false), 4000);
  }
}
