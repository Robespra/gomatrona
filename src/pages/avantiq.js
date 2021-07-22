import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from 'gatsby'
import ProtoVid from '../images/avantiq/20200719_avantIQ_HRDashboard_app_demo.mp4'
import InteracVid from '../images/avantiq/20200719_avantIQ_HRDashboard_app_demo.mp4'
import Header from '../components/header'
import Footer from '../components/footer'
let pathPrefix = `/`

const Avantiq = () => (
    <PageTransition>
<Helmet>
      <meta charSet="utf-8" />
      <title>uxpages - AvantIQ Case Study, Designing an international corporate application</title>
      <link rel="canonical" href="https://uxpages.com/avantiq" />
    </Helmet>
<Header/>
<div className="avantiq_bg">
<div className="hero_project_img">
    <img className="avantiq_img" src={require('../images/avantiq/case_avantiq_1.png')} alt="avantiq hero case study"/>
    </div>


  <div className="row align-left hero_dtls">
        <div className="small-11 medium-8 columns">
        <div className="row align-left padding5_bottom">
        <div className="hero_project_title_block">
            <h1 className="">avantIQ HR Portal</h1>
            <div className="skills_underline_orange"></div>
        </div>
        <div className="small-11 medium-6 columns">
            <h3 className="">Client</h3>
            <p className="">NDA</p>
        </div>
        <div className="small-11 medium-6 columns">
            <h3 className="">Years</h3>
            <p className="">2019 - 2021</p>
        </div>
        </div>
        <div className="row align-left padding5_bottom">
            <div className="small-11 medium-10 columns">
                <h3 className="">Case</h3>
                <p className="">Design process for a global culture-based enterprise app.</p>

            </div>
        </div>
        <div className="row align-left padding5_bottom">
            <div className="small-11 medium-10 columns">
                <h3 className="">Scope</h3>
                <p className="">50 countries; +100k daily users</p>

            </div>
        </div>
        </div>
    </div>


</div>

<div className="section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F3F3" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,106.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className="row align-center padding5_top">
        <div className="small-11 medium-9 columns padding5_top">
            <h3>Overview</h3>
            <p className="text-left content-project">Important notice : I have been working under non-disclosure agreement for this project. Due to the fact that this is an internal enterprise application, I am not allowed to communicate my client's name or project. I was allowed to publish designs but with a different name and no mention to client. My client was a large multinational pharmaceutical group.
            I was hired to help intern team create a global corporate HR application to be used in more than 50 countries. The application had to be a balance between harmonized standard processes, UI and local requirements. My client needed a profile matching the cross-cultural and design process complexity requirements of this project.
            This project has been a milestone in my career.
            </p>
            <p className="text-left content-project">
            As an UX generalist, I had the opportunity to be involved in research, design process setup, design strategy, QA and monitoring of the product.
            We are talking about enterprise software so it was very clear to me that the people who use the software every day only care about one thing: getting stuff done effectively.
            And if they can’t do that, fewer people want to use it, until eventually no one uses it anymore. Same happens if the application is not aligned with the local corporate and personal cultural backgrounds. The KPIs setup by the project governance were clear, we needed users to engage with this application.
            Bringing empathy for end users and user-centered design in most of the development stages was therefore one of the first thing I suggested.
            The scope of this project is so huge I had to review the content of this case study four times before being happy with the result. This project
            also include valuable inputs around Change Management and Knowledge Management but I will keep these for a dedicated article. Don't hesitate to reach out if you are kicking off a similar project and need some tips around change management with local teams.
            </p>
            <h4 className="padding5_top">Project areas</h4>
            <div className="skills_underline_orange"></div>
            <div className="row align-left">
                <div className="small-11 medium-5 columns ">
                    <ul className="no_bullet padding10_bottom">
                        <li className="checked twolines">Research/ethnographic</li>
                        <li className="checked twolines">Synthesis and ideation</li>
                        <li className="checked twolines">Information architecture</li>
                        <li className="checked twolines">HTML Prototyping & design</li>
                        <li className="checked twolines">Cross cultural UI strategy</li>
                        <li className="checked twolines">Corporate App metrics</li>
                    </ul>
                </div>
                <div className="small-11 medium-5 columns ">
                    <ul className="no_bullet padding5_bottom">
                        <li className="checked twolines">Cross cultural UI </li>
                        <li className="checked twolines">Knowledge management</li>
                        <li className="checked twolines">Design project management</li>
                        <li className="checked twolines">Change management</li>
                        <li className="checked twolines">Formal usability testing</li>
                        <li className="checked twolines">Worldwide distributed teams</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="row align-center">
        <div className="small-11 medium-9 columns">
            <h2 className="project-quote">How to setup an inclusive, user-centerred design process for a global enterprise app targetting +50 countries ?</h2>
            </div>
    </div>
</div>
<div className="case_study_docs_div_avantiq" id="content">
<img className="training_img" src={require('../images/avantiq/world_map_scope.svg')} alt="meka project hero image"/>
</div>



<div className="section_inner">
    <p className="caption padding5_bottom">Above : Scope of the project. Designing for different countries requires to setup a global model and adjust it to local requirements.</p>
    <div className="row align-center">
        <div className="small-11 medium-2 columns"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="3.6" y1="9" x2="20.4" y2="9" />
  <line x1="3.6" y1="15" x2="20.4" y2="15" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg></div>
        <div className="small-11 medium-9 columns">
        <h2 className="">Defining a standard approach mixing global standardization and local adaptability</h2>

                <p className="text-left content-project">As this project had been kicked off by the headquarter of the company, initial inputs and template have been defined there as well. We have been working for 1,5 year on an application template skeleton flexible enough to take into account the upcoming change requests from the local companies. The design of the template followed a standard development project, all in english.
                In the meantime I kicked off the local research so we already fuelled the global application iterations with some local high-level considerations. When some local requirements were popping-up from different locations in the world, they were sometimes integrated as global standard and offered to other countries. To make this work, it's important to understand the basic assumptions about your product in the target countries first and take cross-cultural scalability into account as early as possible. We categorized and listed the countries to be integrated first and I could not wait to fly there, meet our local end-users and start the research !
                  </p>

                <img className="padding5_top lazy" src={require('../images/avantiq/global_vs_local.svg')} alt="global app and local requirements"/>
         <p className="caption padding5_bottom">This project made use of a template approach to ensure global standardization and local adaptability.</p>
         </div>
    </div>
    <div className="row align-center padding5_top">
        <div className="small-11 medium-2 columns">

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-check" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M16 11l2 2l4 -4" />
</svg></div>
        <div className="small-11 medium-9 columns">
            <h2 className="">Running Research/ethnographic study</h2>
            <p className="text-left content-project">The biggest reservation that stakeholders usually have about research and user experience metholodgies is that it takes too long and costs too much. My first job was to show stakeholders that we can still get enormous value from getting local inputs as early as possible and that it will reduce development time.
            Bringing local inputs in our projects conceptualization would help us to effectively design for these multicultural audiences.
            We have been working on integrating research and make it work alongside a rapid development agile cycle. We have been using simple techniques to get the core template model correct so we could test it with locals once the initial versions have been built.
                Now that we had found a way to effectively integrate local inputs in our development process, it was time to surround ourselves with the culture we are designing for!</p>
                <h3 className="padding5_top">1. Elicitation techniques</h3>
                <p className="text-left content-project">Designing a new product or to expand it to a new market is not about assumptions but facts: focus on your users first. We needed to understand how they run standard HR processes and what would make them use the application or not.
                A combination of several different techniques has been necessary to achieve a successful outcome. </p>
                <h4 className="padding5_top">Step #1 : Study your market and document your assumptions</h4>
                <p className="text-left content-project">I started by documenting information around the country or group of countries culture, history, political situation and legal environment.</p>
                <h4 className="padding5_top">Step #2 : Talk to the end users</h4>
                <p className="text-left content-project">I noticed that 3 days on-site travel was enough to create a connection and get information without bothering users on their daily routine. They knew a project was going on and were mainly happy to be part of it. I always started by spending a day in their office, observing and taking notes on how they worked and used technology for specific processes. I have also been using questionnaires, focus-group and interviews for the next 2 days.
                </p>
                <h4 className="padding5_top">Step #3 : Validating the information and testing the global template</h4>
                <p className="text-left content-project">Before we kicked off testing on the global application in order to list local deviations and requirements, I shared my assumptions with both users and stakeholders. This way I was able to validate them and show local team we really care about their culture and the way they work.
                I then gather insights by holding user testing sessions but kept them under control and stay focused on observing workflows for a specific tasks. Outputs were synthesized and shared with global project teams, then requirements were accepted or rejected and listed as agile epic/stories for this country.
                </p>

        </div>
    </div>
    <div className="row align-center padding5_top">
        <div className="small-11 medium-2 columns"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-merge" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="7" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="12" r="2" />
  <line x1="7" y1="8" x2="7" y2="16" />
  <path d="M7 8a4 4 0 0 0 4 4h4" />
</svg></div>
        <div className="small-11 medium-9 columns">
            <h2 className="">Process</h2>
            <p className="text-left content-project">I believe that transparent, open design process leads to happier clients and shorter development time. In this case, local team would be signing-off the final acceptance for their project so it made sense to involve them as much as possible.
            As we were working on the prototype to be handed-over to dev team we decided to empower local team by letting them access Figma. They could comment or request more information on specific point through the slack channel we opened to communicate with them.
                </p>
            <h3 className="">Cross cultural UI overall approach</h3>
                <p className="text-left content-project">
                The original approach was to try to get all the application for a country localized and translated. We quickly realized that we needed local team to be pro-active in this process. We needed to have a native cultural expert with enough coporate culture to be able to let us know what needed to be localized and what not. Overall, if we could not get enough information we aimed to make localize the UI as much as possible and keep the content in english.
                </p>
                <h3 className="padding5_top">Our solution was a combination of localized UI & corporate content in English</h3>
                <p className="text-left content-project">I noticed that most countries used some corporate-specific words that did not needed to be translated. Some UI elements did not
                need translation either. I have made an inventory of these and included them as standard values in our global template. Overall, what we aimed to
                do was to make sure translations were accurate. If we could not find any cultural expert in our local team, we kept the UI standard (english) as much a possible.</p>
                <h3 className="padding5_top">Process example: United Arab Emirates app localization </h3>


                    <h4 className="padding5_top">Preparation : market study, elicitation and first round of required iterations</h4>
                    <p className="text-left content-project">The first step has been for us to consider local legislation and collect information sample that represents the target audience and list our questions so we could be prepared for our first round of meetings and workshops.</p>
                    <p className="text-left content-project">We then travelled to the country company location, presented the big pictures and run our elicitation techniques (1 day observation + 2 days of interviews and focus-group). We would also ensure that we had a person who could function as a “cultural expert,” equally familiar with the target personal and corporate culture. His first task was to make sure the project technical terms and abstract concepts could be translated and understood.
                    In the meantime, we tried to have everyone on the design team develop a clear understanding of the target culture, corporate flows, and processes variations. After this workshop we kicked off the wireframes/prototyping phase in Figma, involving local team on regular progress touchpoints.</p>
                    <h4 className="padding5_top">Scope validation and design kick-off</h4>
                    <p className="text-left content-project">We then shared our testing results and highlighted what would be the requirements and variations. To do so, we travaled again to local users location and brought our Figma screens to a live prototype so user could validate the scope using a tangible product.
                    Cost evaluation, planning and subsequent tasks were then created in Jira.
                    </p>
                    <h4 className="padding5_top">Keeping design consistent</h4>
                    <p className="text-left content-project">Before kicking off local project we already had a global template and a standard application to be presented to locals. This standard application was build on a master design system (tokens) having smart, reusable patterns at our disposal.
                    It was all about access point centralization, reusable design resources and local adjustment, reusable development resources. Most of the design system fails as component are just used once but in our case most of the components would actually be re-used !
                    In our case, the design system was more a starter kits, components and documentation. Things that people could actually understand and use.
                    The company had already a brand guidelines, master iconography, symbols and pictures and a style guide. All we had to do was to create and adapt our component leaving room for local inputs and variation.
                    </p>
                    <img className="padding5_top" src={require('../images/avantiq/design_system.jpg')} alt="avantiq design system"/>
                    <p className="caption padding5_bottom">Our unified approach included design tokens for wireframing and prototyping (left) and a complete design system for development (right)</p>
                    <p className="text-left content-project padding5_bottom">We have run UI localization for most of the countries in Asia, South America and Europe. Arabic localization has been a long and hard process. I wrongly thought at first that mirroring the English UI would be enough. It won’t just do the job either to hire an interpreter to
                    translate text into Arabic and consider the job done. Without the support of our local cultural-expert we would not have been able to achieve this local project.
                    </p>
                    <div className="case_study_docs_div_avantiq" id="content">
                    <img className="" src={require('../images/avantiq/case_study_payslips.svg')} alt="avantiq arabic app"/>
                    </div>
                    <p className="caption padding5_bottom">United Arab Emirates localization example</p>
                    <p className="text-left content-project">
                    First difficulty : all arab countries use different dialect. After discussing this with locals we realized it was not a big issue for them to deal with a standard arabic UI.
                    We decided to use Modern Standard Arabic (Fusha) so we would save a huge amount of time on translation process since most of the arab countries in scope would be able to use the app. Our initial research show that Arabic user can easily switch between English and Arabic as long as the design is consistent. We were therefore in position to implement our overall UI approach for these countries (localized UI / corporate content in English).
                    </p>
                    <p className="text-left content-project">In terms of Design, we involved local team in regular validation touchpoints.
                    Arabic words are longer and require a bigger size and space than used in the Roman alphabet due to the complexity of its characters. Digits are Left-To-Right even if the UI is Right-To-Left. This implied some iteration and many deviations from the standard UI. We also had to change our icon set as some of them would keep their LTR alignment. Sometimes we just changed the location in the UI, keeping the original alignment and icon directions.
                    </p>
                    <p className="text-left content-project">
                    Considering all the changes that the characters and words implied in terms of size, layout and copy we ended up creating a specific sub design system for Arabic UI. We used Noto font for the application for all countries so we made sure we did not get any TOFU.
                    </p>
                    <h4 className="padding5_top">Design project management</h4>
                    <h5>Keeping design decisions documented</h5>
                    <p className="text-left content-project">Every design deviation from the standard template was reflected in the design system and documented. This helped us to keep the rational and context
                    behind design decisions documented for future changes and also provided clear, written indications to the dev team. We also used design documentation when we required decisions to be taken from the governance team.</p>
                    <h5>Clear phases closure</h5>
                    <p className="text-left content-project">We kept the process transparent with locals but we also made clear that we had to meet deadlines and phases.
                    Making closure of each steps signed-off helped us to move on and avoid endless design iteration rounds. We had clear criteria for each step and they had been presented to the team during our first kick-off meetings.</p>

                    <h5 className="">Providing team high-level progress and milestone</h5>
                    <p className="text-left content-project">When working remotely on such a huge project, it's important to keep the team aligned and provide ways for all to understand where we stand and where we are going.

                    We needed to cooperate with several remote teams based in different time zone. This made our communication process harder, so we had to make sure we worked as closely as possible.
                    I tried to always over communicate and provide continuous feedback on the project being as transparent and open as possible when conflicts or misunderstanding popped up.
                    One regular, fixed meeting was enough for us to align. I tried to name a facilitator  and minute taker for every single meeting so we could keep track of progress from one week to another.
                    The rest of the time we had "informal" catch-up and our slack channels to communicate on daily progress or issues we faced.
                    </p>
                    <img className="padding5_top" src={require('../images/avantiq/avantiq_design_plan.png')} alt="avantiq project design plan"/>
                    <p className="caption padding5_bottom">Alongside the Jira tickets I kept updated and shared an high-level design project plan on a page</p>
                    <img className="padding5_top" src={require('../images/avantiq/epic_stories_visual_checklist.jpg')} alt="avantiq project design plan"/>
                    <p className="caption padding5_bottom">Epic and stories visual checklist help our team plan the workload and provided a sense of tangible accomplishment in such a large project</p>
                    <h5 className="padding5_top">Acceptance, deployment and fine-tunning</h5>
                    <p className="text-left content-project padding10_bottom">Local team has been deeply involved in the design phase so we did not face critical issues when running the acceptance tests. We did listed a couple of defects as usual but both design and local teams were happy with the result. I can not underline strongly enough that involving locals and being transparent from the very early stage of the process will ease your project day-to-day, change management and final acceptance. We closed this local project presenting the future iterations and releases. We kept our local cultural-expert in the global project information loop and sometimes reached out for validation when dealling with some standard changes in the UI.</p>



                </div>
    </div>



    <div className="case_study_docs_div_avantiq" id="content">
    <img className="training_img padding5_both" src={require('../images/avantiq/training.png')} alt="training avantiq"/>
</div>
<p className="caption">Knowledge management : one goal of this project was to empower local userz elearning practices. We aimed to convert instructions into visual experiences.</p>

    <div className="row align-center padding5_top">
        <div className="small-11 medium-2 columns"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-2" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="4" y="4" width="6" height="5" rx="2" />
  <rect x="4" y="13" width="6" height="7" rx="2" />
  <rect x="14" y="4" width="6" height="7" rx="2" />
  <rect x="14" y="15" width="6" height="5" rx="2" />
</svg></div>
        <div className="small-11 medium-9 columns">
            <h2 className="">UI Testing & QA</h2>
            <p className="text-left content-project">When it comes to testing the front end, there are a few different areas that we wanted to cover:</p>
                <ul className="no_bullet padding10_bottom">
                    <li className="checked twolines">Unit Testing</li>
                    <li className="checked twolines">Integration Testing</li>
                    <li className="checked twolines">Accessibility Testing</li>
                    <li className="checked twolines">Performance Testing</li>
                    <li className="checked twolines">Visual Regression Testing</li>
                    <li className="checked twolines">Browser/device testing</li>
                    <li className="checked twolines">User Acceptance Testing</li>
                </ul>
                <h3 className="">Overall process</h3>
                <p className="text-left content-project">When a pull request is created,
                continuous integration tools start to run against the code in the branch.
                It’s during this step in the workflow that we run our automated tests,
                and if any of the automated tests fail, we block the branch from being
                able to be merged into the master branch.</p>
                <h3 className="">Unit testing</h3>
                <p className="text-left content-project">We used Chai and Jest JavaScript testing tool for unit testing. We wanted to check if components are still working in isolation and if the version of the app in a new language did not impact the existing languages.</p>
                <h3 className="">Integration testing</h3>
                <p className="text-left content-project">We used Jest for integration testing. We wanted to make sure all components interactions worked flowlessly.</p>
                <h3 className="">Accessibility testing</h3>
                <p className="text-left content-project">When deploying a new country app deviation we run Axe automated testing runs as part of the development build to let us know what changes are required in terms of accessibility.
                We specified a couple of individual rules as mandatory for the app to be deployed to end users. These rules applied to all the countries in scope.
                </p>
                <h3 className="">Performance testing</h3>
                <p className="text-left content-project">Some countries had a very limited broadband internet connection. We analysed the impact of images in loading time and tried to find design alternative for data-heavy pages.</p>
                <h3 className="">Visual regression testing</h3>
                <p className="text-left content-project">Since we were constantly updating and pushing new code, we wanted to ensure that no visual defects were
                making their way into our apps.
                We included visual regression tests during continuous integration testing,
                and stipulated that any detected visual changes must be explicitly
                approved before the branch can be merged. Since we had all the design decision documented, it was easier for dev team to check and merge the branch.
                Since we were using React, we decided to use Chromatic set of side-by-side screenshots showing a before-and-after view with any differences noted for visual regression testing.

                </p>
                <h3 className="">Browser/device for the web app</h3>
                <p className="text-left content-project">We have been running local
                testing with the good ol' Browserstack when it comes to browser and
                devices testing. Comprehensive tests were run or a major realease or a
                key component implementation. These tests included both desktop and mobile browsers.</p>
                <h3 className="">User Acceptance Testing</h3>
                <p className="text-left content-project">We run formal sessions for user acceptance tests. We usually travel on-site with 1 or 2 devs and run 1,5 testing all the processes. Local countries had to provide us with their final validation so this testing was a clear project milestone we carefully prepared. If possible, defects where fixed and validated directly during these days on site. If some major issue were spotted, we would follow-up and iterate until local team provide their sign-off.</p>
        </div>
    </div>
    <div className="row align-center padding5_top">
        <div className="small-11 medium-2 columns"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-recycle" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(120 12 13)" />
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(240 12 13)" />
</svg></div>
        <div className="small-11 medium-9 columns">
            <h2 className="">Feedback and iterations</h2>
                <p className="text-left content-project">After a country had been using the application for more than 6 months we started to collect data and planned on-site session for a feedback round.
                The question we needed to address was basically : are people really using our product?  The reason is that we the product team can use it to figure how to really help, add value, and
                benefit the people using our product. We calculated the adoption rate using the following formula : Adoption rate = number of 30-day active users / total number of users in scope. Luckily in most countries people actually used the app. For those reporting bad figures in terms of adoption, before planning any session we tried to understand if there were any external issue preventing people to use the app (change in mobile phone assets, company IT policies...).
                The metrics we setup for this project were the following : <strong>Time on task</strong> (more complicated to measure than it seems!), <strong>Succes rate</strong>, <strong>Error rate</strong>, <strong>Degree of enjoyment</strong>, <strong>Time to 1st task</strong> and <strong>Abandonment rate</strong>.
                Before contacting the countries we also made sure their defect backlog would be empty without any issue unaddressed. Once we were confident with the data we planned 1 day to catch-up with local team to run our metrics testing and make sure nothing has been left behind.
                This feedback session was the official closure of the project in terms of meetings and tasks. We usually nominated a limited group of user we would contact on a regular basis for short follow-up interviews.
                 </p>

    </div>
        </div>
        <div className="row align-center padding5_top">
        <div className="small-1 medium-2 columns"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="100" height="100" viewBox="0 0 24 24" stroke-width="0.5" stroke="#3839D4" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg></div>
        <div className="small-11 medium-9 columns">
            <h2 className="">Final product and lessons learned</h2>
            <p className="text-left content-project">As I wrote it in the first part of this case study, this project has been a milestone in my career. It allowed me to be involved in all the phases and dimensions of the project. From reasearch to delivery and measurement.
            The project complexity and pace changed my mindset in some way and made me more humble and I would say, wiser as well. If I had to summarize they key things to keep in mind when working in this kind of project, these would be my advices :  </p>
            <div className="row align-left padding5_top padding10_bottom">
                <div className="small-12 columns ">
                    <ul className="no_bullet padding10_bottom">
                        <li className="checked twolines">Research and UX metholodgies do work, save time, money and frustration</li>
                        <li className="checked twolines">Talk to the end user and involve them</li>
                        <li className="checked twolines">Some user evaluation methods are less applicable than others are for a culturally diverse user base</li>
                        <li className="checked twolines">Keep your design process transparent</li>
                        <li className="checked twolines">Prototyping saves time</li>
                        <li className="checked twolines">Document EVERYTHING</li>
                        <li className="checked twolines">Define a clear approach to localization (eg: localized UI with content in English)</li>
                    </ul>
                </div>
                <div className="small-12 columns ">
                    <ul className="no_bullet padding5_bottom">
                        <li className="checked twolines">Make good use of design system</li>
                        <li className="checked twolines">Hiring a translator for localization won't do the job</li>
                        <li className="checked twolines">Over-communicate with distributed teams</li>
                        <li className="checked twolines">Choose UX metrics carefully and stick to them</li>
                        <li className="checked twolines">Enjoy what you do!</li>
                    </ul>
                </div>
            </div>


            <video width="100%" height="auto" loop autoPlay muted>
            <source src={InteracVid} type="video/mp4"/></video>

        </div>

        </div>

</div>

<div className="section_inner padding5_top">

    <Footer/>
</div>

</PageTransition>

)


export default Avantiq