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
import Select from "../../../components/Select";
import Upload from "../../../components/Upload";

import { useToast } from "../../../hooks/toast";
import { useUpload } from "../../../hooks/upload";
import getValidationErrors from "../../../utils/getValidationErrors";

import { HiArrowNarrowLeft } from "react-icons/hi";

import { FaEdit } from "react-icons/fa";

import api from "../../../services/api";

import { Fieldset, Legend, Footer, CheckboxGroup } from "./styles";

interface NewEquipmentFormData {
  name: String;
  description: String;
  type: String;
  entityType: String;
  topic: String;
  simulationMode: boolean;
}

interface ParamsProps {
  environmentID: string;
}

const EquipmentNew: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { listAllFiles, removeAllFiles } = useUpload();
  const { environmentID } = useParams<ParamsProps>();
  const history = useHistory();

  useEffect(() => {
    removeAllFiles();
  }, [removeAllFiles]);

  const handleSubmit = useCallback(
    async (data: NewEquipmentFormData) => {
      try {
        const images = listAllFiles();
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório!"),
          type: Yup.string().required("Caracteristica obrigatório!"),
          entityType: Yup.string().required("Tipo obrigatório!"),
          topic: Yup.string().required("Tópico MQTT obrigatório!"),
        });

        await schema.validate(data, { abortEarly: false });

        const parametros =
          images.length > 0
            ? {
                name: data.name,
                description: data.description,
                img: images[0].ResponseFileID,
                type: data.type,
                entityType: data.entityType,
                topic: data.topic,
                simulationMode: data.simulationMode,
              }
            : {
                name: data.name,
                description: data.description,
                type: data.type,
                entityType: data.entityType,
                topic: data.topic,
                simulationMode: data.simulationMode,
              };

        await api.post(`equipments/${environmentID}`, parametros, {
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
    [listAllFiles, addToast, history, environmentID]
  );

  const handleEditEnvironment = () => {
    history.push(`/configuration/environment/edit/${environmentID}`);
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
                  Cadastro de equipamento
                </Legend>
                <Input name="name" icon={FaEdit} placeholder="Nome" />
                <Input
                  name="description"
                  icon={FaEdit}
                  placeholder="Descrição"
                />
                <Select
                  name="type"
                  icon={FaEdit}
                  placeholder="Caracteristica"
                  options={[
                    { value: "Sensor", label: "Sensor" },
                    { value: "Atuador", label: "Atuador" },
                  ]}
                />
                <Select
                  name="entityType"
                  icon={FaEdit}
                  placeholder="Tipo"
                  options={[
                    { value: "boolean", label: "Boolean" },
                    { value: "float", label: "Float" },
                    { value: "int", label: "Int" },
                    { value: "string", label: "String" },
                  ]}
                />
                <Input name="topic" icon={FaEdit} placeholder="Tópico MQTT" />
                <Upload />
                <CheckboxGroup>
                  <Checkbox name="simulationMode">Modo simulação</Checkbox>
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

export default EquipmentNew;
