export class CacaPalavras {
   matriz: string[][];
   matrizEspelho: string[][];
   palavras: string[] = ['Arquiteto', 'Computador', 'Mesa', 'Tábua', 'Árvore', 'Tela', 'Cachorro',
      'Teclado', 'Violão', 'Animal', 'Macaco', 'Colar', 'Rato', 'Barco',
      'Câmera', 'Molho', 'Salgado', 'Lápis', 'Ração', 'Mar', 'Lateral'];
   palavrasEscolhidas: string[] = [];
   palavrasMostragem: string[] = [];
   posicoesPalavras = new Map<string, string>();
   disposicoesPalavras = new Map<string,string>();
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
         "S", "T", "U", "V", "W", "X", "Y", "Z", "Ç", "Á", "Â", "Ã"];
      for (let i = 0; i < this.linha; i++) {
         for (let j = 0; j < this.coluna; j++) {
            this.matriz[i][j] = alfabeto.at(this.getRandomInt(0, alfabeto.length)) ?? "";
         }

      }
      return this.matriz;
   }

   private populaMatriz(): void {
      const iteracoes = 6;

      //Seleciona 6 palavras aleatorias
      for (let i = 0; i < iteracoes; i++) {
         //Pega um valor aleatorio com base na quantidade de palavras
         const posicaoPalavra = this.getRandomInt(0, this.palavras.length)

         //Seleciona uma palavra da lista
         let palavraSelecionada: string = this.palavras.at(posicaoPalavra)!;
         palavraSelecionada = palavraSelecionada.toUpperCase();

         this.palavrasEscolhidas.push(palavraSelecionada);
         this.palavrasMostragem.push(palavraSelecionada);
         delete this.palavras[posicaoPalavra]
         this.palavras = this.palavras.filter(n => n)
      }


      for (let i = 0; i < iteracoes; i++) {
         const tipoDisposicaoPalavra = this.getRandomInt(0, 4);
         let inicioL: number = -1;
         let inicioC: number = -1;

         //Se igual a 0 insere palavras da direita para esquerda
         if (tipoDisposicaoPalavra == 0) {
            //Pega uma palavra da lista;
            let palavra: string = this.palavrasEscolhidas.pop()!;

            //Seleciona dois numeros aleatorios
            inicioL = this.getRandomInt(0, this.linha);
            inicioC = this.getRandomInt(0, this.coluna);

            //Valida as posições, e encontra novas caso precise
            let teste1 = ((inicioC + (palavra.length)) <= this.coluna);
            let teste2 = this.verficaOcupacaoPalavra(palavra, "d", inicioC, inicioL);
            while (!teste1 || teste2) {
               inicioL = this.getRandomInt(0, this.linha);
               inicioC = this.getRandomInt(0, this.coluna);
               teste1 = ((inicioC + (palavra.length)) < this.coluna);
               teste2 = this.verficaOcupacaoPalavra(palavra, "d", inicioC, inicioL);
            }

            //Popula matriz
            for (let j = 0; j < palavra.length; j++) {
               this.matriz[inicioL][inicioC] = palavra.charAt(j).toUpperCase();
               this.matrizEspelho[inicioL][inicioC] = palavra.charAt(j);
               this.posicoesPalavras.set(inicioL + "-" + inicioC, palavra);
               this.disposicoesPalavras.set(inicioL + "-" + inicioC, "DE");
               inicioC++;
            }

            //De cima para baixo
         } else if(tipoDisposicaoPalavra == 1){
            //Pega uma palavra da lista;
            let palavra: string = this.palavrasEscolhidas.pop()!;

            //Seleciona dois numeros aleatorios
            inicioL = this.getRandomInt(0, this.linha);
            inicioC = this.getRandomInt(0, this.coluna);

            //Valida as posições, e encontra novas caso precise
            let teste1 = ((inicioL + (palavra.length)) <= this.linha);
            let teste2 = this.verficaOcupacaoPalavra(palavra, "v", inicioL, inicioC);
            while (!teste1 || teste2) {
               inicioL = this.getRandomInt(0, this.linha);
               inicioC = this.getRandomInt(0, this.coluna);
               teste1 = ((inicioL + (palavra.length)) <= this.linha);
               teste2 = this.verficaOcupacaoPalavra(palavra, "v", inicioL, inicioC);
            }

            //Popula matriz
            for (let j = 0; j < palavra.length; j++) {
               this.matriz[inicioL][inicioC] = palavra.charAt(j).toUpperCase();
               this.matrizEspelho[inicioL][inicioC] = palavra.charAt(j);
               this.posicoesPalavras.set(inicioL + "-" + inicioC, palavra);
               this.disposicoesPalavras.set(inicioL + "-" + inicioC, "AB");
               inicioL++;
            }
         }else if(tipoDisposicaoPalavra == 2){

            //Pega uma palavra da lista;
            let palavra: string = this.palavrasEscolhidas.pop()!;
            let palavraReversa: string = palavra.split('').reverse().join('');

            //Seleciona dois numeros aleatorios
            inicioL = this.getRandomInt(0, this.linha);
            inicioC = this.getRandomInt(0, this.coluna);

            //Valida as posições, e encontra novas caso precise
            let teste1 = ((inicioC + (palavra.length)) <= this.coluna);
            let teste2 = this.verficaOcupacaoPalavra(palavraReversa, "d", inicioC, inicioL);
            while (!teste1 || teste2) {
               inicioL = this.getRandomInt(0, this.linha);
               inicioC = this.getRandomInt(0, this.coluna);
               teste1 = ((inicioC + (palavra.length)) < this.coluna);
               teste2 = this.verficaOcupacaoPalavra(palavraReversa, "d", inicioC, inicioL);
            }

            //Popula matriz
            for (let j = 0; j < palavra.length; j++) {
               this.matriz[inicioL][inicioC] = palavraReversa.charAt(j).toUpperCase();
               this.matrizEspelho[inicioL][inicioC] = palavraReversa.charAt(j);
               this.posicoesPalavras.set(inicioL + "-" + inicioC, palavraReversa);
               this.disposicoesPalavras.set(inicioL + "-" + inicioC, "ED");
               inicioC++;
            }



         }else if(tipoDisposicaoPalavra == 3){
            //Pega uma palavra da lista;
            let palavra: string = this.palavrasEscolhidas.pop()!;
            let palavraReversa: string = palavra.split('').reverse().join('');

            //Seleciona dois numeros aleatorios
            inicioL = this.getRandomInt(0, this.linha);
            inicioC = this.getRandomInt(0, this.coluna);

            //Valida as posições, e encontra novas caso precise
            let teste1 = ((inicioL + (palavra.length)) <= this.linha);
            let teste2 = this.verficaOcupacaoPalavra(palavraReversa, "v", inicioL, inicioC);
            while (!teste1 || teste2) {
               inicioL = this.getRandomInt(0, this.linha);
               inicioC = this.getRandomInt(0, this.coluna);
               teste1 = ((inicioL + (palavra.length)) <= this.linha);
               teste2 = this.verficaOcupacaoPalavra(palavraReversa, "v", inicioL, inicioC);
            }

            //Popula matriz
            for (let j = 0; j < palavra.length; j++) {
               this.matriz[inicioL][inicioC] = palavraReversa.charAt(j).toUpperCase();
               this.matrizEspelho[inicioL][inicioC] = palavraReversa.charAt(j);
               this.posicoesPalavras.set(inicioL + "-" + inicioC, palavraReversa);
               this.disposicoesPalavras.set(inicioL + "-" + inicioC, "BA");
               inicioL++;
            }
         }


      }
   }

   private verficaOcupacaoPalavra(palavra: string, sentido: string, direcao: number, base: number): boolean {
      //Se for da direita para esquerda
      if (sentido === "d") {
         for (let j = 0; j < palavra.length; j++) {

            if (this.isOcuped(base, direcao) || direcao == this.coluna) {
               return true;
            }
            direcao++;
         }
         // Se for de cima para baixo
      } else {
         for (let j = 0; j < palavra.length; j++) {
            
            if (direcao == this.linha || this.isOcuped(direcao, base)) {
               return true;
            }
            direcao++;
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

   private getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
   }

}