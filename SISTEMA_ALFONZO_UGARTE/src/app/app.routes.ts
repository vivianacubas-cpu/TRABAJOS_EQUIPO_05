import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio/inicio-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { EstudiantesPageComponent } from './pages/estudiantes/estudiantes-page.component';
import { RegistrarEstudiantePageComponent } from './pages/registrar-estudiante/registrar-estudiante-page.component';
import { EditarEstudiantePageComponent } from './pages/editar-estudiante/editar-estudiante-page.component';
import { DetalleEstudiantePageComponent } from './pages/detalle-estudiante/detalle-estudiante-page.component';
import { NosotrasPageComponent } from './pages/nosotras/nosotras-page.component';
import { ContactoPageComponent } from './pages/contacto/contacto-page.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'estudiantes', component: EstudiantesPageComponent },
  { path: 'estudiantes/nuevo', component: RegistrarEstudiantePageComponent },
  { path: 'estudiantes/editar/:id', component: EditarEstudiantePageComponent },
  { path: 'estudiantes/:id', component: DetalleEstudiantePageComponent },
  { path: 'nosotras', component: NosotrasPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: '**', redirectTo: 'inicio' }
];
