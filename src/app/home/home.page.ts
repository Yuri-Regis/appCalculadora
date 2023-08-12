import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public primeiroNumero! : number;
  public segundoNumero! : number;
  public operacao! : string;

  constructor(private alertController: AlertController) {}

  async showResultAlert(resultado: number) {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `O resultado é: ${resultado}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  calcular(){
    if(this.primeiroNumero && this.segundoNumero){
      switch (this.operacao){
        case "0":
          this.showResultAlert (this.primeiroNumero + this.segundoNumero);
          break;
        case '1':
          this.showResultAlert (this.primeiroNumero - this.segundoNumero);
          break;
        case '2':
          this.showResultAlert (this.primeiroNumero * this.segundoNumero);
          break;
        case '3':
          if (this.segundoNumero === 0) {
            this.showErrorAlert('Não é possível dividir por zero.');
          } else {
            this.showResultAlert (this.primeiroNumero / this.segundoNumero);
          }
          break;
        default:
          this.showErrorAlert('Operação inválida.');
      }
    }
    else{
      this.showErrorAlert('Todos os números são obrigatórios.');
      }
    
    
  };

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
