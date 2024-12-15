export class CacaPalavras{
   matriz: string[][];
   palavras: string[] = [];
   posicoesPalavras = new Map<string,string>();
   linha:number = 10;
   coluna:number = 25;

   constructor(){
      this.matriz = Array.from({ length: this.linha }, () => Array(this.coluna).fill(""));
      this.matriz = this.geraMatriz();
   }

   geraMatriz(): string[][]{
      const alfabeto: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      for (let i = 0; i < this.linha; i++) {
         for (let j = 0; j < this.coluna; j++) {
            this.matriz[i][j] = alfabeto.at(this.getRandomInt(26)) ?? "";
         }
         
      }
      return this.matriz;
   }

   getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
}