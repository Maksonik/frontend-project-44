#!/usr/bin/env node
import { gameEven } from '../src/game-even.js';
import { greetUser } from '../src/cli.js';

const name = greetUser();
gameEven(name);
