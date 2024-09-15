import { FormCadastro, StepsFormCadastro } from "@/types";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

/**
 * useForm - Hook para gerenciamento do formulário de cadastro de usuário com múltiplos passos
 * 
 * Este hook lida com as etapas de um formulário de cadastro, gerencia o estado dos dados, valida os campos obrigatórios,
 * faz requisição à API de CEP para preenchimento automático de endereço e lida com a navegação entre as etapas.
 * 
 * @returns {Object} - Retorna um objeto contendo:
 *   - `data`: Estado atual dos dados do formulário
 *   - `updateState`: Função para atualizar o estado dos dados do formulário
 *   - `step`: A etapa atual do formulário
 *   - `setStep`: Função para definir manualmente a etapa do formulário
 *   - `handleAvancar`: Função para avançar para a próxima etapa após validar os campos obrigatórios
 *   - `handleFinish`: Função para finalizar o formulário após validar os campos obrigatórios
 */
export const useForm = () => {
  const steps = ["dados-pessoais", "endereco", "dados-acesso"];
  const [data, setData] = useState<FormCadastro | undefined>();
  const [step, setStep] = useState<StepsFormCadastro>("dados-pessoais");
  const dadosObrigatoriosPorStep = {
    "dados-pessoais": ["nome", "dataNascimento"],
    "endereco": ["cep"],
    "dados-acesso": ["usuario", "senha", "confirmarSenha"],
  };

  useEffect(() => {
    async function fetchEnderecoByCEP() {
      const response = await fetch(
        `https://viacep.com.br/ws/${data?.cep}/json/`
      );
      const json = await response.json();

      setData((prev) => {
        return { ...prev, ...json };
      });
    }

    if (data?.cep?.length > 7) {
      fetchEnderecoByCEP();
    }
  }, [data?.cep]);

  const updateState = (event: any) => {
    const { name, value } = event.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validarCamposObrigatorios = (): boolean => {
    const camposObrigatorios = dadosObrigatoriosPorStep[step];

    const camposPreenchidos = camposObrigatorios.every((campo) => {
      const valorCampo = data?.[campo];
      return (
        valorCampo !== undefined &&
        valorCampo !== null &&
        valorCampo.trim() !== ""
      );
    });

    return camposPreenchidos;
  };

  const handleAvancar = () => {
    if (!validarCamposObrigatorios()) {
      showCamposObrigatoriosErrorMessage(
        "Por favor, preencha todos os campos obrigatórios antes de avançar."
      );
      return;
    }

    const proximoStepIndex = steps.indexOf(step) + 1;

    if (proximoStepIndex < steps.length) {
      setStep(steps[proximoStepIndex] as StepsFormCadastro);
    }
  };

  const handleFinish = () => {
    if (!validarCamposObrigatorios()) {
      showCamposObrigatoriosErrorMessage(
        "Por favor, preencha todos os campos obrigatórios antes de finalizar."
      );
      return;
    }

    if (data?.senha !== data?.confirmarSenha) {
      showCamposObrigatoriosErrorMessage("As senhas digitadas são diferentes!");
      return;
    }

    toast.success("Todos os dados foram preenchidos!", {
      style: {
        color: "#00E680",
      },
    });
  };

  const showCamposObrigatoriosErrorMessage = (message: string) => {
    toast.error(message, {
      style: {
        color: "#F23857",
        background: "#ffffff",
      },
    });
  };

  return { data, updateState, step, setStep, handleAvancar, handleFinish };
};
