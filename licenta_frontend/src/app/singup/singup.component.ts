import { Component, OnInit } from '@angular/core';
import { AccountReg } from '../models/accountreg.model';
import { SingupserviceService } from './singupservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder, public signupService: SingupserviceService, private snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  registerData(): void {
    if (this.regForm.valid) {
      const register: AccountReg = {
        ...this.regForm.value,
        role: 'USER'
      }
      this.getReg(register);
    }
  }

  getReg(register: AccountReg): void {
    this.signupService.register(register).subscribe(
      () => {
        this.snackBar.open('Registration successful!', 'Close', {
          duration: 3000,
        });
      },
      (error) => {
        this.snackBar.open('Email is already used!', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
// export class SingupComponent {
//   email: string="";
//   password: string="";
//   firstname: string="";
//   lastname: string="";
//   phoneNumber: string="";
//   role:string="USER";
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email
//   ]);
//   matcher = new ErrorStateMatcher();

//   constructor(public signupService:SingupserviceService, private snackBar: MatSnackBar) {}
//   registerData(): void {
//     const register: AccountReg = {
//       email: this.email,
//       password: this.password,
//       firstname:this.firstname,
//       lastname: this.lastname,
//       role:this.role,
//       phoneNumber: this.phoneNumber
//     }
//     this.getReg(register);
// }
//   getReg(register:AccountReg):void{
//     this.signupService.register(register).subscribe(
//       () => {
//         this.snackBar.open('Registration successful!', 'Close', {
//           duration: 3000,
//         });
//       },
//       (error) => {
//         this.snackBar.open('Email is already used!', 'Close', {
//           duration: 3000,
//         });
//       }
//     );
//   }
// }
