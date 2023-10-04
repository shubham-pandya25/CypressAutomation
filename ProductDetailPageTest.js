describe('Product details page', function () {

it('To test if a product can be added in the cart', function () {
cy.visit('https://www.shop-apotheke.com/')
cy.wait(1000);
cy.contains('button', 'Alles akzeptieren').click({force: true})
cy.contains('.a-Button.u-no-wrap', 'Arzneimittel').click()
cy.get('.o-ProductSliderItem__header').first().click()
cy.scrollTo(0,500)
cy.contains('.button_primary', 'In den Warenkorb').click()
cy.get('.m-Notification--success').should('have.text', 'Erfolgreich zum Warenkorb hinzugefügt.')
})

it('To test if the added product information is displayed correctly in the cart table', function () {
cy.visit('https://www.shop-apotheke.com/')
cy.wait(1000);
cy.contains('button', 'Alles akzeptieren').click({force: true})
cy.contains('.a-Button.u-no-wrap', 'Arzneimittel').click()
cy.get('.o-ProductSliderItem__header').eq(1).click()
cy.scrollTo(0,500)
cy.contains('.button_primary', 'In den Warenkorb').click()
cy.contains('.a-Button', 'Zum Warenkorb').click()
cy.get('.o-ProductInfo__title').should('have.text', 'Paracetamol-ratiopharm® 500 mg')
cy.contains('.o-ProductInfo__list-item', 'Packungsgröße').should('have.text', 'Packungsgröße: 20 St | Tabletten')
cy.contains('.o-ProductInfo__list-item', 'PZN/EAN').should('have.text', 'PZN/EAN: 01126111/4150011261115')

})

it('To test if the added product can select the desired quantity', function () {
cy.visit('https://www.shop-apotheke.com/')
cy.wait(1000);
cy.contains('button', 'Alles akzeptieren').click({force: true})
cy.contains('.a-Button.u-no-wrap', 'Arzneimittel').click()
cy.get('.o-ProductSliderItem__header').eq(2).click()
cy.scrollTo(0,500)
cy.contains('.button_primary', 'In den Warenkorb').click()
cy.contains('.a-Button', 'Zum Warenkorb').click()
cy.get('.m-Select__inner').click()
cy.get('[data-value="3"]').click().should('have.text', '3')
})

})



    