import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

public isAboutMeHidden:boolean = false;
public isHobbiesHidden:boolean = false;
public isFavChannelHidden:boolean = false;
public isAboutChannelHidden:boolean = false;
public isMoneyHidden:boolean = false;

Money() {
this.isMoneyHidden= !this.isMoneyHidden;
this.HideOtherSections(5);
}

AboutMyChannel() {
this.isAboutChannelHidden = !this.isAboutChannelHidden;
this.HideOtherSections(4);
}

FavChannel() {
this.isFavChannelHidden = !this.isFavChannelHidden;
this.HideOtherSections(3);
}

Hobbies() {
this.isHobbiesHidden = !this.isHobbiesHidden;
this.HideOtherSections(2);
}

ShowAboutMe() {
this.isAboutMeHidden = !this.isAboutMeHidden;
this.HideOtherSections(1);
}

private HideOtherSections(selected:number){

  switch(selected) {

  case 1:
    this.isHobbiesHidden = false;
    this.isFavChannelHidden = false;
    this.isAboutChannelHidden = false;
    this.isMoneyHidden = false;
    break;
  
  
  case 2:
    this.isAboutMeHidden = false;
    this.isFavChannelHidden = false;
    this.isAboutChannelHidden = false;
    this.isMoneyHidden = false;
    break;
  
  case 3:
    this.isAboutMeHidden = false;
    this.isHobbiesHidden = false;
    this.isAboutChannelHidden = false;
    this.isMoneyHidden = false;
    break;
  

  case 4:
    this.isAboutMeHidden = false;
    this.isHobbiesHidden = false;
    this.isFavChannelHidden = false;
    this.isMoneyHidden = false;
    break;
  

  case 5:
    this.isAboutMeHidden = false;
    this.isHobbiesHidden = false;
    this.isFavChannelHidden = false;
    this.isAboutChannelHidden = false;
  
  }
}


  title = 'hello-world-2001261062';

}

