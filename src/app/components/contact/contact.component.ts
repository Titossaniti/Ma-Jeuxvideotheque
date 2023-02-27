import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngOnInit(): void {

//Alerte pour confirmer l'envoi du formulaire
    $('form').submit(function(){
      alert('Votre message a bien été envoyé !')
    });
    }
}