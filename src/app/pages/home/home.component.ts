import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 
import { IonicModule,MenuController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, IonicModule,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomeComponent {
  constructor(private menu:MenuController, private route: ActivatedRoute, private router: Router) {}

  openMenu() {
    this.menu.open();
  }

  logout() {
    console.log('Logging out...');
    this.router.navigate(['login']);
  }
}