import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear()
  // routePage: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routePage(){
    return this.router.url == '/about' ? true: false;
  }



}
