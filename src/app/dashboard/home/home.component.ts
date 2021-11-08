import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://callme-back.herokuapp.com/api/profile').subscribe(
      (e) => console.log('heyyy'),
      (e) => console.log('error', e)
    );
  }
}
