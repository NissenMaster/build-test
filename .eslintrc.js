module.exports = {
  parser: 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react", "import", "react-hooks"],
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react", "prettier/standard"],
  "env": { "browser": true },
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "class-methods-use-this": "off",
    "prettier/prettier": "error",
    // note you must disable the base rule as it can report incorrect errors
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-underscore-dangle": "off",
    "no-use-before-define": ["error", "nofunc"],
    "no-cond-assign": "off",
    "no-plusplus": "off",
    "no-multi-assign": "off",
    "no-tabs": "off",
    "no-else-return": "off",
    "no-unused-vars": "off",
    "eqeqeq": "warn",
    "camelcase": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-indent": ["error", 2],
    "react/prop-types": [0],
    "react/require-default-props": [0],
    "react/jsx-indent-props": ["error", 2],
    "react/no-array-index-key": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "react/static-property-placement": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": "off"
  },
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": {
      "node": { "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"] }
    }
  }
};
