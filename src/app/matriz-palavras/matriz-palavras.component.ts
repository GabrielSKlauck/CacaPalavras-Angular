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
export class MatrizPalavrasComponent {
  caca = new CacaPalavras();

  itens: string[][] = this.caca.matriz;
  listaPalavras: string[] = this.caca.palavrasMostragem;

  ngOnInit(): void {
  }

  marcaPalavraMatriz(i: number, j: number): void {
    //Pega palavra baseado na coordenada apertada
    let palavra = this.caca.posicoesPalavras.get(i + "-" + j);
    //Caso a coodenada referencie alguma palavra da lista entra no if
    if (palavra != null) {

      //Pega todas as chaves que referenciam a palavra
      let listaCoordenadasPalavra: string[] = this.obterChavesPorValor(this.caca.posicoesPalavras, palavra)

      for (let i = 0; i < listaCoordenadasPalavra.length; i++) {
        //Pega as tags <td> e muda a cor de fundo
        let tag: HTMLElement | null = document.getElementById(listaCoordenadasPalavra[i]);
        if (tag != null) {
          if (i === 0) {
            tag.style.borderTopLeftRadius = "30";
            tag.style.borderBottomLeftRadius = "30";
            tag.style.borderTopRightRadius = "0";
            tag.style.borderBottomRightRadius = "0";
            
          }else if(i === listaCoordenadasPalavra.length - 1){
            tag.style.borderTopLeftRadius = "0";
            tag.style.borderBottomLeftRadius = "0";
            tag.style.borderTopRightRadius = "30";
            tag.style.borderBottomRightRadius = "30";
          }else{
            tag.style.borderTopLeftRadius = "0";
            tag.style.borderBottomLeftRadius = "0";
            tag.style.borderTopRightRadius = "0";
            tag.style.borderBottomRightRadius = "0";
          }
          tag.style.backgroundColor = "#f34141";
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
