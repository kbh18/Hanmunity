import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-han',
  templateUrl: './han.component.html',
  styleUrls: ['./han.component.css']
})
export class HanComponent implements OnInit {
  loginNum : number = 0;
  pageNum : number = 0;
  boardNum : number = 1;
  samples : {
    title : string,
    date : string
  }[];
  
  constructor() { 
    console.log("Hanmunity is working...");
    this.samples = [
      {title: "장학금좀 팍팍 주세요", date: "2018/09/28(금)"},
      {title: "흡연부스 늘려주세요", date: "2018/09/26(수)"},
      {title: "상상관 에스컬레이터 설치", date: "2018/09/23(일)"},
      {title: "아무튼 청원됨", date: "2018/09/22(토)"},
      {title: "Hello, world!", date: "2018/09/20(목)"},
    ];
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
