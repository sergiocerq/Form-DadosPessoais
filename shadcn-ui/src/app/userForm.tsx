import react, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siglasEstados } from "@/utils";
import { StepsFormCadastro } from "@/types";

type UserData = {
  nome: string;
  sobrenome: string;
  cidade: string;
  estado: string;
  rua: string;
  email: string;
  senha: string;
};

const INITIAL_STATE: UserData = {
  nome: "",
  sobrenome: "",
  cidade: "",
  estado: "",
  rua: "",
  email: "",
  senha: "",
};

export function UserForm() {
  const { data, updateFields, step, setStep } = useForm();

  return (
    <Tabs value={step} defaultValue={step} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="dados-pessoais"
          onClick={() => setStep("dados-pessoais")}
        >
          Dados Pessoais
        </TabsTrigger>
        <TabsTrigger value="endereco" onClick={() => setStep("endereco")}>
          Endereço
        </TabsTrigger>
        <TabsTrigger
          value="dados-acesso"
          onClick={() => setStep("dados-acesso")}
        >
          Dados de Acesso
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dados-pessoais">
        <Card>
          <CardHeader>
            <CardTitle>Dados Pessoais</CardTitle>
            <CardDescription>
              Por gentileza, digite as informações abaixo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col gap-3">
            <div className="space-y-1">
              <Label htmlFor="current">Nome Completo *</Label>
              <Input
                placeholder="Digite o seu nome completo"
                id="current"
                type="text"
                onChange={(e) => updateFields({ nome: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Data de Nascimento *</Label>
              <Input
                placeholder="Selecione a data"
                type="date"
                onChange={(e) => updateFields({ sobrenome: e.target.value })}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => setStep("endereco")}>Avançar</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="endereco">
        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
            <CardDescription>
              Por gentileza, digite as informações abaixo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="cidade">CEP *</Label>
            <div className="flex items-center jusfify-between gap-6 w-full">
              <Input
                className="max-w-[105px]"
                placeholder="00000-000"
                onChange={(e) => updateFields({ rua: e.target.value })}
              />

              <a className="text-blue-500 text-[0.7rem] whitespace-nowrap text-s underline cursor-pointer">
                Não sabe o seu CEP? Clique aqui
              </a>
            </div>
            <div className="space-y-1">
              <Label htmlFor="rua">Endereço</Label>
              <Input
                placeholder="Endereço"
                onChange={(e) => updateFields({ rua: e.target.value })}
              />
            </div>
            <ul className="flex items-center flex-start gap-4 w-full">
              <li>
                <Label htmlFor="cidade">Número</Label>
                <Input
                  className="w-[100px]"
                  placeholder="Número"
                  onChange={(e) => updateFields({ rua: e.target.value })}
                />
              </li>
              <li>
                <Label htmlFor="cidade">Bairro</Label>
                <Input
                  className="w-full"
                  placeholder="Bairro"
                  onChange={(e) => updateFields({ rua: e.target.value })}
                />
              </li>
            </ul>
            <ul className="flex items-center flex-start gap-4 w-full">
              <li>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  placeholder="Cidade"
                  onChange={(e) => updateFields({ rua: e.target.value })}
                />
              </li>
              <li>
                <div className="space-y-1">
                  <RenderEstados />
                </div>
              </li>
            </ul>
            <div className="space-y-1">
              <Label htmlFor="rua">Complemento</Label>
              <Input
                placeholder="Insira o complemento"
                onChange={(e) => updateFields({ rua: e.target.value })}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setStep("dados-pessoais")}
                className="bg-white text-black border-2 border-black hover:bg-slate-50"
              >
                Anterior
              </Button>
              <Button onClick={() => setStep("dados-acesso")}>Avançar</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="dados-acesso">
        <Card>
          <CardHeader>
            <CardTitle>Dados de Acesso</CardTitle>
            <CardDescription>
              Por gentileza, digite as informações abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col gap-2">
            <div className="space-y-1">
              <Label htmlFor="name">Usuário *</Label>
              <Input
                id="name"
                placeholder="Digite um nome de usuário, Ex.: sergiocerq"
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Senha *</Label>
              <Input
                type="password"
                placeholder="Digite uma senha"
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Digite novamente a senha *</Label>
              <Input
                type="password"
                placeholder="Digite novamente a senha"
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">E-mail</Label>
              <Input
                id="username"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => updateFields({ senha: e.target.value })}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setStep("endereco")}
                className="bg-white text-black border-2 border-black hover:bg-slate-50"
              >
                Anterior
              </Button>
              <Button>Finalizar</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const RenderEstados = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="estado">Estado</Label>
      <div id="estado">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Estados</SelectLabel>
              {siglasEstados.map((estado) => (
                <SelectItem value={estado}>{estado}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

const useForm = () => {
  const [data, setData] = useState(INITIAL_STATE);
  const [step, setStep] = useState<StepsFormCadastro>("dados-pessoais");

  function updateFields(fields: Partial<UserData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return { data, updateFields, step, setStep };
};
