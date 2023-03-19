import React from "react";
import { Layout } from "antd";
import styles from "../styles/sass/components/avatar.module.scss";
import Main from "./main";

const { Header, Content, Sider } = Layout;

const LeftHeader = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={200} style={{ height: "100%" }}>
                <div className={styles.avatar}>
                    <div>
                        <p>GG</p>
                    </div>
                    <p>Nombre Apelido</p>
                </div>
                <div className={styles.separador}>
                    <hr />
                </div>
            </Sider>
            <Main />
        </Layout>
    );
};

export default LeftHeader;
