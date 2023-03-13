import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chef/Manager - Pizza Express
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Londres, England
          </h4>
          <p>Supervisão de operações diárias e gerenciamento do staff.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Tester - Medtronic, Medical Technology, Services and
            Solutions Global
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Galway, Ireland
          </h4>
          <p>
            Instalação e testes de softwares de respiradores modelo E360 e
            Puritan Bennet.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Estagiário Jurídico - Baciclides Basso Junior Individual Law Firm
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Americana, Brazil
          </h4>
          <p>Elaboração de petições, pesquisas, atendimento a clientes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Frontend - Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            São José do Rio Preto, Brazil
          </h4>
          <p>
            Desenvolvimento de aplicações em JavaScrit Vanila e ReactJS. Criação e implementação de layouts usando Figma, HTML, CSS, Syled-components e Tailwind
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
