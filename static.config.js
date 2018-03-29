import React from 'react'
import webpack from './config/webpack'

import data from "./troglio/data.json"
import appendToTree from "./utils/appendToTree"


export default {
	paths: {
		src: 'src', // The source directory. Must include an index.js entry file.
		dist: 'public', // The production output directory.
		devDist: 'public', // The development scratch directory.
		public: 'assets', // The public directory (files copied to dist during build)
	},
	// basePath: "/",
	preact: true, // we love Preact and so you should :)
	getSiteData: () => {
		return data.config
	},
	getRoutes: async () => {
		let routes = []
		data.pages.sort(function(a, b) { return a.path.length - b.path.length })
			 .map(page => {
				console.log("\nBuilding page:  ", page.path)
				appendToTree(routes, page)
			 })
		return routes
	},
	webpack,
	Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
		<Html lang="en-US">
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
		<Body>
  		{children}
		</Body>
		</Html>
	)
}
