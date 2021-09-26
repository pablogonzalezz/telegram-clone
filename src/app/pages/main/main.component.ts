import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  currentConversationId: number = 0;

  ngOnInit(): void {
  }

  changeConversation(id: number) {
    this.currentConversationId = id;
    console.log(this.currentConversationId);
  }

}
