import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngOnInit(): void {
    //Form focus anim
    $('input , textarea').focusin(function(){
      $(this).addClass('formfocus')
    });
    $('input , textarea').focusout(function(){
      $(this).removeClass('formfocus')
    });
    //Alert on form submit successfull
    $('form').submit(function(){
      alert('Votre message a bien été envoyé !')
    });
    }
}
