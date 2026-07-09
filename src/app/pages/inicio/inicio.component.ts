import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Componente de Login ("Inicio").
 * Valida usuario/contraseña obligatorios y credenciales fijas (admin/1234).
 * Si son correctas redirige automáticamente al formulario de compras.
 */
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  loginForm: FormGroup;
  mostrarError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Formulario reactivo con validaciones obligatorias
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /** Getter de acceso rápido a los controles desde el template */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Intenta iniciar sesión. Si las credenciales son correctas,
   * navega automáticamente al formulario de compra.
   */
  onSubmit(): void {
    this.mostrarError = false;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { usuario, password } = this.loginForm.value;
    const esValido = this.authService.login(usuario, password);

    if (esValido) {
      this.router.navigate(['/compra']);
    } else {
      this.mostrarError = true;
    }
  }
}
