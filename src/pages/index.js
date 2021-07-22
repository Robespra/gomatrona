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
      <title>uxpages - Product Design From Discovery To Delivery</title>
      <meta name="description" content="I have been designing digital products and providing guidance to organizations for more than 10 years. Product design is not an art guided solely by creativity and intuition : I do believe in lean customer development and metrics."/>
      <link rel="canonical" href="https://uxpages.com" />
    </Helmet>

<Header/>
<section className="hero-section">
    <div className="hero-section-image">
        <div className="hero-section-text">
            <h1 className="hidden-h1">goretti martel matrona las palmas gran canaria</h1>
            <h2 className="hero_line">"Gestando vida, confío en mi instinto"</h2>
        </div>
    </div>
</section>

<div className="row align-middle">
	<div className="small-12 medium-6 columns hero_pctre">
		<img src={require('../images/z3.jpg')} alt="pages charly espra jeremy robertttt aqui está?"/>
	</div>
    <div className="small-12 medium-6 columns">
    <h2>Gorreti Martel, matrona</h2>
     <p>Haré todo lo posible para que disfrutes de tu embarazo, parto, postparto, lactancia y crianza.
        Te daré información actualizada de las últimas recomendaciones según la evidencia científica, respetando tus procesos y tus ritmos, para que tomes tus propias decisiones.
        Confío en tu cuerpo, en tu bebé y en tu instinto, la sabiduría de mujer está en tus genes. Las fuerzas de la naturaleza están en tí.</p>

        <p>Sé que puedes hacerlo y eres capaz.
        Entiendo tus miedos y tus inseguridades.
        Quiero que seas tú misma y te descubras.</p>
	</div>

</div>

    <div id="skills" className="row align-center padding5_top">
        <div className="small-12 columns">
            <div className="row align-left">
                <div className="small-5 columns border-skills"></div>
                <div className="small-5 columns"></div>
                <div className="small-11 columns">
                    <h2 className="padding5_top">Servicios a domicilio</h2>
                    <div className="skills_underline_orange"></div>
                    <h4 className="">I can help you with <span className="skills_highlight">front integration</span>, design <span className="skills_highlight">prototypes</span>, improve your <span className="skills_highlight">conversion rates</span> or set up a cohesive<span className="skills_highlight"> design system</span>.
                        </h4>
                    <div className="row expanded align-center padding10_both">
                        <div className="small-12">
                            <div className="row expanded">
                            <div className="column small-12 medium-3 feature-card box-shadow ">
                                <div className="row expanded align-center">
                                <div className="column small-3 feature-card-img">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="9" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                </svg>
                                </div>
                                <div className="column small-9 feature-card-text">Matrona domicilio</div>
                                </div>
                            </div>
                            <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                                <div className="row expanded align-center">
                                <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gauge" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="12" cy="12" r="9" />
                                    <circle cx="12" cy="12" r="1" />
                                    <line x1="13.41" y1="10.59" x2="16" y2="8" />
                                    <path d="M7 12a5 5 0 0 1 5 -5" />
                                    </svg>
                                </div>
                                <div className="column small-9 feature-card-text">Visita postparto</div>
                                </div>
                            </div>
                            <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                                <div className="row expanded align-center">
                                <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <polyline points="3 9 12 15 21 9 12 3 3 9" />
                                    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                                    <line x1="3" y1="19" x2="9" y2="13" />
                                    <line x1="15" y1="13" x2="21" y2="19" />
                                </svg></div>
                                <div className="column small-9 feature-card-text">Lactancia</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="small-11 columns">
                    <h2 className="padding5_top">Servicios online</h2>
                    <div className="skills_underline_orange"></div>
                    <h4 className="">I can help you with <span className="skills_highlight">front integration</span>, design <span className="skills_highlight">prototypes</span>, improve your <span className="skills_highlight">conversion rates</span> or set up a cohesive<span className="skills_highlight"> design system</span>.
                        </h4>

            </div>
        </div>
        <div className="row expanded align-center padding10_both">
        <div className="small-12">
            <div className="row expanded">
            <div className="column small-12 medium-3 feature-card box-shadow ">
                <div className="row expanded align-center">
                <div className="column small-3 feature-card-img">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="9" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                </svg>
                </div>
                <div className="column small-9 feature-card-text">Consulta embarazo</div>
                </div>
            </div>
            <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gauge" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="1" />
                    <line x1="13.41" y1="10.59" x2="16" y2="8" />
                    <path d="M7 12a5 5 0 0 1 5 -5" />
                    </svg>
                </div>
                <div className="column small-9 feature-card-text">Preparación al parto</div>
                </div>
            </div>
            <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <polyline points="3 9 12 15 21 9 12 3 3 9" />
                    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                    <line x1="3" y1="19" x2="9" y2="13" />
                    <line x1="15" y1="13" x2="21" y2="19" />
                </svg></div>
                <div className="column small-9 feature-card-text">Podromos de parto</div>
                </div>
            </div>
            </div>
            <div className="row expanded padding5_top">
                <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-directions" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                    <path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
                    <line x1="12" y1="22" x2="12" y2="17" />
                    <line x1="12" y1="13" x2="12" y2="9" />
                    <line x1="12" y1="5" x2="12" y2="3" />
                    </svg></div>
                    <div className="column small-9 feature-card-text">Postparto</div>
                </div>
                </div>
                <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-happy" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                    <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
                    </svg></div>
                    <div className="column small-9 feature-card-text">Lactancia materna, artificial y mixta</div>
                </div>
                </div>
                <div className="column small-12 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfb18c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                    </svg></div>
                    <div className="column small-9 feature-card-text">Cuidados del recién nacido sano</div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>




    <div className="row align-middle mbxl">
    <div className="small-11 columns">
    <h2>Testimonial</h2>
     <p>Haré todo lo posible para que disfrutes de tu embarazo, parto, postparto, lactancia y crianza.
        Te daré información actualizada de las últimas recomendaciones según la evidencia científica, respetando tus procesos y tus ritmos, para que tomes tus propias decisiones.
        Confío en tu cuerpo, en tu bebé y en tu instinto, la sabiduría de mujer está en tus genes. Las fuerzas de la naturaleza están en tí.</p>

        <p>Sé que puedes hacerlo y eres capaz.
        Entiendo tus miedos y tus inseguridades.
        Quiero que seas tú misma y te descubras.</p>
	</div>

</div>












<Footer/>


</div>
</PageTransition>
)

