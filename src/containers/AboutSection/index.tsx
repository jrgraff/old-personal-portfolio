import styled from "styled-components";
import tw from "twin.macro";

import { ViewMoreButton } from "../../components/ViewMoreButton";

const AboutSectionContainer = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    h-screen
    relative
  `};
`

const LandingSection = styled.div`
  ${tw`
    w-full
    h-screen
    flex
    flex-col
    sm:flex-row
    bg-gray-100
    sm:space-x-[50%]
  `};
`

const AboutAside = styled.aside`
  height: 50%;
  ${tw`
    pt-6
    flex
    justify-center
    sm:h-full
  `};
`

const SkillsAside = styled.aside`
  height: 50%;
  ${tw`
  sm:pt-6
    flex
    justify-center
    sm:h-full
  `};
`

const Title = styled.h1`
  ${tw`
    font-black
    text-gray-500
    font-size[1.4rem]
  `};
`

export function AboutSection() {
  return (
    <AboutSectionContainer>
      <LandingSection id="About">
        <AboutAside>
          <Title>Sobre mim</Title>
        </AboutAside>
        <SkillsAside>
          <Title>Skills</Title>
        </SkillsAside>
        <ViewMoreButton to="Projects" color="text-gray-600" />
      </LandingSection>
    </AboutSectionContainer>
  )
}