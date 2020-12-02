import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let prueba:any = document.querySelector("#boton")
    let interfazNoVisible = document.querySelector(".interfaz-no-visible")
    let visible:boolean =false;
    let cuerpo = document.querySelector(".cuerpo")
    $(prueba).click(function(){
      if (visible == false) {
        $(interfazNoVisible).css({"display": "block" , "width": "200px", "transition": "width 1s"})
        visible = true;
        $(cuerpo).css({"margin-left": "200px", "transition": "margin-left 1s"} )
      }else{
        $(interfazNoVisible).css({"display": "none", "width": "0" })
        visible = false;
        $(cuerpo).css({"margin-left" : "0px"})
      }
    })
    //

  }

}
