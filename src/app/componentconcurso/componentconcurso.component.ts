import { Component } from '@angular/core';
import { ListTable } from '../models/list-table';
import { Concurso } from '../models/list-table copy';

@Component({
  selector: 'app-componentconcurso',
  templateUrl: './componentconcurso.component.html',
  styleUrl: './componentconcurso.component.css'
})
export class ComponentconcursoComponent {
deleteRow(_t97: any) {
throw new Error('Method not implemented.');
}
editRow(_t97: any) {
throw new Error('Method not implemented.');
}

  ngOnInit() {

    this.tableData = this.tableData.filter(row => Object.values(row).some(value => value !== null && value !== ''));
  }


  tableData: Concurso[] = [
    {
    cargo: "Analista de Gest. Governamental",
    especialidade: "Tec. da Informação",
    AmplaVI: 30,
    PCDVI: 2,
    TotalVI: 32,
    AmplaCR: 32,
    PCDCR: 2,
    TotalCR: 34,
    Total: 14
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
      Total: 19
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
        Total: 89
        },
  ];
  cols: any[] | undefined;
}
