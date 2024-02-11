import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class  AppConstant{

  /*module*/
  moduleCommon: string = 'common/';
  //moduleAdmin: string = 'admin/';
  moduleSuperAdmin: string = 'sya/';

  /*pageable*/
  DEFAULT_ARRAY: number[] = [5, 10, 25, 100];
  DEFAULT_SIZE: number = 10;
  DEFAULT_PAGE: number = 0;

  /*field*/
  DEFAULT_TEXT_AREA_SIZE = 250;

  /*add dialog*/
  PANEL_CLASS = 'dialog-background';
  constructor() {
  }

}
