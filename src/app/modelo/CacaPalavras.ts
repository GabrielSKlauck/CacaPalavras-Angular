export class CacaPalavras{
   matriz: string[][];
   palavras: string[] = ['Arquiteto', 'Computador', 'Mesa', 'Tabua', 'Arvore', 'Tela', 'Cachorro', 
                         'Teclado', 'Violão', 'Animal', 'Macaco', 'Colar', 'Rato', 'Barco',
                         'Camera', 'Molho', 'Salgado', 'Lapis', 'Ração', 'Mar', 'Lateral'];
   palavrasEscolhidas: string[] = [];
   posicoesPalavras = new Map<string,string>();
   private linha:number = 10;
   private coluna:number = 25;
   private inicioL: number = 0;
   private inicioC: number = 0;

   constructor(){
      this.matriz = Array.from({ length: this.linha }, () => Array(this.coluna).fill(""));
      this.matriz = this.geraMatriz();
      this.populaMatriz();
   }

   geraMatriz(): string[][]{
      const alfabeto: string[] = ["A","B","C","D","E","F","G","H","I",
                                  "J","K","L","M","N","O","P","Q","R",
                                  "S","T","U","V","W","X","Y","Z"];
      for (let i = 0; i < this.linha; i++) {
         for (let j = 0; j < this.coluna; j++) {
            this.matriz[i][j] = alfabeto.at(this.getRandomInt(26)) ?? "";
         }
         
      }
      return this.matriz;
   }

   private populaMatriz(): void{
      
      //Seleciona 6 palavras aleatorias
      for (let i = 0; i < 6; i++) {
         //Pega um valor aleatorio com base na quantidade de palavras
         const posicaoPalavra = this.getRandomInt(this.palavras.length)

         //Seleciona uma palavra da lista
         let palavraSelecionada:string = this.palavras.at(posicaoPalavra)!
   
         this.palavrasEscolhidas.push(palavraSelecionada);

         delete this.palavras[posicaoPalavra]
         this.palavras = this.palavras.filter(n => n)
      }
   }

   private getRandomInt(max: number): number {
      return Math.floor(Math.random() * max);
    }
}