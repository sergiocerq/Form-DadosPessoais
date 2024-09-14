export type DadosPessoais = {
  nome: string;
  dataNascimento: string;
}

export type Endereco = {
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string;
}

export type DadosAcesso = {
  usuario: string;
  senha: string;
  email?: string;
}

export type FormCadastro = DadosPessoais & Endereco & DadosAcesso
export type StepsFormCadastro = "dados-pessoais" | "endereco" | "dados-acesso"