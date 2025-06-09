import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { v4 as uuidV4 } from 'uuid';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  @ViewChild('form') form!: NgForm;

  atividade: string = '';

  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: '',
  };

  constructor(private certificadoService: CertificadoService) { }

  campoValido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidV4();

    const copiaCertificado: Certificado = {
      id: this.certificado.id,
      nome: this.certificado.nome,
      atividades: [... this.certificado.atividades],
      dataEmissao: this.dataAtual(),
    }

    this.certificadoService.adicionarCertificado(copiaCertificado);
    this.certificado = this.estadoInciaCertificado();
    this.form.resetForm();
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInciaCertificado(): Certificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: '',
    };
  }
}