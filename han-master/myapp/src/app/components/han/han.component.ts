import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-han',
  templateUrl: './han.component.html',
  styleUrls: ['./han.component.css']
})
export class HanComponent implements OnInit {
  loginNum : number = 0;
  pageNum : number = 0;
  boardNum : number = 0;
  constructor() { 
    console.log("Hanmunity is working...");
  }

  ngOnInit() {
  }
  changeLogin(loginNum) {
    this.loginNum = loginNum;
  }
  changePage(pageNum) {
    this.pageNum = pageNum;
  }
  changeBoard(boardNum) {
    this.boardNum = boardNum;
  }
  loginCheck() {
    
  }
}
