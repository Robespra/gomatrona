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

<div className="row align-center">
	<div className="small-11 columns padding10_top padding5_bottom">
	  <h2 className="">Hablamos ?</h2>
	                 <div className="skills_underline_orange"></div>
	                <p className="">My goal is to help you create great and profitable products. If you drop me a line about your work and the challenges you face I will reply with some suggestions (I always do) or spread the word to my network if needed. </p>
	                <p>Get in touch with me by filling the form below. You can also directly  <a href="https://calendly.com/uxpages/30min" target="_blank" rel="noopener" className="link_underlined"> schedule a call <span className="target_blank"></span></a></p>
					<p>Thanks for your interest !</p>
	</div>

	<div className="small-11 medium-6 columns white border-radius-left-side">
		<form action="https://formspree.io/xwnnlkqm" name="contactForm" id="contactForm" method="post" className="topBefore padding5_top" >
			<label for="email"><span className="label-form">Leave your e-mail...</span></label>
			<input className="_gotcha" type="text" name="_gotcha"/>
			<input name="_replyto" id="email" type="email" name="Email" required/>
			 <label className="label-form padding5_top" for="message"><span>Tell me a bit about your work...</span></label>
			<textarea id="message" className="" name="message" cols="1" rows="6"></textarea>

			<input id='send-button' className="submitBtn" type="submit" value="Send"/>
		</form>



	</div>

<div className="small-11 medium-5 columns orange border-radius-right-side">
	<div className="row align-center">
		<div className="small-10">
			<textarea
			 onClick={this.copyTextToClipboard}
			 readOnly
			 ref={(textarea) => this.textArea = textarea}
			 value="hola@uxpages.com"
			 className="TextAreaCopy"
		  	/>
		</div>
		<div className="small-1 Copy">



			<button className="ButtonCopy" onClick={this.copyTextToClipboard}>
			<svg xmlns="http://www.w3.org/2000/svg" class="CopyIconHover" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<rect x="8" y="8" width="12" height="12" rx="2" />
					<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
				</svg>
				{copied ? " " : "Copied!"}
			</button>
		</div>
	</div>




<Link to="#" target="_blank" rel="noopener">
<img className="icon-svg svgicon-instagram" src={require('../images/svgicon-instagram.svg')} alt="uxpages research"/>
</Link>
<Link to="https://github.com/Robespra" target="_blank" rel="noopener">
<img className="icon-svg svgicon-github" src={require('../images/svgicon-github.svg')} alt="uxpages research"/>
</Link>

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





