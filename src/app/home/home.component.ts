import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  registrationForm:FormGroup;
  prediction_text: string;
  OEM=['Datsun', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Mahindra',
       'Maruti Suzuki', 'MG', 'Nissan', 'Renault', 'Skoda', 'Tata',
       'Toyota', 'Volkswagen'];

  MODELS=['Go', 'Go Plus', 'RediGo', 'Amaze', 'City', 'Civic', 'CRV', 'Jazz',
  'WRV', 'Creta', 'Elantra', 'Elite i20', 'Grand i10', 'Kona',
  'Santro', 'Tucson', 'Venue', 'Verna', 'Xcent, Aura', 'Compass',
  'Wrangler', 'Carnival', 'Seltos', 'Alturas G4', 'Bolero', 'KUV100',
  'Marazzo', 'Scorpio', 'Thar', 'TUV300', 'Verito, Vibe', 'XUV300',
  'XUV500', 'Alto', 'Baleno', 'Celerio', 'Ciaz', 'Dzire', 'Eeco',
  'Ertiga', 'Gypsy', 'Ignis', 'S-Cross', 'S-Presso', 'Swift',
  'Vitara Brezza', 'WagonR', 'XL6', 'Hector', 'ZS EV', 'Kicks',
  'Captur', 'Duster', 'Kwid', 'Triber', 'Kodiaq', 'Octavia', 'Rapid',
  'Superb', 'Altroz', 'Harrier', 'Hexa', 'Nexon', 'Tiago', 'Tigor',
  'Camry', 'Fortuner', 'Glanza', 'Innova', 'Vellfire', 'Yaris',
  'Polo', 'Tiguan', 'T-Roc', 'Vento', 'Sonet', 'Gloster', 'Magnite',
  'Karoq', 'Urban Cruiser', 'Alcazar', 'i20', 'Kiger', 'Safari',
  'XUV700', 'Astor', 'Kushaq', 'Punch', 'Taigun'];

  BODYTP = ['Hatchback', 'MUV', 'Sedan', 'SUV', 'Electric', 'Van'];
  constructor(private auth:AuthService,private fb:FormBuilder,private http:HttpClient ){}
 
  ngOnInit(): void {
  //   this.form = this.fb.group({
  //   // pname:'',
  //   file:''
  // }),

  this.registrationForm = this.fb.group({
    file:'',
    model_no:'',
    oem:'',
    model:'',
    body:'',
    price:'',
    years:'',
    month:'',
  })
  }

  lines = []; 
  linesR = []; 
  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
         console.log(allTextLines)
          let headers = allTextLines[0].split(';');  
          let data = headers[0];
          let tarr = [];
          console.log(headers[0])
          let str=""
          for (let j = 0; j < headers[0].length; j++) {
            if(data[j] == ',')
            {
              tarr.push(str);
              str=''
            }
            else{
            str+=data[j]
            }
          }
          tarr.push(str);
          this.lines.push(tarr);
          console.log(this.lines)
          let tarrR = [];
          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(','));
          }           
          console.log(rows.length)
          for (let j = 0; j < arrl; j++) {
              if(j%2==1)
              tarrR.push(rows[j]);  
          }
          this.linesR.push(tarrR);
      }
    }
  }

  data1;
  data2;
  data3;
  on_Submit(){
    this.registrationForm.value['file']=this.registrationForm.value['file'].replace(/^.*\\/, "");
    if (this.auth.send_post_request(this.registrationForm.value).subscribe(datum => {
      this.data1 = datum['Linear-reg'];
      this.data2 = datum['DT-reg'];
      this.data3 = datum['RF-reg']
      console.log(this.data1)
    })){
      // console.log("hai");
      // console.log(this.registrationForm.value);   
      // console.log(this.data1);   
    } 
  }
  }



 

 


