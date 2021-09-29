describe('SPビュー', () => {
  beforeEach(() => cy.viewport(375, 812))

  describe('メインメニュー', () => {
    beforeEach(() => cy.visit('/'))

    it('ハンバーガーメニューの開閉してそれぞれのページにリンクできる', () => {
      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('skills').click()
      cy.url().should('include', '/skills')
      cy.screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('outputs').click()
      cy.url().should('include', '/outputs')
      cy.screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('experience').click()
      cy.url().should('include', '/experience')
      cy.screenshot()

      cy.get('.sp-nav .hamburger').click()
      cy.get('.sp-nav .menu').contains('about').click()
      cy.url().should('include', '/about')
      cy.screenshot()
    })
  })

  describe('outputs ページ', () => {
    beforeEach(() => cy.visit('/outputs'))
    it('カテゴリをクリックすることで切り替えることができる', () => {
      cy.get('.medium-outputs')

      cy.get('.categories').contains('Zenn').click()
      cy.get('.zenn-outputs')
      cy.wait(1000).screenshot()

      cy.get('.categories').contains('Slideshare').click()
      cy.get('.slideshare-outputs')
      cy.wait(1000).screenshot()

      cy.get('.categories').contains('Medium').click()
      cy.get('.medium-outputs')
      cy.screenshot()
    })
  })

  describe('experience ページ', () => {
    // FIXME: React のアタッチを待機してるけど、自動待機に 定評のある Cypress でこれいる？
    beforeEach(() => cy.visit('/experience').wait(100))

    it('各職歴の詳細を開閉できる', () => {
      cy.get('.experience-block.saas .summary').click()
      cy.get('.experience-block.saas .description').should('be.visible')
      cy.screenshot()
      cy.get('.experience-block.saas .summary').click()
      cy.get('.experience-block.saas .description').should('be.not.visible')

      cy.get('.experience-block.ses .summary').click()
      cy.get('.experience-block.ses .description').should('be.visible')
      cy.screenshot()
      cy.get('.experience-block.ses .summary').click()
      cy.get('.experience-block.ses .description').should('be.not.visible')

      cy.get('.experience-block.isp .summary').click()
      cy.get('.experience-block.isp .description').should('be.visible')
      cy.screenshot()
      cy.get('.experience-block.isp .summary').click()
      cy.get('.experience-block.isp .description').should('be.not.visible')
    })
  })
})
