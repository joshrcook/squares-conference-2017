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
Schedule:
- - Session: Registration & Coffee
- - Workshop: 'Prototyping: Beyond The Wireframe'
  - Workshop: 'Prototyping: Beyond The Wireframe'
- - Workshop: 'Prototyping: Beyond The Wireframe'
layout: default
---

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
				{% assign schedule_incrementer = 1 %}
				{% if day == "Wednesday" %}
					<div class="schedule-row">
						<div class="schedule-time ta-right">
							<h2 class="titles">{{ schedule_item.Date | date: "%I:%M" }}<br><span>{{ schedule_item.Date | date: "%p" | downcase }}</span></h2>	
						</div>
						<div class="schedule-content">
							{% case schedule_item.Type %}
								{% when "Workshop" %}
									{% include schedule_workshop.html %}
								{% when "Panel" %}
									{% include schedule_panel.html %}
								{% when "Party" %}
									{% include schedule_party.html %}
								{% when "Session" %}
									{% include schedule_session.html %}
								{% else %}
									{% include schedule_na.html %}
							{% endcase %}
						</div>
						<div class="push"></div>
					</div>
				{% endif %}
			{% endfor %}

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">08:00<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Registration &amp; Coffee</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">08:30<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track I - 1.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track II - 3.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">10:30<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track I - 1.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">12:00<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Lunch</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">01:30<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track I - 1.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track II - 3.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">03:30<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-panel">
						<div class="schedule-avatar">
							<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
						</div>
						<div class="schedule-meta">
							<h3 class="schedule-type">Track I - 1.5 hrs</h3>
							<h2 class="titles">Michael Wilson</h2>
							<h4 class="job-title">designer at Invision</h4>
							<hr class="marg-b-30 marg-t-30 divider ta-left" />
							<h5>Prototyping: Beyond The Wireframe</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
						</div>
						<div class="push"></div>
					</div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">07:30<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Parties</h3>
						<h2 class="titles black">Opening Mixer</h2>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Back Porch Tavern &amp; Grill</h5>
						<p>210 N. Main St.<br />Grapevine, TX 76501</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
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
			
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">08:00<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Registration &amp; Coffee</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">09:00<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Kickoff Day I</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">09:15<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session I</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">10:15<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session II</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">10:55<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">30 minute break</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">11:25<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session III</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">12:05<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">2 hour lunch</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">02:15<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Panel 1</h3>
						<h2 class="titles red">Panel I</h2>
						<h4 class="job-title">ismael burciaga, travis gates, michael willburn, stephanie henderson, gabriel peters, steven hall</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<div class="schedule-panels">
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
						</div>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">03:15<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session IV</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">03:55<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">30 minute break</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">04:25<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session V</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">07:30<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Parties</h3>
						<h2 class="titles black">After Party</h2>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Delaney Vineyards</h5>
						<p>2000 Champagne Blvd<br />Grapevine, TX 76501</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
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
			
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">08:00<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Coffee</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">09:00<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">Kickoff Day II</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">09:15<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session I</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">10:15<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session II</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">10:55<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">30 minute break</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">11:25<br><span>am</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session III</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">12:05<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">2 hour lunch</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">02:15<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Panel 1I</h3>
						<h2 class="titles red">Panel II</h2>
						<h4 class="job-title">ismael burciaga, travis gates, michael willburn, stephanie henderson, gabriel peters, steven hall</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<div class="schedule-panels">
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
							<img src="/assets/images/speaker-red.jpg" alt="Speaker Name"  />
						</div>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">03:15<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session IV</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">03:55<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
					</div>
					<div class="schedule-meta no-description">
						<h2 class="titles">30 minute break</h2>
					</div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">04:25<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Session V</h3>
						<h2 class="titles">Michael Wilson</h2>
						<h4 class="job-title">designer at Invision</h4>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Prototyping: Beyond The Wireframe</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo ornare leo porta dictum. Phasellus ornare nunc quis dignissim luctus. Nunc iaculis lorem libero, quis ornare lorem pretium eu. Etiam sit amet egestas augue, quis placerat nisi. Pellentesque sagittis non tortor nec sodales. Nam eu enim mauris. Phasellus viverra, ex a pellentesque lacinia, urna mauris dignissim erat,</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>

			<div class="schedule-row">
				<div class="schedule-time ta-right">
					<h2 class="titles">07:30<br><span>pm</span></h2>	
				</div>
				<div class="schedule-content">
					<div class="schedule-avatar">
						<img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name"  />
					</div>
					<div class="schedule-meta">
						<h3 class="schedule-type">Parties</h3>
						<h2 class="titles black">After Party</h2>
						<hr class="marg-b-30 marg-t-30 divider ta-left" />
						<h5>Delaney Vineyards</h5>
						<p>2000 Champagne Blvd<br />Grapevine, TX 76501</p>
					</div>
					<div class="push"></div>
				</div>
				<div class="push"></div>
			</div>
			
		</div>
		<div class="push"></div>
	</div>
	<div class="push"></div>
</div>