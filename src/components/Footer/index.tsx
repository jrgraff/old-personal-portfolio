import styled from "styled-components";
import tw from "twin.macro";

import BackgroundImage from "../../assets/images/top-background.jpg";

const FooterSection = tw.footer`
  text-center
  lg:text-left
`

const Content = styled.div`
  ${tw`
    text-gray-50
    font-semibold
    text-center
    p-6
  `}
  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #b1d1b148, #005b9c);
  background-size: cover;
  background-position: bottom;
  background-blend-mode: overlay;
`

const Link = tw.a`
  text-gray-100
`

export function Footer() {
  return (
    <FooterSection>
      <Content>
        Github:&nbsp;
        <Link href="https://github.com/jrgraff">Jackson Graff</Link>
      </Content>
    </FooterSection>
  )
}