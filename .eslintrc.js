module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'func-names': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'prefer-arrow-callback': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
		},
	},
};
