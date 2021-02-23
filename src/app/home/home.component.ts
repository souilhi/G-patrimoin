import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// import { NouiFormatter } from "ng2-nouislider/src/nouislider";
import * as $ from 'jquery';
import { FormsValue } from '../shared/formsvalue.model';
 import { RecordsformsService } from '../recordsforms.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(private infoforms : RecordsformsService) { }
  @ViewChild('first_name') firstNameRef?: ElementRef;
  @ViewChild('last_name') lastNameRef?: ElementRef;
  @ViewChild('company') companyRef?: ElementRef;
  @ViewChild('email') emailRef?: ElementRef;
  @ViewChild('phone_number') phoneNumberRef?: ElementRef;






  // @Output() valueEvent = new EventEmitter<string>();
  onAddValue(){
    const valFName = this.firstNameRef?.nativeElement.value;
    const valLName = this.lastNameRef?.nativeElement.value;
    const valCompany = this.companyRef?.nativeElement.value;
    const valEmail = this.emailRef?.nativeElement.value;
    const valPhoneNumber = this.phoneNumberRef?.nativeElement.value;
    const newData = new FormsValue(valFName, valLName, valCompany, valEmail, valPhoneNumber);
    this.infoforms.addValues(newData);
    console.log(newData);
    this.infoforms.storeData(newData).subscribe(

      (response) => console.log("this is the respone: " + response),
      (error) => console.log("this is the error: " + error)

      );


   // const newVal = new ValForm(valName);
    // console.log(valFName,valLName, valCompany, valEmail,valPhoneNumber);
    // this.valueEvent.emit(this.message)
    //this.valueEvent.emit(newVal);
  }

 /*  onSave(newData){
    console.log("ff :" +newData);
    this.infoforms.storeData(newData).subscribe(

    (response) => console.log(response),
    (error) => console.log(error)

    )
  } */
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
