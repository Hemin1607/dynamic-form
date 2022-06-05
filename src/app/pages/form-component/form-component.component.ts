import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  @Input() fromdata: any;
  @Output() updatedfromdata = new EventEmitter<any>();
  formGroup!: FormGroup;
  platforms!: FormArray;
  platformForm!: FormGroup;
  checkbox_values_update: any = {}
  constructor(private formBuilder: FormBuilder) {


  }



  ngOnInit(): void {

    var tmp_data: any = {};
    for (let m = 0, lan = this.fromdata.length; lan > m; m++) {
      for (let i = 0, lanngth1 = this.fromdata[m].other_type.length; lanngth1 > i; i++) {

        if (this.fromdata[m].other_type[i].type == "checkboxlist") {

          tmp_data[this.fromdata[m].other_type[i].formname] = this.formBuilder.array(this.fromdata[m].other_type[i].possiblevalue.map((x: any) => x.value));
          this.checkbox_values_update[this.fromdata[m].other_type[i].formname] = this.fromdata[m].other_type[i].possiblevalue
        } else {
          tmp_data[this.fromdata[m].other_type[i].formname] = ["", this.fromdata[m].other_type[i].validation]
        }
      }
    }
    this.formGroup = this.formBuilder.group(tmp_data)
  }

  saveData() {
    
    for (const m in this.checkbox_values_update) {
      const i = this.checkbox_values_update[m];
      this.formGroup.value[m] = i
    }
    this.updatedfromdata.emit(this.formGroup.value);
  }

  checkChange(event: any, i: any, name: string) {
    this.checkbox_values_update[name][i].value = event.checked
    console.log("this.checkbox_values_update", this.checkbox_values_update)
  }


}
