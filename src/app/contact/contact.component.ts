import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
registerForm:FormGroup=new FormGroup({
  'name':new FormControl(),
  'email':new FormControl(),
  'enterMessage':new FormControl(),
})
  constructor() { }

  ngOnInit(): void {
  }

}
