import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { siglasEstados } from "@/utils";

/**
 * RenderEstados - Componente para renderizar o select de estados brasileiros (UF)
 * 
 * Este componente renderiza uma lista de estados brasileiros utilizando um (`Select`). 
 * O estado atual selecionado é passado via `selectedUF`, e a função
 * `updateState` é utilizada para atualizar o estado quando o usuário faz uma
 * seleção.
 * 
 * @param {string | undefined} selectedUF - Estado (UF) atualmente selecionado.
 * @param {(arg: any) => void} updateState - Função para atualizar o estado do formulário ao selecionar um estado.
 * 
 * @returns {React.ReactNode} - Retorna o JSX contendo o seletor de estados.
 */
export const RenderEstados = ({
  selectedUF,
  updateState,
}: {
  selectedUF: string | undefined;
  updateState: (arg: any) => void;
}): React.ReactNode => {
  return (
    <>
      <Label htmlFor="estado">Estado</Label>
      <div id="estado">
        <Select name="uf" value={selectedUF} onChange={updateState}>
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
