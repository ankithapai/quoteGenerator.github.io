import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient){}

  title = 'quote-generator';
  value: any;

  ngOnInit(){
    this.generateQuote();
  }


  generateQuote() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '66c923cca7msh562749a28c7174ap1bfb7cjsn4d7dbd891334',
      'X-RapidAPI-Host': 'free-famous-quotes.p.rapidapi.com'
    });
    this.http
      .get<any>('https://free-famous-quotes.p.rapidapi.com/', {
        headers: headers
      })
      .subscribe(data => {
        this.value = data;

      });
  }
}
