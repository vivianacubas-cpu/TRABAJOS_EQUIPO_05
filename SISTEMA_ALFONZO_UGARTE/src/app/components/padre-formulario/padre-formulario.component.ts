import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Padre } from '../../models/padre.model';

@Component({
  selector: 'app-padre-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './padre-formulario.component.html',
  styleUrl: './padre-formulario.component.css'
})
export class PadreFormularioComponent implements OnChanges {
  @Input() padre: Padre | null = null;
  @Input() modoEdicion = false;
  @Output() guardar = new EventEmitter<Padre>();
  @Output() cancelar = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      telefono: [''],
      correo: ['', Validators.email],
      fechaNacimiento: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['padre'] && this.padre) {
      this.form.patchValue(this.padre);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const datos: Padre = {
      ...this.padre,
      ...this.form.value,
      usuarioCreacion: this.padre?.usuarioCreacion ?? 'admin',
      usuarioActualizacion: 'admin'
    };
    this.guardar.emit(datos);
  }

  onCancelar(): void {
    this.cancelar.emit();
  }
}