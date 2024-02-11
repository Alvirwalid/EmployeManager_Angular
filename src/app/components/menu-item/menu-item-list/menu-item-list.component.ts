import { Component } from '@angular/core';
import {MenuItem} from "../../../model/menu-item";
import {AppUtils} from "../../../utils/app-utils";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MenuItemAddDialogComponent} from "../dialog/menu-item-add-dialog/menu-item-add-dialog.component";
import {MenuItemServiceService} from "../../../service/menu-item-service.service";
import {AppConstant} from "../../../core/constant/app.constant";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrl: './menu-item-list.component.css'
})
export class MenuItemListComponent {

  paginationArray:number[]=this.appConstant.DEFAULT_ARRAY;
  size:number=this.appConstant.DEFAULT_SIZE;
  page:number=this.appConstant.DEFAULT_PAGE;
  total:number=0;
  searchValue:string='';
  dataSource=new  MatTableDataSource(new  Array<MenuItem>())
  displayedColums:string[]=['slNo', 'name', 'banglaName',  'menuType', 'serialNo','url','parent', 'action']
  model:MenuItem=new MenuItem();

  constructor(
    private  matDialog:MatDialog,
    private modelService:MenuItemServiceService,
    private  appConstant:AppConstant,
    private  appUtils:AppUtils
    ) {
  }

  openAddDialog(isEdit?:boolean,model?:MenuItem):void{
    model=model?model:new MenuItem();
    const  dialogConfig= this.appUtils.getDialogConfig();

    dialogConfig.data={
      model:model,
      isEdit:isEdit
    }

    const  dialogRef= this.matDialog.open(MenuItemAddDialogComponent,dialogConfig);

   dialogRef.componentInstance.callbackMethod.subscribe(value=>{
     this.getPageableModelList();
   })
  }

  getPageableModelList():any{
    this.modelService.getListWithPagination(this.page,this.size,this.searchValue).subscribe(res=>{

  this.dataSource=new MatTableDataSource(res.data.content);

  this.total = res.data.totalElements;

    })
  }

}
