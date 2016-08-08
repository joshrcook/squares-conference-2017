---
title: Workshops
date: 2016-08-06 01:13:00 -04:00
permalink: "/workshops"
position: 2
SEO:
  Title: Workshops - Squares Conference
Body Class: about workshops
Hero Text: Workshops<br><span>
Hero Image: "/assets/images/hero-workshops.jpg"
layout: default
---

<div class="what-is-squares pad-b-180">
	<div class="right relative bg-white">
		<div class="what-right pad-t-180">
			<h2 class="titles">our workshops</h2>
			<h3 class="small-titles red marg-t-120">Wednesday, April 27, 2017</h3>
			<div class="about-content">
					<p>Knowing the basics is not enough for you — you’re serious about making your ideas move like lightning and you want to soak in all the knowledge you can get. Perfect! The workshops were created just for you. At the Squares Workshops you’ll be able to get your hands dirty, go a little deeper, and get answers to your questions floating around in your head. You’ll walk away with practical knowledge and action steps in order to use your words to make some big waves in our world.</p>	
			</div>
		</div>
		<div class="push"></div>
	</div>
	<div class="about-left">
		<div class="what-left pad-r-80">
			<div class="quote ta-right">
				<h2>classes start at $97/class &amp; are 1.5 hrs long.</h2>
				<h3 class="small">Track II are 3.5 hrs long and cost $197/class</h3>
			</div>
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>

<div class="bg-grey-light">

	<div class="section pad-tb-180 tracks">
		<div class="left">
			<h2 class="titles marg-b-180">track I</h2>
	
			{% assign track_1_workshops = site.workshops | where: "Track", "1" %}
			{% for workshop in track_1_workshops %}
				<div class="schedule-panel">
					<div class="schedule-avatar">
						<img src="{{ workshop.Teacher['Featured Image'] }}" alt="{{ workshop.Teacher.Name }}"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">{{ workshop.Category }}</h3>
						<h2 class="titles red">{{ workshop.Teacher.Name }}</h2>
						<h4 class="job-title">{{ workshop.Teacher['Job Title'] }}</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>{{ workshop.title }}</h5>
						{{ workshop.content | markdownify }}
					</div>
					<div class="push"></div>
				</div>
			{% endfor %}
	
		</div>
		<div class="right">
			<h2 class="titles marg-b-180">track II</h2>
	
			{% assign track_2_workshops = site.workshops | where: "Track", "2" %}
			{% for workshop in track_2_workshops %}
				<div class="schedule-panel">
					<div class="schedule-avatar">
						<img src="{{ workshop.Teacher['Featured Image'] }}" alt="{{ workshop.Teacher.Name }}"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">{{ workshop.Category }}</h3>
						<h2 class="titles red">{{ workshop.Teacher.Name }}</h2>
						<h4 class="job-title">{{ workshop.Teacher['Job Title'] }}</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>{{ workshop.title }}</h5>
						{{ workshop.content | markdownify }}
					</div>
					<div class="push"></div>
				</div>
			{% endfor %}

		</div>
		<div class="push"></div>
	</div>
</div>

<div class="double relative">
	<div class="left bg-image relative" style="background-image: url({{ site.url }}/assets/images/bg-workshops.jpg);">
		<h6 class="rotate">Photo by Ismael Burciaga</h6>
	</div>
	<div class="right relative">
		<div class="absolute bs pad-120">
			<div class="quote marg-b-180">
				<h2>Workshop classes are limited so snag a pass today!</h2>
			</div>
			<div class="price">
				<div class="starting-price">
					<h4>starting at</h4>
					<h5>$97</h5>
				</div>
				<a href="{{ site['Registration URL'] }}" target="_blank" class="button">Register Today</a>
				<div class="push"></div>
			</div>
		</div>
	</div>
	<div class="push"></div>
</div>