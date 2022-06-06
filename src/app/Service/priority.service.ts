import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPriority } from '../Models/ipriority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  private httpoption = {};
  constructor(private httpclient:HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }

  GetAllPriority(): Observable<IPriority[]> {
    return this.httpclient.get<IPriority[]>(`${environment.APIBaseURL}/Priority/GetAllPriority/GetAllPriority`);
  }


  AddPriority(formdata:FormData):Observable<IPriority> {

    return this.httpclient.post<IPriority>(`${environment.APIBaseURL}` + "/Priority/AddPriority",formdata);


  }
}
