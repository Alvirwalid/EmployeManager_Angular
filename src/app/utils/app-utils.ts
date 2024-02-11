import {Injectable} from "@angular/core";
import {MatDialogConfig} from "@angular/material/dialog";

@Injectable({
  providedIn:'root'
})
export class  AppUtils{

  DIALOG_HEIGHT = 'auto';
  ADD_DIALOG_WIDTH = '60%';
  CONFIRM_DIALOG_WIDTH = '30%';
  CONFIRM_DIALOG_HEIGHT = this.DIALOG_HEIGHT;
  DIALOG_CLASS_PANEL = 'dialog-background';

  getDialogConfig(width?:string,height?:string){

    const  dialogConfig = new MatDialogConfig();


    dialogConfig.width =width?width:this.ADD_DIALOG_WIDTH;
    dialogConfig.autoFocus =false;
    dialogConfig.height=this.DIALOG_HEIGHT;
    dialogConfig.panelClass=this.DIALOG_CLASS_PANEL;

    return dialogConfig;
  }


}
