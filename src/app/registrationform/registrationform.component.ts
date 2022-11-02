import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.userform = this.fb.group({
    //   fname: ['', Validators.required],
    //   lname: ['', Validators.required],
    //   houseno: ['', Validators.required],
    //   city: ['', Validators.required],
    //   pin: ['', Validators.required],
    // })

    this.userform = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address:this.fb.group({   //here we have created separate group only for address for that particula validation purpose
        houseno: ['', Validators.required],
        city: ['', Validators.required],
        pin: ['', Validators.required],
      })
      
    })
  }

  get fnamefc(){
    return this.userform.get('fname');
  }

  get lnamelc(){
    return this.userform.get('lname');
  }
  get addressc(){
    return this.userform.get('address');
  }


  registration(){
    console.log(this.userform.value);
    console.log(this.userform.valid);
    let addressformgroup = this.addressc   //this.userform.get('address');
    console.log(addressformgroup.value);
    console.log(addressformgroup.valid);

    //to get the form value 
    console.log("house no is " + addressformgroup.get('houseno').value);
    console.log("city name is " + addressformgroup.get('city').value);
    console.log("pin no is " + addressformgroup.get('pin').value);

  }

}
