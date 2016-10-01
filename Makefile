OUTPUT:=docs
NODE:=./node_modules/.bin/

.PHONY: all clean css asset html webpack

all: clean css asset html webpack
	@echo "Done"

clean:
	@echo "Cleaning output directory.."
	@rm -rf $(OUTPUT)
	@mkdir -p $(OUTPUT)/css
	@mkdir -p $(OUTPUT)/js
	@mkdir -p $(OUTPUT)/asset
	@mkdir -p $(OUTPUT)/fonts

css:
	@echo "Building final css file.."
	@{ \
		cat ./node_modules/normalize.css/normalize.css && \
		$(NODE)node-sass ./src/site/sass/site.sass; \
	} | \
	$(NODE)postcss --use autoprefixer | \
	$(NODE)cleancss | \
	sed "s#/\*.*\*/##g" > docs/site.min.css

asset:
	@echo "Copying assets.."
	@cp ./src/site/asset/* ./$(OUTPUT)/asset/
	@cp ./src/site/fonts/* ./$(OUTPUT)/fonts/

html: css
	@echo "Minifying html files.."
	@sed 's~CSS~$(shell cat $(OUTPUT)/site.min.css)~' ./src/site/index.html | \
	sed 's?JS?$(shell cat ./src/site/js/site-loader.js | $(NODE)uglifyjs)?' | \
	$(NODE)html-minifier --collapse-whitespace -o ./$(OUTPUT)/index.html
	@rm -rf $(OUTPUT)/site.min.css

webpack:
	@echo "Compiling app with webpack.."
	@$(NODE)webpack
