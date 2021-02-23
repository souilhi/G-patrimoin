import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormsData } from '../formsData/Formsdata.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  @ViewChild('first_name') dataName : ElementRef;
  @Output() dataFormAdded = new EventEmitter<FormsData>()
  constructor() { }
  // datainfo : FormsData[] =[];
  onAddInfo(){
       const newNameData = this.dataName.nativeElement.value;
       const newData = new FormsData(newNameData);
       this.dataFormAdded.emit(newData);

        console.log(newNameData);

  }
  ngOnInit() {
  }

}
