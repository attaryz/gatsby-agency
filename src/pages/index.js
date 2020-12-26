import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Banner,
  TextWrapper,
  MoreText,
  SectionTwo,
  SectionThree,
  FlexBoxIndex,
  GenericPara,
  GenericH2,
  SectionFour,
  FormFive,
} from "../styles/IndexStyles"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGalacticSenate,
  fab,
} from "@fortawesome/free-brands-svg-icons"

library.add(faHeart, faCode, faGem, fas, fab)
export default () => (
  <Layout>
    <section style={{ position: "relative" }}>
      <Banner></Banner>
      <TextWrapper>
        <div>
          <h2>SomeDude</h2>
          <GenericPara>
            One Stop for <br /> all designs and development needs{" "}
          </GenericPara>
          <Link to="/work">Our Works</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn More</MoreText>
    </section>
    <SectionTwo>
      <div>
        <GenericH2>our passion</GenericH2>
        <GenericPara lessSize grey>
          Most programmers do programming not because they expect to get paid
          but because its to fun program
        </GenericPara>
        <h5>- Linux Torvalds</h5>
        <span>
          <FontAwesomeIcon
            icon="gem"
            color="#04F5c6"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="heart"
            color="#00f0ff"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="code"
            color="#79dbfd"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
        </span>
      </div>
    </SectionTwo>
    <SectionThree>
      <FlexBoxIndex>
        <div className="image">
          <img src="dev.jpg" alt="" />
        </div>
        <div className="text__section3">
          <GenericH2 none>Website Development</GenericH2>
          <GenericPara lessSize lessSpacing>
            we hand code beautiful website using HTML5, CSS3, JS because they
            are fully responsive and customizable and efficient no Wordpress
            website here.
          </GenericPara>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex inverse>
        <div className="text__section3">
          <GenericH2 none>website design</GenericH2>
          <GenericPara lessSize lessSpacing>
            We have talented and experienced Web Designers, who can design
            beautiful and usable websites.
          </GenericPara>
        </div>
        <div className="image">
          <img src="des.jpg" alt="" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="app.jpg" alt="" />
        </div>
        <div className="text__section3">
          <GenericH2 none>mobile app development</GenericH2>
          <GenericPara lessSize lessSpacing>
            We develop Mobile apps in Reactive Native, which can be used in both
            ios and Android.
          </GenericPara>
        </div>
      </FlexBoxIndex>
    </SectionThree>
    <SectionFour>
      <div className="header__section4">
        <div className="title__section4">Our Technologies</div>
        <GenericPara lessSize grey>
          we use modern and latest technologies to help our clients as they
          scalable and maintainable.
        </GenericPara>
      </div>

      <div className="grid__section4">
        <div className="item1" style={{ backgroundColor: "#4d508e" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faReact}
              color="#00ffcc"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>React</GenericH2>
          </div>
          <GenericPara lessSize lessSpacing grey>
            Modern JavaScript framework which will make your web application
            extremely fast, at the same time, handy for every user.
          </GenericPara>
        </div>
        <div className="item2" style={{ backgroundColor: "#4a4d89" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon="code" color="#00ffcc" size="3x" fixedWidth />
            <GenericH2 none>React Native</GenericH2>
            <GenericPara lessSize lessSpacing grey>
              Cross-platform for mobile app development based on JavaScript,
              whose resulting code is compiled to Android & iOS.
            </GenericPara>
          </div>
        </div>
        <div className="item3" style={{ backgroundColor: "#484a83" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon={faJs} color="#00ffcc" size="3x" fixedWidth />
            <GenericH2 none>JavaScript</GenericH2>
            <GenericPara lessSize lessSpacing grey>
              JavaScript is the language of the web. It is used for web
              development, mobile development and app development and everything
              else.
            </GenericPara>
          </div>
        </div>
        <div className="item4" style={{ backgroundColor: "#45477e" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faHtml5}
              color="#00ffcc"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>HTML5</GenericH2>
            <GenericPara lessSize lessSpacing grey>
              HTML, a standardized system for tagging text files to achieve
              font, colour, graphic, and hyperlink effects on World Wide Web
              pages.
            </GenericPara>
          </div>
        </div>
        <div className="item5" style={{ backgroundColor: "#424479" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faCss3}
              color="#00ffcc"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>CSS3</GenericH2>
            <GenericPara lessSize lessSpacing grey>
              CSS is a style sheet language used for describing the description
              of a document written in a markup language like HTML.
            </GenericPara>
          </div>
        </div>
        <div className="item5" style={{ backgroundColor: "#45477e" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faGalacticSenate}
              color="#00ffcc"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>Gatsby</GenericH2>
            <GenericPara lessSize lessSpacing grey>
              Gatsby is a free and open source framework based on React that
              helps developers build blazing fast websites and apps.
            </GenericPara>
          </div>
        </div>
      </div>
    </SectionFour>
    <section style={{ position: "relative" }}>
      <Banner parallax></Banner>
      <FormFive>
        <form name="contact" method="post" data-netlify="true">
          <div className="fields">
            <GenericH2 none>Contact Us</GenericH2>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
            ></textarea>
            <div className="actions">
              <input
                type="submit"
                value="Send Message"
                className="button__primary"
              />
            </div>
          </div>
        </form>
      </FormFive>
    </section>
  </Layout>
)
