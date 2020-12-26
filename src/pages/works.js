import React from "react"
import { Works, GenericH2 } from "../styles/IndexStyles"
import Layout from "../components/Layout"
import Project from "../components/Project"

const projects = [
  {
    image: "web.jpg",
    title: "PrintBill",
    link: "",
  },
  { image: "web.jpg", title: "Sprung", link: "" },
  {
    image: "web.jpg",
    title: "Orange Health",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Billing Restro",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Ferrari Sports",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Pregnancy info",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Jaaga Study",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Responsive Site- POC",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Responsive Site2- POC",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Style Conferences",
    link: "",
  },
  {
    image: "web.jpg",
    title: "iTunes Clone - POC",
    link: "",
  },
  {
    image: "web.jpg",
    title: "Parallax Site - POC",
    link: "",
  },
  {
    image: "web.jpg",
    title: "PhotoGraphy Site-POC",
    link: "",
  },
  {
    image: "web.jpg",
    title: "YelpCamp",
    link: "https://hidden-­coast-­48928.herokuapp.com/",
  },
  {
    image: "web.jpg",
    title: "Blog Site",
    link: "https://serene-­wildwood-­22136.herokuapp.com/blogs",
  },
  {
    image: "web.jpg",
    title: "Portfolio Site",
    link: "https://nabendu82.github.io/",
  },
]

export default () => (
  <Layout>
    <Works>
      <GenericH2 some none dark style={{ textAlign: "center" }}>
        Our Work
      </GenericH2>
      <section className="gallery__flex">
        {projects &&
          projects.map(proj => <Project key={proj.title} project={proj} />)}
      </section>
    </Works>
  </Layout>
)
