import { Injectable, OnInit,Inject } from '@angular/core';
import { Invoice } from '../../invoice.interface';
import { GetDocumentsService } from '../get documents service/get-documents.service';
import { Subject } from 'rxjs';
import { DocumentsTableComponent } from '../../documents-table/documents.component';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(@Inject(DocumentsTableComponent) private documents : DocumentsTableComponent) { }
 
 
  getSearchNumber(sn : string){
    console.log(sn)
    this.documents.filter(sn);
   }
    
}
