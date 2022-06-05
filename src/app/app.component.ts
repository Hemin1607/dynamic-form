import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-generation';
  fromdata : any = [
    {
      other_type : [
        {
          type : "text",
          name : "E-mail",
          formname : "email",
          validation : [Validators.required,Validators.email]
        }]
    },
    {
      
      other_type : [
        {
          type : "text",
          name : "Frist Name",
          formname : "fname",
          validation : [Validators.required]
        },
        {
          type : "text",
          name : "Last Name",
          formname : "lname",
          validation : []
        }
      ]
    },
    {
      other_type : [
        {
          type : "datetime",
          name : "Date Of Birth",
          formname : "dob",
          validation : []
        },
        {
          type : "currency",
          name : "Salaray",
          formname : "salaray",
          validation : []
        },
        {
          type : "percentage",
          name : "Percentage",
          formname : "percentage",
          validation : []
        }
      ]
    },{
      other_type : [
        {
          type : "selectoptionvalue",
          name : "Hobbies",
          formname : "hobbies",
          validation : [],
          possiblevalue : [
            "cricket" , "volleyball" , "football"
          ]
        },
        {
          type : "rediobutton",
          name : "Gender",
          formname : "gender",
          validation : [],
          possiblevalue : [
            "Male" , "Female" 
          ]
        },
        {
          
          type : "checkboxlist",
          name : "Hobbies",
          formname : "hobbiestmp",
          validation : [],
          possiblevalue : [
            {
              key : "cricket",
              value : false
            },
            {
              key : "volleyball",
              value : true
            },
            {
              key : "football",
              value : false
            }
          ]
        }
      ]
    }
  ]

  getFromData(data : any)
  {
    console.log("data",data)
  }
}
