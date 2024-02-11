import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiCrudRequestService} from "./api-crud-request.service";
import {MenuItem} from "../model/menu-item";
import {AppUtils} from "../utils/app-utils";
import {AppConstant} from "../core/constant/app.constant";
import {Observable} from "rxjs";
import {CommonResponseList, CommonResponseObject} from "../core/model/common-response";


@Injectable({
  providedIn: 'root'
})
export class MenuItemServiceService  extends ApiCrudRequestService<MenuItem>{

  constructor(
    private  http:HttpClient,
    private  appUtils:AppUtils,
    private  appConstant:AppConstant,

  ) {

    super(http, 'http://localhost:8080/system-admin-menu-item');

  }

  getByMenuItemId(menuItemId:any):Observable<CommonResponseList<MenuItem>>{
    return  this.http.get<CommonResponseList<MenuItem>>('');
  }
  getByMenuType(menuType:any):Observable<CommonResponseList<MenuItem>>{

    return  this.http.get<CommonResponseList<MenuItem>>(this._BASE_URL+ '/' + 'dropdown-list-by-menu-type' + '/' + menuType);
  }
  getPageByAppUserId(){}





}
