import { Component, Input, OnInit } from '@angular/core';
import conversationsJSON from '../../../assets/conversations.json';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  @Input() selectedConversationId: number = 0;
   public conversations:{
    id: number,
    name: string,
    status: string,
    image: string,
    messages: {sender: string, time: string, message: string}[],
  }[] = conversationsJSON;
  
  ngOnInit(): void {
    let date = new Date();

    this.conversations.forEach(cv => {
      let messages = cv.messages;
      messages.forEach(msg => {
        msg.time = `${date.getHours()}:${date.getMinutes()}`
      })
    })
  }

}
