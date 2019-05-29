import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components';
import theme from 'assets/styles/theme';
import GithubIcon from 'assets/images/GitHub.svg';
import LinkedInIcon from 'assets/images/LinkedIn.svg';

const HeroWrapper = styled.div`
    background: ${theme.black};
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        width: 100vh;
        height: 100vh;
        left: 70%;
        top: 28%;
        transform: rotate(45deg);
        background: ${theme.yellow};
    }

    ${theme.mq.desktop} {
        ::before {
            content: '';
            position: absolute;
            width: 100vh;
            height: 100vh;
            left: 65%;
            top: 0;
            transform: rotate(45deg);
            background: url(${props => props.image}) right center;
            background-size: cover;
        }
        ::after {
            top: 0;
            left: 65%;
            opacity: 0.8;
        }
    }
`;

const HeroTitle = styled.div`
    margin: 150px 0 0 35px;

    ${theme.mq.desktop} {
        margin: 0 0 0 140px;
        display: flex;
        flex-direction: column;
        align-self: center;
    }
`;

const Title = styled.h2`
    color: ${theme.white};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;
    margin: 0;
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.xxl};
    }
`;

const Subtitle = styled.h3`
    color: ${theme.white};
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    margin: 0;
    ${theme.mq.desktop} {
        font-size: ${theme.font.size.s};
        display: flex;
        justify-content: flex-end;
    }
`;

const Socials = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 35px;
    bottom: 55px;

    a:first-child {
        margin-bottom: 15px;
    }
    
    svg:hover {
        path {
            fill: ${theme.yellow};
        }
    }

    ${theme.mq.desktop} {
        left: 140px;
    }
`;

const Hero = () => (
    <StaticQuery
        query={query}
        render={data => (
            <HeroWrapper image={data.heroImage.childImageSharp.fluid.src}>
                <HeroTitle>
                    <Title>Cześć.</Title>
                    <Subtitle>Lorem ipsum.</Subtitle>
                </HeroTitle>
                <Socials>
                    <a href="https://github.com/luvisoniasty" target="_blank" rel="noopener noreferrer">
                        <GithubIcon/>
                    </a>
                    <a href="https://www.linkedin.com/in/adrian-sadowski-6299b7171/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                    </a>
                </Socials>
            </HeroWrapper>
        )}
    />
)

export default Hero;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero90.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  }
`
