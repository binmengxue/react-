import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../static/style/components/header.css";
import { Row, Col, Menu, Icon } from "antd";
import Router from "next/router";
import axios from "axios";
import servicePath from "../config/apiUrl";
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);
  const handlerLink = e => {
    if (e.key == 3) {
      Router.push("/index");
    } else if (e.key == 1) {
      Router.push("/list?id=" + e.key);
    } else {
      Router.push("/contact");
    }
  };
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">归尘</span>
          <span className="header-text">每天记录一点点</span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handlerLink}>
            <Menu.Item key="3">
              <Icon type="home"></Icon>
              首页
            </Menu.Item>
            {navArray.map(item => {
              return (
                <Menu.Item key={item.Id}>
                  <Icon type={item.ico} />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
