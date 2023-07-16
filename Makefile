install:
	npm ci

brain-games:
	nodejs bin/games/brain-games.js

brain-even:
	nodejs bin/games/brain-even.js

brain-calc:
	nodejs bin/games/brain-calc.js

brain-gcd:
	nodejs bin/games/brain-gcd.js

brain-progression:
	nodejs bin/games/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
