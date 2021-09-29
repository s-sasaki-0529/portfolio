Cypress.Commands.add('screenshotWithWaitImage', () => {
  cy.get('img').should($img => {
    if ($img) {
      expect($img[0].naturalWidth, 'image has natural width').to.be.greaterThan(0)
    }
  })
  cy.screenshot()
})
