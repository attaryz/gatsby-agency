import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
  Banner,
  TextWrapper,
  GenericPara,
  GenericH3,
  SectionTwo,
  GenereicParaAbout,
} from "../styles/IndexStyles"

const about = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <Banner different></Banner>
        <TextWrapper>
          <div>
            <GenericH3 none>Who are we</GenericH3>
            <GenericPara lessSize grey>
              SomeDude is an experienced and passionate group of designers,
              developers, and artists. Every client we work with becomes part of
              the team. Together we face the challenges and celebrate the
              victories.
            </GenericPara>
            <Link to="/works">Our Work</Link>
          </div>
        </TextWrapper>
      </section>
      <SectionTwo white>
        <div>
          <GenericH3 dark none>
            About Us
          </GenericH3>

          <GenereicParaAbout lessSize grey>
            Founded in 2016, <b>SomeDude</b> is a small web design & development
            company based Over the last few years we've made a reputation for
            building websites, mobile apps, and web apps that look great and are
            easy-to-use.
          </GenereicParaAbout>

          <GenereicParaAbout lessSize grey>
            We originated from futuristic technology and progressing toward
            success with a great desire. We work with self-derived strategies,
            as we have experienced everything on our own. We are equipped with
            the state-of-the-art work station in the website development and
            testing. So, results delivered on time, every time! Your success is
            our bread and butter!
          </GenereicParaAbout>

          <GenereicParaAbout lessSize grey>
            Our Mission is to enhance the wealth generating capability of the
            enterprise in a globalizing environment by exhibiting our efficiency
            and adopting the innovative “more-­than-­enough” methodology in our
            work.
          </GenereicParaAbout>
        </div>
      </SectionTwo>
    </Layout>
  )
}
export default about
