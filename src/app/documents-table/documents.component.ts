import { Component, ElementRef, Input } from '@angular/core';
import { AzureBlobStorageService } from '../services/azure storage service/azure-blob-storage.service';
import { GetDocumentsService } from '../services/get documents service/get-documents.service';
import { GenerateDocumentService } from '../services/generate document service/generate-document.service';
import { Invoice } from '../invoice.interface';
import { RefreshService } from '../services/refresh service/refresh.service';
import { MatTableDataSource } from '@angular/material/table';


export interface DocumentLine {
  documentNumber: string;
  documentType: string;
  status: string;
  documentUrl?: string;

}

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss']
})
export class DocumentsTableComponent {
  isRepair = false;
  dataSource: Invoice[];


  GenOn: boolean = false;

  constructor(private blobService: AzureBlobStorageService
    , public _getDocumentsService: GetDocumentsService,
    public _refresh: RefreshService,
    public _generateDocument: GenerateDocumentService) { }


  invoices: Invoice[] | null = null;
  invoicesDataSource: MatTableDataSource<Invoice>;

  ngOnInit() {
    console.log("Table OnInit" + this.invoices);
    this._refresh.getInvoices$().subscribe(newValue => {
      this.invoices = newValue;
      this.invoicesDataSource = new MatTableDataSource(this.invoices || []);

    });
  }





  displayedColumns: string[] = ['dowenloadPdf', 'dowenloadExcel', 'generate', 'documentType', 'invoiceNumber', 'creationDate', 'lastModifiedDate', 'documentTypeFullName', 'currentStatusCode', 'isNewRepair'];


  public downloadFile(name: string, documentType: string) {
    this.blobService.dowenloadFile(name, documentType, blob => {
      const newBlob = new Blob([blob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(newBlob);
      window.open(url);
    })
  }

  public downloadExcelFile(name: string, documentType: string) {
    this.blobService.dowenloadExcelFile(name, documentType, blob => {
      const newBlob = new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(newBlob);
      window.open(url);
    });
  }

  public async generateDocument(id: string, documentType: string) {
    let newReair = false
    if (documentType == 'SC') {
      var tog = <HTMLInputElement>document.getElementById(id);
      newReair = tog.checked
    }
    this.GenOn = true;
    await this._generateDocument.generateDocument(id, documentType, newReair);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await this._refresh.refresh();
    this.GenOn = false;
  }

  public fillTable() {
    this._getDocumentsService.getDocuments();
  }
  filter(val: string) {
    this.invoicesDataSource.filter = val;
    this.invoicesDataSource.data = this.invoicesDataSource.data;
  }
}
