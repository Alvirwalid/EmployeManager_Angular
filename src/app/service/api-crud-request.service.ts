import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonResponseObject} from "../core/model/common-response";

@Injectable({
  providedIn: 'root'
})
export abstract class ApiCrudRequestService<I> {

 protected constructor(protected httpClient:HttpClient,protected _BASE_URL:string) { }

  create(i:I):Observable<CommonResponseObject<I>>{
   return this.httpClient.post<CommonResponseObject<I>>(this._BASE_URL,i);
  }


  update(i:I):Observable<CommonResponseObject<I>>{
   return  this.httpClient.put<CommonResponseObject<I>>(this._BASE_URL,i);
  }

  getAllList():Observable<CommonResponseObject<I>>{
   return  this.httpClient.get<CommonResponseObject<I>>(this._BASE_URL);
  }

  delete(i: I): Observable<CommonResponseObject<I>> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: i
    };
    return this.httpClient.delete<CommonResponseObject<I>>( this._BASE_URL, httpOptions);
  }

 getById(id:number):Observable<CommonResponseObject<I>>{


   return  this.httpClient.get<CommonResponseObject<I>>(this._BASE_URL + '/' +'get-by-id'+'/'+id);

 }

}
