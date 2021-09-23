import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-validateproducts',
  templateUrl: './validateproducts.component.html',
  styleUrls: ['./validateproducts.component.css']
})
export class ValidateproductsComponent implements OnInit {
  httpdata;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5555/validate")
    .subscribe((waitings)=>{
      this.httpdata=waitings;
      console.log(this.httpdata)

    })

  }

}
