import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  usuarioActual = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuarioActual = this.authService.obtenerUsuarioActual() || 'rockero';
  }
}
