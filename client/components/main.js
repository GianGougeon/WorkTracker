import React from "react";
import Tabla from "./tabla";
import { Layout, Space, Typography } from "antd";
import styles from "../styles/sass/components/dia.module.scss";

const { Header, Content, Sider } = Layout;
const { Text, Link } = Typography;


function getDaysOfWeek() {
    const diasDeLaSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];
    const hoy = new Date();
    const diaEnMesActual = hoy.getDate();
    const primerDiaDeLaSemana = new Date(
        hoy.getFullYear(),
        hoy.getMonth(),
        diaEnMesActual - hoy.getDay()
    );
    const dias = {};

    for (let i = 0; i < 7; i++) {
        const fecha = new Date(
            primerDiaDeLaSemana.getFullYear(),
            primerDiaDeLaSemana.getMonth(),
            primerDiaDeLaSemana.getDate() + i
        );
        dias[diasDeLaSemana[i]] = fecha.getDate();
    }

    return dias;
}

const main = () => {
    const diasDeLaSemana = getDaysOfWeek();
    return (
        <Layout style={{ padding: "0 24px 24px" }}>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <aside className={styles.aside}>
                    <div>
                        {Object.keys(diasDeLaSemana).map((dia) => (
                            <div key={dia}>
                                <Text strong>{dia}</Text>
                                <Text strong>{diasDeLaSemana[dia]}</Text>
                            </div>
                        ))}
                    </div>
                </aside>
                <Tabla />

            </Content>
        </Layout>
    );
};

export default main;
