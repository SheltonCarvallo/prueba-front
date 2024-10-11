import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  public  placeHolder: string = '';

  @Input()
  public placeHolderChild = '';
  
  @Output()
  public termSearch: EventEmitter<string> = new EventEmitter();
  
  startSearch(lookBy: string) : void {
    this.termSearch.emit(lookBy);
  } 

}
