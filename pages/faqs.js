import { useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import WellernAccordion from "../src/components/WellernAccordion";
import Layout from "../src/layout/Layout";

const Faq = () => {
  const faqsLeft = [
    { title: "¿Cómo puedo registrarme como estudiante en la plataforma?",resp:"Para registrarte como estudiante, ve a la página de inicio y haz clic en el botón Registrarse. Luego, completa el formulario de registro con tus datos personales y académicos." },
    { title: "¿Qué información debo incluir en mi hoja de vida?", resp: "Tu hoja de vida debe incluir tu información de contacto, experiencia laboral, educación, habilidades relevantes y cualquier otra información que consideres importante para tu perfil profesional."},
    { title: "¿Cómo pueden las empresas ver mi hoja de vida?", resp:"Las empresas pueden ver tu hoja de vida una vez que te hayas registrado y la hayas subido a la plataforma. Tu perfil será visible para las empresas que utilizan nuestros servicios." },
    {title:"¿Es necesario completar mi perfil con mis habilidades?", resp: "Sí, te recomendamos completar tu perfil con tus habilidades para que las empresas puedan buscar candidatos que se ajusten a sus necesidades específicas." },
    
    {title:"¿Puedo modificar mi hoja de vida una vez que la he subido?", resp:"Sí, puedes editar tu hoja de vida en cualquier momento. Mantenerla actualizada es importante para reflejar tu desarrollo y nuevas habilidades."}
  
  ];
  const faqsRight = [
    {title:"¿Las empresas pueden ponerse en contacto conmigo a través de la plataforma?", resp:"Sí, las empresas pueden ponerse en contacto contigo a través de la plataforma. Recibirás notificaciones cuando una empresa muestre interés en tu perfil."},
    {title:"¿Cuánto tiempo permanecerá mi perfil en la plataforma?", resp:" Tu perfil permanecerá en la plataforma el tiempo que desees. Puedes actualizarlo o eliminarlo en cualquier momento desde tu panel de control."},
    {title:"¿Qué debo hacer si olvidé mi contraseña?", resp:"Si olvidaste tu contraseña, ve a la página de inicio de sesión y haz clic en ¿Olvidaste tu contraseña?. Se te proporcionarán instrucciones para restablecerla."},
    {title:"¿Hay algún costo asociado con el uso de la plataforma como estudiante?", resp:"No, el registro y el uso de la plataforma como estudiante son completamente gratuitos. No hay costos ocultos."},
    {title:"¿Qué tipos de empresas utilizan esta plataforma?", resp:"Nuestra plataforma es utilizada por empresas de diversas industrias, desde startups hasta grandes corporaciones. Puedes encontrar una amplia gama de oportunidades laborales."},
  ]
  
  const [active, setActive] = useState(`a1`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        {faqsLeft.map((faq, i) => (
          <WellernAccordion
            title={faq.title}
            onClick={() => onClick(`a${i + 1}`)}
            active={active}
            eventName={`a${i + 1}`}
            key={i}
          >
            <p>
              {faq.resp}
            </p>
          </WellernAccordion>
        ))}
      </div>
      <div className="col-lg-6">
        {faqsRight.map((faq, i) => (
          <WellernAccordion
            key={i}
            title={faq.title}
            onClick={() => onClick(`b${i + 1}`)}
            active={active}
            eventName={`b${i + 1}`}
          >
            <p>
            {faq.resp}
            </p>
          </WellernAccordion>
        ))}
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Preguntas frecuentes"} />
      <section className="faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title-two">Tienes alguna pregunta?</span>
            <h2>Preguntas frecuentes</h2>
          </div>
          <Tab.Container defaultActiveKey={"tabContent1"}>
            <Nav className="nav faqs-tab mb-40">
              <li>
                <Nav.Link eventKey={"tabContent1"} href="#tabContent1">
                  Preguntas
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content faq-accordion">
              <Tab.Pane className="tab-pane fade" eventKey="tabContent1">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent2">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent3">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent4">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent5">
                <Accordion defaultActiveKey="a1">
                  <Faq />
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </Layout>
  );
};
export default Faqs;
