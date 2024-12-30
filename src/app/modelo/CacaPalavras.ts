export class CacaPalavras {
   matriz: string[][];
   matrizEspelho: string[][];
   palavras: string[] = ['Arquiteto', 'Computador', 'Mesa', 'Tabua', 'Arvore', 'Tela', 'Cachorro',
      'Teclado', 'Violão', 'Animal', 'Macaco', 'Colar', 'Rato', 'Barco',
      'Camera', 'Molho', 'Salgado', 'Lapis', 'Ração', 'Mar', 'Lateral'];
   palavrasEscolhidas: string[] = [];
   palavrasMostragem: string[] = [];
   posicoesPalavras = new Map<string, string>();
   private linha: number = 10;
   private coluna: number = 25;


   constructor() {
      this.matriz = Array.from({ length: this.linha }, () => Array(this.coluna).fill(""));
      this.matrizEspelho = Array.from({ length: this.linha }, () => Array(this.coluna).fill(""));
      this.matriz = this.geraMatriz();
      this.populaMatriz();
   }

   geraMatriz(): string[][] {
      const alfabeto: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
         "J", "K", "L", "M", "N", "O", "P", "Q", "R",
         "S", "T", "U", "V", "W", "X", "Y", "Z"];
      for (let i = 0; i < this.linha; i++) {
         for (let j = 0; j < this.coluna; j++) {
            this.matriz[i][j] = alfabeto.at(this.getRandomInt(26)) ?? "";
         }

      }
      return this.matriz;
   }

   private populaMatriz(): void {
      const iteracoes = 6;

      //Seleciona 6 palavras aleatorias
      for (let i = 0; i < iteracoes; i++) {
         //Pega um valor aleatorio com base na quantidade de palavras
         const posicaoPalavra = this.getRandomInt(this.palavras.length)

         //Seleciona uma palavra da lista
         let palavraSelecionada: string = this.palavras.at(posicaoPalavra)!

         this.palavrasEscolhidas.push(palavraSelecionada);
         this.palavrasMostragem.push(palavraSelecionada);
         delete this.palavras[posicaoPalavra]
         this.palavras = this.palavras.filter(n => n)
      }


      for (let i = 0; i < iteracoes; i++) {
         const tipoDisposicaoPalavra = this.getRandomInt(2);
         let inicioL: number = -1;
         let inicioC: number = -1;

         //Se 1 colocara palavra da esquerda para direita
         if (tipoDisposicaoPalavra == 1) {

            //Pega uma palavra da lista;
            let palavra: string = this.palavrasEscolhidas.pop()!;
            do {
               //Seleciona dois numeros aleatorios
               inicioL = this.getRandomInt(this.linha);
               inicioC = this.getRandomInt(this.coluna);

               //Palavra deve ser menor que a quantidade de coluna
               if ((inicioC + palavra.length) < this.coluna &&
                this.verficaOcupacaoPalavra(palavra, "d", inicioC, inicioL, this.matriz)) {
                  
                  //Popula matriz
                  for (let j = 0; j < palavra.length; j++) {
                     this.matriz[inicioL][inicioC] = palavra.charAt(j);
                     this.matrizEspelho[inicioL][inicioC] = palavra.charAt(j);
                  }
               }
            } while (!this.isOcuped(inicioL, inicioC) || (inicioL == -1 && inicioC == -1))
         }

      }
   }

   private verficaOcupacaoPalavra(palavra: string, sentido:string, direcao: number, base:number, matriz: string[][]): boolean{
      //Se for da direita para esquerda
      if (sentido == "d") {
         for (let j = 0; j < palavra.length; j++) {
            direcao++;
            if(!this.isOcuped(base,direcao)){
               return true;
            }
         }
         // Se for de cima para baixo
      }else{
         for (let j = 0; j < palavra.length; j++) {
            direcao++;
            if(!this.isOcuped(direcao,base)){
               return true;
            }
         }
      }
      return false;
   }

   private isOcuped(i: number, j: number): boolean {
      if (this.matrizEspelho[i][j] != "") {
         return true;
      }
      return false;
   }

   private getRandomInt(max: number): number {
      return Math.floor(Math.random() * max);
   }
}