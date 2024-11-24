import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login service/login.service';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class GenerateDocumentService {

  constructor(public _loginService: LoginService,private http: HttpClient) { }

  async generateDocument(id: string, documentType: string,NewRepair:boolean) {
    var dType = "";
    if (documentType == "PI") {
      dType = "purchase invoice"
    } else if (documentType == "IL") {
      dType = "information letter"
    } else if (documentType == "SI") {
      dType = "Sales Invoice"
    } else if (documentType == "SC") {
      dType = "Summary Statement PDF"
    }



    const invoiceData = {
      invoiceId: id,
      invoiceType: dType,
      isNewRepair: NewRepair,
      UserName: this._loginService.UserName,
      Password: this._loginService.Password
    };
    console.log( invoiceData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('http://localhost:7105/api/Trigger', invoiceData, httpOptions)
      .subscribe(
        () => { 
                console.log('Document uploaded successfully'); },
        (error) => { console.error('Error uploading document:', error); }
      );

    await new Promise(resolve => setTimeout(resolve, 15000));

    if (documentType == "SC") {
      dType = "Summary Statement Excel";
      invoiceData.invoiceType = dType;

      this.http.post('http://localhost:7105/api/Trigger', invoiceData, httpOptions)
        .subscribe(
          () => { console.log('Document uploaded successfully'); },
          (error) => { console.error('Error uploading document:', error); }
        );
    }




  }
}