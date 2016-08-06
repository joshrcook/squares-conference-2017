---
title: Home
date: 2016-08-04 02:50:00 Z
permalink: "/"
Speakers:
- Ismael Burciaga
- Ismael Burciaga
- Ismael Burciaga
- Ismael Burciaga
layout: default
---

<div class="what-is-squares">
	<div class="right relative">
		<div class="what-right pad-80">
			<p><b>What is Squares?</b> It's a three-day gathering of techies from around the world. Learn from leaders, designers and innovators in both the non-profit and tech community. It's a great place to mingle with others who share the same passions you do.</p>	
			<h2 class="titles">design, ux, front-end, development, and products</h2>
		</div>
		<div class="push"></div>
	</div>
	<div class="left relative">
		<div class="what-left pad-r-80">
			<div class="quote ta-right marg-b-180">
				<h2>The best user experience assumes every interface is the one within reach.</h2>
				<h3 class="small">– cameron moll,<br /><span>founder of Authentic Jobs<br />#squares2016</span></h3>
			</div>
			<div class="recap-wrap">
				<h3>2016 Recap</h3>
				<a href="https://vimeo.com/168680241" class="popup-video"><img src="http://squaresconference.com/2017/images/btn-play.png" alt="Play 2016 Recap Video" /></a>
			</div>
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>

<div class="home-speakers-wrap pad-tb-180 relative">
	<div class="section home-speakers relative">
		<h2 class="small-titles red rotate">Speakers</h2>
		{% for featured_speaker in page.Speakers %}
			{% assign single_speaker = site.speakers | where: "title", featured_speaker %}
			{% for speaker in single_speaker %}
				<div class="panel speaker-panel {% cycle '', '', '', 'last' %}">
					<div class="speaker-image relative">
						<div class="speaker-links">
							<a href="{{ speaker['Website URL'] }}" target="_blank" class="btn_website"><img src="http://squaresconference.com/2017/images/icon-website.png" alt="Website" /></a>
							<a href="{{ speaker['Twitter URL'] }}" target="_blank" class="btn_twitter"><img src="http://squaresconference.com/2017/images/icon-twitter.png" alt="Twitter" /></a>
						</div>
						<img src="{{ speaker['Featured Image'] }}" alt="{{ speaker.title }}" class="avatar" />
					</div>
					<h2>{{ speaker.title }}</h2>
					<h3>{{ speaker['Job Title'] }}</h3>
				</div>
			{% endfor %}
		{% endfor %}
		<div class="push"></div>
		<h3 class="small-titles grey rotate-right"><a href="http://squaresconference.com/2017/speakers.php">View all speakers</a></h3>
	</div>
	<div class="square-border side-right grey"></div>
</div>

<div class="double relative">
	<div class="left bg-image relative" style="background-image: url(http://squaresconference.com/2017/images/bg-kim.jpg);">
		<h6 class="rotate">Photo by Cory Hale</h6>
	</div>
	<div class="right relative">
		<div class="absolute bs pad-120">
			<div class="quote marg-b-180">
				<h2>Process is what leads to your outcomes.</h2>
				<h3 class="small white">– kim bost, <span>product designer at Dropbox • #squares2016</span></h3>
			</div>
			<div class="price">
				<div class="starting-price">
					<h4>starting at</h4>
					<h5>$195</h5>
				</div>
				<a href="http://squaresconference.com/register" target="_blank" class="button">Register Today</a>
				<div class="push"></div>
			</div>
		</div>
	</div>
	<div class="push"></div>
</div>