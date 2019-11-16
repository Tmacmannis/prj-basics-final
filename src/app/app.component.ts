import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showShopping: boolean;

  onShoppingFired(isShopping: boolean){
    if(isShopping){
      this.showShopping = true;
    }
    else{
      this.showShopping = false;
    }
  }


}
