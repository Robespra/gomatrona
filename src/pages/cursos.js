import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'
let pathPrefix = `/`



export default () => (
    <PageTransition>
<div>
<Helmet>
      <meta charSet="utf-8" />
      <title>Goretti matrona - Cursos y talleres</title>
      <meta name="description" content="Goretti Martel matrona en las palmas de gran canaria. Consultas online y visitas a domicilio. Embarazo, parto, postparto, lactancia y crianza"/>
      <link rel="canonical" href="https://gorettimatrona.com/cursos" />
    </Helmet>

<Header/>

<div className="row align-middle padding10_top">
	<div className="small-12 columns">
    <div className="row align-center">
    <div className="small-11 columns">
    <h2 className="hero_cases">👩🏼‍🏫 Cursos y talleres</h2>
        <h4 className="padding3_bottom">PREPARACION AL PARTO Y POSTPARTO.</h4>
        <h4 className="padding3_bottom">MATERNIDAD Y PATERNIDAD CONSCIENTE Y GOZOSA.
        </h4>
        <h4 className="padding3_bottom"><span className="skills_highlight"> “A tu MANERA” </span>
        </h4>
        <h5 className="padding3_top">Objetivo del curso</h5>
        <p>
	Que durante el embarazo se conozca los cambios que van a tener lugar a nivel físico, psicológico y emocional para afrontar de manera segura la maternidad y paternidad.
	Conocer de antemano las distintas opciones y herramientas que nos harán falta dependiendo del momento que esté viviendo; en la recta final del embarazo, en el parto, postparto, lactancia y crianza.
Ambiente ideal para plantear las dudas e inquietudes,de la embarazada y su pareja.</p>



<h5 className="padding3_top">1 PREPARACIÓN AL PARTO</h5>
<ul>
<li>SESIÓN 1 Conoce tu pelvis</li>
<li>SESION 2 Fisiología del parto. Parto I</li>
<li>SESION 3 El Parto II</li>
    </ul>

    <h5 className="padding3_top">2 PREPARACIÓN AL POSTPARTO</h5>
    <ul>
	<li>SESION 4 Puerperio</li>
	<li>SESION 5 Lactancia</li>
	<li>SESION 6 Cuidados del Recién Nacido</li>
    </ul>


    <h5 className="padding3_top">TALLERES ONLINE POSTPARTO</h5>
    <ol>
    <li>Crianza y apego</li>
    <li>Recuperación postparto</li>
    <li>Porteo</li>
    <li>Alimentación BLW</li>
</ol>

<h4 className="padding3_bottom">Curso de preparación para el nacimiento</h4>
<ul>
<li>Consta de 5 clases de 2 horas de duración. Se pueden realizar clases sueltas o el curso completo</li>
<li>El parto normal. Fisiología del parto, etapas (pródromos, dilatación, expulsivo, alumbramiento). Cómo reconocer que el parto ha comenzado, Motivos de
alarma para acudir al hospital. Posiciones que favorecen el progreso del parto</li>
<li>Manejo del dolor en el parto. Métodos no farmacológicos de alivio. Inhibidores y estimuladores del dolor. Epidural (efectos secundarios, contraindicaciones)</li>
<li>El parto intervenido. Inducción. Intervenciones durante el parto (rotura de bolsa amniótica, oxitocina sintética, fórceps, cesárea etc.)</li>
<li>Lactancia materna, artificial y mixta. Manejo de las posibles dificultades</li>
<li>Cuidados físicos y emocionales durante el postparto. Cuidados del bebé. Crianza con apego</li>
</ul>





(FOTO)
<p>Servicios de calidad, personalizados y sin salir de casa. Adaptados a tus necesidades en cada momento, para una vivencia de la maternidad y paternidad de manera consciente y disfrutada desde el principio, a tu manera. Contacta con nosotros para más información
</p>

    </div>
        <div className="small-5 columns border-skills"></div>
        <div className="small-5 columns"></div>
        <div className="small-11 columns">

        </div>
        </div>
	    <h1 className="hidden-h1">uxpages ux pages case studies</h1>

    </div>
</div>



<Footer/>


</div>
</PageTransition>
)

