import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idocument } from '../Models/idocument';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private httpoption ={}
  constructor(private httpclient:HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }
//#region [Product Services]
GetAllDocument(): Observable<Idocument[]> {
  return this.httpclient.get<Idocument[]>(`${environment.APIBaseURL}/document/GetAllDocument`);
}

GetDocumentbyId(docId:number): Observable<Idocument> {
  return this.httpclient.get<Idocument>(`${environment.APIBaseURL}/document/GetDocumentbyId?id=${docId}`);
}
AddDocument( name:string, date:Date , due_Date:Date , priorityId:number,formdata:any):Observable<Idocument> {

  return this.httpclient.post<Idocument>(`${environment.APIBaseURL}/document/AddDocument?name=${name}&date=${date}&due_Date=${due_Date}&priorityId=${priorityId}`,formdata );

}

UpdateDocument(id:number ,name:string, date:Date , due_Date:Date , priorityId:number,formdata:any):Observable<Idocument> {

  return this.httpclient.put<Idocument>(`${environment.APIBaseURL}/document/UpdateDocument?id=${id}&name=${name}&date=${date}&due_Date=${due_Date}&priorityId=${priorityId}`,formdata );

}
DeleteDocument(docId:number): Observable<Idocument> {
  return this.httpclient.delete<Idocument>(`${environment.APIBaseURL}` + `/document/DeleteDocument?id=${docId}`);
}

GetProductById(pid: number): Observable<Idocument> {
  return this.httpclient.get<Idocument>(`${environment.APIBaseURL}` + `/document/GetProductById/${pid}`);
}

DeleteFileDocument(docId:number): Observable<Idocument> {
  return this.httpclient.delete<Idocument>(`${environment.APIBaseURL}` + `/document/DeleteFileDocument?id=${docId}`);
}

//#endregion

//#region [Category Services]
// getTreeCategories(): Observable<ICategory[]> {
//   return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}` + "/api/Products/GetTreeCategories");
// }

// GetCategoryPath(catId: number): Observable<ICategory[]> {
//   return this.httpclient.get<ICategory[]>(
//     `${environment.APIBaseURL}` + `/api/Products/GetCategoryPath?parentCatId=${catId}`
//   );
// }
// //get all review for a product
// GetAllProductReviews(proId: number): Observable<Ireview[]> {
//   return this.httpclient.get<Ireview[]>(`${environment.APIBaseURL}` + `/api/Products/GetAllProductReviews/${proId}`);
// }
// //#endregion
// //


}
