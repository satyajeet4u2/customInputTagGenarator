import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'customInputTagGenarator';
  tagText = [];
  textValue: any;


  constructor() {}

  ngOnInit() {

    for (let index = 0; index < 6; index++) {
      const tagOutcome = {
        id : index + 1,
        text: 'test',
      };
      this.tagText.push(tagOutcome);
    }
  }


  /**
   * Add Tag Text .
   *
   * @param event type of event.
   * @param text enter value.
   */
  addTagText(event: any, text: any) {
    if (event?.key === 'Enter' || event?.key === ',') {
      const tagOutcome = {
        id : this.tagText.length + 1,
        text: event?.key === ',' ? text.substring(0, text.length - 1 ) : text,
      };
      this.tagText.push(tagOutcome);
      this.textValue = null;
    }
  }

  /**
   * Remove Tag Text .
   *
   * @param index type of event.
   */
  removeTag(index: number) {
  this.tagText.splice(index, 1);
  }
}
