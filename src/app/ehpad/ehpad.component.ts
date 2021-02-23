import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-ehpad',
  templateUrl: './ehpad.component.html',
  styleUrls: ['./ehpad.component.css']
})
export class EhpadComponent implements OnInit {

  constructor() { }

 
  
  ngOnInit() {

         
        $(document).ready(function(){
          $("#btn1").click(function(){
            $("#txt1").show();
            $("#txt5,#txt2, #txt3, #txt4").hide();
    
          });
    
          $("#btn2").click(function(){
            $("#txt2").show();
            $("#txt5,#txt1, #txt3, #txt4").hide();
    
          });
    
          $("#btn3").click(function(){
            $("#txt3").show();
            $("#txt5,#txt1, #txt2, #txt4").hide();
    
          });
    
          $("#btn4").click(function(){
            $("#txt4").show();
            $("#txt5,#txt1, #txt2, #txt3").hide();
    
          });
          
        });
      }






}
