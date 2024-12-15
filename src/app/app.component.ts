import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrizPalavrasComponent } from "./matriz-palavras/matriz-palavras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatrizPalavrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front';
}
