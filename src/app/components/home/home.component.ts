import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ListTable } from '../../models/list-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Modificado para styleUrls
})
export class HomeComponent implements OnInit {

  selectedValue: string = ""; // Variable to store the selected value

  regionalizado: string = "sim"; // Valor inicial

onCheckboxChange(value: string) {
  this.regionalizado = value;
}


  validade: number | undefined;

  isInvalidInput() {
    return this.validade === undefined || this.validade < 1 || this.validade > 12;
}

  value: string | undefined;

  selectedProduct: any;
  products: any[] | undefined;
  rangeDates: any;
  dataHomologacao: any;
  demandantes: any[] | undefined;
  selectedDemandante: any;
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
      pcd: 4, // Corrigido para pcdVI
      total: 44,
      amplaCR: 21,
      pcdCR: 4,
      totalCR: 25
    },
    {
      cargo: 'Gestor Governamental',
      especialidade: 'Direito',
      amplaVI: 35,
      pcd: 1, // Corrigido para pcdVI
      total: 36,
      amplaCR: 15,
      pcdCR: 1,
      totalCR: 16
    }
  ];

  cols: any[] = [
    { field: 'cargo', header: 'Cargo' },
    { field: 'especialidade', header: 'Especialidade' },
    { field: 'amplaVI', header: 'Ampla' }, // Corrigido para 'amplaVI'
    { field: 'pcdVI', header: 'PCD' }, // Corrigido para 'pcdVI'
    { field: 'total', header: 'Total' },
    { field: 'amplaCR', header: 'Ampla (CR)' },
    { field: 'pcdCR', header: 'PCD (CR)' },
    { field: 'totalCR', header: 'Total (CR)' }
  ];
concurso: any;
val: any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.demandantes = [
      { demandante: 'Secretaria de Estado da Administração - SEAD' },

    ];
  }

  editRow(_t85: any) {
    throw new Error('Method not implemented.');
  }

  deleteRow(index: number) {
    this.vagas.splice(index, 1);
  }

  adicionarLinha() {
    this.vagas.push({
      cargo: '',
      especialidade: '',
      amplaVI: null,
      pcdVI: null,
      total: null,
      amplaCR: null,
      pcdCR: null,
      totalCR: null
    });
  }

}
