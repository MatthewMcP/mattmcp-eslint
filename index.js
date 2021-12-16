module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        allowImportExportEverywhere: true,
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            globalReturn: false,
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
    ],

    plugins: ['react'],
    rules: {
        'arrow-body-style': ['warn', 'as-needed'],
        'class-methods-use-this': 'off',
        'default-case': 'error',
        'default-param-last': ['error'],
        'dot-notation': ['warn', { allowPattern: 'onSuccess|onError' }],
        'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
        camelcase: ['error', { allow: ['^UNSAFE_'] }],
        complexity: ['warn', 15],
        curly: ['error'],
        eqeqeq: 'error',
        'import/extensions': [
            'error',
            'never',
            {
                json: 'always',
            },
        ],
        'import/namespace': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-classes-per-file': ['error', 1],
        'max-len': ['warn', { code: 150 }],
        'max-statements': ['warn', 30, { ignoreTopLevelFunctions: true }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-else-return': 'error',
        'no-extra-parens': 'error',
        'no-magic-numbers': ['warn', { ignore: [0, 1, -1, 100], ignoreArrayIndexes: true }],
        'no-nested-ternary': 'warn',
        'no-param-reassign': 'warn',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'warn',
        'no-template-curly-in-string': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-const': 'warn',
        'prefer-destructuring': ['off'],
        'react/destructuring-assignment': 'off',
        'react/forbid-prop-types': ['warn'],
        'react/jsx-filename-extension': ['error'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': ['off'],
        'react/no-deprecated': 'warn',
        'react/no-unused-state': 'warn',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': ['warn'],
        'react/sort-comp': ['error', { order: ['static-methods', 'lifecycle', 'everything-else', 'render'] }],
        'vars-on-top': 'error',
        indent: 'off',
        quotes: ['error', 'single'],
        radix: 'off',
    },
};
