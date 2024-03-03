import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ListTable } from '../../models/list-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Modificado para styleUrls
})
export class HomeComponent implements OnInit {



  deleteRow(row: ListTable) {
    const index = this.tableData.indexOf(row);
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }

  tableData: ListTable[] = [
    {
      cargo: "Analista de Gest. Governamental",
    especialidade: "Tec. da Informação",
    vagasImediatasAmpla: 30,
    vagasImediatasPCD: 1,
    vagasImediatasTotal: 31,
    vagasCRAmpla: 30,
    vagasCRPCD: 1,
    vagasCRTotal: 31,
    total: 62
    },
    {
      cargo: "Analista de Gest. Governamental",
      especialidade: "Engenharia Civil",
      vagasImediatasAmpla: 40,
      vagasImediatasPCD: 2,
      vagasImediatasTotal: 42,
      vagasCRAmpla: 40,
      vagasCRPCD: 2,
      vagasCRTotal: 42,
      total: 84
    },
    {
      cargo: "Gestor Governamental",
      especialidade: "Direito",
      vagasImediatasAmpla: 35,
      vagasImediatasPCD: 3,
      vagasImediatasTotal: 38,
      vagasCRAmpla: 35,
      vagasCRPCD: 3,
      vagasCRTotal: 38,
      total: 76
    }
  ];
  cols: any[] | undefined;

  selectedValue: string = ""; // Variable to store the selected value

  regionalizado: string = "sim"; // Valor inicial
ampla: any;
especialidade: any;
cargo: any;
pcd: any;
total: any;
customers: any[] | undefined;
i: any;
input: any;

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

concurso: any;
val: any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {

    this.demandantes = [
      { demandante: 'Secretaria de Estado da Administração - SEAD' },

    ];



    this.cols = [
      { field: 'cargo', header: 'Cargo' },
      { field: 'especialidade', header: 'Especialidade' },
      { field: 'vagasImediatasAmpla', header: 'Vagas Imediatas<br>Ampla' },
      { field: 'vagasImediatasPCD', header: 'Vagas Imediatas<br>PCD' },
      { field: 'vagasImediatasTotal', header: 'Vagas Imediatas<br>Total', calculate: (data: { vagasImediatasAmpla: any; vagasImediatasPCD: any; }) => data.vagasImediatasAmpla + data.vagasImediatasPCD },
      { field: 'vagasCRAmpla', header: 'Vagas CR<br>Ampla' },
      { field: 'vagasCRPCD', header: 'Vagas CR<br>PCD' },
      { field: 'vagasCRTotal', header: 'Vagas CR<br>Total', calculate: (data: { vagasCRAmpla: any; vagasCRPCD: any; }) => data.vagasCRAmpla + data.vagasCRPCD },
      { field: 'total', header: 'Total', calculate: (data: { vagasImediatasTotal: any; vagasCRTotal: any; }) => data.vagasImediatasTotal + data.vagasCRTotal }
    ];

    this.addRow();
  }

  addRow() {
    this.tableData.push({
      cargo: '',
      especialidade: '',
      vagasImediatasAmpla: 0,
      vagasImediatasPCD: 0,
      vagasImediatasTotal: 0,
      vagasCRAmpla: 0,
      vagasCRPCD: 0,
      vagasCRTotal: 0,
      total: 0
    });
  }

  }

