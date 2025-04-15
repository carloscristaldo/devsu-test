import { faker } from '@faker-js/faker';
import { doLogin } from '../support/commands';

const firstName = faker.person.firstName(); 
const lastName = faker.person.lastName(); 
const zipCode = faker.location.zipCode(); 


describe('devsu-screening', () => {
  beforeEach(() => {
    
    cy.visit('https://www.saucedemo.com/')
  })

  it('e2e testing', () => {
   
    // successfull login
    // it is performed in an isolated function for scalability
    doLogin('standard_user', 'secret_sauce')
    cy.get('.app_logo').should('be.visible')

    //looking for items
    //and adding the first two to cart
    cy.xpath('//button[text()="Add to cart"]') 
      .should('have.length.gte', 2) .then(($elements) => {
        cy.wrap($elements.eq(0)).click();
        cy.wrap($elements.eq(1)).click();
      });
    
    //checking items added to cart icon
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '2')
      .then(($el) => {
        const text = $el.text();
        cy.log(text); 
      });

      //click on cart icon
      cy.get('#shopping_cart_container').should('be.visible').click()

      //checkout button should be visible
      cy.get('#checkout').should('be.visible').click()

      //filling form's fields
      cy.get('#first-name').should('be.visible').type(firstName )

      cy.get('#last-name').should('be.visible').type(lastName )

      cy.get('#postal-code').should('be.visible').type(zipCode)

      cy.get('[data-test="continue"]').should('be.visible').click()

      cy.get('[data-test="finish"]').should('be.visible').click()

      //assertion
      cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .should('have.text', 'Thank you for your order!')

      
    })

   
  })
