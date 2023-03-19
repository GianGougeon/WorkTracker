import { Space, Table, Tag } from "antd";
const columns = [
    {
        title: "Día",
        dataIndex: "dia",
        key: "dia",
    },
    {
        title: "Fecha",
        dataIndex: "fecha",
        key: "fecha",
    },
    {
        title: "Horas Normales",
        dataIndex: "horasN",
        key: "horasN",
    },
    {
        title: "Horas Extra",
        key: "horaE",
        dataIndex: "horaE",
    },
    {
        title: "Lugar",
        key: "lugar",
        dataIndex: "lugar",
    },
    {
        title: "Información Adicional",
        key: "info",
        dataIndex: "info",
    },
];
const data = [
    {
        key: "1",
        dia: "Martes",
        fecha: "28/2/2023",
        horasN: "9:30:00",
        horaE: "1:30:00",
        lugar: "MDP",
        info: "montaje de termica, fuente, swich red / cableado red con terminales",
    },
];
const tabla = () => <Table columns={columns} dataSource={data} />;
export default tabla;
