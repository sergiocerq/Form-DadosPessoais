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

const siglasEstados: string[] = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

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
  const [data, setData] = useState(INITIAL_STATE);
  function updateFields(fields: Partial<UserData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const estados = renderEstados();
  return (
    <Tabs defaultValue="person" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="person">Pessoa</TabsTrigger>
        <TabsTrigger value="address">Endereço</TabsTrigger>
        <TabsTrigger value="account">Conta</TabsTrigger>
      </TabsList>

      <TabsContent value="person">
        <Card>
          <CardHeader>
            <CardTitle>Pessoa</CardTitle>
            <CardDescription>
              Cadastre suas informações aqui. Após cadastrar, siga para a
              próxima etapa.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Nome</Label>
              <Input
                id="current"
                type="text"
                onChange={(e) => updateFields({ nome: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Sobrenome</Label>
              <Input
                id="new"
                type="text"
                onChange={(e) => updateFields({ sobrenome: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="address">
        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
            <CardDescription>
              Preencha os campos com a sua localidade.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">{estados}</div>
            <div className="space-y-1">
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                onChange={(e) => updateFields({ rua: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="rua">Rua</Label>
              <Input
                id="rua"
                onChange={(e) => updateFields({ rua: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Conta</CardTitle>
            <CardDescription>
              Crie a sua conta aqui. Após salvar, os dados serão apagados.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input
                id="name"
                placeholder="email@email.com"
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Senha</Label>
              <Input
                id="username"
                placeholder="******"
                onChange={(e) => updateFields({ senha: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const renderEstados = (): React.ReactNode => {
  return (
    <>
      <Label htmlFor="estado">Estado</Label>
      <div id="estado">
        <Select>
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Selecione um estado" />
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
