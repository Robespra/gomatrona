import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import InteracVid from '../images/meka/interaction_meka.mp4'
import Header from '../components/header'
import Footer from '../components/footer'
let pathPrefix = `/`



export default () => (
    <PageTransition>
<div>
<Helmet>
      <meta charSet="utf-8" />
      <title>Goretti matrona - Embarazo</title>
      <meta name="description" content="uxpages case studies around projects I have be involved in include conversion optimization, international projects and consulting activities for startups and large companies"/>
      <link rel="canonical" href="https://gomatrona.com/embarazo" />
    </Helmet>

<Header/>

<div className="row align-middle padding10_top">
	<div className="small-12 columns">
    <div className="row align-center">
    <div className="small-11 columns">
    <h2 className="hero_cases">Case studies and projects 🚀</h2>
        <h4 className="padding3_bottom">Since 2010 I have helped startups and leaders design, build, ship or optimize digital products and services.</h4>
        <h4 className="padding3_bottom">Lately I have been mainly focusing on strategic<span className="skills_highlight"> product design </span> and <span className="skills_highlight">UX design consultancy.</span>
        </h4>
        <h4 className="padding5_bottom">Product design is not an art guided solely by creativity and intuition : I do believe in <span className="skills_highlight">lean customer development and metrics.</span></h4>

    </div>
        <div className="small-5 columns border-skills"></div>
        <div className="small-5 columns"></div>
        <div className="small-11 columns">

        </div>
        </div>
	    <h1 className="hidden-h1">uxpages ux pages case studies</h1>

    </div>
</div>




<div id="recent_work" className="row align-center padding5_top">
    <div className="small-11 columns first-prjct padding5_bottom">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>Helping companies to convert more with convy</h3>
                <div className="skills_underline_orange"></div>
            </div>
            <div className="small-11 medium-4 columns dtls-text">
            <p>Growth design consulting</p>
            <p>Contracts</p>
            <p>2017 - Now</p>
            <p className="p_case_categories">You may be interested in : </p>
            <ul className="no_bullet">
                <li className="checked_cases category">Growth Design</li>
                <li className="checked_cases category">Product Design</li>
                <li className="checked_cases category">Interface Design</li>
            </ul>
            </div>
            <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                <div className="prjct-img_block_opposite negative_margin_figures">
                <img src={require('../images/convy/numbers_convy.svg')} alt="convy figures case study"/>
                    <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_convy.jpg')} alt="convy"/>

                    <Link className="project__item-btn gradient_effect" to="/convy/" onclick="track('Click-see-project-convy','Click-see-project-convy')">Read case study</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="small-11 columns last-prjct padding5_both">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>avantIQ Global HR App</h3>
                <div className="skills_underline_orange"></div>
                </div>
                <div className="small-11 medium-4 columns dtls-text">
                        <p>HR enterprise app for +50 countries</p>
                        <p>Contract</p>
                        <p>2018 - 2020</p>
                        <p className="p_case_categories">You may be interested in : </p>
                    <ul className="no_bullet">
                            <li className="checked_cases category">Wide and complex scope</li>
                            <li className="checked_cases category">Localization</li>
                            <li className="checked_cases category">Interface Design</li>
                            <li className="checked_cases category">Product Design</li>
                            </ul>
                </div>
                    <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                    <div className="prjct-img_block_opposite">
                        <div className="prjct-img_block_inner_pstn-relative_opposite">

                        <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_avantiq.jpg')} alt="avantiq"/>
                            <Link className="project__item-btn gradient_effect" to="/avantiq/" onclick="track('Click-see-project-avantiq','Click-see-project-avantiq')">Read case study</Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div className="small-11 columns last-prjct padding5_both">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>Mixing psychology, machine learning and conversational ui for mēkācreative.io</h3>
                <div className="skills_underline_orange"></div>
                </div>
                <div className="small-11 medium-4 columns dtls-text">
                        <p>Creative HR selection dashboard and chatbot</p>
                        <p>Contract</p>
                        <p>(in progress)</p>
                        <p className="p_case_categories">You may be interested in : </p>
                    <ul className="no_bullet">
                            <li className="checked_cases category">Interface Design</li>
                            <li className="checked_cases category">Conversational design</li>
                            <li className="checked_cases category">Product Design</li>
                            <li className="checked_cases category">Gamification</li>
                            </ul>
                </div>
                    <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                    <div className="prjct-img_block_opposite">
                        <div className="prjct-img_block_inner_pstn-relative_opposite">
                        {/* <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_meka.jpg')} alt="meka"/> */}
                        <video className="prjct-large-bg lazy" width="100%" height="auto" loop autoPlay muted>
                            <source src={InteracVid} type="video/mp4"/>
                        </video>
                            <Link className="project__item-btn gradient_effect" to="/meka/" onclick="track('Click-see-project-meka','Click-see-project-meka')">Read case study</Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div className="small-11 columns last-prjct padding5_both">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>Multiple products development with kelisto.es</h3>
                <div className="skills_underline_orange"></div>
                </div>
            <div className="small-11 medium-4 columns dtls-text">
                    <p>Finance, Insurance, Comms & Energy Price comparators. Ecommerce & content.</p>
                    <p>Full-time</p>
                    <p>2013 - 2015</p>
                    <p className="p_case_categories">You may be interested in : </p>
                    <ul className="no_bullet">
                            <li className="checked_cases category">Visual design</li>
                            <li className="checked_cases category">UI/UX</li>
                            <li className="checked_cases category">Front-end development</li>
                            <li className="checked_cases category twolines">Stakeholders / dev team processes</li>
                            <li className="checked_cases category twolines">Conversion-optimization design</li>
                            </ul>
                </div>
                <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                    <div className="prjct-img_block_opposite">
                        <div className="prjct-img_block_inner_pstn-relative_opposite negative_margin_figures">
                        <img src={require('../images/kelisto/numbers_kelisto.svg')} alt="kelisto hero case study"/>
                            <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_kelisto.jpg')} alt="kelisto hero case study"/>

                            <div className="prjct-img_block_inner_pstn-absolute_opposite">


                            </div>

                            <Link className="project__item-btn gradient_effect" to="/kelisto/" onclick="track('Click-see-project-kelisto','Click-see-project-kelisto')">Read case study</Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div className="small-11 columns last-prjct padding5_both">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>Starting from scratch with sharemos.com</h3>
                <div className="skills_underline_orange"></div>
            </div>
            <div className="small-11 medium-4 columns dtls-text">
                <div className="dtls-text-p">
                <p>Two-side marketplace</p>
                <p>2015 - 2016</p>
                <p className="p_case_categories">You may be interested in : </p>
                    <ul className="no_bullet">
                        <li className="checked_cases category">MVP</li>
                        <li className="checked_cases category">Branding/visual design</li>
                        <li className="checked_cases category">UX UI</li>
                        <li className="checked_cases category">Front-end code</li>
                        <li className="checked_cases category">Android App design</li>
                        </ul>
                </div>
            </div>
            <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                <div className="prjct-img_block_opposite">
                    <div className="prjct-img_block_inner_pstn-relative_opposite">
                        <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_sharemos.jpg')} alt="kelisto hero case study"/>
                        <div className="prjct-img_block_inner_pstn-absolute_opposite">

                        </div>
                        <Link className="project__item-btn gradient_effect" to="/sharemos/" onclick="track('Click-see-project-sharemos','Click-see-project-sharemos')">Read case study</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="small-11 columns last-prjct padding5_both">
        <div className="row">
            <div className="small-11 columns dtls-text">
                <h3>MISC</h3>
                <div className="skills_underline_orange"></div>
            </div>
            <div className="small-11 medium-4 columns dtls-text">
                <div className="dtls-text-p">
                <p>Full-time & Contracts</p>
                <p>2012 - 2019</p>
                    <p>You may be interested in :</p>
                    <ul className="no_bullet">
                        <li className="checked_cases category">MVP</li>
                        <li className="checked_cases category">Branding/visual design</li>
                        <li className="checked_cases category">UX UI</li>
                        <li className="checked_cases category">Front-end code</li>
                        <li className="checked_cases category">Android App design</li>
                        </ul>
                </div>
            </div>
            <div className="small-11 medium-8 columns prjct-img_block_pstn-relative_opposite">
                <div className="prjct-img_block_opposite">
                    <div className="prjct-img_block_inner_pstn-relative_opposite">
                        <img className="prjct-large-bg lazy" src={require('../images/prjctimg3_sharemos.jpg')} alt="kelisto hero case study"/>
                        <div className="prjct-img_block_inner_pstn-absolute_opposite">

                        </div>
                        <Link className="project__item-btn gradient_effect" to="/misc/" onclick="track('Click-see-project-sharemos','Click-see-project-sharemos')">Read case study</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


</div>




<Footer/>


</div>
</PageTransition>
)

