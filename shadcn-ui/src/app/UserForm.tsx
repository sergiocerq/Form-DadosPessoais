import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HTMLUserFormProperties,
} from "@/types";
import { RenderEstados } from "./RenderEstados";
import { useForm } from "./useForm";

/**
 * UserForm - Componente do formulário multi etapas para cadastro de um usuário
 * 
 * O componente gerencia um formulário dividido em três etapas: "Dados Pessoais", "Endereço" e "Dados de Acesso".
 * Utiliza o hook `useForm` para separar a lógica do formulário da parte visual,
 * gerenciar o estado, validar os campos obrigatórios, e navegação
 * entre as etapas. 
 * 
 * @returns {JSX.Element} - Retorna o JSX do formulário multi-etapas com abas para cada etapa
 */
export function UserForm() {
  const { data, updateState, step, setStep, handleAvancar, handleFinish } =
    useForm();

  const steps: HTMLUserFormProperties[] = [
    {
      value: "dados-pessoais",
      title: "Dados Pessoais",
      description: "Por gentileza, digite as informações abaixo",
      content: (
        <CardContent className="space-y-2 flex flex-col gap-3">
          <div className="space-y-1">
            <Label htmlFor="current">Nome Completo *</Label>
            <Input
              value={data?.nome}
              placeholder="Digite o seu nome completo"
              id="current"
              name="nome"
              type="text"
              onChange={updateState}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Data de Nascimento *</Label>
            <Input
              value={data?.dataNascimento}
              placeholder="Selecione a data"
              name="dataNascimento"
              type="date"
              onChange={updateState}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleAvancar}>Avançar</Button>
          </div>
        </CardContent>
      ),
    },
    {
      value: "endereco",
      title: "Endereço",
      description: "Por gentileza, digite as informações abaixo",
      content: (
        <CardContent className="space-y-2">
          <Label htmlFor="cidade">CEP *</Label>
          <div className="flex items-center jusfify-between gap-6 w-full">
            <Input
              value={data?.cep}
              className="max-w-[105px]"
              name="cep"
              placeholder="00000-000"
              onChange={updateState}
            />
            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              className="text-blue-500 text-[0.7rem] whitespace-nowrap text-s underline cursor-pointer"
            >
              Não sabe o seu CEP? Clique aqui
            </a>
          </div>
          <div className="space-y-1">
            <Label htmlFor="rua">Endereço</Label>
            <Input
              value={data?.logradouro}
              name="endereco"
              placeholder="Endereço"
              onChange={updateState}
            />
          </div>
          <ul className="flex items-center flex-start gap-4 w-full">
            <li>
              <Label htmlFor="cidade">Número</Label>
              <Input
                value={data?.numero}
                name="numero"
                className="w-[100px]"
                placeholder="Número"
                onChange={updateState}
              />
            </li>
            <li>
              <Label htmlFor="cidade">Bairro</Label>
              <Input
                value={data?.bairro}
                name="bairro"
                className="w-full"
                placeholder="Bairro"
                onChange={updateState}
              />
            </li>
          </ul>
          <ul className="flex items-center flex-start gap-4 w-full">
            <li>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                value={data?.localidade}
                id="cidade"
                placeholder="Cidade"
                onChange={updateState}
              />
            </li>
            <li>
              <div className="space-y-1">
                <RenderEstados
                  selectedUF={data?.uf}
                  updateState={updateState}
                />
              </div>
            </li>
          </ul>
          <div className="space-y-1">
            <Label htmlFor="rua">Complemento</Label>
            <Input
              value={data?.unidade}
              name="complemento"
              placeholder="Insira o complemento"
              onChange={updateState}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => setStep("dados-pessoais")}
              className="bg-white text-black border-2 border-black hover:bg-slate-50"
            >
              Anterior
            </Button>
            <Button onClick={handleAvancar}>Avançar</Button>
          </div>
        </CardContent>
      ),
    },
    {
      value: "dados-acesso",
      title: "Dados de Acesso",
      description: "Por gentileza, digite as informações abaixo.",
      content: (
        <CardContent className="space-y-2 flex flex-col gap-2">
          <div className="space-y-1">
            <Label htmlFor="name">Usuário *</Label>
            <Input
              value={data?.usuario}
              id="name"
              name="usuario"
              placeholder="Digite um nome de usuário, Ex.: sergiocerq"
              onChange={updateState}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Senha *</Label>
            <Input
              value={data?.senha}
              name="senha"
              type="password"
              placeholder="Digite uma senha"
              onChange={updateState}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Digite novamente a senha *</Label>
            <Input
              value={data?.confirmarSenha}
              name="confirmarSenha"
              type="password"
              placeholder="Digite novamente a senha"
              onChange={updateState}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">E-mail</Label>
            <Input
              value={data?.email}
              name="email"
              id="username"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={updateState}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => setStep("endereco")}
              className="bg-white text-black border-2 border-black hover:bg-slate-50"
            >
              Anterior
            </Button>
            <Button onClick={handleFinish}>Finalizar</Button>
          </div>
        </CardContent>
      ),
    },
  ];

  return (
    <Tabs value={step} defaultValue={step} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        {steps.map((stepItem) => (
          <TabsTrigger
            key={stepItem.value}
            value={stepItem.value}
            className="cursor-default"
          >
            {stepItem.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {steps.map((stepItem) => (
        <TabsContent key={stepItem.value} value={stepItem.value}>
          <Card>
            <CardHeader>
              <CardTitle>{stepItem.title}</CardTitle>
              <CardDescription>{stepItem.description}</CardDescription>
            </CardHeader>
            {stepItem.content}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
