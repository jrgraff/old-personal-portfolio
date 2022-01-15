import styled from "styled-components";
import tw from "twin.macro";
import { FaGithub } from "react-icons/fa"
import { SiVercel } from "react-icons/si"

import ignewsImage from "../../assets/images/ignews.jpg";
import letmeaskImage from "../../assets/images/letmeask.jpg";
import portfolioImage from "../../assets/images/portfolio.jpg";

const ProjectsSectionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    relative
    pb-10
    lg:pb-20
    bg-[#2d73ff]
  `};
`

const LandingSection = styled.div`
  ${tw`
    w-full
  `};
`

const TitleSection = styled.div`
  ${tw`
    flex
    justify-center
  `}
`

const Title = styled.h1`
  ${tw`
    font-black
    text-gray-100
    font-size[2rem]
    m-10
  `};
`
const CardSection = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-0.5
  `}
`

const Card = styled.div`
  width: 80%;
  margin: auto;
  ${tw`
    bg-white
    rounded-lg
    overflow-hidden
    mb-10
    md:w-1/3
    xl:w-1/4
  `}
`

const Image = styled.img`
  ${tw`
    w-full
  `}
`

const DescriptionSection = styled.div`
  ${tw`
    p-8
    sm:p-9
    md:p-7
    xl:p-9
    text-center
  `}
`

const Description = styled.p`
  ${tw`
    text-base
    text-black
    leading-relaxed
    mb-7
  `};
`

const ProjectLink = styled.a`
  ${tw`
    font-semibold
    text-black
    text-xl
    sm:text-[22px]
    md:text-xl
    lg:text-[22px]
    xl:text-xl
    2xl:text-[22px]
    mb-4
    block
    cursor-pointer
    hover:text-blue-400
  `}
`

const LinkSection = styled.div`
  ${tw`
    flex
    gap-x-6
  `}
  justify-content: center;
`

const VerMaisLink = styled.a`
  ${tw`
    py-2
    px-3
    border border-[#E5E7EB]
    rounded-full
    text-base
    font-medium
    transition
    cursor-pointer
    hover:text-blue-400
  `}
`


export function ProjectsSection() {
  return (
    <ProjectsSectionContainer id="Projects">
      <LandingSection>
        <TitleSection>
          <Title>Meus principais projetos</Title>
        </TitleSection>
        <CardSection>
          <Card>
            <Image src={ignewsImage} alt="image" />
            <DescriptionSection>
              <h3>
                <ProjectLink>
                  ig.news
                </ProjectLink>
              </h3>
              <Description>
                Um pequeno blog criado durante o bootcamp Ignite da Rocketseat. Totalmente funcional em Next.js, utilizando APIs do Stripe e Prismic.
              </Description>
              <LinkSection>
                <VerMaisLink href="https://github.com/jrgraff/ig.news" target="_blank">
                  <FaGithub className="inline p-0 m-0 mb-1 w-5" /> Github
                </VerMaisLink>
                <VerMaisLink href="https://ig-news-sandy.vercel.app" target="_blank">
                  <SiVercel className="inline p-0 m-0 mb-1 w-5" /> Vercel
                </VerMaisLink>
              </LinkSection>
            </DescriptionSection>
          </Card>

          <Card>
            <Image src={letmeaskImage} alt="image" />
            <DescriptionSection>
              <h3>
                <ProjectLink>
                  Letmeask
                </ProjectLink>
              </h3>
              <Description>
                Um gerenciador de Q&amp;A desenvolvido durante a NLW Together #6, utilizando o Firebase como back-end. Também conta com algumas alterações minhas.
              </Description>
              <LinkSection>
                <VerMaisLink href="https://github.com/jrgraff/letmeask" target="_blank">
                  <FaGithub className="inline p-0 m-0 mb-1 w-5" /> Github
                </VerMaisLink>
                <VerMaisLink href="https://letmeask-sepia-phi.vercel.app" target="_blank">
                  <SiVercel className="inline p-0 m-0 mb-1 w-5" /> Vercel
                </VerMaisLink>
              </LinkSection>
            </DescriptionSection>
          </Card>

          <Card>
            <Image src={portfolioImage} alt="image" />
            <DescriptionSection>
              <h3>
                <ProjectLink>
                  Esse portfólio
                </ProjectLink>
              </h3>
              <Description>
                Isso mesmo, esse portfólio que você está acessando agora. Caso deseje ver o código fonte, é só seguir o link do Github.
              </Description>
              <LinkSection>
                <VerMaisLink href="https://github.com/jrgraff/personal-portfolio" target="_blank">
                  <FaGithub className="inline p-0 m-0 mb-1 w-5" /> Github
                </VerMaisLink>
              </LinkSection>
            </DescriptionSection>
          </Card>
        </CardSection>
      </LandingSection>
    </ProjectsSectionContainer>
  )
}