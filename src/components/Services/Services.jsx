import TickList from "../TickList/TickList";
import {
  SectionServices,
  ServicesBtn,
  ServicesContentWrapper,
  ServicesItem,
  ServicesList,
  ServicesText,
  ServicesTitle,
  Span,
} from "./Services.styled";
import { servicesData } from "./data";

const Services = () => {
  return (
    <SectionServices className="container" id="services">
      <ServicesContentWrapper>
        <ServicesTitle>Послуги</ServicesTitle>
        <ServicesText>
          Будуємо ефективні <Span>стратегії здорового менеджменту</Span> для
          бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій
          здорового менеджменту.
        </ServicesText>
        <ServicesList>
          {servicesData?.map((element) => (
            <ServicesItem key={element.title}>
              <TickList
                title={element.title}
                about={element.about}
                additionalComment={true}
              />
            </ServicesItem>
          ))}
        </ServicesList>
        <ServicesBtn href="#contact">Замовити консультацію</ServicesBtn>
      </ServicesContentWrapper>
    </SectionServices>
  );
};

export default Services;
