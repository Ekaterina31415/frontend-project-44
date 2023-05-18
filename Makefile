install:
	npm ci

brain-games:
	nodejs bin/brain-games.js

publish:
	npm publish --dry-run
