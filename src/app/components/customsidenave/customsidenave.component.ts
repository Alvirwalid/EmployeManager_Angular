import {Component, computed, Input, signal} from '@angular/core';

export type MenuItem={
  icon:string;
  label:string;
  route:any
}

// @ts-ignore
@Component({
  selector: 'app-customsidenave',
  templateUrl: './customsidenave.component.html',
  styleUrl: './customsidenave.component.css'
})
export class CustomsidenaveComponent {


  sidenavCollapsed =signal(false);

  @Input('collapsed') set collapsed(v:boolean){

    this.sidenavCollapsed.set(v)

  };


  picSize=computed(()=>this.sidenavCollapsed()?'100px':'30px')





  manuItem = signal<MenuItem[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard'

    },
    {
      icon:'video_library',
      label:'Content',
      route:'content'

    },
    {
      icon:'analytics',
      label:'Analytics',
      route:'analytics'

    },
    {
      icon:'comment',
      label:'Comments',
      route:'comment'

    }
  ])




}
