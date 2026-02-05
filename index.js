#!/usr/bin/env node

import { play } from "./play.js";
console.log("hello ms@ga");

const element = process.argv[2];
play(element);
console.log("end");
