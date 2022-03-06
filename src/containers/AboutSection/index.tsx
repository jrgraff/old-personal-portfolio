import styled from "styled-components";
import tw from "twin.macro";
import { FaGithub, FaLinkedin} from "react-icons/fa";

import { CustomButton } from "../../components/CustomButton";
import { ViewMoreButton } from "../../components/ViewMoreButton";
import typeormIcon from "../../assets/images/typeorm.png"
import styledcomponentsIcon from "../../assets/images/styled-components.png"

const AboutSectionContainer = styled.section`
  ${tw`
    flex
    flex-col
    relative
  `};
`

const LandingSection = styled.div`
  ${tw`
    w-full
    min-h-screen
    flex
    flex-col
    sm:flex-row
    bg-gray-100
  `};
`

const Section = styled.section`
  ${tw`
    h-full
    mt-6
    sm:w-full
    sm:mt-32
  `};
`

const Title = styled.h1`
  ${tw`
    flex
    justify-center
    font-black
    text-gray-500
    text-2xl
  `};
`

const Description = styled.p`
  ${tw`
    ml-4
    sm:m-auto
    text-lg
    text-gray-800
    text-opacity-80
    pt-6
    max-w-lg
  `}
`

const SkillsSection = styled.section`
  ${tw`
    flex-row
  `}
`

const LinkSection = styled.div`
  ${tw`
    flex
    mt-12
    gap-x-6
  `}
  justify-content: center;
`

const Skills = styled.div`
  ${tw`
    m-6
    flex
    flex-wrap
    justify-center
    gap-6
    sm:gap-8
  `}
`

const Icon = styled.img`
  width: 46px;
  height: 46px;
`

export function AboutSection() {
  return (
    <AboutSectionContainer>
      <LandingSection id="About">
        <Section>
          <Title>Sobre mim</Title>
          <Description>
            Formado em Sistemas de Informação na universidade URI - Santo Ângelo, atualmente cursando pós graduação de Gestão em Metodologias Ágeis no Biopark Educação.<br />
            Trabalhei durante seis anos no Tenondé Park Hotel, onde desenvolvi muito minha flexibilidade, inteligência emocional, empatia e resiliência.<br />
            Durante o ultimo ano venho focando no aprendizado de novas tecnologias, como ReactJS, Node.js, HTML e CSS, entre outras tecnologias. Meu objetivo para o futuro é me identificar como desenvolvedor full stack sênior.
          </Description>
          <LinkSection>
            <CustomButton props={{href:"https://github.com/jrgraff", className:"border-none bg-gray-900 text-gray-100"}}>
              <FaGithub className="inline p-0 m-0 mb-1 w-5" /> Github
            </CustomButton>
            <CustomButton props={{href:"https://www.linkedin.com/in/jrgraff/", className:"border-none bg-blue-600 text-gray-100"}}>
              <FaLinkedin className="inline p-0 m-0 mb-1 w-5" /> LinkedIn
            </CustomButton>
          </LinkSection>
        </Section>
        <Section>
          <SkillsSection>
            <Title>Hard Skills</Title>
            <Skills>
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg" alt="Javascript" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/typescript/typescript-original.svg" alt="Typescript" />
            </Skills>
          </SkillsSection>
          <SkillsSection>
            <Title>Front-end</Title>
            <Skills>
              <Icon src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />
              <Icon src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
              <Icon src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="React" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nextjs/nextjs-original.svg" alt="Next" />
              <Icon src={styledcomponentsIcon} alt="Styled-components" />
            </Skills>
          </SkillsSection>
          <SkillsSection>
            <Title>Back-end</Title>
            <Skills>
              <Icon src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original.svg" alt="Express.js" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" alt="Mongodb" />
              <Icon src={typeormIcon} alt="TypeORM" />
            </Skills>
          </SkillsSection>
          <SkillsSection>
            <Title>DevOps/Outras</Title>
            <Skills>
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg" alt="Git" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original.svg" alt="Docker" />
              <Icon src="https://www.svgrepo.com/show/327408/logo-vercel.svg" alt="Vercel" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/firebase/firebase-plain.svg" alt="Firebase" />
              <Icon src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/jest/jest-plain.svg" alt="Jest" />
            </Skills>
          </SkillsSection>
          <SkillsSection>
            <Title>Interesse/Estudando</Title>
            <Skills>
              <Icon src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="Prisma" />
              <Icon className="mb-16" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/graphql/graphql-plain.svg" alt="Graphql" />
            </Skills>
          </SkillsSection>
        </Section>
        <ViewMoreButton to="Projects" color="text-gray-600" />
      </LandingSection>
    </AboutSectionContainer>
  )
}
