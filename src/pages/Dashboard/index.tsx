import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  FaTemperatureHigh,
  FaSyncAlt,
  FaTint,
  FaUsers,
  FaCloudSun,
  FaArrowLeft,
} from "react-icons/fa";

import Base from "../../components/Base";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import CardStatus from "../../components/CardStatus";
import CustomTabs from "../../components/CustomTabs";

import { Chart, Header } from "./styles";

const data = [
  {
    name: "16/09/20 20:13",
    Temperatura: 19,
    Umidade: 89,
    Luminosidade: 217,
    Presença: 1,
  },
  {
    name: "16/09/20 20:14",
    Temperatura: 21,
    Umidade: 87,
    Luminosidade: 198,
    Presença: 0,
  },
  {
    name: "16/09/20 20:15",
    Temperatura: 20,
    Umidade: 76,
    Luminosidade: 237,
    Presença: 1,
  },
  {
    name: "16/09/20 20:17",
    Temperatura: 22,
    Umidade: 85,
    Luminosidade: 211,
    Presença: 0,
  },
  {
    name: "16/09/20 20:19",
    Temperatura: 21,
    Umidade: 89,
    Luminosidade: 217,
    Presença: 1,
  },
  {
    name: "16/09/20 20:42",
    Temperatura: 20,
    Umidade: 64,
    Luminosidade: 117,
    Presença: 0,
  },
  {
    name: "16/09/20 20:44",
    Temperatura: 19,
    Umidade: 99,
    Luminosidade: 185,
    Presença: 1,
  },
  {
    name: "16/09/20 20:50",
    Temperatura: 18,
    Umidade: 92,
    Luminosidade: 203,
    Presença: 0,
  },
  {
    name: "16/09/20 21:01",
    Temperatura: 19,
    Umidade: 89,
    Luminosidade: 217,
    Presença: 1,
  },
  {
    name: "16/09/20 21:02",
    Temperatura: 21,
    Umidade: 78,
    Luminosidade: 265,
    Presença: 0,
  },
  {
    name: "16/09/20 21:03",
    Temperatura: 22,
    Umidade: 94,
    Luminosidade: 193,
    Presença: 1,
  },
  {
    name: "16/09/20 21:04",
    Temperatura: 19,
    Umidade: 76,
    Luminosidade: 256,
    Presença: 0,
  },
  {
    name: "16/09/20 21:05",
    Temperatura: 24,
    Umidade: 88,
    Luminosidade: 163,
    Presença: 1,
  },
  {
    name: "16/09/20 21:06",
    Temperatura: 25,
    Umidade: 81,
    Luminosidade: 20,
    Presença: 0,
  },
  {
    name: "16/09/20 21:07",
    Temperatura: 27,
    Umidade: 95,
    Luminosidade: 0,
    Presença: 1,
  },
  {
    name: "16/09/20 21:08",
    Temperatura: 16,
    Umidade: 82,
    Luminosidade: 148,
    Presença: 0,
  },
  {
    name: "16/09/20 21:09",
    Temperatura: 19,
    Umidade: 79,
    Luminosidade: 222,
    Presença: 1,
  },
];

const divStyle = {
  color: "#000",
  opacity: 0.8,
};

interface ParamsProps {
  environmentID: string;
}

interface FileResponseProps {
  _id: string;
  name: string;
  size: number;
  key: string;
  url: string;
  createdAt: string;
  _v: number;
}

interface responseData {
  id: string;
  name: string;
  description: string;
  img: FileResponseProps;
  equipmentsOnline: number;
  numberOfEquipments: number;
  equipments: Array<string>;
  events: Array<string>;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

const Teste: React.FC = () => {
  const [environments, setEnvironments] = useState<responseData>();
  const history = useHistory();
  const { environmentID } = useParams<ParamsProps>();

  useEffect(() => {
    api.get(`/environments/byid/${environmentID}`).then((response) => {
      setEnvironments(response.data);
    });
  }, []);

  const handleHome = () => {
    history.push(`/`);
  };

  return (
    <Base>
      <GridContainer>
        <GridItem xs={12}>
          <Header onClick={handleHome}>
            <FaArrowLeft color="#ff9000" />
            <span>{environments?.name}</span>
          </Header>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CardStatus
            title="Temperatura"
            headerIcon={FaTemperatureHigh}
            footerIcon={FaSyncAlt}
            value="22"
            unidadeMedida="ºC"
            textFooter="Just Updated"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CardStatus
            title="Umidade"
            type="warning"
            headerIcon={FaTint}
            footerIcon={FaSyncAlt}
            value="78"
            unidadeMedida="%"
            textFooter="Just Updated"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CardStatus
            title="Luminosidade"
            type="danger"
            headerIcon={FaCloudSun}
            footerIcon={FaSyncAlt}
            value="217"
            unidadeMedida="Lx"
            textFooter="Just Updated"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CardStatus
            title="Presença"
            type="success"
            headerIcon={FaUsers}
            footerIcon={FaSyncAlt}
            value="Ativado"
            textFooter="Just Updated"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <CustomTabs
            title="Sensores:"
            headerColor="#ccc"
            tabs={[
              {
                tabName: "Temperatura",
                tabIcon: FaTemperatureHigh,
                tabContent: (
                  <Chart>
                    <ResponsiveContainer>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" />
                        <YAxis domain={["auto", "auto"]} />
                        <Tooltip contentStyle={divStyle} />
                        <Legend verticalAlign="top" height={45} />
                        <Line
                          type="monotone"
                          dataKey="Temperatura"
                          stroke="#ff9000"
                          fill="#ff9000"
                          dot={{ r: 5 }}
                          strokeWidth={3}
                          label={{
                            fill: "#fff",
                            offset: "10",
                            position: "top",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                ),
              },
              {
                tabName: "Umidade",
                tabIcon: FaTint,
                tabContent: (
                  <Chart>
                    <ResponsiveContainer>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" />
                        <YAxis domain={["auto", "auto"]} />
                        <Tooltip contentStyle={divStyle} />
                        <Legend verticalAlign="top" height={45} />
                        <Line
                          type="monotone"
                          dataKey="Umidade"
                          stroke="#ff9000"
                          fill="#ff9000"
                          dot={{ r: 5 }}
                          strokeWidth={3}
                          label={{
                            fill: "#fff",
                            offset: "10",
                            position: "top",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                ),
              },
              {
                tabName: "Luminosidade",
                tabIcon: FaCloudSun,
                tabContent: (
                  <Chart>
                    <ResponsiveContainer>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" />
                        <YAxis domain={["auto", "auto"]} />
                        <Tooltip contentStyle={divStyle} />
                        <Legend verticalAlign="top" height={45} />
                        <Line
                          type="monotone"
                          dataKey="Luminosidade"
                          stroke="#ff9000"
                          fill="#ff9000"
                          dot={{ r: 5 }}
                          strokeWidth={3}
                          label={{
                            fill: "#fff",
                            offset: "10",
                            position: "top",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                ),
              },
              {
                tabName: "Presença",
                tabIcon: FaUsers,
                tabContent: (
                  <Chart>
                    <ResponsiveContainer>
                      <LineChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" />
                        <YAxis domain={["auto", "auto"]} />
                        <Tooltip contentStyle={divStyle} />
                        <Legend verticalAlign="top" height={45} />
                        <Line
                          type="monotone"
                          dataKey="Presença"
                          stroke="#ff9000"
                          fill="#ff9000"
                          dot={{ r: 5 }}
                          strokeWidth={3}
                          label={{
                            fill: "#fff",
                            offset: "10",
                            position: "top",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                ),
              },
            ]}
          ></CustomTabs>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default Teste;
