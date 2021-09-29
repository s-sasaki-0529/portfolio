describe('PCビュー', () => {
  beforeEach(() => cy.viewport(1280, 720))

  describe('メインメニュー', () => {
    beforeEach(() => cy.visit('/'))

    it('4種類のメニューを押下するとそれぞれのページにリンクする', () => {
      cy.contains('skills').click()
      cy.url().should('include', '/skills')

      cy.contains('outputs').click()
      cy.url().should('include', '/outputs')

      cy.contains('experience').click()
      cy.url().should('include', '/experience')

      cy.contains('about').click()
      cy.url().should('include', '/about')
    })
  })

  describe('outputs ページ', () => {
    beforeEach(() => cy.visit('/outputs'))
    it('カテゴリをクリックすることで切り替えることができる', () => {
      cy.get('.medium-outputs')

      cy.get('.categories').contains('Zenn').click()
      cy.get('.zenn-outputs')

      cy.get('.categories').contains('Slideshare').click()
      cy.get('.slideshare-outputs')

      cy.get('.categories').contains('Medium').click()
      cy.get('.medium-outputs')
    })
  })

  describe('experience ページ', () => {
    // FIXME: React のアタッチを待機してるけど、自動待機に定評のある Cypress でこれいる？
    beforeEach(() => cy.visit('/experience').wait(100))

    it('各職歴の詳細を開閉できる', () => {
      cy.get('.experience-block.saas .summary').click()
      cy.get('.experience-block.saas .description').should('be.visible')
      cy.get('.experience-block.saas .summary').click()
      cy.get('.experience-block.saas .description').should('be.not.visible')

      cy.get('.experience-block.ses .summary').click()
      cy.get('.experience-block.ses .description').should('be.visible')
      cy.get('.experience-block.ses .summary').click()
      cy.get('.experience-block.ses .description').should('be.not.visible')

      cy.get('.experience-block.isp .summary').click()
      cy.get('.experience-block.isp .description').should('be.visible')
      cy.get('.experience-block.isp .summary').click()
      cy.get('.experience-block.isp .description').should('be.not.visible')
    })
  })
})
