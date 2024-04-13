#!/bin/bash
sed -Ei '/NODE_OPTIONS.*nodeDebugType.*/s//NODE_OPTIONS = `${NODE_OPTIONS} --${nodeDebugType}=0.0.0.0:9230`;/' next-app/node_modules/next/dist/cli/next-dev.js
