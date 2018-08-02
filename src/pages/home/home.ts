import { Component } from '@angular/core';
import { NavParams,NavController,LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apiUrl;
  load;
  success;
  error;
  amount;
  username;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private loading:LoadingController,private http:Http) {

  }

  ionViewDidLoad(){
    this.getUserData();
  }

  history(){
    this.navCtrl.push('HistoryPage');
  }

  getUserData(){
    this.load = this.loading.create({
      spinner:'crescent',
      content:'Loading....'
    });
    this.load.present();

    this.apiUrl = "http://10.0.38.117:3000/api/user/5b61cc5dd896513545970c93";
      console.log(this.apiUrl);
      this.http.get(this.apiUrl)
      .timeout(6000)
      .map( res => res.json() )
      .subscribe( data => {

        console.log(data);
        if(data.error==undefined){  

            if(data.status){
              this.username = data.username;
              this.amount = data.amount;
              window.localStorage.setItem('user_id',data._id);
              console.log(data._id);
                 
            }else{
              this.error="Invalid Email or Password! ";
              //this.Error=true;
            
            }
        }
    this.load.dismiss();
      },
      error =>{
          console.log(error);
          this.load.dismiss();
          let alert = this.alert.create({
            title: 'Oops!',
            subTitle: 'There’s no network connection. Make sure you’re connected to a Wi-fi or mobile network and try again.',
            buttons: ['Okay']
          });
          alert.present();
      } );

  }

}
