<p align="center">
    <img src="https://troglio.com/img/troglio-logo.png" width="200" height="200" alt="Troglio" />
</p>
<br />

# Preact-static starter for troglio

This project is an example to start building websites with cool techs like:
- **[React-static](https://github.com/nozzle/react-static):** to generate *real* static pages at build time. Good for SEO, neat to work with.
- **[Preact](https://github.com/developit/preact):** as a way lighter alternative to React
- **[Less](http://lesscss.org/):** to get power of mixins, nesting styles etc...
- **[CSS Modules](https://github.com/css-modules/css-modules):** to isolate style scope per component (don't overthink about class names...)
- **[Webpack](https://webpack.js.org/):** to carry annoying jobs like linting, minifying and bundling everything.


# Get started

Just clone this project into a new repo of your own. Then go to [Trello](trello.com), open a new board, and add the power up **troglio** to it (*hint: if you are an advanced Trello user, you can even add the Custom Fields power up in combination with troglio*)

In the upper right corner, click the "Get started with Troglio", and follow the steps to add the freshly cloned repo as destination.

Done !

Now you can start adding cards, putting content, collaborating with people... when you click the "Publish !" button, the file at `troglio/data.json` will be updated with fresh content.

The update is an actual `commit` to your repo meaning you can even trigger webhooks events to re-build your site with new data.

We recommend using [Netlify](netlify.com) for this specific step, as it is fast and really robust, plus you get CDN and SSL certificate out of the box...

So connect to Netlify and, similar to the way you chose your destination repo in *troglio*, just select it again in Netlify.
When prompted for build commands, put this: `npm run build` and the output is `public`.

Done !
Now you've just setup the following reaction chain:
1. user writes and organizes content in Trello
2. user "Publish !" content from Trello
3. troglio sends new formated pages and config to your git repo into `trello/data.json`
4. git sends a signal to alert Netlify that a new commit just happened 
5. Netlify immediately starts building the site with new data
6. React-static creates actual HTML pages out the content
7. Netlify invalidate cache on their CDN, and publishes new html pages to the world :)
8. (bonus) everybody is happy. Eventually.

# Modifying

Obviously, this is a starter, so you can just clone this repo to create your own website/app.

Everything has been done to disconnect `theme` from actual backend necessary mechanics. So, essentially, you should be able to erase all the `themes/blank` folder and start a new theme from scratch.
Here are some inteligible concepts you should keep in mind before erasing everything:
1. `src/App.js` contains the `troglio preview` universal logic redirecting everything to one component located at `src/components/all.js`. This tandem should probably remain as it works smoothly and makes some magic happen for the user when they want to see a preview of their site.
2. Keep in mind that `src/components/all.js` is the entry point and it looks for `Templates` and `Layouts` of your theme. So, when replacing `themes/blank` with a new theme, one should remember to also reference new themes `Templates` and `Layouts` into `src/components/all.js`

That should probably be it, once you correctly referenced your themes' `Layouts` and `Templates` into `src/components/all.js`,you should be able to start your new theme using `react` easily.

# Layouts and Templates

You can have as many `layouts` and `templates` with the names you want. However, it is important to remind some troglio defaults.

#### Templates

Troglio expects `home`, `single`, `list`, `page` as default templates names. They correspond to what you expect, `page` being the fallback template if something goes wrong (user selects inexisting template...). `single` is then the real default to whatever unique cards in Trello. `list` is used for all cards with name `__index` and finally `home` is a special template for the unique homepage.

Remind that these will most probably be used one day or another... so just rely on those names first, then add new templates on top if necessary.


#### Layouts

`Layouts` defines the shell of any page. It is common to see `header` and `footer` there, but also common `css` properties should be defined here (font, grids, colors etc...).
Troglio expects at least one default `layout` named... `default`. As simple as that. So, like `templates`, just start with one layout exported as `default` then add others on top of it if necessary.
Remember that within layouts, will come `templates`. So do not forget to have a `props.children` as a placeholder for templates.



