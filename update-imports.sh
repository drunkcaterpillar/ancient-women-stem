#!/bin/bash

# Update import statements to reflect new file extensions
find src -name '*.tsx' -exec sed -i 's/\.js/\.tsx/g' {} \;
find src -name '*.ts' -exec sed -i 's/\.js/\.ts/g' {} \;
