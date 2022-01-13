import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs"

import { NavBar } from "../../components/NavBar";
import BackgroundImage from "../../assets/images/top-background.jpg";

const TopSectionContainer = styled.div`
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
  `};

  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #b1d1b148, #005b9c);
  background-size: cover;
  background-position: bottom;
  background-blend-mode: overlay;
`

const InfoSection = styled.div`
  margin: auto;
  ${tw`
    flex
    flex-col
    mt-32
  `};
  width: 70%;
`

const FloatingText = styled.h1`
  white-space: nowrap;
  ${tw`
    m-0
    font-black
    text-white
    font-size[1.9rem]
    line-height[1rem]
    sm:font-size[3rem]
    sm:line-height[2rem]
    lg:font-size[3.6rem]
    lg:line-height[3rem]
  `};
`

const OutlinedTextSvg = styled.svg`
  overflow: overlay;
  ${tw`
    h-12
    sm:h-14
  `};
  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 1px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      lg:transform[translateY(2.8rem)]
      sm:transform[translateY(2.6rem)]
      transform[translateY(2rem)]
    `};
    text-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
  }
`

const DescriptionText = styled.p`
  ${tw`
    text-lg
    text-white
    text-opacity-80
    mt-10
    max-w-lg
  `}
`

const ViewMoreButton = styled.button`
  ${tw`
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-blue-400
  `}
`

export function TopSection() {
  return (
    <TopSectionContainer>
      <LandingSection>
        <NavBar />
        <InfoSection>
          <FloatingText>Olá,</FloatingText>
          <FloatingText>
            sou
            <OutlinedTextSvg style={{ display: "inline" }}>
              <text>&nbsp;Jackson.</text>
            </OutlinedTextSvg>
          </FloatingText>
          <FloatingText>Desenvolvedor Web</FloatingText>
          <DescriptionText>
          Full Stack em Javascript <br />
          Interessado em MERN Stack <br />
          Atualmente estudando Serverless
          </DescriptionText>
        </InfoSection>
        <ViewMoreButton>
          <Link to="About" smooth={"easeInOutQuad"} duration={1500}>
            <BsArrowDownCircle />
          </Link>
        </ViewMoreButton>
      </LandingSection>
    </TopSectionContainer>
  )
}