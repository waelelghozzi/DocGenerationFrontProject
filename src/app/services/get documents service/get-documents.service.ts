import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/invoice.interface';


@Injectable({
  providedIn: 'root'
})


export class GetDocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<HttpResponse<Invoice[]>> { 
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), lazyUpdate: true,timeout: 500000000000};
     return this.http.get<Invoice[]>('https://localhost:7296/api/invoices/GetDocsForInterface/GenerateFromDB', { observe: 'response', headers: httpOptions.headers });
    }
 
  
}

