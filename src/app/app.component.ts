import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  serarchForm !:FormGroup;
  weather : any;
  constructor(private fb:FormBuilder ,private service:HttpService){
    
  }
  ngOnInit(){
    this.serarchForm = this.fb.group({
      city : [null,Validators.required]
    })
  }
  searchWeather(){
    console.log(this.serarchForm.value);
    this.service.searchWeather(this.serarchForm.get(['city'])!.value).subscribe((res)=>{
      console.log(res);
      this.weather = ( res as any).data;
      
    })
    

  }
}
