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
