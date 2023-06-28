install:
	npm ci

brain-games:
	nodejs bin/brain-games.js

brain-even:
	nodejs bin/brain-even.js

brain-calc:
	nodejs bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
