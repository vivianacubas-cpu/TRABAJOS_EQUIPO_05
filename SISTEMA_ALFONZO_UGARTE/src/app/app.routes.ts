import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio/inicio-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { EstudiantesPageComponent } from './pages/estudiantes/estudiantes-page.component';
import { RegistrarEstudiantePageComponent } from './pages/registrar-estudiante/registrar-estudiante-page.component';
import { EditarEstudiantePageComponent } from './pages/editar-estudiante/editar-estudiante-page.component';
import { DetalleEstudiantePageComponent } from './pages/detalle-estudiante/detalle-estudiante-page.component';
import { NosotrasPageComponent } from './pages/nosotras/nosotras-page.component';
import { ContactoPageComponent } from './pages/contacto/contacto-page.component';
import { PadresComponent } from './pages/padres/padres.component';
import { RegistrarPadreComponent } from './pages/registrar-padre/registrar-padre.component';
import { EditarPadreComponent } from './pages/editar-padre/editar-padre.component';
import { DetallePadreComponent } from './pages/detalle-padre/detalle-padre.component';

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
  { path: 'padres', component: PadresComponent },
  { path: 'padres/nuevo', component: RegistrarPadreComponent },
  { path: 'padres/editar/:id', component: EditarPadreComponent },
  { path: 'padres/:id', component: DetallePadreComponent },
  { path: '**', redirectTo: 'inicio' }
];
