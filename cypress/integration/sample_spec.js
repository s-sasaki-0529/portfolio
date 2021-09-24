const url = 'https://www.shingo-sasaki.net'

beforeEach(() => cy.visit(url))

describe('PCビュー', () => {
  describe('サイドメニュー', () => {
    it('アイコンが表示されている', () => {
      cy.get('.pc-nav img').should('be.visible')
    })
    it('4種類のメニューを押下するとそれぞれのページにリンクする', () => {
      cy.contains('skills').click()
      cy.url().should('equal', `${url}/skills`)

      cy.contains('outputs').click()
      cy.url().should('equal', `${url}/outputs`)

      cy.contains('experience').click()
      cy.url().should('equal', `${url}/experience`)

      cy.contains('about').click()
      cy.url().should('equal', `${url}/about`)
    })
  })
})
