import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap:any = {
    "Hi": "Hello",
    "Who are you?": "My name is Test Sat Bot",
    "What is your role?": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please repeat"
  }
  async getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', await this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 500);
  }
  


  async  getBotMessage(question : string) {
    const apiUrl = 'https://3d6f-34-125-112-211.ngrok-free.app/ask';
  
    const data = {
      'question': question
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',     
        headers: {
          'Content-Type': 'application/json'
          // Add any additional headers if required
        },
        body: JSON.stringify(data)
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log(result);
  
      const answer = result.answer || 'defaultmsg'; // Assuming 'answer' is the key for the response in the JSON
  
      return answer;
    } catch (error) {
      console.error('Error:', error);
      return 'defaultmsg'; // Return default message in case of error
    }
  }
}
