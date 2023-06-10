import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
export default class Resume extends Component {
  render() {
    return (
      <Container className="pb-3">
        <Card className="h-100 shadow p-3">
          <Card.Body>
            <header className="row d-flex justify-content-between mb-3">
              <div className="col-12 col-sm-8">
                <h1 className="text-black text-right">Aiden Threadgoode</h1>
                <h4>Full-Stack Engineer</h4>
                <h6><i>pronouns: he/him</i></h6>
              </div>
              <div className="col-12 col-sm-4">
                <h6>Phone: 207-749-1341</h6>
                <h6>Email: aiden.threadgoode@gmail.com</h6>
                <h6>Portfolio: a-thread.codes</h6>
                <h6>LinkedIn: linkedin.com/in/a-thread</h6>
                <h6>GitHub: github.com/a-thread</h6>
              </div>
            </header>
            <div className="row">
              <div className="col-12">
                <h4>Summary</h4>
                <p>
                  Full Stack Engineer with a graphic design and communications
                  background. Passionate about accessibility and approaches
                  engineering challenges from fresh perspectives to create
                  collaborative and meaningful web applications.
                </p>
              </div>
              <div className="col-12">
                <h4>SKILLS</h4>
                <p>
                  JavaScript, Typescript, HTML, CSS, Sass, React, Angular, rxjs,
                  ngrx, redux, Git, Github, MongoDB, Express, NodeJs, NestJs,
                  Heroku, Material UI, Bootstrap, REST APIs, C#, AWS (Lambda
                  microservices, API Gateway, S3), SQL, NoSQL, GraphQL, Adobe
                  Creative Suite
                </p>
              </div>
              <div className="col-12">
                <h4>Experience</h4>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>KeHE Distributors - Frontend Software Engineer</h5>
                    <h6>Remote | Feb 2021 - present</h6>
                  </div>
                  <div className="col-12">
                    Builds out new features, supports existing software and
                    provides technical support for legacy platform regularly.
                    <ul className="mt-1">
                      <li>
                        <b>FE Tech Stack:</b> Typescript, Angular, Bootstrap,
                        rxjs, ngrx, HTML, CSS, SASS
                      </li>
                      <li>
                        <b>BE Tech Stack:</b> C#, .NET Core, AWS (Lambda
                        microservices, SNS/SQS, API Gateway, S3, Aurora Postgres
                        RDS), Postgres and MS SQL, Entity Framework Core, Redis,
                        ElastiCache, GraphQL
                      </li>
                      <li>
                        <b>Currently focusing on:</b> optimizing performance,
                        growing code coverage, and implementing test driven
                        development
                      </li>
                      <li>
                        Optimizes performance through consolidation of
                        components and shared utilities
                      </li>
                      <li>
                        Leverages current tech stacks to create and implement
                        sustainable and scalable systems
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>
                      Trilogy Education Services - Full Stack Teaching Assistant
                      & UX/UI Tutor
                    </h5>
                    <h6>Remote | Jan 2021 - Oct 2021</h6>
                  </div>
                  <p className="col-12">
                    Coaches, guides, and encourages students through concepts,
                    logic, and syntax errors.
                  </p>
                </article>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>Known Point Technologies - Full Stack Intern</h5>
                    <h6>Remote | Dec 2020 - Feb 2021</h6>
                  </div>
                  <p className="col-12">
                    Designs, builds, and tests serverless software built with
                    AWS, React, and Redux. Builds key components, makes crucial
                    elements reusable and accounts for edge cases in NoSQL data.
                  </p>
                </article>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>CourseStorm - Tech Support Specialist</h5>
                    <h6>Remote | Oct 2020 - Feb 2021</h6>
                  </div>
                  <div className="col-12">
                    Provides technical assistance to tech newcomers through
                    phone and email support.
                    <ul className="mt-1">
                      <li>
                        Writes SQL queries to navigate extensive SQL databases
                        with ease
                      </li>
                      <li>
                        Tests for bugs and workarounds to push limits of current
                        software
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>CourseStorm - Tech Support Specialist</h5>
                    <h6>Remote | Oct 2020 - Feb 2021</h6>
                  </div>
                  <div className="col-12">
                    Provides technical assistance to tech newcomers through
                    phone and email support.
                    <ul className="mt-1">
                      <li>
                        Writes SQL queries to navigate extensive SQL databases
                        with ease
                      </li>
                      <li>
                        Tests for bugs and workarounds to push limits of current
                        software
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="row">
                  <div className="col-12 d-flex justify-content-between flex-wrap">
                    <h5>
                      Maine Transgender Network - Communications Director (Board
                      Position)
                    </h5>
                    <h6>Remote | Oct 2019 - Oct 2021</h6>
                  </div>
                  <div className="col-12">
                    Built current website and provides website maintenance and
                    management. Creates and maintains a yearly communications
                    calendar.
                    <ul className="mt-1">
                      <li>
                        Developed new logos to showcase a new online-focused
                        programming.
                      </li>
                      <li>
                        Accelerated online traffic by building a new website
                        with improved organization and updated brand imagery.
                      </li>
                      <li>
                        Improved programmatic engagement through weekly
                        correspondence with easy to access links to group
                        meetings
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <h4>RECENT PROJECTS</h4>
                <article className="row">
                  <h5 className="col-12">Safe Space - Front End Engineer</h5>
                  <div className="col-12">
                    The only existing centralized hub of LGBTQ businesses and
                    resources that reach across state lines.
                    <ul className="mt-1">
                      <li>
                        <b>Role:</b> Designed, built, and tested the entire
                        front end of the application. Mobile-first & responsive
                        UX.
                      </li>
                      <li>
                        <b>Tech:</b> Angular, NestJS, Material, Auth0, Heroku,
                        TypeORM, MongoDB, Axios, SCSS, Canva
                      </li>
                      <li>
                        <b>Github:</b> github.com/a-thread/safe-space
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="row">
                  <h5 className="col-12">
                    Ascent: Sobriety Tool - Front End Engineer
                  </h5>
                  <div className="col-12">
                    An application that helps members track continuous AND
                    discontinuous time in sobriety.
                    <ul className="mt-1">
                      <li>
                        <b>Role:</b> Designed, built, and tested the entire
                        front end of the application. Mobile-first & responsive
                        UX.
                      </li>
                      <li>
                        <b>Tech:</b> Javascript, HTML, CSS, Express, Sequelize,
                        MySQL, CORS, Nodemailer, Passport, Express-Handlebars,
                        Moment, ApexCharts, Bootstrap, Canva, Frontify
                      </li>
                      <li>
                        <b>Github:</b> github.com/a-thread/Ascent-Sobriety
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-12">
                <h4>EDUCATION</h4>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5>
                    University of New Hampshire — Full Stack Web Development
                    Certification
                  </h5>
                  <h6>Dec 2020</h6>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5>
                    University of Southern Maine — Bachelors in Studio Art
                  </h5>
                  <h6>May 2017</h6>
                </div>
                <div>
                  <ul className="mt-1">
                    <li>Dean’s List 2015 - 2017</li>
                    <li>Peregrine Fellowship - 2017</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <h5>
                    Maine Association of Nonprofits — Emerging Leaders Program
                  </h5>
                  <h6>Dec 2019</h6>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
