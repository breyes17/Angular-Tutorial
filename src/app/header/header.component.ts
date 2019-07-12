import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() outputShopRec = new EventEmitter<{rec: boolean, shop : boolean}>();
 recBool: boolean;
 shopBool : boolean;
  constructor() { }

  ngOnInit() {
  }

  showComp(str : string){
    if(str == 'rec'){
      this.outputShopRec.emit({
        rec : this.recBool = true,
        shop : this.shopBool = false
      })
    } else {
      this.outputShopRec.emit({
        rec : this.recBool = false,
        shop : this.shopBool = true
      })
    }
  }

}
