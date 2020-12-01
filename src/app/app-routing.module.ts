import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InterfazComponent} from './pages/interfaz/interfaz.component'


const routes: Routes = [
  {path: '', component:RegistroComponent },
  {path: 'interfaz', component:  InterfazComponent},
  {path: '**', pathMatch:'full', redirectTo:'' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
