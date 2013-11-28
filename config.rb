###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "/404.html", :layout => false

###
# Helpers
###

# Reload the browser automatically whenever files change
activate :livereload

###
# Assets
###

set :js_dir, 'assets/js'
set :css_dir, 'assets/css'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'

sprockets.append_path File.join "#{root}", "bower_components"

###
# Environments
###

# Development-specific configuration
configure :development do
  activate :google_analytics do |ga|
    ga.tracking_id = false
  end
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :cache_buster
  activate :favicon_maker
  activate :relative_assets
  activate :minify_javascript
  activate :google_analytics do |ga|
    ga.anonymize_ip = true
    ga.tracking_id = data.site.ga_account
  end
end

# Deploy-specific configuration
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :rsync
  deploy.host   = "www.weareinteractive.com"
  deploy.path   = "/var/www/weareinteractive.com/htdocs"
end
