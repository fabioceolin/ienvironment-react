import React, { useState, useEffect } from "react";

import { Scrollbars } from "react-custom-scrollbars";
import CopyToClipboard from "react-copy-to-clipboard";

import { useToast } from "../../../hooks/toast";

import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Card from "../../../components/Card";

import api from "../../../services/api";

import { Table, Tbody } from "./styles";

interface responseData {
  id: string;
  type: string;
  name: string;
  description: string;
}

const EnvironmentConfig: React.FC = () => {
  const [equipments, setEquipments] = useState<responseData[]>([]);

  const { addToast } = useToast();

  const handleTextCopied = (name: string, id: string) => {
    addToast({
      type: "success",
      title: `Equipamento "${name}" Copiado!`,
      description: `Id "${id}" do equipamento "${name}" copiado com sucesso!`,
    });
  };

  useEffect(() => {
    api.get("/equipments").then((response) => {
      setEquipments(response.data);
    });
  }, []);

  return (
    <Scrollbars>
      <GridContainer>
        <GridItem xs={12} sm={6} lg={4} key="123">
          <Card>
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <Tbody>
                {equipments &&
                  equipments.map((equipment) => (
                    <CopyToClipboard
                      text={"[" + equipment.id + "]"}
                      onCopy={() =>
                        handleTextCopied(equipment.name, equipment.id)
                      }
                    >
                      <tr key={equipment.id}>
                        <td>{equipment.name}</td>
                        <td>{equipment.type}</td>
                      </tr>
                    </CopyToClipboard>
                  ))}
              </Tbody>
            </Table>
          </Card>
        </GridItem>
      </GridContainer>
    </Scrollbars>
  );
};

export default EnvironmentConfig;
