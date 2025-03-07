import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule, ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonicModule, RouterModule, CommonModule ],
  standalone: true,
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router, private menu: MenuController) {}

  //Define the menu options dynamically
  menuOptions = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Shop', icon: 'cart', route: '/online-shop' },
    { label: 'Profile', icon: 'person', route: '/profile' },
    { label: 'About Us', icon: 'information-circle', route: '/about-us' }
  ];
  

  logout(){
    console.log('logging out...');
    this.menu.close(); // Close the menu before logging out
    this.router.navigate(['/login']);
  }
}