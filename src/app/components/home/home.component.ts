import { Component } from '@angular/core';
import { ListTable } from '../../models/list-table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
editRow(_t85: any) {
throw new Error('Method not implemented.');
}
deleteRow(_t85: any) {
throw new Error('Method not implemented.');
}

 data: ListTable[] | undefined;

 vagas: any[] = [
  {
    cargo: 'Analista de Gest. Governamental',
    especialidade: 'Téc. da Informação',
    amplaVI: 30,
    pcdVI: 2,
    total: 32,
    amplaCR: 32,
    pcdCR: 2,
    totalCR: 34
  },
  {
    cargo: 'Analista de Gest. Governamental',
    especialidade: 'Engenharia Civil',
    amplaVI: 40,
    pcd: 4,
    total: 44,
    amplaCR: 21,
    pcdCR: 4,
    totalCR: 25
  },
  {
    cargo: 'Gestor Governamental',
    especialidade: 'Direito',
    amplaVI: 35,
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

