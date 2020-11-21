import React, { useState } from "react";

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
  Input,
  Select,
  Checkbox,
  TdGroup,
} from "./styles";

const EnvironmentEdit: React.FC = () => {
  const [state, setState] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
                    <tr>
                      <th></th>
                      <th>
                        <FaObjectGroup size={15} />
                      </th>
                      <th colSpan={2}></th>
                      <th>And/Or</th>
                      <th>Field</th>
                      <th>Operator</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <Td>
                        <TdContent>
                          <span>
                            <FaPlus size={15} color="#2ecc71" />
                          </span>
                          <span>
                            <FaTimes size={15} color="#ec644b" />
                          </span>
                        </TdContent>
                      </Td>
                      <Td>
                        <Checkbox
                          type="checkbox"
                          aria-label="Toggle grouping for filter clause"
                        />
                      </Td>
                      <TdGroup colSpan={2} isStart>
                        <FaObjectUngroup size={15} />
                      </TdGroup>
                      <Td></Td>
                      <Td>
                        <Select name="field" id="field">
                          <option value="temperatura">Temperatura</option>
                          <option value="umidade">Umidade</option>
                          <option value="luminosidade">Luminosidade</option>
                          <option value="presenca">Presença</option>
                        </Select>
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
                        <Input type="text" name="value" id="value" />
                      </Td>
                    </tr>
                    <tr>
                      <Td>
                        <TdContent>
                          <span>
                            <FaPlus size={15} color="#2ecc71" />
                          </span>
                          <span>
                            <FaTimes size={15} color="#ec644b" />
                          </span>
                        </TdContent>
                      </Td>
                      <Td>
                        <Checkbox
                          type="checkbox"
                          aria-label="Toggle grouping for filter clause"
                        />
                      </Td>
                      <TdGroup></TdGroup>
                      <TdGroup isStart>
                        <FaObjectUngroup size={15} />
                      </TdGroup>
                      <Td>
                        <Select name="logical" id="logical">
                          <option value="and">And</option>
                          <option value="or">Or</option>
                        </Select>
                      </Td>
                      <Td>
                        <Select name="field" id="field">
                          <option value="temperatura">Temperatura</option>
                          <option value="umidade">Umidade</option>
                          <option value="luminosidade">Luminosidade</option>
                          <option value="presenca">Presença</option>
                        </Select>
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
                        <Input type="text" name="value" id="value" />
                      </Td>
                    </tr>
                    <tr>
                      <Td>
                        <TdContent>
                          <span>
                            <FaPlus size={15} color="#2ecc71" />
                          </span>
                          <span>
                            <FaTimes size={15} color="#ec644b" />
                          </span>
                        </TdContent>
                      </Td>
                      <Td>
                        <Checkbox
                          type="checkbox"
                          aria-label="Toggle grouping for filter clause"
                        />
                      </Td>
                      <TdGroup></TdGroup>
                      <TdGroup isEnd></TdGroup>
                      <Td>
                        <Select name="logical" id="logical">
                          <option value="and">And</option>
                          <option value="or">Or</option>
                        </Select>
                      </Td>
                      <Td>
                        <Select name="field" id="field">
                          <option value="temperatura">Temperatura</option>
                          <option value="umidade">Umidade</option>
                          <option value="luminosidade">Luminosidade</option>
                          <option value="presenca">Presença</option>
                        </Select>
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
                        <Input type="text" name="value" id="value" />
                      </Td>
                    </tr>
                    <tr>
                      <Td>
                        <TdContent>
                          <span>
                            <FaPlus size={15} color="#2ecc71" />
                          </span>
                          <span>
                            <FaTimes size={15} color="#ec644b" />
                          </span>
                        </TdContent>
                      </Td>
                      <Td>
                        <Checkbox
                          type="checkbox"
                          aria-label="Toggle grouping for filter clause"
                        />
                      </Td>
                      <TdGroup colSpan={2} isEnd></TdGroup>
                      <Td>
                        <Select name="logical" id="logical">
                          <option value="and">And</option>
                          <option value="or">Or</option>
                        </Select>
                      </Td>
                      <Td>
                        <Select name="field" id="field">
                          <option value="temperatura">Temperatura</option>
                          <option value="umidade">Umidade</option>
                          <option value="luminosidade">Luminosidade</option>
                          <option value="presenca">Presença</option>
                        </Select>
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
                        <Input type="text" name="value" id="value" />
                      </Td>
                    </tr>
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
