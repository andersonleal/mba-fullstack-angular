import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Medico} from '../../model/medico';
import {NgForm} from '@angular/forms';
import {MedicoService} from '../../service/medico.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  medico: Medico;
  title: string;

  constructor(route: ActivatedRoute,
              private router: Router,
              private medicoService: MedicoService) {
    this.medico = route.snapshot.data.medico;
    this.title = this.medico.id ? 'Atualizar Médico' : 'Cadastrat Médico';
  }

  ngOnInit() {
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(form: NgForm): void {
    if (form.valid) {
      this.medicoService.salvar(this.medico)
        .subscribe(() => this.voltar());
    }
  }

}
