/* global fixture */

import { Selector } from 'testcafe';

fixture('Web calculator')
  .page('http://localhost:3000');


test('Typing 1+1', async (t) => {
  await t
    .typeText('#input', '1+1')
    .click('#submit')
    .expect(Selector('#input').value).eql('2');
});

test('Typing 12345+67890 with the button', async () => {
  // TODO: Test het drukken op de knoppencombinatie 1 2 3 4 5 + 6 7 8 9 0.
  // TODO: Test of de waarde van de input 12345+67890 is.
  // TODO: Klik op de submit knop.
  // TODO: Check of het resultaat 80235 is.
});

test('Typing 1-1 gives an error', async (t) => {
  await t
    .typeText('#input', '1-1')
    .click('#submit')
    .expect(Selector('#input').value).eql('FOUT!');
});

test('Typing 1-1 works', async () => {
  // TODO: Zorg dat het invullen van 1-1 wel werkt, en test dit hier.
});
