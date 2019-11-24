import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-angular';
  removerTitulo = false;


  toggleRemoverTitulo() {
    this.removerTitulo = !this.removerTitulo;
  }
}
