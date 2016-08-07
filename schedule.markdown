---
title: Schedule
date: 2016-08-06 15:33:00 -04:00
permalink: "/schedule"
position: 5
SEO:
  Title: Schedule - Squares Conference
Body Class: schedule
Hero Text: Schedule
Hero Image: "/assets/images/hero-schedule.jpg"
Is In Menu: true
layout: default
---

<div class="schedule-menu">
	<a href="#divWed">wed</a>
	<a href="#divThu">thu</a>
	<a href="#divFri">fri</a>
</div>

<div class="pad-t-180 pad-b-180 schedule-wrap" id="divWed">
	<div class="left">
		<div class="schedule-left bs pad-r-100 relative">
			<h2 class="small-titles red rotate">Wednesday</h2>
			<h2 class="titles">workshops</h2>
			<h3 class="workshop-dates">April 27, 2016</h3>
			<hr class="marg-b-60 marg-t-60 divider ta-right" />
			<p class="marg-b-60 marg-t-60">grapevine convention center<br />1209 S. Main St.<br />Grapevine, TX 76051</p>
			<p class="marg-t-60">lunch provided*</p>
		</div>
		<div class="push"></div>
		<div class="pad-r-100">
			<img src="/assets/images/schedule-1.jpg" alt="Schedule" class="schedule-image" />
			<div class="schedule-left bs relative">
				<div class="quote ta-right marg-t-180">
					<h2>The best user experience assumes every interface is the one within reach.</h2>
					<h3 class="small">– cameron moll,<br /><span>founder of Authentic Jobs<br />#squares2016</span></h3>
				</div>
			</div>
			<div class="push"></div>
		</div>
	</div>
	<div class="right">
		<div class="schedule-right">
			
			{% for schedule_item in site.schedule | sort: "meta.Date" %}
				{% assign day = schedule_item.Date | date: "%A" %}
				{% if day == "Wednesday" %}
					{% include schedule_row.html %}
				{% endif %}
			{% endfor %}
			
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>



<div class="pad-t-180 pad-b-180 schedule-wrap bg-grey-light" id="divThu">
	<div class="left">
		<div class="schedule-left bs pad-r-100 relative">
			<h2 class="small-titles red rotate">Thursday</h2>
			<h2 class="titles">Day I</h2>
			<h3 class="workshop-dates">April 28, 2016</h3>
			<hr class="marg-b-60 marg-t-60 divider ta-right" />
			<p class="marg-b-60 marg-t-60">palace arts center<br />300 S. Main St.<br />Grapevine, TX 76051</p>
		</div>
		<div class="push"></div>
		<div class="pad-r-100">
			<img src="/assets/images/schedule-2.jpg" alt="Schedule" class="schedule-image" />
			<div class="schedule-left bs relative">
				<div class="quote ta-right marg-t-180">
					<h2>The best user experience assumes every interface is the one within reach.</h2>
					<h3 class="small">– cameron moll,<br /><span>founder of Authentic Jobs<br />#squares2016</span></h3>
				</div>
			</div>
			<div class="push"></div>
		</div>
	</div>
	<div class="right">
		<div class="schedule-right">
			
			{% for schedule_item in site.schedule | sort: "meta.Date" %}
				{% assign day = schedule_item.Date | date: "%A" %}
				{% if day == "Thursday" %}
					{% include schedule_row.html %}
				{% endif %}
			{% endfor %}
			
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>

<div class="pad-t-180 pad-b-180 schedule-wrap bg-white" id="divFri">
	<div class="left">
		<div class="schedule-left bs pad-r-100 relative">
			<h2 class="small-titles red rotate">Friday</h2>
			<h2 class="titles">Day II</h2>
			<h3 class="workshop-dates">April 29, 2016</h3>
			<hr class="marg-b-60 marg-t-60 divider ta-right" />
			<p class="marg-b-60 marg-t-60">palace arts center<br />300 S. Main St.<br />Grapevine, TX 76051</p>
		</div>
		<div class="push"></div>
		<div class="pad-r-100">
			<img src="/assets/images/schedule-3.jpg" alt="Schedule" class="schedule-image" />
			<div class="schedule-left bs relative">
				<div class="quote ta-right marg-t-180">
					<h2>The best user experience assumes every interface is the one within reach.</h2>
					<h3 class="small">– cameron moll,<br /><span>founder of Authentic Jobs<br />#squares2016</span></h3>
				</div>
			</div>
			<div class="push"></div>
		</div>
	</div>
	<div class="right">
		<div class="schedule-right">
			
			{% for schedule_item in site.schedule | sort: "meta.Date" %}
				{% assign day = schedule_item.Date | date: "%A" %}
				{% if day == "Friday" %}
					{% include schedule_row.html %}
				{% endif %}
			{% endfor %}
			
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>