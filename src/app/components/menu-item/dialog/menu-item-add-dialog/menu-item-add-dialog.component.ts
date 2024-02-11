import {Component, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuItem} from "../../../../model/menu-item";

@Component({
  selector: 'app-menu-item-add-dialog',
  templateUrl: './menu-item-add-dialog.component.html',
  styleUrl: './menu-item-add-dialog.component.css'
})
export class MenuItemAddDialogComponent {

  constructor(private  formBuilder:FormBuilder) {
  }

  callbackMethod:EventEmitter<boolean>=new  EventEmitter<boolean>();
  isEdit?: boolean;
  isLoading: boolean = false;
  formGroup?:FormGroup;
  model:MenuItem =new MenuItem();

  setFormInitValue():any{
    this.formGroup = this.formBuilder.group({
      parent:['', ''],
      report:['', ''],
      name: ['', Validators.required],
      banglaName: ['', Validators.required],
      menuType: ['', Validators.required],
      serialNo: ['', Validators.required],
      url: ['', ''],
      icon: ['', ''],
      insert: ['', ''],
      edit: ['', ''],
      delete: ['', ''],
      view: [true],
      active: [true]
    })
  }




}
