all:
	@npm install
	@yarn start
test:
	@npm install
	@yarn test
clean:
	@rm -rf lib
build:
	@npm install
	@yarn build
