import { Injectable, OnInit } from '@angular/core';
import { Invoice } from '../../invoice.interface';
import { GetDocumentsService } from '../get documents service/get-documents.service';
import { Subject } from 'rxjs';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})


export class RefreshService implements OnInit {
  constructor(private getDocumentsService: GetDocumentsService) {} 
   private invoices: Invoice[] | null = null;
   private invoicesSubject = new Subject<Invoice[]| null>();
   
  
  ngOnInit(){     
      this.getDocumentsService.getDocuments().subscribe(response => {
      this.invoices = response.body;
      this.invoicesSubject.next(this.invoices);
    }); 
  } 
  
  async refresh(): Promise<boolean>{
    await this.ngOnInit();
    return false;
  }

  getInvoices$() 
  { 
    return this.invoicesSubject.asObservable();
  }
  
}