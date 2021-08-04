import React, {Component} from 'react';
import { Link } from "gatsby"
import form from './formData'


class Footer extends Component {
	state = {
	  copied: true
	}
	copyTextToClipboard = () => {
	  const context = this.textArea;
	  context.select();
	  document.execCommand("copy");
	  // Change state to false
	  this.setState({ copied: !this.state.copied });
	  // Change state after 3 seconds
	  setTimeout(() => {
		return this.setState({copied: !this.state.copied })},
		1000)
	}
	render(){
	  // Pulling from the state
	  const { copied } = this.state;


	  return(

		<div>
			<div className="footer_bg">

<div className="row align-center" id="contactFormText">
	<div className="small-11 columns padding10_top">
	  <h2 className="">Hablamos ?</h2>
	                 <div className="skills_underline_orange"></div>
	                <p className="">Puedes seguirme en redes sociales, donde publico bastante información de gran valor totalmente
					<span className="skills_highlight_contacto"> GRATIS</span>, y colaboro con grandes profesionales de la maternidad también volcados en la vivencia de una maternidad y paternidad consciente. </p>
	                <p>Por favor, rellena el formulario o contacta conmigo directamente por email o mediante redes sociales.</p>
					<p>Gracias y hasta pronto !</p>
	</div>

	<div className="small-12 medium-6 columns">
		<form action="https://formspree.io/f/xbjqaqdv" name="contactForm" id="contactForm" method="post" >
			<label for="email"><span className="label-form">Tu email...</span></label>
			<input className="_gotcha" type="text" name="_gotcha"/>
			<input name="_replyto" id="email" type="email" name="Email" required/>
			<label for="tipo_consulta" className="padding5_bottom">Tipo de consulta:</label>
				<select name="tipo-consulta" id="tipo-consulta">
					<option value="domicilio_matrona">Matrona domicilio</option>
					<option value="domicilio_postparto">Visita postparto domicilio</option>
					<option value="domicilio_lactancia">Lactancia domicilio</option>
					<option value="consulta_online_embarazo">Consulta online embarazo</option>
					<option value="consulta_online_preparacion_parto">Consulta online preparación al parto</option>
					<option value="consulta_online_podromos">Consulta online podromos</option>
					<option value="consulta_online_postparto">Consulta online postparto</option>
					<option value="consulta_online_lactancia">Consulta online lactancia</option>
					<option value="consulta_online_recien_nacido">Consulta online recién nacido</option>
				</select>
			 <label className="label-form padding5_top" for="message"><span>Cuéntame más...</span></label>
			<textarea id="message" className="padding5_top" name="message" cols="1" rows="6"></textarea>
			<input id='send-button' className="submitBtn" type="submit" value="Enviar"/>
		</form>



	</div>

<div className="small-12 medium-6 columns mtl">

	<div className="row align-center">
		<div className="small-12 padding5_bottom">
			<div className="row">
				<div className="small-1 social_icon">
					<button className="ButtonCopy" onClick={this.copyTextToClipboard}>
					<img className="icon-svg svgicon-copy" src={require('../images/svgicon-copy.svg')} alt="@matronagoretti instagram"/>
					<span>{copied ? " " : "Copiado!"}</span>
					</button>
				</div>
				<div className="small-10">
					<textarea
					onClick={this.copyTextToClipboard}
					readOnly
					ref={(textarea) => this.textArea = textarea}
					value="gorettimatrona@gmail.com"
					className="TextAreaCopy"
					/>
				</div>
			</div>
		</div>
		<div className="small-12 padding5_bottom">
		<Link to="https://www.instagram.com/matronagoretti/" target="_blank" rel="noopener">
			<div className="row">
					<div className="small-1 social_icon">
						<img className="icon-svg svgicon-instagram" src={require('../images/svgicon-instagram.svg')} alt="@matronagoretti instagram"/>
					</div>
					<div className="small-10">
						@matronagoretti
					</div>
			</div>
		</Link>
		</div>
		<div className="small-12 padding5_bottom">
			<Link to="https://www.facebook.com/gorettimatrona/" target="_blank" rel="noopener">
			<div className="row">
					<div className="small-1 social_icon">
						<img className="icon-svg svgicon-facebook" src={require('../images/svgicon-facebook.svg')} alt="@gorettimatrona facebook"/>
					</div>
					<div className="small-10">
						@matronagoretti
					</div>
			</div>
			</Link>
		</div>
		<div className="small-12">
			<p>Contactar conmigo por Whatsapp</p>
			<Link to="https://api.whatsapp.com/send?phone=34622870298" target="_blank" rel="noopener">
				<div className="row">
					<div className="small-1 social_icon">
				<img className="icon-svg svgicon-whatsapp" src={require('../images/svgicon-whatsapp.svg')} alt=" whatsapp"/>
				</div>
					<div className="small-10">
					+34 622 87 02 98
					</div>
				</div>
			</Link>
		</div>
	</div>
</div>
</div>




<footer>
    <div className="row large-unstack align-center">
      <div className="column">
        <small>&copy; 2021 gomatrona.com</small>
      </div>
    </div>
</footer>


    </div>

		</div>
	  )
	}
  };
  export default Footer





