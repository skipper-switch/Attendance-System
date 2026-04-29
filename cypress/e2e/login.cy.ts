// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })



// cypress/e2e/login.cy.ts
describe('Login', () => {
beforeEach(() => cy.visit('/'));
// beforeEach(() => cy.visit('/sign-in'));
it('redirects student to /student/dashboard', () => {
cy.get('[data-testid="email-input"]').type('ada@academy.com');
cy.get('[data-testid="password-input"]').type('Student123!');
cy.get('[data-testid="login-btn"]').click();
cy.url().should('include', '/student/dashboard');
});
it('redirects admin to /admin/dashboard', () => {
cy.get('[data-testid="email-input"]').type('admin@academy.com');
cy.get('[data-testid="password-input"]').type('Admin1234!');
cy.get('[data-testid="login-btn"]').click();
cy.url().should('include', '/admin/dashboard');
});
it('shows error message for wrong credentials', () => {
cy.intercept('GET', '**/users?email=*', { body: [] }); // no match
cy.get('[data-testid="email-input"]').type('wrong@email.com');
cy.get('[data-testid="password-input"]').type('wrongpass');
cy.get('[data-testid="login-btn"]').click();
cy.get('[data-testid="login-error"]').should('be.visible');
});
});