import React from 'react';
import Style1 from './Style1.css';
import sample from '../img/cover.png';
import tick from '../img/tdlogo.png';
import plane from '../img/plane.png';
import download from '../img/download.png';
import target from '../img/target.png';
import arrow from '../img/arrow.png';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import four from '../img/four.png';
import c1 from '../img/stat-box-1.webp';
import c2 from '../img/stat-box-2.webp';
import c3 from '../img/stat-box-3.webp';
import temp from '../img/templates.webp';
import insp from '../img/inspiration.webp';
import feat from '../img/features.webp';
import quiz from '../img/prod-quiz.webp';



const Landing = () => {
  return (
    <div class='landing'>
    <nav style={{background:'rgba(128, 128, 128, 0.054)'}} class="navbar navbar-expand-lg navbar-light  p-3">
    <div class="container-fluid">
      <a class="navbar-brand " href="#"><img src={tick} id='tick'></img><p class='animate-charcter' style={{display:'inline',fontfamily:'Chakra Petch',fontWeight:'bold',color:'#004687',paddingLeft:'.5rem'}}>SwiftTick</p></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-10">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#mybig " style={{color:'#004687'}}>Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'#144687'}}>Pro-User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/landing" style={{color:'#004687'}}>Plan-Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<br></br>
<h1 id="quote" class='text-center'>Stay committed, stay focused!</h1>

<div class="pn">
<a href="/landing" class='text-center'><p id="buttp"><button id="mbutt" >Plan-now <img src={plane} id='plane'></img></button></p></a>
</div>
<h1 id="motto" class='text-center'>Because,your time matters!...</h1>  

<div id='promote' style={{fontFamily:'Chakra Petch'}}>
    <h2 >Gain calmness and clarity with the</h2>
    <h2 >world’s most beloved productivity app</h2>
    <p style={{color:"orange"}}>169,000+ ★★★★★ reviews on Google Play and App Store</p>
    <div class="pn">
    <a href="/landing" class='text-center'><p id="buttp"><button id="mbutt" style={{backgroundColor:'whitesmoke'}} >Plan-now <img src={plane} id='plane'></img></button></p></a>
    </div>
    <div class="pn">
    <a href="/" class='text-center'><p id="buttp"><button id="mbutt" style={{border:"none ",color:'white'}}><img src={download} id='plane'></img> Download app </button></p></a>
    </div>
</div>
<div id='matching'></div>

<div id='mybig'>

    <div id='myl'>
        <div id='c1'>
        <p id='red'><img src={target} id='target'></img>  Clear your mind</p>
        <h2 id='mid'>1. The fastest way to get </h2>
        <h2 id='mid'>tasks out of your head.</h2>
        <p>Type just about anything into the task field and</p>
        <p>SwiftTick’s one-of-its-kind natural language</p>
        <p>recognition will instantly fill your to-do list.</p>
        </div><br></br><br></br><br></br>
        <div id='c1'>
        <p id='red'><img src={target} id='target'></img>  Focus on what’s important<img src={arrow} id='arrow'></img></p>
        <h2 id='mid'>2. Reach that mental clarity </h2>
        <h2 id='mid'>you’ve been longing for.</h2>
        <p>Your tasks are automatically sorted into Today,</p>
        <p>Upcoming, and custom Filter views to help you</p>
        <p>prioritize your most important work.</p>
        </div><br></br><br></br><br></br>
        <div id='c1'>
        <p id='red'><img src={target} id='target'></img>  Get it all done</p>
        <h2 id='mid'>3. Where work and personal </h2>
        <h2 id='mid'>tasks can finally coexist.</h2>
        <p>Tons of tasks, just one app. With workspaces,</p>
        <p>your personal, work, and team tasks can all live</p>
        <p>harmoniously under the same roof.</p>
        </div>
    </div>
    <div id='myr' >
      <img src={sample} class='card' id='samp'></img>
    </div>    
</div>
<div id='mind'  >
      <h1>"SwiftTick makes it easy to go as</h1>
      <h1>simple or as complex as you want”</h1>
</div>

<div id='mm'>

<main  id='mm'>
	<ul id="cards">
		<li class="card" id="card_1" style={{border:'none'}}>
			<div class="card__content">
				<img src={one} id='cardimg'></img>
			</div>
		</li>
		<li class="card" id="card_2" style={{border:'none'}}>
			<div class="card__content">
      <img src={two} id='cardimg'></img>
			</div>
		</li>
		<li class="card" id="card_3" style={{border:'none'}}>
			<div class="card__content">
      <img src={three} id='cardimg'></img>
			</div>
		</li>
		<li class="card" id="card_4" style={{border:'none'}}>
			<div class="card__content">
      <img src={four} id='cardimg'></img>
			</div>
		</li>
	</ul>
</main>

</div>

<div id='big'>
<div id='small2'>
<div class="carousel-wrapper">
<div class="carousel-container">
  <div class="carousel">
    <div class="image-one"><img src={c1}></img><p class='text-center'>5 million+ downloads</p></div>
    <div class="image-two"><img src={c2}></img><p class='text-center'>1 billion+ tasks completed</p></div>
    <div class="image-three"><img src={c3}></img><p class='text-center'>100+ countries world wide</p></div>
    <div class="image-four"><img src={temp}></img><p class='text-center'>Template gallery </p></div>
    <div class="image-five"><img src={feat}></img><p class='text-center'>Features</p></div>
    <div class="image-six"><img src={insp}></img><p class='text-center'>Insipration Hub</p></div>
    <div class="image-seven"><img src={quiz}></img><p class='text-center'>productivity Quiz</p></div>
  </div>
</div>
</div>
</div>
    <div id='small1'>
    <div id='small1divv'>
    <p id='red'>In it for the long haul</p>
    <h3 id='mid'>A task manager you </h3>
    <h3 id='mid'>can trust for life.</h3>
    <p>We’ve been building SwiftTick for 2 months and 16</p>
    <p>days. Rest assured that we’ll never sell out to the</p>
    <p>highest bidder.</p>
    </div>
    </div>
   
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&family=Aladin&family=Chakra+Petch:ital,wght@1,300&display=swap');
</style>
    </div>
    
  )
}

export default Landing
