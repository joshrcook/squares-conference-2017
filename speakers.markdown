---
title: Speakers
date: 2016-08-03 21:04:00 -04:00
position: 1
SEO:
  Title: Speakers - Squares Conference
Body Class: speakers
Hero Text: Speakers<br><span>&amp; Panelists
Hero Image: "/assets/images/hero-speakers.jpg"
layout: default
---

<div class="home-speakers-wrap pad-tb-180 relative">
<div class="section home-speakers page-speakers relative">
<h2 class="small-titles red rotate">Speakers</h2>
{% assign speakers = site.speakers | sort: "position" %}
{% for speaker in speakers %}
<div class="panel speaker-panel
{% cycle 'big', 'second', 'last', '', 'last' %}
">
<div class="speaker-image relative">
<div class="speaker-links">
<a href="{{ speaker\['Website URL'\] }}" target="_blank" class="btn_website"><img src="/assets/images/icon-website.png" alt="Website" /></a>
<a href="{{ speaker\['Twitter URL'\] }}" target="_blank" class="btn_twitter"><img src="/assets/images/icon-twitter.png" alt="Twitter" /></a>
</div>

                    {% assign is_red = forloop.index0 | modulo: 5 %}
                    {% if is_red == 0 %}
                        <img src="/assets/images/speaker-red.jpg" alt="Speaker Name" class="avatar" />
                    {% else %}
                        <img src="/assets/images/speaker-placeholder.jpg" alt="Speaker Name" class="avatar" />
                    {% endif %}
                </div>
                <h2>{{ speaker.title }}</h2>
                <h3>{{ speaker['Job Title'] }}</h3>
            </div>
        {% endfor %}
        <div class="push"></div>
    </div>
    <div class="square-border side-right grey"></div>

</div>

<div class="panelists bg-grey pad-tb-180">
<div class="section">
<div class="left ta-right">
<h2 class="small-titles">Panel I</h2>
<div class="quote ta-right marg-t-180">
<h2>Sweat the small stuff. Care about the small details in design.</h2>
<h3 class="small">– joshua sortino,<br /><span>head of design Pivotus Ventures<br />#squares2016</span></h3>
</div>
</div>
<div class="right">
{% assign panel_1 = site.panelists | where: "Panel", "Panel 1" %}
{% for panelist in panel_1 %}
<div class="panel speaker-panel
{% cycle '', '', 'last' %}
">
<div class="speaker-image relative">
<div class="speaker-links">
<a href="{{ panelist\['Website URL'\] }}" target="_blank" class="btn_website"><img src="/assets/images/icon-website.png" alt="Website" /></a>
<a href="{{ panelist\['Twitter URL'\] }}" target="_blank" class="btn_twitter"><img src="/assets/images/icon-twitter.png" alt="Twitter" /></a>
</div>
<img src="{{ panelist\['Red Image'\] }}" alt="{{ panelist.title }}" class="avatar" />
</div>
<h2>{{ panelist.title }}</h2>
<h3>{{ panelist\['Job Title'\] }}</h3>
</div>
{% endfor %}
<div class="push"></div>
</div>
<div class="push"></div>
</div>
</div>

<div class="panelists bg-white pad-tb-180">
<div class="section">
<div class="left ta-right">
<h2 class="small-titles">Panel II</h2>
<div class="quote ta-right marg-t-180">
<h2>Tell a story that your customer can see themselves in — that's what is powerful.</h2>
<h3 class="small">– chris lema,<br /><span>cto & chief strategist at Crowd Favorite<br />#squares2016</span></h3>
</div>
</div>
<div class="right">
{% assign panel_2 = site.panelists | where: "Panel", "Panel 2" %}
{% for panelist in panel_2 %}
<div class="panel speaker-panel
{% cycle '', '', 'last' %}
">
<div class="speaker-image relative">
<div class="speaker-links">
<a href="{{ panelist\['Website URL'\] }}" target="_blank" class="btn_website"><img src="/assets/images/icon-website.png" alt="Website" /></a>
<a href="{{ panelist\['Twitter URL'\] }}" target="_blank" class="btn_twitter"><img src="/assets/images/icon-twitter.png" alt="Twitter" /></a>
</div>
<img src="{{ panelist\['Red Image'\] }}" alt="{{ panelist.title }}" class="avatar" />
</div>
<h2>{{ panelist.title }}</h2>
<h3>{{ panelist\['Job Title'\] }}</h3>
</div>
{% endfor %}
<div class="push"></div>
</div>
<div class="push"></div>
</div>
</div>

<div class="double relative height-reset">
<div class="left bg-image relative">
<h5 class="corner-name ta-right">Dave Onkels<br/><span>Squares Emcee</span></h5>
<div class="speaker-image relative">
<div class="speaker-links">
<a href="http://ovenbits.com" target="_blank" class="btn_website"><img src="/assets/images/icon-website.png" alt="Website" /></a>
<a href="http://twitter.com/daveonkels" target="_blank" class="btn_twitter"><img src="/assets/images/icon-twitter.png" alt="Twitter" /></a>
</div>
<img src="/assets/images/dave-onkels.jpg" alt="Dave Onkels" class="avatar" />
</div>
</div>
<div class="right relative">
<h6 class="rotate-right">Photo by Cory Hale</h6>
<img src="/assets/images/crowd-1.jpg" alt="Squares Crowd" />
</div>
<div class="push"></div>
</div>