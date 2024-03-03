import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ListTable } from '../../models/list-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Modificado para styleUrls
})
export class HomeComponent implements OnInit {

  addRow() {
    // Adiciona uma nova linha com valores padrão
    this.tableData.push({
      cargo: "",
      especialidade: "",
      AmplaVI: 0,
      PCDVI: 0,
      TotalVI: 0,
      AmplaCR: 0,
      PCDCR: 0,
      TotalCR: 0
    });
  }


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
    AmplaVI: 30,
    PCDVI: 2,
    TotalVI: 32,
    AmplaCR: 32,
    PCDCR: 2,
    TotalCR: 34,
    },
    {
      cargo: "Analista de Gest. Governamental",
      especialidade: "Tec. da Informação",
      AmplaVI: 40,
      PCDVI: 4,
      TotalVI: 44,
      AmplaCR: 36,
      PCDCR: 2,
      TotalCR: 25,
      },
      {
        cargo: "Gestor Governamental",
        especialidade: "Direito",
        AmplaVI: 35,
        PCDVI: 1,
        TotalVI: 36,
        AmplaCR: 15,
        PCDCR: 1,
        TotalCR: 16,
        },
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

    this.tableData = this.tableData.filter(row => Object.values(row).some(value => value !== null && value !== ''));

    this.demandantes = [
      { demandante: 'Secretaria de Estado da Administração - SEAD' },
      { demandante: 'Secretaria de Estado - Portal Goias' },

    ];



    this.cols = [
      { field: 'cargo', header: 'Cargo' },
      { field: 'especialidade', header: 'Especialidade' },
      { field: 'vagasImediatasAmpla', header: 'Ampla' },
      { field: 'vagasImediatasPCD', header: 'PCD' },
      { field: 'vagasImediatasTotal', header: 'Total', calculate: (data: { vagasImediatasAmpla: any; vagasImediatasPCD: any; }) => data.vagasImediatasAmpla + data.vagasImediatasPCD },
      { field: 'vagasCRAmpla', header: 'Ampla' },
      { field: 'vagasCRPCD', header: 'PCD' },
      { field: 'vagasCRTotal', header: 'Total', calculate: (data: { vagasCRAmpla: any; vagasCRPCD: any; }) => data.vagasCRAmpla + data.vagasCRPCD },
      { field: 'total', header: 'Total', calculate: (data: { vagasImediatasTotal: any; vagasCRTotal: any; }) => data.vagasImediatasTotal + data.vagasCRTotal }
    ];


  }



  }

