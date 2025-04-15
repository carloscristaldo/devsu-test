import { faker } from '@faker-js/faker';

const username = faker.internet.username()
const password = 'Testing-01$'

describe('API TESTING', ()=>{

    const signUpURL = 'https://api.demoblaze.com/signup'
    const loginURL = 'https://api.demoblaze.com/login'


    it('Register new user', ()=>{
        cy.log(username)
        const newUser ={
            username: username, 
            password: password
          };

          
          cy.request({
            method: 'POST',
            url: signUpURL,
            body: newUser,
            headers:{
                'Content-Type':'application/json'
            }
          }).then((response) =>{
            expect(response.status).to.eq(200);
            cy.log(response.body)
          })
    })


    it('Register existing user', ()=>{
      cy.log(username)
      const newUser ={
          username: 'Jalen.Tillman', 
          password: password
        };
        cy.request({
          method: 'POST',
          url: signUpURL,
          body: newUser,
          headers:{
              'Content-Type':'application/json'
          }
        }).then((response) =>{
          expect(response.status).to.eq(200);
          cy.log(response.body)
          expect(response.body.errorMessage).to.equal('This user already exist.');
        })
    })


    it('Login existing user', ()=>{
      const existingUser ={
          username: 'Jalen.Tillman', 
          password: btoa(password)
        };
        cy.request({
          method: 'POST',
          url: loginURL,
          body: existingUser,
          headers:{
              'Content-Type':'application/json'
          }
        }).then((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body).to.include('Auth_token:');
        })
    })


    it('Incorrect user', ()=>{
      const incorrectUser ={
          username: 'incorrect.user', 
          password: btoa(password)
        };
        cy.request({
          method: 'POST',
          url: loginURL,
          body: incorrectUser,
          headers:{
              'Content-Type':'application/json'
          }
        }).then((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body.errorMessage).to.equal('User does not exist.');
        })
    })


    it('Incorrect pass', ()=>{
      const incorrectPass ={
          username: 'Jalen.Tillman', 
          password: 'incorrect.pass'
        };
        cy.request({
          method: 'POST',
          url: loginURL,
          body: incorrectPass,
          headers:{
              'Content-Type':'application/json'
          }
        }).then((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body.errorMessage).to.equal('Wrong password.');
                    
        })
    })

    it('Incorrect user and pass', ()=>{
      const incorrectUser ={
          username: 'incorrectUser', 
          password: 'incorrect.pass'
        };
        cy.request({
          method: 'POST',
          url: loginURL,
          body: incorrectUser,
          headers:{
              'Content-Type':'application/json'
          }
        }).then((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body.errorMessage).to.equal('User does not exist.');
                    
        })
    })
})