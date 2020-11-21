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

interface GroupsProps {
  id: number;
  start: boolean;
  group: boolean;
  end: boolean;
}

interface SelectProps {
  name: string;
  value: string;
}

interface RowsProps {
  id: number;
  groups: Array<GroupsProps>;
  logicals: Array<SelectProps>;
  fields: Array<SelectProps>;
}

interface TableDataProps {
  groupCount: number;
  rows: Array<RowsProps>;
}

const EnvironmentEdit: React.FC = () => {
  const [checked, setChecked] = useState([] as string[]);
  const [tableData, settableData] = useState<TableDataProps>({
    groupCount: 0,
    rows: [
      {
        id: 1,
        groups: [],
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
        groups: [],
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
    ],
  });

  const handleRemove = useCallback(
    (rowID) => {
      const newData = tableData.rows.filter((data) => data.id !== rowID);
      settableData({ rows: newData, groupCount: tableData.groupCount });
    },
    [tableData]
  );

  const handleAdd = useCallback(
    (rowID) => {
      const newTableData = tableData.rows.map((elem) => {
        if (elem.id >= rowID) {
          elem.id = elem.id + 1;
        }
        return elem;
      });
    },
    [tableData]
  );

  const handleUnGroup = useCallback(
    (groupID: number) => {
      const newTableData = tableData.rows.map((elem: RowsProps) => {
        elem.groups = elem.groups.filter((gp) => gp.id !== groupID);
        return elem;
      });

      settableData({
        rows: newTableData,
        groupCount: tableData.groupCount - 1,
      });
    },
    [tableData]
  );

  const handleGroup = useCallback(() => {
    const newTableData = tableData.rows.map((rows) => {
      checked.sort().map((check, index) => {
        const checkQtd = checked.length - 1;
        console.log(
          "index: " +
            index +
            " rows: " +
            rows.id.toString() +
            " check: " +
            check
        );
        if (rows.id.toString() === check && index === 0) {
          console.log(1);
          const arr: Array<GroupsProps> = [
            {
              id: tableData.groupCount + 1,
              start: true,
              group: false,
              end: false,
            },
          ];
          rows.groups = rows.groups.concat(arr);
        } else if (rows.id.toString() === check && index === checkQtd) {
          console.log(2);
          const arr: Array<GroupsProps> = [
            {
              id: tableData.groupCount + 1,
              start: false,
              group: false,
              end: true,
            },
          ];
          rows.groups = rows.groups.concat(arr);
        } else if (rows.id.toString() === check) {
          console.log(3);
          const arr: Array<GroupsProps> = [
            {
              id: tableData.groupCount + 1,
              start: false,
              group: true,
              end: false,
            },
          ];
          rows.groups = rows.groups.concat(arr);
        }
      });
      return rows;
    });
    console.log(newTableData);
    console.log(tableData.groupCount + 1);
    settableData({ rows: newTableData, groupCount: tableData.groupCount + 1 });
  }, [tableData, checked]);

  const handleChangeCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const a = event.target.id;
        setChecked((state) => [...state, a]);
      } else {
        const a = event.target.id;
        setChecked((state) => state.filter((check) => check !== a));
      }
    },
    [checked]
  );

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <div>
            <Fieldset>
              <legend>Configuração de eventos</legend>
              <div>
                {tableData && (
                  <Table>
                    <tbody>
                      <tr key={0}>
                        <th></th>
                        <th>
                          <FaObjectGroup
                            size={15}
                            onClick={() => handleGroup()}
                          />
                        </th>
                        <th colSpan={tableData.groupCount}></th>
                        <th>And/Or</th>
                        <th>Field</th>
                        <th>Operator</th>
                        <th>Value</th>
                      </tr>
                      {tableData.rows.map((item) => (
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
                              id={item.id.toString()}
                              type="checkbox"
                              aria-label="Toggle grouping for filter clause"
                              onChange={(e) => handleChangeCheckbox(e)}
                            />
                          </Td>
                          {item.groups.length > 0 ? (
                            item.groups.map(
                              (group) =>
                                (group.start && (
                                  <TdGroup
                                    colSpan={
                                      tableData.groupCount -
                                      item.groups.length +
                                      1
                                    }
                                    isStart
                                  >
                                    <FaObjectUngroup
                                      size={15}
                                      onClick={() => handleUnGroup(group.id)}
                                    />
                                  </TdGroup>
                                )) ||
                                (group.group && (
                                  <TdGroup
                                    colSpan={
                                      tableData.groupCount -
                                      item.groups.length +
                                      1
                                    }
                                  ></TdGroup>
                                )) ||
                                (group.end && (
                                  <TdGroup
                                    colSpan={
                                      tableData.groupCount -
                                      item.groups.length +
                                      1
                                    }
                                    isEnd
                                  ></TdGroup>
                                ))
                            )
                          ) : (
                            <Td colSpan={tableData.groupCount} />
                          )}
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
                )}
              </div>
            </Fieldset>
          </div>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default EnvironmentEdit;
