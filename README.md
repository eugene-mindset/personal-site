# personal-site

Making a website to act as an online resume/portfolio. Located at [here](https://eugene-mindset.github.io/personal-site) for now.

## Goals

Useful checkpoints for me to follow.

- [X] Finish the mobile version of site.
- [X] Preview this on your phone. Might require to use some basic method of
hosting the site.

## Technologies

I used the powerful CSS library Less v3.11.1 to give me more power in structuring my CSS and
allowing a more 'programmatic' approach to creating the design. I compile the .less files to .css
by using the Less compiler, which is installed through npm. To compile the files, I simply:

1. Locate the root of repo
1. Enter the command ```lessc ./css/main.less ./css/index.css```

I am also using JQuery v3.5.1 to handle functionality and some of the visual design that
requires more than just CSS.

## Log

Just me and my thoughts.

## 21 Jan 27

Added a hobbies section (WIP). Working on each section to give it more personality, currently on skills.

- [ ] Make menu links more obvious that they are menu links. Maybe have the surrounding text of the menu fade in a bit after. #7
- [ ] Add some interesting way of conveying the timelines of items. Maybe a drop down menu kind of thing or have a line running through the dates.
- [ ] Have relevant skills contain projects subsections
- [ ] Make it so some of this information can be loaded from a JSON file.
- [ ] Refactor CSS code to better structure properties and make it apparent what things should do what. #8
- [ ] Refactor JavaScript code to make it clear what certain blocks are doing. Make it more configurable. #9
- [ ] Cleanup HTML
- [ ] Provide an icon for page

### 21 Jan 11

Redoing the design of the site. Almost finished with the mobile design but need to fix a couple of things:

- [X] Fix color transition. It just needs to fade out and then adjust the content and then change color.
- [X] Center menu only on home page.
- [X] Rework the centering of the menu to not use top.

### 20 July 11

...

### 20 June 21

I've recently recommited myself to working on this, and I've pretty much reset the design after not
liking my initial vision of it. As well, I was trying to build the mobile and desktop vesrions of
the site up at the same time, so I restarted my progress with focusing on mobile design of the site
first.
p
