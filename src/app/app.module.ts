import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InterfazComponent } from './pages/interfaz/interfaz.component';
import { InterfazNoVisibleComponent } from './pages/interfaz/interfaz-no-visible/interfaz-no-visible.component';
import { NavbarComponent } from './pages/interfaz/navbar/navbar.component';
import { PrincipalComponent } from './pages/interfaz/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InterfazComponent,
    InterfazNoVisibleComponent,
    NavbarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
