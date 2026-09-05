import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private estudiantes: Estudiante[] = [
    { id: 1, codigo: 'AU-001', nombres: 'María Fernanda', apellidos: 'López Torres', grado: '3° Secundaria', seccion: 'A', edad: 14 },
    { id: 2, codigo: 'AU-002', nombres: 'Carlos Alberto', apellidos: 'Sánchez Díaz', grado: '4° Secundaria', seccion: 'B', edad: 15 },
    { id: 3, codigo: 'AU-003', nombres: 'Andrea Lucía', apellidos: 'García Pérez', grado: '5° Secundaria', seccion: 'A', edad: 16 },
    { id: 4, codigo: 'AU-004', nombres: 'Diego Mateo', apellidos: 'Ramírez Ruiz', grado: '2° Secundaria', seccion: 'C', edad: 13 },
    { id: 5, codigo: 'AU-005', nombres: 'Valeria Sofía', apellidos: 'Flores Castillo', grado: '1° Secundaria', seccion: 'B', edad: 12 }
  ];

  private estudiantesSubject = new BehaviorSubject<Estudiante[]>([...this.estudiantes]);
  estudiantes$ = this.estudiantesSubject.asObservable();

  getEstudiantes(): Estudiante[] {
    return [...this.estudiantes];
  }

  getEstudiantePorId(id: number): Estudiante | undefined {
    return this.estudiantes.find((estudiante) => estudiante.id === id);
  }

  crear(estudiante: Estudiante): Estudiante {
    const nuevo = { ...estudiante, id: Date.now() };
    this.estudiantes = [nuevo, ...this.estudiantes];
    this.estudiantesSubject.next([...this.estudiantes]);
    return nuevo;
  }

  actualizar(estudiante: Estudiante): Estudiante | undefined {
    const index = this.estudiantes.findIndex((item) => item.id === estudiante.id);
    if (index === -1) {
      return undefined;
    }

    this.estudiantes[index] = { ...estudiante };
    this.estudiantesSubject.next([...this.estudiantes]);
    return this.estudiantes[index];
  }

  eliminar(id: number): boolean {
    const existe = this.estudiantes.some((estudiante) => estudiante.id === id);
    if (!existe) {
      return false;
    }

    this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.id !== id);
    this.estudiantesSubject.next([...this.estudiantes]);
    return true;
  }

  getEstadisticas() {
    const porGrado = new Map<string, number>();
    const porSeccion = new Map<string, number>();

    this.estudiantes.forEach((estudiante) => {
      porGrado.set(estudiante.grado, (porGrado.get(estudiante.grado) ?? 0) + 1);
      porSeccion.set(estudiante.seccion, (porSeccion.get(estudiante.seccion) ?? 0) + 1);
    });

    return {
      total: this.estudiantes.length,
      grados: Object.fromEntries(porGrado),
      secciones: Object.fromEntries(porSeccion)
    };
  }
}
