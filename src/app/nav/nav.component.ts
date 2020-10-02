import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  option=[]
  selected=[];
  constructor() { }
  checkIfExists(val){
    // debugger;
    // console.log('op val: ', val)
    // console.log('atr id: ', atr.id)
    return this.selected.every(item => item.value == val.value)    
  }

  check(){
    console.log("check value: ",this.selected)

  }
  ngOnInit(): void {
    setTimeout(() => {
      let opt=[
        {
          id:1,
          value: 'sdfdgdga'
        },
        {
          id:2,
          value: 'bgdgdg'
        },
        {
          id:3,
          value: 'cgdgdgd'
        },
        {
          id:4,
          value: 'dgdgdgdg'
        }
        ,
        {
          id:5,
          value: 'dgdgdsfgdg'
        }
      ]
      this.option =opt;
      console.log(this.option)
    }, 3000)
  }

}
