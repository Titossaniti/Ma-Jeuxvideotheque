import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'projetWF3';
  ngOnInit(): void {

    document.addEventListener('mousemove', e => {
      document.querySelector('.cursor')?.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
      document.querySelector('.cursor')?.classList.add("expand");

        setTimeout(() => {
          document.querySelector('.cursor')?.classList.remove("expand");
        }, 500)
    })
    
  }
}
