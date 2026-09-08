import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Padre } from '../models/padre.model';

@Injectable({
  providedIn: 'root'
})
export class PadreService {
  private apiUrl = 'http://localhost:8080/api/padres';
  private readonly storageKey = 'alfonso-ugarte-padres';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Padre[]> {
    return this.http.get<Padre[]>(this.apiUrl).pipe(
      catchError(() => of(this.leerLocalmente()))
    );
  }

  listarPorId(id: number): Observable<Padre> {
    return this.http.get<Padre>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const padre = this.leerLocalmente().find((item) => item.id === id);
        return padre ? of(padre) : throwError(() => new Error('Padre no encontrado'));
      })
    );
  }

  listarPorEstado(estado: boolean): Observable<Padre[]> {
    return this.http.get<Padre[]>(`${this.apiUrl}/estado/${estado}`);
  }

  crear(padre: Padre): Observable<Padre> {
    return this.http.post<Padre>(this.apiUrl, padre).pipe(
      catchError(() => {
        const nuevo = { ...padre, id: Date.now(), estado: true };
        const padres = [nuevo, ...this.leerLocalmente()];
        localStorage.setItem(this.storageKey, JSON.stringify(padres));
        return of(nuevo);
      })
    );
  }

  editar(id: number, padre: Padre): Observable<Padre> {
    return this.http.put<Padre>(`${this.apiUrl}/${id}`, padre).pipe(
      catchError(() => {
        const actualizados = this.leerLocalmente().map((item) =>
          item.id === id ? { ...padre, id } : item
        );
        const actualizado = actualizados.find((item) => item.id === id);
        localStorage.setItem(this.storageKey, JSON.stringify(actualizados));
        return actualizado
          ? of(actualizado)
          : throwError(() => new Error('Padre no encontrado'));
      })
    );
  }

  eliminarLogico(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/eliminar/${id}`, {}).pipe(
      catchError(() => {
        this.actualizarEstadoLocal(id, false);
        return of(void 0);
      })
    );
  }

  restaurarLogico(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/restaurar/${id}`, {}).pipe(
      catchError(() => {
        this.actualizarEstadoLocal(id, true);
        return of(void 0);
      })
    );
  }

  private leerLocalmente(): Padre[] {
    const guardados = localStorage.getItem(this.storageKey);
    if (!guardados) {
      return [];
    }

    try {
      return JSON.parse(guardados) as Padre[];
    } catch {
      return [];
    }
  }

  private actualizarEstadoLocal(id: number, estado: boolean): void {
    const padres = this.leerLocalmente().map((padre) =>
      padre.id === id ? { ...padre, estado } : padre
    );
    localStorage.setItem(this.storageKey, JSON.stringify(padres));
  }
}