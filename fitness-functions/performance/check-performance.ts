// FITNESS FUNCTIONS - PERFORMANCE

// Função arquitetural que verifica o desempenho de funções

import { performance } from "node:perf_hooks";

function main() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

const MAX_TIME_MS = 50;

const start = performance.now();

main();

const end = performance.now();
const duration = end - start;

if (duration > MAX_TIME_MS) {
  console.error(`Perfomance de ${duration.toFixed(2)}, maior que a desejada.`);
} else {
  console.log(`Performance OK: ${duration.toFixed(2)} ms`);
}
