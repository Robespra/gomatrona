import React from 'react'

const NotFoundPage = () => (

<div className="row align-middle hero_block">
	<div className="small-12 medium-5 columns hero_pctre">
		<img src={require('../images/404.jpg')} alt="pages charly espra jeremy robertttt aqui está?"/>
	</div>
	<div className="small-12 medium-7 columns bg404">
	    <h1 className="hidden-h1">uxpages 404 page not found</h1>
	    <h2 className="hero_line">Woops, no page found 😱</h2>
        <h2 className="hero_line">You just hit a route that doesn&#39;t exist...</h2>
        <a href="https://uxpages.com" rel="noopener"><h3><span className="target_back"></span>Go back to homepage</h3></a>
    </div>
</div>

)
export default NotFoundPage
