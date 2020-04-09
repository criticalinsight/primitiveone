import React from "react";
import { connect, styled, css } from "frontity";
import { Container, Row, Col, Button } from "react-bootstrap";
import Frame from "../pebbles/frame";
import Image from "@frontity/components/image";
import CTA from "./button-fancy";
import { jump, animatedgradient, stripedbg } from "../scenes/glamourmagic";

const Bronze = ({ state }) => {

  const display = state.theme.config.homepage.bronzeConfig;
  //console.log("@page-home-bronze: display", display);

  // sk-dev: workaround for duplicate array items
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const list1fix = display.list1.filter(unique);
  const list2fix = display.list2.filter(unique);

  return (
    <StyledSection>

      <PromoOne className="footer-promo1">

        <Container>
          <Row>

            <Col lg="6" className="nip">
              <StyledFrame className={display.imageFrame1} link="/">

                <Image
                  alt={display.title1}
                  src={display.imagesrc1}
                  className={"img-fluid"}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>
              <StyledFrame className={display.listFrame1} link="/">
                <TitleOne>{display.title1}</TitleOne>
                <ul>
                  {
                    list1fix.map((item, i) => (
                      // display.list1.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>
            </Col>

          </Row>
          <Row>
            <Col className="align-content-center">
              <CTA />
            </Col>
          </Row>
        </Container>

      </PromoOne>

      <PromoTwo className="footer-promo2">

        <Container>
          <Row>

            <Col lg={6} className="nip">
              <StyledFrame className={display.imageFrame2} link="/">

                <Image
                  alt={display.title2}
                  src={display.imagesrc2}
                  className={"img-fluid"}
                //srcSet={srcset}
                />

              </StyledFrame>
            </Col>

            <Col lg={6}>

              <StyledFrame className={display.listFrame2} link="/">
                <TitleTwo>{display.title2}</TitleTwo>
                <ul>
                  {
                    list2fix.map((item, i) => (
                      // display.list2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              </StyledFrame>

            </Col>

          </Row>
        </Container>

      </PromoTwo>

    </StyledSection>
  )
};

export default connect(Bronze);

// refine
// https://stackoverflow.com/questions/48713421/target-child-element-styled-components

const StyledSection = styled.section`

  .nip {
    text-align: center;
  }
  
  .fancy-frame {
    margin: 2rem auto;
    padding: 12px;
    display: inline-block;
    position: relative;
    transition: 1s ease-in-out;
  }

  .frame {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    text-align: center;

    ul {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 992px) {
    .nip {
      text-align: right;
    }
    .fancy-frame { 
      margin-top: 4rem; 
    }
    .frame { 
      margin-top: 1rem; 
      text-align: left;
    }
  }

`;

const TitleOne = styled.h5`
  font-size: 4.5rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ivory;
`;

const TitleTwo = styled.h5`
  font-size: 4rem;
  font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #7A9E47;
`;

const StyledFrame = styled(Frame)`
  a { &:hover { text-decoration: none; } }
`;

const PromoOne = styled.div`
  margin-top: 3rem;
  padding: 4rem 1rem;
  background-color: #7a9e47;
  background: linear-gradient(to bottom,  #7a9e47 42%,#5e822c 100%); 

  .fancy-frame { 
    background: linear-gradient(
      -45deg, 
      #9bc85a 25%, 
      rgb(0, 165, 70) 25%, 
      rgb(0, 165, 70) 50%, 
      #9bc85a 50%, 
      #9bc85a 75%, 
      rgb(0, 165, 70) 75%, 
      rgb(0, 165, 70));
    background-size: 20px 20px;
    background-position: 0 0;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

    /* end fancy-frame */
  }

  .frame {
  
    h5 { 
      margin-bottom: 1.5rem;
      display: inline-block;
      position: relative;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

      &::after {
        content: " ";
        height: .3rem;
        width: 100%;
        position: absolute;
        top: 5rem;
        left: 0;
        
        background: linear-gradient(
          -45deg, 
          #9bc85a 25%, 
          rgb(0, 165, 70) 25%, 
          rgb(0, 165, 70) 50%, 
          #9bc85a 50%, 
          #9bc85a 75%, 
          rgb(0, 165, 70) 75%, 
          rgb(0, 165, 70)
          );
        background-size: 20px 20px;
        background-position: 0 0;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }

    li {
      margin: 0;
      padding: .1rem .3rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.5rem;
      line-height: 1.5;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(171,207,117, 0.6);
    }

    /* end frame */
  }


  &:hover {
    .fancy-frame {
     animation: ${stripedbg} 1s linear infinite;
    }
    .frame h5::after {
      animation: ${stripedbg} 1s linear infinite reverse;
    }

    /* end animation triggers */
  }

`;

const PromoTwo = styled.div`
  padding: 4rem 1rem;
  background-color: ivory;
  text-align: center;

  li {
    font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    line-height: 2;
    list-style: none;
    color: #212529;
  }

  .fancy-frame { background: #87af4e; }

  &:hover .fancy-frame {
    transition: 1s ease-in-out;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    animation: ${animatedgradient} 3s ease alternate infinite;
    background-size: 300% 300%;
  }

`;