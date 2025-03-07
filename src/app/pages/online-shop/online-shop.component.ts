import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OnlineShopComponent {

  products = [
    {name: 'Laptop', price: 1200, image:'assets/laptop.jpg'},
    {name: 'Phone', price: 800, image:'assets/phone.jpg'},
    {name: 'Headphones', price: 150, image:'assets/headphones.jpg'},
  ];

  addToCart(product: any) {
    alert(product.name + 'added to card!');
   }
}
