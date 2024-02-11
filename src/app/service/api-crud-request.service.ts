import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonResponseList, CommonResponseObject, CommonResponsePageable} from "../core/model/common-response";
import {DropdownModel} from "../model/dropdown-model";

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

  getAllList():Observable<CommonResponseList<I>>{
   return  this.httpClient.get<CommonResponseList<I>>(this._BASE_URL);
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


  getDropdownList(): Observable<CommonResponseList<DropdownModel>> {
    return this.httpClient.get<CommonResponseList<DropdownModel>>( this._BASE_URL + '/' + 'dropdown-list');
  }

 getListWithPagination(page:number,size:number,searchValue:string):Observable<CommonResponsePageable<I>>{
   return  this.httpClient.get<CommonResponsePageable<I>>(this._BASE_URL + '/' + 'pageable' + '/' + page + '/' + size + '/' + this.filterSearchValue(searchValue));
 }

  filterSearchValue(searchValue: string): string{
    searchValue = searchValue.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    searchValue = searchValue ? searchValue : '0';
    return searchValue;
  }

}
