import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() outputShopRec = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  showComp(str : string){
      this.outputShopRec.emit(str)
  }

}
