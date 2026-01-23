// FITNESS FUNCTIONS - ACOPLAMENTO

// Função arquitetural que verifica quantos imports um arquivo tem,
// evitando o alto acoplamento. O alto acoplamento pode causar problemas de 
// manutenibilidade, testabilidade, reutilização, etc.

import fs from "fs";
import path from "path";

const file: string = path.resolve(
  import.meta.dirname,
  "../performance/check-performance.ts"
);
const maxImports: number = 8;

const content = fs.readFileSync(file, "utf8");
const imports = content.match(/^import /gm)?.length ?? 0;

if (imports > maxImports){
    console.log(`Alto acoplamento no arquivo: ${file}`)
} else {
    console.log(`Acomplamento do arquivo: ${file} está dentro do limite`)
}