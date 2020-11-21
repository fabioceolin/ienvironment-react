import React, { useCallback, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Base from "../../../components/Base";
import Checkbox from "../../../components/Checkbox";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Textarea from "../../../components/TextArea";
import Upload from "../../../components/Upload";

import { useToast } from "../../../hooks/toast";
import { useUpload } from "../../../hooks/upload";
import getValidationErrors from "../../../utils/getValidationErrors";

import {
  HiOutlineInformationCircle,
  HiOutlineOfficeBuilding,
  HiArrowNarrowLeft,
} from "react-icons/hi";

import api from "../../../services/api";

import { Fieldset, Legend, Footer, CheckboxGroup } from "./styles";

interface NewEnvironmentFormData {
  nome: string;
  descricao?: string;
  enabled: boolean;
}

interface ParamsProps {
  environmentID: string;
}

interface ResponseProps {
  equipments: Array<string>;
  events: Array<string>;
  numberOfEquipments: number;
  equipmentsOnline: number;
  img: string;
  enabled: boolean;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

const EnvironmentConfig: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { listAllFiles, removeAllFiles } = useUpload();
  const { environmentID } = useParams<ParamsProps>();
  const history = useHistory();

  useEffect(() => {
    removeAllFiles();

    if (environmentID !== "-1") {
      api
        .get<ResponseProps>(`/environments/byid/${environmentID}`)
        .then((response) => {
          formRef.current?.setData({
            nome: response.data.name,
            descricao: response.data.description,
            enabled: response.data.enabled,
          });
          console.log(response.data);
        });
    }
  }, [environmentID, removeAllFiles]);

  const handleSubmit = useCallback(
    async (data: NewEnvironmentFormData) => {
      try {
        const images = listAllFiles();
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required("Nome obrigatório!"),
        });

        await schema.validate(data, { abortEarly: false });

        const parametros =
          images.length > 0
            ? {
                name: data.nome,
                description: data.descricao,
                img: images[0].ResponseFileID,
                enabled: data.enabled,
              }
            : {
                name: data.nome,
                description: data.descricao,
                enabled: data.enabled,
              };

        if (environmentID !== "-1") {
          await api.put(`environments/${environmentID}`, parametros, {
            headers: { "Content-Type": "application/json" },
          });

          addToast({
            type: "success",
            title: "Sucesso!",
            description: "Ambiente atualizado com sucesso.",
          });
        } else {
          await api.post("environments", parametros, {
            headers: { "Content-Type": "application/json" },
          });

          addToast({
            type: "success",
            title: "Sucesso!",
            description: "Ambiente cadastrado com sucesso.",
          });
        }

        history.push("/configuration/environment");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          console.log("yup error");

          return;
        }

        console.log(err);

        addToast({
          type: "error",
          title: "Erro ao criar",
          description:
            "Ocorreu um erro ao tentar criar um novo ambiente, tente novamente",
        });
      }
    },
    [listAllFiles, addToast, history, environmentID]
  );

  const handleNewEnvironment = () => {
    history.push("/configuration/environment");
  };

  return (
    <Base>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Fieldset>
                <Legend>
                  <HiArrowNarrowLeft
                    color="#ff9000"
                    onClick={handleNewEnvironment}
                  />
                  Cadastro de ambiente
                </Legend>
                <Input
                  name="nome"
                  icon={HiOutlineOfficeBuilding}
                  placeholder="Nome"
                />
                <Textarea
                  name="descricao"
                  icon={HiOutlineInformationCircle}
                  placeholder="Descrição"
                />
                <Upload />
                <CheckboxGroup>
                  <Checkbox name="enabled" checked>
                    Ativado
                  </Checkbox>
                </CheckboxGroup>
              </Fieldset>
              <Footer>
                <Button type="submit">Salvar</Button>
              </Footer>
            </Form>
          </Card>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default EnvironmentConfig;
