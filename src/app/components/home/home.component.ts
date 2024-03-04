import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ListTable } from '../../models/list-table';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Modificado para styleUrls
})
export class HomeComponent implements OnInit {

onSave() {
throw new Error('Method not implemented.');
}

  vagasForm: FormGroup;
  cargos: any[] | undefined;
  especialidades: any[] | undefined;


  toggleRowStatus(row: any) {
    // Este método será chamado sempre que o switch for alternado
    // Não é necessário fazer mais nada se a sua única ação é aplicar a classe CSS
  }

  value4: number = 50;

  addRow() {
    // Adiciona uma nova linha com valores padrão
    this.tableData.push({
      cargo: "Analista de Gest. Governamental",
      especialidade: "tec. da informação",
      AmplaVI: 11,
      PCDVI: 11,
      TotalVI: 11,
      AmplaCR: 11,
      PCDCR: 11,
      TotalCR: 11,
      status: true
    });
  }

  editMode: boolean = true;

  toggleEditMode() {
    this.editMode = !this.editMode;
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
    status: true
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
      status: true
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
        status: true
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

  //cargos: any[] | undefined;
  selecionarCargos: any;

  tipoCargo: any[] | undefined;
  selecionarTipoCargos: any;

  data: ListTable[] | undefined;

concurso: any;
val: any;

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {
    this.vagasForm = this.fb.group({
      cargo: [''],
      especialidade: [''],
      vagasImediatasAmpla: [''],
      vagasImediatasPCD: [''],
      vagasCRAmpla: [''],
      vagasCRPCD: ['']
    });
  }

  ngOnInit() {



    this.especialidades = [
      { name: 'Tec. da Informação', code: 'TI' },
    ];

    this.cargos = [
      { name: 'Analista de Gest. Governamental', code: 'AGG' },
    ];

    this.tableData = this.tableData.filter(row => Object.values(row).some(value => value !== null && value !== ''));

    this.demandantes = [
      { demandante: 'Secretaria de Estado da Administração - SEAD' },
      { demandante: 'Secretaria de Estado - Portal Goias' },

    ];

//    this.cargos = [
//      { cargos: 'Analista de Gest. Governamental' },
//      { cargos: 'Analista de Requisitos' },

 //   ];

    this.tipoCargo = [
      { tipoCargo: 'Analista de Gest. Governamental' },
      { tipoCargo: 'Analista de Requisitos' },

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



