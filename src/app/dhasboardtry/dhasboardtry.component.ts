import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-dhasboardtry',
  templateUrl: './dhasboardtry.component.html',
  styleUrls: ['./dhasboardtry.component.css']
})
export class DhasboardtryComponent implements OnInit {
  file2:File=null;
  name:any;
  forc: any[]=[]
  form:FormGroup
  my_csv:any[]=[]
  

  constructor(private auth:AuthService,private http:HttpClient){}

  ngOnInit(): void {
  }
  onChange(event){
    this.file2=event.target.files[0];
  }
  onDate(name1){
    this.name=name1
  }
  submitdata(){
    let formData= new FormData();
    formData.set("file",this.file2)
    formData.set("name",this.name)
    this.auth.sendforc(formData).subscribe(res=>{
      const list=res.split('\n');      
      list.forEach(e=>{
        this.my_csv.push(e)
      })
    }
    )
  }
}



