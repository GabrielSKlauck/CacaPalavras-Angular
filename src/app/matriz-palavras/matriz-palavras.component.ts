import { Component } from '@angular/core';
import { CacaPalavras } from '../modelo/CacaPalavras';

@Component({
  selector: 'app-matriz-palavras',
  standalone: true,
  imports: [],
  templateUrl: './matriz-palavras.component.html',
  styleUrl: './matriz-palavras.component.css'
})
export class MatrizPalavrasComponent{
  caca = new CacaPalavras();
  
  itens:string[][] = this.caca.matriz;

  ngOnInit(): void {
    console.log(this.caca.matriz)
  }
}
