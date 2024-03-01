import { Component } from '@angular/core';
import { ListTable } from '../../models/list-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

 data: ListTable[] | undefined;





concurso: any;
demandante: any;
dataHomologacao: any;
validade: any;
  cars!: any[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      { cargo: 'Analista de TI', especialidade: 'Desenvolvimento Web' },
      { cargo: 'Engenheiro Civil', especialidade: 'Construção Civil' },
      { cargo: 'Enfermeiro', especialidade: 'Saúde Pública' }
      // Adicione mais dados conforme necessário
    ];
  }

}

