###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "/404.html", :layout => false

###
# Assets
###

set :js_dir, 'assets/js'
set :css_dir, 'assets/css'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'

after_configuration do
  sprockets.append_path File.join "#{root}", "bower_components"
end

###
# Extensions
###

set :url_root, data.site.url
activate :search_engine_sitemap

activate :google_analytics do |ga|
  ga.anonymize_ip = true
  ga.tracking_id = data.site.ga_account
end

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.cascade  = false
  config.inline   = true
  config.ignore   = ['hacks.css']
end

# Development-specific configuration
configure :development do
	activate :livereload
end

###
# Environments
###

# Build-specific configuration
configure :build do
	# robots.txt
	activate :robots,
		:rules => [
	    {:user_agent => '*', :allow => %w(/)}
		],
		:sitemap => "#{data.site.url}/sitemap.xml"
  # cache
	activate :gzip
  activate :minify_html
  activate :cache_buster
  activate :minify_css, inline: true
  activate :minify_javascript, inline: true
  activate :imageoptim do |options|
	  options.manifest = true
	  options.skip_missing_workers = false
  end
  # favicon
  activate :favicon_maker, :icons => {
    "favicon_base.png" => [
	    { icon: "apple-touch-icon-152x152-precomposed.png" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS7.
	    { icon: "apple-touch-icon-144x144-precomposed.png" },             # Same as apple-touch-icon-57x57.png, for retina iPad with iOS6 or prior.
	    { icon: "apple-touch-icon-120x120-precomposed.png" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS7.
	    { icon: "apple-touch-icon-114x114-precomposed.png" },             # Same as apple-touch-icon-57x57.png, for retina iPhone with iOS6 or prior.
	    { icon: "apple-touch-icon-76x76-precomposed.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS7.
	    { icon: "apple-touch-icon-72x72-precomposed.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPad with iOS6 or prior.
	    { icon: "apple-touch-icon-60x60-precomposed.png" },               # Same as apple-touch-icon-57x57.png, for non-retina iPhone with iOS7.
	    { icon: "apple-touch-icon-57x57-precomposed.png" },               # iPhone and iPad users can turn web pages into icons on their home screen. Such link appears as a regular iOS native application. When this happens, the device looks for a specific picture. The 57x57 resolution is convenient for non-retina iPhone with iOS6 or prior. Learn more in Apple docs.
	    { icon: "apple-touch-icon-precomposed.png", size: "57x57" },      # Same as apple-touch-icon.png, expect that is already have rounded corners (but neither drop shadow nor gloss effect).
	    { icon: "apple-touch-icon.png", size: "57x57" },                  # Same as apple-touch-icon-57x57.png, for "default" requests, as some devices may look for this specific file. This picture may save some 404 errors in your HTTP logs. See Apple docs
	    { icon: "favicon-196x196.png" },                                  # For Android Chrome M31+.
	    { icon: "favicon-160x160.png" },                                  # For Opera Speed Dial (up to Opera 12; this icon is deprecated starting from Opera 15), although the optimal icon is not square but rather 256x160. If Opera is a major platform for you, you should create this icon yourself.
	    { icon: "favicon-96x96.png" },                                    # For Google TV.
	    { icon: "favicon-32x32.png" },                                    # For Safari on Mac OS.
	    { icon: "favicon-16x16.png" },                                    # The classic favicon, displayed in the tabs.
	    { icon: "favicon.png", size: "16x16" },                           # The classic favicon, displayed in the tabs.
	    { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },         # Used by IE, and also by some other browsers if we are not careful.
	    { icon: "mstile-70x70.png", size: "70x70" },                      # For Windows 8 / IE11.
	    { icon: "mstile-144x144.png", size: "144x144" },
	    { icon: "mstile-150x150.png", size: "150x150" },
	    { icon: "mstile-310x310.png", size: "310x310" },
	    { icon: "mstile-310x150.png", size: "310x150" }
	  ]
  }
end

# Deploy-specific configuration
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :rsync
  deploy.clean  = true
  deploy.host   = "www.weareinteractive.com"
  deploy.path   = "/var/www/weareinteractive/htdocs"
	deploy.flags  = "-avz --chmod=Dg+s,ug+w,+r"
end
