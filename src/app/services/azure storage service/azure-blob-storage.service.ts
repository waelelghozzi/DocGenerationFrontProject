import { Injectable } from '@angular/core';
import { BlobServiceClient,ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {

  accountName="sadocumentstorage2"
  containerName="output"

  constructor() { }

  private containerClient(): ContainerClient {
    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net/`).getContainerClient(this.containerName);
  }

  public dowenloadFile (id: string,documentType:string, handler:(blob:Blob)=>void){
   var url="";
    if (documentType=="PI"){
      url=`PurchaseInvoices/PI_${id}.pdf`
    }else if (documentType=="IL"){
      url=`InformationLetters/IL_${id}.pdf`
    }else if (documentType=="SI"){
      url=`SalesInvoices/SI_${id}.pdf`
    }else if (documentType=="SC"){
      url=`SummaryStatementsPDF/SSP_${id}.pdf`
    }else if (documentType=="SSE"){
      url=`SummaryStatementsExcel/SSE_${id}.pdf`
    }
    
  
    const blobClient= this.containerClient().getBlobClient(url);
    blobClient.download().then(resp=>{
      resp.blobBody?.then(blob=>{
        console.log(blob)
        handler(blob)
      })
      
    }
    
    )
    
  }



  public dowenloadExcelFile (id: string,documentType:string, handler:(blob:Blob)=>void){
    var url="";
     
    if (documentType=="SC"){
       url=`SummaryStatementsExcel/SSE_${id}.xlsx`
     }
     
   
     const blobClient= this.containerClient().getBlobClient(url);
     blobClient.download().then(resp=>{
       resp.blobBody?.then(blob=>{
         console.log(blob)
         handler(blob)
       })
       
     }
     
     )
     
   }
}
