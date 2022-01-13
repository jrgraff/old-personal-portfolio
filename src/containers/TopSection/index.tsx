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
    linear-gradient(to left, #005b9c, #b1d1b148);
  background-size: cover;
  background-position: bottom;
  background-blend-mode: overlay;
`

const InfoSection = styled.div`
  ${tw`
    absolute
    top[150px]
    left-3
    sm:right-36
    sm:left[40%]
    flex
    flex-col
  `};
`

const FloatingText = styled.h1`
  ${tw`
    m-0
    font-black
    text-white
    font-size[2rem]
    line-height[2rem]
    sm:font-size[2.4rem]
    sm:line-height[2.2rem]
    lg:font-size[3rem]
    lg:line-height[2rem]
  `};
`

const OutlinedTextSvg = styled.svg`
  overflow: overlay;
  ${tw`
    h-8
    sm:h-10
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
      lg:transform[translateY(50px)]
      sm:transform[translateY(2.2rem)]
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
    hover:text-green-400
  `}
`

export function TopSection() {
  return (
    <TopSectionContainer>
      <LandingSection>
        <NavBar />
        <InfoSection>
          <FloatingText>Olá, me chamo</FloatingText>
          <FloatingText>
            <OutlinedTextSvg>
              <text>JACKSON GRAFF.</text>
            </OutlinedTextSvg>
          </FloatingText>
          <DescriptionText>
          Desenvolvedor Javascript Full Stack <br />
          Interessado em MERN Stack <br />
          Atualmente estudando Serverless e Microservices
          </DescriptionText>
        </InfoSection>
        <ViewMoreButton>
          <Link to="#" smooth={"easeInOutQuad"} duration={1500}>
            <BsArrowDownCircle />
          </Link>
        </ViewMoreButton>
      </LandingSection>
    </TopSectionContainer>
  )
}