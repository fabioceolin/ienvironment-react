import React, { useState, useCallback } from "react";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";

import {
  FaObjectGroup,
  FaObjectUngroup,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

import {
  Fieldset,
  Table,
  Td,
  TdContent,
  Select,
  Checkbox,
  TdGroup,
  Input,
  // InputContainer,
} from "./styles";

const EnvironmentEdit: React.FC = () => {
  // const [state, setState] = useState(null)
  const [tableData, settableData] = useState([
    {
      id: 1,
      logicals: [],
      fields: [
        { name: "Temperatura", value: "temperatura" },
        { name: "Umidade", value: "umidade" },
        { name: "Luminosidade", value: "luminosidade" },
        { name: "Presença", value: "presenca" },
      ],
    },
    {
      id: 2,
      logicals: [
        { name: "And", value: "and" },
        { name: "Or", value: "or" },
      ],
      fields: [
        { name: "Temperatura", value: "temperatura" },
        { name: "Umidade", value: "umidade" },
        { name: "Luminosidade", value: "luminosidade" },
        { name: "Presença", value: "presenca" },
      ],
    },
    {
      id: 3,
      logicals: [
        { name: "And", value: "and" },
        { name: "Or", value: "or" },
      ],
      fields: [
        { name: "Temperatura", value: "temperatura" },
        { name: "Umidade", value: "umidade" },
        { name: "Luminosidade", value: "luminosidade" },
        { name: "Presença", value: "presenca" },
      ],
    },
  ]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  const handleRemove = useCallback(
    (rowID) => {
      const newData = tableData.filter((data) => data.id !== rowID);
      settableData(newData);
    },
    [tableData]
  );

  const handleAdd = useCallback(
    (rowID) => {
      const newTableData = tableData.map((elem) => {
        if (elem.id >= rowID) {
          elem.id = elem.id + 1;
        }
        return elem;
      });
    },
    [tableData]
  );

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <div>
            <Fieldset>
              <legend>Configuração de eventos</legend>
              <div>
                <Table>
                  <tbody>
                    <tr key={0}>
                      <th></th>
                      <th>
                        <FaObjectGroup size={15} />
                      </th>
                      <th></th>
                      <th>And/Or</th>
                      <th>Field</th>
                      <th>Operator</th>
                      <th>Value</th>
                    </tr>
                    {tableData &&
                      tableData.map((item) => (
                        <tr key={item.id}>
                          <Td>
                            <TdContent>
                              <span>
                                <FaPlus
                                  size={15}
                                  color="#2ecc71"
                                  onClick={() => handleAdd(item.id)}
                                />
                              </span>
                              <span>
                                <FaTimes
                                  size={15}
                                  color="#ec644b"
                                  onClick={() => handleRemove(item.id)}
                                />
                              </span>
                            </TdContent>
                          </Td>
                          <Td>
                            <Checkbox
                              type="checkbox"
                              aria-label="Toggle grouping for filter clause"
                            />
                          </Td>
                          <Td></Td>
                          <Td>
                            {item.logicals.length > 0 && (
                              <Select name="logical" id="logical">
                                {item.logicals.map((logical) => (
                                  <option value={logical.value}>
                                    {logical.name}
                                  </option>
                                ))}
                              </Select>
                            )}
                          </Td>
                          <Td>
                            {item.fields.length > 0 && (
                              <Select name="field" id="field">
                                {item.fields.map((field) => (
                                  <option value={field.value}>
                                    {field.name}
                                  </option>
                                ))}
                              </Select>
                            )}
                          </Td>
                          <Td>
                            <Select name="operator" id="operator">
                              <option value="temperatura">=</option>
                              <option value="umidade">&lt;&gt;</option>
                              <option value="umidade">&gt;</option>
                              <option value="umidade">&lt;</option>
                              <option value="umidade">=&gt;</option>
                              <option value="umidade">=&lt;</option>
                            </Select>
                          </Td>
                          <Td>
                            {/* <InputContainer> */}
                            <Input type="text" name="value" id="value" />
                            {/* </InputContainer> */}
                          </Td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </Fieldset>
          </div>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default EnvironmentEdit;
