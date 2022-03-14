import { AppService } from './../app.service';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from '../Product';
// import { FileSaver }  from 'angular-file-saver';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {


  products1: any = [];

  products2: any = [];

  statuses!: SelectItem[];

  clonedCustomer: any;
  customers: any;
  accountType!: SelectItem[];

  constructor(private service: AppService, private messageService: MessageService) { }

  ngOnInit() {
    this.accountType = [{ label: 'Individual', value: 'Individual' }, { label: 'Corporate', value: 'Corporate' }]
    this.customers = [
      { id: 1, customerId: '00119921', customerName: 'Jamilu Collins', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 2, customerId: '00119922', customerName: 'Isah Haruna', customerType: 'Corporate', branchOriginallyCreated: 'Head Office' },
      { id: 3, customerId: '00119923', customerName: 'Jimmy Cheto', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 4, customerId: '00119924', customerName: 'Prince Charles', customerType: 'Corporate', branchOriginallyCreated: 'Head Office' },
      { id: 5, customerId: '00119925', customerName: 'Princess Diana', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 6, customerId: '00119926', customerName: 'Saviour Kika', customerType: 'Corporate', branchOriginallyCreated: 'Head Office' },
      { id: 7, customerId: '00119927', customerName: 'Reinhard Bonnke', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 8, customerId: '00119928', customerName: 'Benny Hinn', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 9, customerId: '00119929', customerName: 'Abel Damina', customerType: 'Corporate', branchOriginallyCreated: 'Head Office' },
      { id: 10, customerId: '00119910', customerName: 'Stephen', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 11, customerId: '00119911', customerName: 'Jamilu Collins', customerType: 'Corporate', branchOriginallyCreated: 'Head Office' },
      { id: 12, customerId: '00119912', customerName: 'Jamilu Collins', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
      { id: 13, customerId: '00119913', customerName: 'Jamilu Collins', customerType: 'Individual', branchOriginallyCreated: 'Head Office' },
    ]

  }



  onRowEditInit(customer: any) {
    console.log(customer);

    this.clonedCustomer[customer.customerId] = { ...customer };
  }

  onRowEditSave(customer: any) {
    delete this.clonedCustomer[customer.customerId];
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Customer is updated' });
  }

  onRowEditCancel(customer: any, index: number) {
    this.customers[index] = this.clonedCustomer[customer.customerId];
    delete this.customers[customer.customerId];
  }

  // exportPdf() {

  //           const doc = new jsPDF.default(0,0);
  //           doc.autoTable(this.exportColumns, this.customers);
  //           doc.save('products.pdf');
  //       }



// exportExcel() {
//     import("xlsx").then(xlsx => {
//         const worksheet = xlsx.utils.json_to_sheet(this.customers);
//         const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//         const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//         this.saveAsExcelFile(excelBuffer, "products");
//     });
// }

// saveAsExcelFile(buffer: any, fileName: string): void {
//     let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     let EXCEL_EXTENSION = '.xlsx';
//     const data: Blob = new Blob([buffer], {
//         type: EXCEL_TYPE
//     });
//     FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
// }

}
