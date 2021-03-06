---
title: About
date: 2016-08-06 15:11:00 -04:00
position: 4
SEO:
  Title: About - Squares Conference
Body Class: about
Hero Text: About<br><span>&amp; Team
Hero Image: "/assets/images/hero-about.jpg"
Is In Menu: true
layout: default
---

<div class="what-is-squares pad-b-180">
	<div class="right relative bg-white">
		<div class="what-right pad-t-180 marg-t-30">
			<h2 class="titles">design, ux, front-end, development, and products</h2>
			
			<h3 class="small-titles red marg-t-120">What is Squares?</h3>
			<div class="about-content">
				<div class="left height-reset">
					<p>Squares Conference is a three-day design and dev conference by Circles Co. The conference brings designers and makers from across the globe together for the dual purpose of learning from world-changing thinkers and connecting with one another. The conference creates a space where you will be challenged to push yourself in the creative process, inspired by others who are thriving in the industry.</p>
				</div>
				<div class="right height-reset">
					<p>You'll be empowered with resources and practical tips to help you pursue excellence. At the end of the three-day experience you will leave with a fresh spark of passion, filled to the brim with innovative ideas, and with a community of Circle Makers who are ready to create and do life with you.</p>	
				</div>
			</div>
		</div>
		<div class="push"></div>
	</div>
	<div class="left relative marg-b-30">
		<div class="what-left pad-r-80">
			<div class="quote ta-right marg-b-180">
				<h2>a HUGE thanks to Squares! It is such an amazing event</h2>
				<h3 class="small">– andrew norcross,<br /><span>lead dev at Reaktiv Studios<br />#squares2016</span></h3>
			</div>
			<div class="recap-wrap">
				<h3>2016 Recap</h3>
				<a href="https://vimeo.com/168680241" class="popup-video"><img src="/assets/images/btn-play.png" alt="Play 2016 Recap Video" /></a>
			</div>
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>

<div class="section">
	<img src="/assets/images/why-come.png" alt="Why come to Squares" />
</div>

<div class="double height-reset relative why-come-wrap">
	<div class="left bg-image relative bs pad-120" style="background-image: url(/assets/images/bg-about-red.jpg);">
		<hr class="marg-b-40 divider black ta-left" />
		<div class="why-come">
			<h2>01</h2>
			<div class="why-come-content">
				<h3>Self-Improvement Guaranteed</h3>
				<p>Speakers of this year’s Squares will ensure you to add more to your knowledge and keep you updated from UX Trends and latest methodologies. These are fresh information signals that go directly to your brain receptors which stimulate you in terms of getting straight to action. This will improve results from the moment you return to the office.</p>
			</div>
			<div class="push"></div>
		</div>
		<hr class="marg-b-40 marg-t-40 black divider ta-left" />
		<div class="why-come">
			<h2>02</h2>
			<div class="why-come-content">
				<h3>Full Day Workshops</h3>
				<p>We don’t want to brag but we’re bringing highly successful corporate professionals together for full day of interactive learning sessions that will make you gain some indispensable skill sets and new tools that simplify your needs.</p>
			</div>
			<div class="push"></div>
		</div>
		<hr class="marg-b-40 marg-t-40 black divider ta-left" />
		<div class="why-come">
			<h2>03</h2>
			<div class="why-come-content">
				<h3>Shaking your Conventional Understanding</h3>
				<p>We want to shake totally your thinking pattern and show you another way which is more enlightened and more filled with solutions to your problems. So that which ever challenges you’re struggling with, our speakers will be showing you the light at the end of the tunnel. Also opportunity to discuss with our speakers during Q&A sessions are available. </p>
			</div>
			<div class="push"></div>
		</div>
		<h6 class="rotate">Photo by Cory Hale</h6>
	</div>
	<div class="right relative bs pad-120">

		<hr class="marg-b-40 divider ta-left" />
		<div class="why-come">
			<h2>04</h2>
			<div class="why-come-content">
				<h3>Examples Learned Through Experiences</h3>
				<p>Our speakers are professional designers, researchers, developers, people who work with real clients, handle major projects, confront many problems during their daily life and they are also ready to share with you how they survive from all of these stressful processes.</p>
			</div>
			<div class="push"></div>
		</div>
		<hr class="marg-b-40 marg-t-40 divider ta-left" />
		<div class="why-come">
			<h2>05</h2>
			<div class="why-come-content">
				<h3>Sharing is Caring</h3>
				<p>We’ll provide you slide decks, videos, resource lists any other information piece not just as a memory but this way you can contain your valuable information gained by Squares and also you have the possibility to share with your colleagues. But they can’t experience well enough unless they come to conference.</p>
			</div>
			<div class="push"></div>
		</div>
		<hr class="marg-b-40 marg-t-40 divider ta-left" />
		<div class="why-come">
			<h2>06</h2>
			<div class="why-come-content">
				<h3>Just One Flight Away</h3>
				<p>Squares is hosted in Istanbul, most authentic and mystic city in the world, if you haven’t been to Turkey yet, this will be the perfect opportunity for you to live, see, breathe and smell different kind of culture. In addition, we’re arranging an amazing hotel with most delicious turkish food and location where you will find many transportation options.</p>
			</div>
			<div class="push"></div>
		</div>
		
		<div class="push"></div>

	</div>
	<div class="push"></div>
</div>


<div class="home-speakers-wrap pad-tb-180 relative">
	<div class="section home-speakers relative">
		<h2 class="small-titles red rotate">The Team</h2>
		{% assign sorted_team = site.team | sort: "position" %}
		{% for team_member in sorted_team %}
			<div class="panel speaker-panel
			{% cycle 'first', 'second', '', 'last' %}
			">
				<div class="speaker-image relative">
					<a href="http://twitter.com/burciaga" target="_blank" class="btn_website"><img src="/assets/images/ismael-burciaga.jpg" alt="Ismael Burciaga" class="avatar" /></a>
					<div class="push"></div>
				</div>
				<h2>{{ team_member.title }}</h2>
				<h3>{{ team_member['Job Title'] }}</h3>
			</div>
		{% endfor %}
		<div class="push"></div>
	</div>
	<div class="square-border side-right grey"></div>
</div>

<div class="double relative">
	<div class="left bg-image relative" style="background-image: url(/assets/images/bg-about-2.jpg);">
		<h6 class="rotate">Photo by Cory Hale</h6>
	</div>
	<div class="right relative">
		<div class="absolute bs pad-120">
			<div class="quote marg-b-180">
				<h2>So what the heck are you waiting for? Snag a pass today!</h2>
			</div>
			<div class="price">
				<div class="starting-price">
					<h4>starting at</h4>
					<h5>$195</h5>
				</div>
				<a href="<?php echo $registrationURL ?>" target="_blank" class="button">Register Today</a>
				<div class="push"></div>
			</div>
		</div>
	</div>
	<div class="push"></div>
</div>