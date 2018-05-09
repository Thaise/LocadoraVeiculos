import { Veiculo } from './../veiculo';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.css']
})
export class VeiculoCadastroComponent implements OnInit {
  error: any;
  mensagemRetorno: string;
  tipoMsgRetorno: string = "";
  response: any;
  veiculo: Veiculo = new Veiculo();
  veiculos: Veiculo[];
  camposDesabilitados: boolean;
  @ViewChild('cnpjInput') chassiInput: ElementRef;
  @ViewChild('placaInput') placaInput: ElementRef;
  @ViewChild('veiculoForm') veiculoForm: ElementRef;

  constructor(private veiculoService: VeiculoService, private routerParams: ActivatedRoute, private router: Router) {
    setTimeout(() => { }, 1);
  }

  ngOnInit() {
    let id: number = null;
    this.routerParams.params.subscribe(params => {
      if (params['id']) {
        id = +params['id'];
      }
    });

    if (this.router.url.indexOf('visualizacao') >= 0) {
      this.camposDesabilitados = true;
    }

    if (id != null) {
      this.buscaPeloId(id);
    }
  }

  enviaDados() {
    if (!this.veiculoForm.nativeElement.classList.contains("ng-invalid")) {
      if (this.veiculo.idVeiculo) {
        this.atualiza();
      } else {
        this.insere();
      }
    } else {
      this.tipoMsgRetorno = "danger";
      this.mensagemRetorno = "O formulário não foi preenchido corretamente!";
    }

  }

  validaChassi() {
    console.log(this.veiculoForm);
    if (this.veiculo.chassi) {
      this.veiculoService.validaChassi(this.veiculo).subscribe
        (l => this.response = l,
        e => {
          this.tipoMsgRetorno = "danger";
          this.mensagemRetorno = e._body;
          this.chassiInput.nativeElement.classList.add("ng-invalid");
          this.veiculoForm.nativeElement.classList.add("ng-invalid");
        },
        () => {
          this.tipoMsgRetorno = "";
          this.mensagemRetorno = null;
          this.chassiInput.nativeElement.classList.remove("ng-invalid");
          this.veiculoForm.nativeElement.classList.remove("ng-invalid");
        }
        );
    }
  }

  validaPlaca() {
    console.log(this.veiculoForm);
    if (this.veiculo.chassi) {
      this.veiculoService.validaPlaca(this.veiculo).subscribe
        (l => this.response = l,
        e => {
          this.tipoMsgRetorno = "danger";
          this.mensagemRetorno = e._body;
          this.placaInput.nativeElement.classList.add("ng-invalid");
          this.veiculoForm.nativeElement.classList.add("ng-invalid");
        },
        () => {
          this.tipoMsgRetorno = "";
          this.mensagemRetorno = null;
          this.placaInput.nativeElement.classList.remove("ng-invalid");
          this.veiculoForm.nativeElement.classList.remove("ng-invalid");
        }
        );
    }
  }

  insere() {
    this.veiculoService.insere(this.veiculo).subscribe
      (l => this.response = l,
      e => {
        this.error = e;
        console.error("Erro " + this.error.status + " - " + this.error.statusText + ": " + this.error._body);
        this.tipoMsgRetorno = "danger";
        this.mensagemRetorno = "Erro ao inserir veiculo '" + this.veiculo.modelo + "': " + this.error._body;
      },
      () => {
        this.tipoMsgRetorno = "success";
        this.mensagemRetorno = "Sucesso ao inserir veiculo '" + this.veiculo.modelo + "'";
        this.veiculo = new Veiculo();
        this.navegaParaReport();
      }
      );

  }

  atualiza() {
    this.veiculoService.atualiza(this.veiculo).subscribe
      (l => this.response = l,
      e => {
        this.error = e;
        console.error("Erro " + this.error.status + " - " + this.error.statusText + ": " + this.error._body);
        this.tipoMsgRetorno = "danger";
        this.mensagemRetorno = "Erro ao atualizar veiculo '" + this.veiculo.modelo + "': " + this.error._body;
      },
      () => {
        this.tipoMsgRetorno = "success";
        this.mensagemRetorno = "Sucesso ao atualizar veiculo '" + this.veiculo.modelo + "'";
        this.navegaParaReport();
      }
      );
  }


  remove() {
    this.veiculoService.remove(this.veiculo).subscribe
      (l => this.response = l,
      e => {
        this.error = e;
        console.error("Erro " + this.error.status + " - " + this.error.statusText + ": " + this.error._body);
        this.tipoMsgRetorno = "danger";
        this.mensagemRetorno = "Erro ao remover veiculo '" + this.veiculo.modelo + "': " + this.error._body;
      },
      () => {
        this.tipoMsgRetorno = "success";
        this.mensagemRetorno = "Sucesso ao remover veiculo '" + this.veiculo.modelo + "'";
        this.navegaParaReport();
      }
      );
  }

  buscaPeloId(id: number) {
    this.veiculoService.getPeloId(id).subscribe
      (l => {
        this.veiculo = l;
      },
      e => {
        console.error(this.error);
        this.tipoMsgRetorno = "danger";
        this.mensagemRetorno = "Erro ao buscar veiculo pelo id: " + id;
      },
      () => { }
      );

    if (this.veiculo == null) {
      this.tipoMsgRetorno = "warning";
      this.mensagemRetorno = "Veiculo não encontrada!";
      this.navegaParaReport();
    }

  }

  cancela() {
    this.veiculo = new Veiculo();
    this.navegaParaReport();
  }


  navegaParaReport() {
    this.router.navigateByUrl('/veiculo');
  }

}
