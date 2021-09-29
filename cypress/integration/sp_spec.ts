describe('SPビュー', () => {
  beforeEach(() => cy.viewport(375, 812))

  describe('メインメニュー', () => {
    beforeEach(() => cy.visit('/'))

    it('ハンバーガーメニューの開閉してそれぞれのページにリンクできる', () => {
      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('skills').click()
      cy.url().should('include', '/skills')
      cy.wait(100).screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('outputs').click()
      cy.url().should('include', '/outputs')
      cy.wait(100).screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('experience').click()
      cy.url().should('include', '/experience')
      cy.wait(100).screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('about').click()
      cy.url().should('include', '/about')
      cy.wait(100).screenshot()
    })
  })
})
