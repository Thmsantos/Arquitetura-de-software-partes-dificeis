// FITNESS FUNCTION - MANUTENIBILIDADE
// Regra: arquivos não devem exceder X linhas de código

/* 
Muitas linhas prejudicam um príncipio básico da arquitetura, a manutenibilidade.
Quando a manutenibilidade é baixa, o código se torna mais difícil de compreender,
evoluir e testar, o que aumenta significativamente o esforço necessário para a implementação de novas funcionalidades e a correção de defeitos.
*/

// Ignora comentários e linhas em branco

import fs from 'fs';
import path from 'path';

const file = path.resolve(
  import.meta.dirname,
  '../performance/check-performance.ts',
);

const contentMax = 300;
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

const loc = lines.filter((line) => {
  const cleanedLine = line.trim();
  return cleanedLine !== '' && !cleanedLine.startsWith('//');
}).length;

if (loc > contentMax) {
    console.log(
    `Baixa manutenibilidade: ${file} possui ${loc} linhas (máx: ${contentMax})`,
    );
} else {
    console.log(
      `Manutenibilidade OK: ${file} possui ${loc} linhas (máx: ${contentMax})`,
    );
}

