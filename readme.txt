README.txt  
Prueba E2E automatizada: Flujo de compra en SauceDemo
Prueba API automatizada: Gestión de usuarios en DemoBlaze

REQUISITOS PREVIOS:
-------------------
1. Tener instalado Node.js (versión 14 o superior).
2. Tener instalado npm (se instala junto con Node.js).
3. Tener instalado Cypress (vías disponibles más abajo).
4. Conexión a internet para acceder a https://www.saucedemo.com y/o a 
                                      https://demoblaze.com/signup y/o 
                                      https://demoblaze.com/login

INSTALACIÓN DEL PROYECTO:
-------------------------
1. Clonar repositorio
    >https://github.com/carloscristaldo/devsu-test.git

2. Inicializar el proyecto con npm:
   > npm init -y

3. Instalar Cypress como dependencia de desarrollo:
   > npm install cypress --save-dev

4. Instalar cypress-xpath plugin:
   > npm install -D cypress-xpath

5. Incluir el plugin en Cypress support file:
    >require('cypress-xpath');

6. Abrir Cypress por primera vez para que genere la estructura básica:
   > npx cypress open


EJECUCIÓN DE LA PRUEBA:
-----------------------
1. Ejecutar Cypress en modo interactivo:
   > npx cypress open

   Luego, en la interfaz que aparece, hacer clic en el archivo `saucedemoTest.cy.js` o `demoBlazeTest.cy.cy.js`  para iniciar la prueba.

   --- O ---

2. Ejecutar la prueba en modo consola (headless):
   > npx cypress run --spec "cypress/e2e/saucedemoTest.cy.js"

NOTAS ADICIONALES:
------------------
- En caso de errores por selectors, verificar que la estructura de la página no haya cambiado.
- Cypress crea automáticamente screenshots o videos si lo configurás en `cypress.config.js`.
- Este flujo cubre una compra básica con los productos preseleccionados.

