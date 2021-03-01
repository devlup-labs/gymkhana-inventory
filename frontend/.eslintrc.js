module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:prettier/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }] // Use our .prettierrc file as source
    },
    overrides: [
        {
            files: ['bin/*.js', 'lib/*.js'],
            excludedFiles: '*.test.js',
            rules: {
                quotes: ['error', 'single']
            }
        }
    ]
};
