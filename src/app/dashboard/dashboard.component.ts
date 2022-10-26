import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  file1:File=null;
  predForm:FormGroup

  OEMS=['Datsun', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Mahindra',
  'Maruti Suzuki', 'MG', 'Nissan', 'Renault', 'Skoda', 'Tata',
  'Toyota', 'Volkswagen'];

  MODELSS=['Go', 'Go Plus', 'RediGo', 'Amaze', 'City', 'Civic', 'CRV', 'Jazz',
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

  BODYTPS = ['Hatchback', 'MUV', 'Sedan', 'SUV', 'Electric', 'Van'];
  data1: any;
  pic: Object;
  isImageLoading: boolean
  

  constructor(private auth:AuthService,private http:HttpClient,private fb:FormBuilder){}
  ngOnInit(): void {
    this.predForm = this.fb.group({
      oems:'',
      models:'',
      bodys:'',
      months:'',
   
    })
  }
  data_res;
  on_Pred(){
    this.isImageLoading = false
    if (this.auth.send_pred_req(this.predForm.value).subscribe(datum2 => {
      console.log(datum2)
      this.data_res = datum2['result']
       console.log(this.data_res)
       this.isImageLoading = true
    })

    
    ){} 
  }

}



