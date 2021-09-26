import { Component, Input, OnInit } from '@angular/core';
import conversationsJSON from '../../../assets/conversations.json';

@Component({
  selector: 'app-messages-title',
  templateUrl: './messages-title.component.html',
  styleUrls: ['./messages-title.component.css']
})
export class MessagesTitleComponent implements OnInit {
  @Input() selectedConversationId: number = 0;
  public conversations: {
    id: number,
    name: string,
    status: string,
    image: string,
    messages: {
      sender: string,
      time: string,
      message: string
    } [],
  } [] = conversationsJSON;
  
  constructor() { }

  ngOnInit(): void {
  }

}
