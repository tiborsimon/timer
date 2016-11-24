OUTPUT:=build
NODE:=./node_modules/.bin/
APPPATH?=http://localhost:8000

.PHONY: all init clean css asset html webpack

all: clean css asset html webpack
	@echo "Ultimate Timer was deployed to path $(APPPATH).."
	@echo "Done"

init:
	npm install

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
		cat ./src/site/sass/*.scss | $(NODE)node-sass; \
	} | \
	sed 's%APPPATH%$(APPPATH)%' | \
	$(NODE)postcss --use autoprefixer | \
	$(NODE)cleancss | \
	sed "s#/\*.*\*/##g" > $(OUTPUT)/site.min.css

asset:
	@echo "Copying assets.."
	@cp ./src/site/fonts/* ./$(OUTPUT)/fonts/

html: css
	@echo "Minifying html files.."
	@cat ./src/site/index.html | \
	sed 's~CSS~$(shell cat $(OUTPUT)/site.min.css)~' | \
	sed 's?JS?$(shell cat ./src/site/js/site-loader.js | $(NODE)uglifyjs)?' | \
	sed 's%APPPATH%$(APPPATH)%' | \
	$(NODE)html-minifier --collapse-whitespace -o ./$(OUTPUT)/index.html
	@rm -rf $(OUTPUT)/site.min.css

webpack:
	@echo "Compiling app with webpack.."
	@$(NODE)webpack
