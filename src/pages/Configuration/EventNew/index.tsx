import React, { useCallback, useRef } from "react";
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
import TextArea from "../../../components/TextArea";

import { useToast } from "../../../hooks/toast";

import getValidationErrors from "../../../utils/getValidationErrors";

import { HiArrowNarrowLeft } from "react-icons/hi";

import { FaEdit, FaCode, FaList } from "react-icons/fa";

import api from "../../../services/api";

import {
  Fieldset,
  Legend,
  Footer,
  CheckboxGroup,
  EquipLink,
  Span,
} from "./styles";

interface NewEquipmentFormData {
  name: String;
  description: String;
  topic: String;
  script: String;
  enabled: boolean;
}

interface ParamsProps {
  environmentID: string;
}

const EventNew: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { environmentID } = useParams<ParamsProps>();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: NewEquipmentFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório!"),
          topic: Yup.string().required("Tópico obrigatório"),
          script: Yup.string().required("Regra obrigatório"),
        });

        await schema.validate(data, { abortEarly: false });

        const parametros = {
          name: data.name,
          description: data.description,
          script: data.script,
          topic: data.topic,
          enabled: data.enabled,
        };

        await api.post(`customevents/${environmentID}`, parametros, {
          headers: { "Content-Type": "application/json" },
        });

        addToast({
          type: "success",
          title: "Sucesso!",
          description: "Ambiente atualizado com sucesso.",
        });

        handleEditEnvironment();
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
    [addToast, history, environmentID]
  );

  const handleEditEnvironment = () => {
    history.push(`/configuration/environment/edit/${environmentID}`);
  };

  const handleEquipments = () => {
    window.open(
      window.location.origin + "/equipments",
      "",
      `width=400, height=600, directories=no, location=no, menubar=no, scrollbars=no, status=no, toolbar=no, left=${
        window.innerWidth - 500
      }, top=250`
    );
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
                    onClick={handleEditEnvironment}
                  />
                  Cadastro de evento
                </Legend>
                <Input name="name" icon={FaEdit} placeholder="Nome" />
                <Input
                  name="description"
                  icon={FaEdit}
                  placeholder="Descrição"
                />
                <Input name="topic" icon={FaEdit} placeholder="Tópico MQTT" />
                <EquipLink onClick={handleEquipments}>
                  <FaList size={10} />
                  Lista de equipamentos
                </EquipLink>
                <Span>
                  Ex: ( [ ID do Sensor ] {"&&"} [ ID2 do Sensor ] ) {">"} 12 : [
                  ID do Atuador ] = 1
                </Span>
                <TextArea name="script" icon={FaCode} placeholder="Regras" />
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

export default EventNew;
