import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  // regForm: FormGroup;
  regForm: any; //this we need to made the changes because now to use form array we need to treat as array so set any insted of formgroup now error resolved for this we got error in controls in html

  constructor(private fb: FormBuilder) { } //here we created dependency injection

  ngOnInit(): void {

    // this.regForm = new FormGroup({ // here below form control created.
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   mobile: new FormControl(),
    //   email: new FormControl(),
    // })

    // this.regForm = this.fb.group({  //by form builder we can create the control, by this memory management happend by removing new keyword
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(), //inside it we can pass value ex FormControl('debu'), this will visible in html page and same data will get
    //   mobile: new FormControl(),
    //   email: new FormControl(),
    // })
    // this.regForm = this.fb.group({  //This is advance level we have completely removed new keyword, memory management happen here
    //   id: [], //insted of null use 0
    //   fname: [],
    //   lname: [], //inside it we can pass value ex ['debasish], this will visible in html page and same data will get
    //   mobile: [],
    //   email: [],
    // })
    // this.regForm = this.fb.group({  //This is advance level we have completely removed new keyword, memory management happen here
    //   id: ['', Validators.required], 
    //   fname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]], //if multiple validator use then array bracket and comma use
    //   lname: ['', Validators.required], 
    //   mobile: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    // })
    this.regForm = this.fb.group({  //This is advance level we have completely removed new keyword, memory management happen here
      id: ['', Validators.required],
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])], //Validators.compose will compose all the validator and execute at once, this way code run faster
      lname: ['', Validators.required],
      //mobile: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],

      mobiles: new FormArray([     //this is created to add multiple number in array
        new FormControl()
      ])
    })

    // this.regForm.get('fname').valueChanges.subscribe(fname=>{ // we can use for single or for whole form below
    //   console.log('fname changed : ' + fname);
    // })
    // this.regForm.valueChanges.subscribe(formdata=>{ //value chages used for debugging
    //   console.log('fname changed : ' +formdata.fname);
    //   console.log('lname changed : ' +formdata.lname);
    //   console.log('mobile changed : ' +formdata.mobile);
    //   console.log('email changed : ' +formdata.email);
    // })

    // this.regForm.get('fname').statusChanges.subscribe(firstname=>{ // for validation status will see valid or invalid
    //   console.log('first name status is : ' + firstname);
    // })

    // this.regForm.statusChanges.subscribe(formdata=>{
    //   console.log('first name status is : ' + formdata);
    // })
  }
  Register(formdata: FormGroup) {
    console.log(formdata.value);
    console.log(formdata.valid);
    //console.log(this.regForm.value);

    //get.value()
    // console.log(this.regForm.get('fname').value);
    // console.log(this.regForm.get('lname').value);
    // console.log(this.regForm.get('mobile').value);
    // console.log(this.regForm.get('email').value);

  }
  // reest(){
  //  // this.regForm.reset();
  //  this.regForm.reset({ //apart for fname everything will reset
  //   fname:'debu', //static value will set
  //   lname: this.regForm.get('lname').value, //dynamic value will set
  //  })
  //}
  filldata() {
    // this.regForm.setValue({ //by setValue we have to fill all field if we left anyone then will get error
    //   id: 100,
    //   fname: 'dev',
    //   lname: 'panda',
    //   mobile: 20889384,
    //   email: 'dev@gmail.com'
    // })
    // this.regForm.patchValue({ //by patchValue we can partially set values, if we left any field will not get error
    //   id: 100,
    //   fname: 'dev',
    //   lname: 'panda',
    //   mobile: 20889384
    // })
    //}
  }

  deleterow(val: any) {   //ids getting error in html file need to check later.
    this.regForm.get('mobiles').removeAt(val);
  }
  addmore() {
    this.regForm.get('mobiles').push(new FormControl())
  }


}
