import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  showShopping: boolean = false;
  @Output() shoppingFired  = new EventEmitter<boolean>();

  shoppingCalled(){
    this.showShopping = true;
    this.shoppingFired.emit(this.showShopping);
  }

  recipeCalled(){
    this.showShopping = false;
    this.shoppingFired.emit(this.showShopping);
  }

}
