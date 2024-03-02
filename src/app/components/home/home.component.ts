import { Component } from '@angular/core';
import { ListTable } from '../../models/list-table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

 data: ListTable[] | undefined;

 vagas: any[] = [
  {
    cargo: 'Analista de Gest. Governamental',
    especialidade: 'Téc. da Informação',
    ampla: 30,
    pcd: 2,
    total: 32,
    amplaCR: 32,
    pcdCR: 2,
    totalCR: 34
  },
  {
    cargo: 'Analista de Gest. Governamental',
    especialidade: 'Engenharia Civil',
    ampla: 40,
    pcd: 4,
    total: 44,
    amplaCR: 21,
    pcdCR: 4,
    totalCR: 25
  },
  {
    cargo: 'Gestor Governamental',
    especialidade: 'Direito',
    ampla: 35,
    pcd: 1,
    total: 36,
    amplaCR: 15,
    pcdCR: 1,
    totalCR: 16
  }
];

cols: any[] = [
  { field: 'cargo', header: 'Cargo' },
  { field: 'especialidade', header: 'Especialidade' },
  { field: 'ampla', header: 'Ampla' },
  { field: 'pcd', header: 'PCD' },
  { field: 'total', header: 'Total' },
  { field: 'amplaCR', header: 'Ampla (CR)' },
  { field: 'pcdCR', header: 'PCD (CR)' },
  { field: 'totalCR', header: 'Total (CR)' }
];



concurso: any;
demandante: any;
dataHomologacao: any;
validade: any;
  cars!: any[];

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.cars = [
      { cargo: 'Analista de TI', especialidade: 'Desenvolvimento Web' },
      { cargo: 'Engenheiro Civil', especialidade: 'Construção Civil' },
      { cargo: 'Enfermeiro', especialidade: 'Saúde Pública' }
      // Adicione mais dados conforme necessário
    ];
  }

}

