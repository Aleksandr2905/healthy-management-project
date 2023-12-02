// import Foto from "../../images/desktop/olga_picture1x.jpg";
import Fotos from "../../images/desktop/olga_picture1x.webp";
// import Fotos2x from "../../images/desktop/olga_picture@2x.jpg";
// import Fotos1x from "../../images/desktop/olga_picture1x.jpg";
import Icon from "../../images/sprite.svg";
import {
  SectionAboutMe,
  SectionAboutMeAdress,
  SectionAboutMeDiv,
  SectionAboutMeDivOl,
  SectionAboutMeDivWidth,
  SectionAboutMeHOl,
  SectionAboutMeLink,
  SectionAboutMeList,
  SectionAboutMePol,
  SectionAboutMeSvg,
  SectionAboutMeTitle,
} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <SectionAboutMe>
      <div>
        <SectionAboutMeTitle>Про мене</SectionAboutMeTitle>
        <SectionAboutMeDiv>
          <SectionAboutMeDivWidth>
            {/* <picture>
              <source
                srcSet={`${Fotos} 2x, ${Fotos} 1x`}
                media="(min-width: 1920px)"
                type="image/webp"
              />
              <source
                srcSet={`${Fotos2x} 2x, ${Fotos1x} 1x`}
                media="(min-width: 1920px)"
                type="image/png"
              />
            </picture> */}
            <img src={Fotos} alt="Ольга Поліщук" />
          </SectionAboutMeDivWidth>
          <SectionAboutMeDivOl>
            <SectionAboutMeHOl>Ольга Поліщук</SectionAboutMeHOl>
            <SectionAboutMePol>
              CEO and Founder студії стратегічного розвитку
            </SectionAboutMePol>
            <ul>
              <SectionAboutMeList>MBA Healthcare management</SectionAboutMeList>
              <SectionAboutMeList>
                Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)
              </SectionAboutMeList>
              <SectionAboutMeList>
                Експертка в "Центр Розвитку Громадського Здоров&apos;я УКУ"
              </SectionAboutMeList>
              <SectionAboutMeList>
                Бізнес-консультантка, стратег з медичного маркетингу
              </SectionAboutMeList>
              <SectionAboutMeList>
                Керівниця проєкту "Стетоскоп" - телеграм канал про медичний
                менеджмент та маркетингу
              </SectionAboutMeList>
              <SectionAboutMeList>
                Більше 18 років досвіду в маркетингу та комунікаціях, з них
                більше 10 років досвіду в медичному та фармацевтичному бізнесі
                на керівних посадах
              </SectionAboutMeList>
              <SectionAboutMeList>
                Використання принципів доказової медицини
              </SectionAboutMeList>
            </ul>
            <SectionAboutMeAdress>
              <li>
                <SectionAboutMeLink
                  href="https://www.linkedin.com/in/olga-polishchuk-83362140/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>
              <li>
                <SectionAboutMeLink
                  href="https://www.facebook.com/olga.polishchuk.14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>
              <li>
                <SectionAboutMeLink
                  href="https://www.instagram.com/olga_healthm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>
            </SectionAboutMeAdress>
          </SectionAboutMeDivOl>
        </SectionAboutMeDiv>
      </div>
    </SectionAboutMe>
  );
};

export default AboutMe;