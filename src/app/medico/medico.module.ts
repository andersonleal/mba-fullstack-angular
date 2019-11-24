import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListarComponent} from './components/listar/listar.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MedicoModule { }
