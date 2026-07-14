import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { ProductoService } from '../../services/producto.service';
import { Compra } from '../../models/compra.model';
import { Producto } from '../../models/producto.model';

/**
 * Componente de Compra: muestra el catálogo de productos, el formulario
 * reactivo para registrar una compra y, debajo, el listado de compras
 * registradas (actualizado automáticamente mediante el observable compras$).
 */
@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {
  compraForm: FormGroup;
  productos: Producto[] = [];
  compras: Compra[] = [];
  mostrarExito = false;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private productoService: ProductoService
  ) {
    this.productos = this.productoService.obtenerProductos();

    // Formulario reactivo con validaciones según la pauta
    this.compraForm = this.fb.group({
      producto: ['', [Validators.required, Validators.minLength(3)]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    // Se suscribe al observable para mantener el listado siempre actualizado
    this.storageService.compras$.subscribe((compras) => {
      this.compras = compras;
    });
  }

  /** Getter de acceso rápido a los controles del formulario */
  get f() {
    return this.compraForm.controls;
  }

  /**
   * Precarga el nombre del producto en el formulario cuando el usuario
   * hace clic en "Comprar" desde una card del catálogo, y hace scroll
   * hasta el formulario.
   */
  seleccionarProducto(producto: Producto): void {
    this.compraForm.patchValue({ producto: producto.nombre });
    const formSection = document.getElementById('formulario-compra');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Envía el formulario: si es válido, arma el objeto Compra,
   * lo guarda en localStorage, muestra mensaje de éxito y limpia el form.
   */
  onSubmit(): void {
    this.mostrarExito = false;

    if (this.compraForm.invalid) {
      this.compraForm.markAllAsTouched();
      return;
    }

    const nuevaCompra: Compra = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      producto: this.compraForm.value.producto,
      cantidad: this.compraForm.value.cantidad,
      direccion: this.compraForm.value.direccion,
      email: this.compraForm.value.email,
      fecha: new Date().toISOString(),
    };

    this.storageService.guardarCompra(nuevaCompra);

    this.mostrarExito = true;
    this.compraForm.reset({ producto: '', cantidad: 1, direccion: '', email: '' });

    // Oculta el mensaje de éxito automáticamente después de unos segundos
    setTimeout(() => (this.mostrarExito = false), 4000);
  }

  /**
   * Elimina una compra puntual por id.
   */
  eliminar(id: string): void {
    this.storageService.eliminarCompra(id);
  }

  /**
   * Vacía todas las compras registradas, previa confirmación del usuario.
   */
  vaciarTodo(): void {
    if (this.compras.length === 0) {
      return;
    }
    const confirmado = confirm('¿Seguro que deseas eliminar todas las compras?');
    if (confirmado) {
      this.storageService.vaciarCompras();
    }
  }
}