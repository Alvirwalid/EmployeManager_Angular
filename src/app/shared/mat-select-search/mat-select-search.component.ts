import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-mat-select-search',
  templateUrl: './mat-select-search.component.html',
  styleUrl: './mat-select-search.component.css'
})
export class MatSelectSearchComponent {
  @Input()  fromGroup?:FormGroup;
  @Input() controlName?:FormControl;
  @Input() data?:any[];
  @Input() isReadOnly?:boolean;
  @Input() isSearch:boolean=false;
  @Output() selectionChange=new EventEmitter<any>();
  @Output() customKeyDown=new  EventEmitter<any>();


  public  matSelectSearch:FormControl=new FormControl();
  protected  _onDestroy=new Subject<void>();
  filteredDate:ReplaySubject<any[]>=new  ReplaySubject<any[]>(1);



}
