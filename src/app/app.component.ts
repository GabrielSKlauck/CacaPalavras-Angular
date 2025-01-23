import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrizPalavrasComponent } from "./matriz-palavras/matriz-palavras.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatrizPalavrasComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Caça';
}
