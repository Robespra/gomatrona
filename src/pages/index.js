import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'
import Fade from 'react-reveal/Fade'
import ReactTooltip from "react-tooltip";
let pathPrefix = `/`



export default () => (
    <PageTransition>
<div>
<Helmet>
      <meta charSet="utf-8" />
      <title>Goretti Martel Matrona</title>
      <meta name="description" content="Goretti Martel matrona en las palmas de gran canaria. Consultas online y visitas a domicilio. Embarazo, parto, postparto, lactancia y crianza"/>
      <link rel="canonical" href="https://gomatrona.com" />
    </Helmet>

<Header/>
<section className="hero-section">
    <div className="hero-section-image">
        <div className="hero-section-text">
            <h1 className="hidden-h1">goretti martel matrona las palmas gran canaria</h1>
            <h2 className="hero_line" id="index">"Gestando vida, confío en mi instinto"</h2>
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
    <div className="wrapper">
    <div className="parent-tab">
        <input type="radio" name="tab" id="tab-1" />
        <label htmlFor="tab-1">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-briefcase" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="#D9A1B7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
                Experiencia
            </span>
            <div className="icon">
                <span>De enfermera a matrona</span>
                <i/></div>
        </label>
        <div className="content">
        <ul>
            <li>2013 hasta la actualidad - Matrona en centro de salud en el SCS en la GAPGC.</li>
            <li>2013-2016 - Matrona acompañando partos a domicilio en Gran Canaria, con el equipo de parto en casa de Blossom Centro Maternal.</li>
            <li>2005 hasta el 2011 - Enfermera en atención primaria y hospitalaria en el SCS.</li>
        </ul>
        </div>
        </div>
    <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-2" />
                        <label htmlFor="tab-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-notebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="#D9A1B7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                                Formación
                            </span>

                            <div className="icon">
                                <span>Especialista en enfermería obstétrico-ginecológica (Matrona)</span>
                                <i/></div>
                        </label>
                        <div className="content">
                            <ul>
                                <li>2022 - Postulante Consultora Internacional Lactancia Materna IBCLC</li>
                                <li>2020 - Experta Universitaria en Lactancia Materna por la Universidad de Ávila.</li>
                                <li>2018- Experta Universitaria en la Atención  de la mujer para la vivencia de una maternidad consciente por la Universidad de Ávila.</li>
                                <li>2013 - Especialista en enfermería obstétrico-ginecológica (Matrona) en el Hospital Universitario Materno Infantil de Canarias.</li>
                                <li>2005 - Diplomada Universitaria en Enfermería por la Universidad de Las Palmas de Gran Canaria.</li>
                        </ul>
                        </div>
                        </div>
                        {/* Accordion Heading Two */}

                        {/* Accordion Heading Three */}
                        <div className="parent-tab tab-3">
                        <input type="radio" name="tab" id="tab-3" />
                        <label htmlFor="tab-3" className="tab-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-school" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="#D9A1B7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </svg>
                            Otras formaciones
                        </span>
                        <div className="icon">
                            <span>Cursos</span>
                            <i/></div>
                        </label>
                        <div className="content">
                        <ul>
                            <li>2019 - Yoga para embarazadas. Imma Campos.</li>
                            <li>2013 - Metodo Aipap. Matronatación. Preparación al parto</li>
                            <li>2013 - Parir en movimiento. Nuria Vives.</li>
                            <li>2013 - Maestría de Reiki. Colegio de Enfermería de Las Palmas</li>
                            <li>2013 - El Parto en el agua. Barbara Harper.</li>
                        </ul>

                        </div>
                        </div>
                        {/* Accordion Heading Four */}
                        <div className="parent-tab">
                        <input type="radio" name="tab" id="tab-6" />
                        <label htmlFor="tab-6">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon-area icon-tabler icon-tabler-bulb" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="#D9A1B7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                                <line x1="9.7" y1="17" x2="14.3" y2="17" />
                            </svg>
                            ¿Porqué decidí ser matrona?
                            </span>
                            <div className="icon">
                                <span>Así lo he vivido, y así lo transmito</span>
                                <i className="fas fa-plus" /></div>
                        </label>
                        <div className="content">
                            <p>Acabé la carrera de enfermería en 2005, trabajé como enfermera durante 6 años en diferentes servicios, tanto en asistencia hospitalaria como en atención primaria. Hasta que un día trabajé en la consulta de tocología, y tomé consciencia de la vida que había tras... donde descubrí que había vida tras aquellas manchas de fotos de ecografía. ¡Me enamoré! me parecía increíble cómo me decían que se sentían las mujeres, a las cuáles les iba a extraer una muestra de sangre. Sentí que quería hacer algo más, quería ser partícipe de sus vivencias. En ese momento, comencé a investigar el largo recorrido que tuve que hacer para SER MATRONA. Tardé 3 largos años en conseguir mi plaza para formarme. A pesar de las dificultades, desplazarme a Madrid para prepararme y suspender, coger la decepción y la frustración con más fuerza para intentarlo al año siguiente… y otra vez suspender, pero esta vez lo asimilé de otra manera, y lo sabía, que a la tercera era la vencida. Así fue. En 2011 quedé la número 132 de más de 17000 enfermeras que nos presentamos en toda España. Finalicé la formación en 2013 en el Hospital Universitario Materno Infantil de Gran Canaria. ¡Reto conseguido! Con un bebé creciendo en mi interior, cerraba una etapa y comenzaba una nueva aventura.</p>
                            <p>Desde el 2013, comencé el viaje de la maternidad y la matronería. He ido sumando experiencia profesional y personal. En continúa formación, aprendiendo de las parteras, de las comadronas, apoyándome siempre de la evidencia científica más actual. Y, sobre todo, aprendiendo de mis 3 grandes maestros, mis hijos y mi hija, con el ensayo-error de “toda la vida”. Aprendiendo a acompañar y respetar los ritmos de cada persona, empezando por los míos, mi familia, y profesionalmente, respetando los ritmos del bebé, las madres, los padres y resto de familiares.</p>
                            <p>Cúal es el objetivo de @gorettimatrona para las madres y padres?
                                Que vivan la maternidad y paternidad de una manera consciente y gozosa. Con responsabilidad y compromiso hacia sus propios cuidados, los de su bebé y su pareja, con mucho amor y dosis extra de paciencia. </p>
                                <p className="padding10_bottom">Así lo he vivido, y así lo transmito. A mi manera. ¿Quieres hacer la tuya?✨
                            </p>
                        </div>
                        </div>

    </div>

</div>

    <div id="skills" className="row align-center padding5_top">
        <div className="small-12 columns">
            <div className="row expanded align-center">
                <div className="small-5 columns border-skills"></div>
                <div className="small-5 columns"></div>
                <div className="small-11 columns">
                    <h2 className="padding5_top">Servicios a domicilio</h2>
                    <div className="skills_underline_orange"></div>
                    <h4 className="">La protagonista <span className="skills_highlight">eres tú</span>, me adapto a <span className="skills_highlight">tus necesidades</span>. Disfruta de una preparación para la maternidad y paternidad con <span className="skills_highlight">información actualizada</span> y a la vez con <span className="skills_highlight">herramientas prácticas</span>.
                        </h4>
                    <div className="row expanded align-center padding10_both">
                        <div className="small-12">
                            <div className="row expanded">
                            <Fade>
                            <a
                                        className="column small-12 medium-3 feature-card box-shadow "
                                        data-tip data-for='matrona_domicilio'
                                         >
                                    <div className="row expanded align-center">
                                    <div className="column small-3 feature-card-img">
                                        <img src={require('../images/matrona_domicilio.svg')} alt="Matrona domicilio"/>
                                    </div>
                                    <div className="column small-9 feature-card-text">Matrona domicilio</div>
                                    </div>
                                </a>
                                <ReactTooltip id='matrona_domicilio' place="top" aria-haspopup='true' role='example' type='info' effect="solid">
                                    <p>Consulta de seguimiento del embarazo</p>
                                    <ul>
                                        <li>Valoración precoz de posibles complicaciones si las hubiese</li>
                                        <li>Información sobre hábitos saludables, higiene postural, alimentación, ejercicio…</li>
                                        <li>Información de los signos de alarma</li>
                                        <li>Resolución de dudas</li>
                                        <li>Se realiza exploración física de la embarazada y escucharemos el latido fetal si es en domicilio</li>
                                    </ul>
                                </ReactTooltip>
                            </Fade>



                            <Fade>

                                <a
                                        className="column small-12 medium-3 feature-card medium-offset-1 box-shadow "
                                        data-tip data-for='visita_postparto'
                                        href="/postparto"
                                         >

                                    <div className="row expanded align-center">

                                    <div className="column small-3 feature-card-img">
                                        <img src={require('../images/visita_postparto.svg')} alt="Visita postparto"/>
                                    </div>
                                    <div className="column small-9 feature-card-text">Visita postparto</div>

                                    </div>

                                </a>
                                <ReactTooltip id='visita_postparto' place="top" aria-haspopup='true' role='example' type='info' effect="solid">
                                    <p>Cuidados postparto tanto en parto vaginal o parto por cesárea</p>
                                    <ul>
                                        <li>Revisión del suelo pélvico</li>
                                        <li>Puntos en el  periné</li>
                                        <li>Revisión de puntos /grapas de la cesárea</li>
                                    </ul>
                                    <p>Primeros cuidados  del recién nacido en casa</p>
                                    <ul>
                                        <li>Cuidados del cordón</li>
                                        <li>Primer baño del bebé</li>
                                    </ul>
                                </ReactTooltip>
                            </Fade>
                            <Fade>
                                <a
                                        className="column small-12 medium-3 feature-card medium-offset-1 box-shadow "
                                        data-tip data-for='lactancia'
                                         >
                                    <div className="row expanded align-center">
                                    <div className="column small-3 feature-card-img">
                                        <img src={require('../images/lactation.svg')} alt="Lactancia"/>
                                    </div>
                                    <div className="column small-9 feature-card-text">Lactancia</div>
                                    </div>
                                </a>
                                <ReactTooltip id='lactancia' place="top" aria-haspopup='true' role='example' type='info' effect="solid">
                                    <p>Lactancia</p>
                                    <ul>
                                        <li>Revisión de las mamas</li>
                                        <li>Asesoramiento en lactancia materna si decide dar el pecho</li>
                                    </ul>
                                </ReactTooltip>
                            </Fade>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="small-11 columns">
                    <h2 className="padding5_top" id="servicios_online">Servicios online</h2>
                    <div className="skills_underline_orange"></div>
                    <h4 className="">Les <span className="skills_highlight">asesoro</span>, les <span className="skills_highlight">apoyo</span> y les <span className="skills_highlight">acompaño</span> en la toma de decisiones para la vivencia de una maternidad y paternidad <span className="skills_highlight">consciente</span>, facilitando las herramientas que necesites.
                        </h4>

            </div>
        </div>
        <div className="row expanded align-center padding10_top padding5_bottom">
        <div className="small-12">
            <div className="row expanded align-center">
            <Fade left>
            <a
                className="column small-11 medium-3 feature-card box-shadow "
                data-tip data-for='consulta_embarazo'
                href="/embarazo"
                    >
                    <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img">
                        <img src={require('../images/consulta_embarazo.svg')} alt="Consulta embarazo"/>
                    </div>
                    <div className="column small-9 feature-card-text">Consulta embarazo</div>
                    </div>
                </a>
                <ReactTooltip id='consulta_embarazo' place="top" aria-haspopup='true' role='example' type='info' effect="solid">
                    <p>Consulta de seguimiento del embarazo</p>
                    <ul>
                        <li>Valoración precoz de posibles complicaciones si las hubiese</li>
                        <li>Información sobre hábitos saludables, higiene postural, alimentación, ejercicio…</li>
                        <li>Información de los signos de alarma</li>
                        <li>Resolución de dudas</li>
                    </ul>
                </ReactTooltip>
            </Fade>
            <Fade left>
                <div className="column small-11 medium-3 feature-card medium-offset-1 box-shadow ">
                    <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img">
                        <img src={require('../images/preparacion_parto.svg')} alt="Preparación al parto"/>
                    </div>
                    <div className="column small-9 feature-card-text">Preparación al parto</div>
                    </div>
                </div>
            </Fade>
            <Fade left>
                <div className="column small-11 medium-3 feature-card medium-offset-1 box-shadow ">
                    <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img">
                        <img src={require('../images/podromos.svg')} alt="Podromos"/>
                    </div>
                    <div className="column small-9 feature-card-text">Podromos de parto</div>
                    </div>
                </div>
            </Fade>
            </div>
            <div className="row expanded align-center feature-cards-padding">
                <Fade right>
                <a
                className="column small-11 medium-3 feature-card medium-offset-1 box-shadow "
                data-tip data-for='postparto'
                href="/postparto"
                    >
                    <div id="postparto" className="row expanded align-center">
                        <div className="column small-3 feature-card-img">
                            <img src={require('../images/postparto.svg')} alt="Postparto"/>
                        </div>
                        <div className="column small-9 feature-card-text">Postparto</div>
                    </div>
                </a>
                </Fade>
                <Fade right>
                <div id="lactancia_menu" className="column small-11 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                    <div className="column small-3 feature-card-img">
                        <img src={require('../images/lactation.svg')} alt="Lactancia"/>
                    </div>
                    <div className="column small-9 feature-card-text feature-card-text-twolines">Lactancia materna, artificial y mixta</div>
                </div>
                </div>
                </Fade>
                <Fade right>
                <div className="column small-11 medium-3 feature-card medium-offset-1 box-shadow ">
                <div className="row expanded align-center">
                   <div className="column small-3 feature-card-img">
                    <img src={require('../images/cuidados_recien_nacido.svg')} alt="Cuidados del recién nacido sano"/>
                    </div>
                    <div className="column small-9 feature-card-text feature-card-text-twolines">Cuidados del recién nacido sano</div>
                </div>
                </div>
                </Fade>
            </div>
            </div>
        </div>
    </div>
</div>




    <div className="row align-left mtl mbxl">
    <div className="small-5 columns border-skills"></div>
    <div className="small-12 medium-11 columns">
    <h2>Testimonio</h2>
     <div className="row expanded align-center testimonial_section mtl">
        <div className="column small-2 testimonial_sign">
           <img src={require('../images/testimonial_intro_sign.svg')} alt="Testimonio intro"/>
        </div>
        <div className="column small-8 ">
        <p className="testimonial_text">ÑÑÑo, como mola la muchacha esa. Me ayudó a sacar al chiquillo y lo hizo muy bien.</p>


        <div className="row align-center">
            <div className="small-12 columns">
                <div className="row align-center">
                    <div className="small-2 columns">
                        <div className="test-2">
                            <svg role="none">
                            <mask id="test2">
                                <circle fill="white" cx={40} cy={40} r={40} />
                            </mask>
                            <g mask="url(#test2)">
                                <image x={0} y={0} height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlinkHref="https://images.generated.photos/5Nk9B44rloQuVHKcyS1RwiG_XBOho2OoEGuxBKQlgjM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NDUwLmpwZw.jpg" />
                                <circle fill="none" cx={40} cy={40} r={40} stroke="rgba(0,0,0,0.1)" strokeWidth={2} />
                            </g>
                            </svg>
                        </div>
                    </div>
                    <div className="small-5 columns"><p className="testimonial_author">KELLY, 30 AÑOS</p></div>
                </div>
            </div>
        </div>
        </div>
        <div className="column small-2 testimonial_sign">
           <img src={require('../images/testimonial_outro_sign.svg')} alt="Testimonio outro"/>
        </div>
        </div>
	</div>

</div>









<Footer/>


</div>
</PageTransition>
)

