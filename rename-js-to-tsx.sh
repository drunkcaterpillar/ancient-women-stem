#!/bin/bash

# Find all .js files that use JSX and rename them to .tsx
find src -name '*.js' -exec bash -c 'mv "$0" "${0%.js}.tsx"' {} \;

# Find all .js files that do not use JSX and rename them to .ts
find src -name '*.js' -exec bash -c 'grep -q "<" "$0" && true || mv "$0" "${0%.js}.ts"' {} \;
