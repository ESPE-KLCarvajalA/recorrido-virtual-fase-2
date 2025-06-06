import { GithubOutlined, HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, Descriptions, Divider, Drawer, Menu, Row, Space } from "antd";
import { useState } from "react";

interface LateralesProps {
  open: boolean;
  onClose: () => void;
  setPositionCharacter: (pos: [number, number, number]) => void;
  openMapa: () => void;
}

export const Laterales = ({ open, onClose, setPositionCharacter, openMapa }: LateralesProps) => {
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const items = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Controles y vista panorámica',
      onClick: openMapa
    },
    {
      key: '2',
      icon: <InfoCircleOutlined />,
      label: 'Acerca de',
      onClick: showChildrenDrawer
    },
  ];

  const items2 = [
    {
      key: '1',
      icon: <GithubOutlined />,
      label: (
        <a href="https://github.com/Sammy593" target="_blank" rel="noopener noreferrer">
          Más proyectos
        </a>
      ),
    },
  ];

  const itemsDescritions = [
    {
      key: "1",
      label: "Sobre este proyecto",
      children: "Este proyecto fue desarrollado como parte de Proyecto de grado de la carrera de Ingeniería en Tecnologías de la Información de la Universidad de las Fuerzas Armadas ESPE, con el objetivo de contribuir en la promoción de la institución y su oferta académica.",
    },
    {
      key: "2",
      label: "Desarrollado por",
      children: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Samuel Ledesma</p>
          <small>- Carrera de Ingeniería en Tecnologías de la Información</small>
        </div>
      ),
    },
    {
      key: "3",
      label: "Bajo la dirección de",
      children: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Ing. Christian Coronel</p>
          <small>- Docente de la carrera de Ingeniería en Tecnologías de la Información</small>
        </div>
      ),
    },
  ];


  return (
    <Drawer
      title="Menú"
      width={520}
      closable={false}
      onClose={onClose}
      open={open}
      maskClosable={false}
      extra={
        <Space style={{ display: "flex", justifyContent: "flex-end", color: 'gray' }}>
          <small>Presione 'Espacio' para cerrar</small>
        </Space>
      }
    >
      <Row gutter={[24, 12]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <img
            style={{ width: "50%", height: "90%", margin: "0" }}
            src={`${import.meta.env.BASE_URL}img/logo_espe.webp`}
            alt="ESPE"
          />
        </Col>
        <Col span={24}>
          <strong> Ir a </strong>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([431.413, 5, 50])}>
            Inicio
          </Button>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([0, 7, 0])}>
            Sala de Docentes
          </Button>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([15, 7, -370])}>
            Aulas
          </Button>
        </Col>

        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([-55, -8, -85])}>
            Laboratorios de Biotecnología
          </Button>
        </Col>

        <Col span={24}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([17, -8.5, -357])}>
            Laboratorios de Tecnologías de la Información
          </Button>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([-120, 7, -20])}>
            Área de Estudiantes
          </Button>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }} type="default" onClick={() => setPositionCharacter([165, 7, -9])}>
            Lab de Fabricación Digital
          </Button>
        </Col>
      </Row>

      <Divider style={{
        borderColor: '#7cb305',
      }} />

      <Menu
        style={{
          width: '100%',
        }}
        items={items}
        mode="inline"
        theme="light"
      />
      <div
        style={{
          width: '100%', height: '100%',
          overflow: "hidden", position: "absolute",
        }}>
        <img
          style={{ width: "90%", height: '12%' }}
          src={`${import.meta.env.BASE_URL}img/espe-fondo.webp`}
          alt="ESPE"
        />
      </div>

      <Drawer
        title="Acerca de"
        width={320}
        closable={true}
        onClose={onChildrenDrawerClose}
        open={childrenDrawer}
      >
        <Descriptions title="" column={1}
          layout="vertical" items={itemsDescritions} />


        <Divider />
        <Menu
          style={{
            width: '100%',
          }}
          items={items2}
          mode="inline"
          theme="light"
        />

      </Drawer>
    </Drawer>
  );
};
