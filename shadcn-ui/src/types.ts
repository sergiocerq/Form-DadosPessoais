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
  confirmarSenha: string;
  email?: string;
}

export type FormCadastro = DadosPessoais & Endereco & DadosAcesso
export type StepsFormCadastro = "dados-pessoais" | "endereco" | "dados-acesso"

export type CEP_Response = Partial<Endereco> & {
  logradouro: string;
  unidade: string;
  localidade: string;
  uf: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export type HTMLUserFormProperties = {
  value: "dados-pessoais" | "endereco" | "contato" | string; 
  title: string
  description?: string
  content: React.ReactNode
}