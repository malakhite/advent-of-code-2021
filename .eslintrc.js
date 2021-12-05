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
		'no-underscore-dangle': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],
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
