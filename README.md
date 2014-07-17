## About

This is a codebase that will allow energy.gov users to quickly get started developing new graphics and maps. By cloning this repo, you can immidiately begin coding. 

## Dependencies
Download and install [Jekyll](http://jekyllrb.com/)

## Setup

1. Clone the repo:

`git clone https://github.com/energyapps/app_frame.git`

2. Rename the folder to your project name
3. On the [EnergyApps Github group](https://github.com/energyapps) create and name a new project repo.
4. Change remote URL to new repo:

`git remote -v` List all remote urls

`git remote set-url origin https://github.com/energyapps/NEW-REPO-NAME.git` -changes the remote url to your new URL

5. Push to this new repo

`git push -u origin master`

6. Begin work in the `index.html` file.
7. Build the Jekyll _site/ folder by running `jekyll build`
8. Run the jekyll server by running `jekyll serve`. You can now see your page at `http://localhost:4000/`

## Contents

1.	HTML
	* default.html
		- This is the HTML testing template for local development.
		- This is a very rough cannibalization of the DOM elements in energy.gov/maps element.
		- Eventually we may be able to auto merge the JS, DOM, CSS into this using jekyll to create static views of our projects in development.
	* index.html
		- Working index that combines all of the following markup, js, and css files. Find it at [energyapps.github.com/budget_production](energyapps.github.com/budget_production)
	* markup.html
		- Markup that would be pasted in the maps content type, i.e. anything that goes within the "map" frame.
2. JS
	* Dependent Libraries (These already are added automatically into the maps content type through the dropdown menu)
		- currently empty
	* Data.js
		- Data for the map in json objects. This would be added to the maps content type.
	* Script
		- script that executes all commands on graphic. This would be added to the maps content type.
3. CSS
	* style.css
		- custom css to be added to map. CSS that would be added to the maps content type.
	* links to external, master energy.gov css styles
		- note these break often
	* master_style.css
		- A static copy of the above as a fallback when the energy.gov links break.

## Needs/Ideal Work flow

	- You will create your content in markup.html, data.js, script.js, and style.css.
	- These files will then be merged into the default.html using Jekyll pages.
	

## Notes

Public Domain