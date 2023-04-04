import {test, expect} from'@playwright/test';

test('test', async({page}) => {
await page.goto('https://wwww.avianca.com/');
await page.getByAltText('Grafica logo Avianaca').click();
await page.get('button', { name: 'Gestiona tu reserva' }).click();

await page.getByLabel('Numero de reserva').click();
await page.getByLabel('Apellido requerido').click();
});