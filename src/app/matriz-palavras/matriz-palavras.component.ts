import { Component } from '@angular/core';
import { CacaPalavras } from '../modelo/CacaPalavras';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriz-palavras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matriz-palavras.component.html',
  styleUrl: './matriz-palavras.component.css'
})
export class MatrizPalavrasComponent{
  caca = new CacaPalavras();
  
  itens:string[][] = this.caca.matriz;
  listaPalavras:string[] = this.caca.palavrasMostragem;

  ngOnInit(): void {
  }

  marcaPalavraMatriz(i:number, j:number): void{
    let palavra = this.caca.posicoesPalavras.get(i + "-" +j);
    if(palavra != null){
      let listaCoordenadasPalavra: string[] = this.obterChavesPorValor(this.caca.posicoesPalavras, palavra)
      console.log(listaCoordenadasPalavra)
      for (let i = 0; i < listaCoordenadasPalavra.length; i++) {
        console.log(listaCoordenadasPalavra[i])
       let tag:HTMLElement | null = document.getElementById(listaCoordenadasPalavra[i]);
       console.log(tag)
       if(tag != null){
        tag.style.backgroundColor ="#f34141";
       }
      }
    }
  }

  obterChavesPorValor(map: Map<string, string>, valor: string): string[] {
    const chaves: string[] = [];
    
    for (const [chave, val] of map) {
      if (val === valor) {
        chaves.push(chave);
      }
    }
    
    return chaves;
  }

}
