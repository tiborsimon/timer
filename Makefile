OUTPUT:=docs
NODE:=./node_modules/.bin/


.PHONY: all clean css asset html

all: clean css asset html
	@echo "Done"

clean:
	@echo "Cleaning output directory.."
	@rm -rf $(OUTPUT)
	@mkdir -p $(OUTPUT)/css
	@mkdir -p $(OUTPUT)/js
	@mkdir -p $(OUTPUT)/asset

css:
	@echo "Building final css file.."
	@{ \
		cat ./node_modules/normalize.css/normalize.css && \
		$(NODE)node-sass ./src/site/sass/site.sass; \
	} | \
	$(NODE)postcss --use autoprefixer | \
	$(NODE)cleancss -o docs/site.min.css

asset:
	@echo "Copying assets.."
	@cp ./src/site/asset/* ./$(OUTPUT)/asset/

html:
	@echo "Minifying html files.."
	@$(NODE)html-minifier --collapse-whitespace -o ./$(OUTPUT)/index.html ./src/site/index.html
