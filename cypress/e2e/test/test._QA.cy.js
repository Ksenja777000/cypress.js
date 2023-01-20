describe('Тестирование   https://testqastudio.me/', function () {
    it('кейс ', function () {
         cy.visit('  https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('[name*="quantity"]').first().clear();
         cy.get('[name*="quantity"]').first().type('3');
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(2000);
         cy.get('.close-account-panel.button-close').last().click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(4000);
         cy.get('.checkout').click();
         cy.wait(4000);
         cy.get('#billing_first_name').type('Ксения');
         cy.get('#billing_last_name').type('Кузнецова');
         cy.get('#select2-billing_country-container').type('Россия').click();
         cy.get('#billing_address_1').type('дом-7, улица Ленина');
         cy.get('#billing_city').type('МОСКВА');
         cy.get('#billing_state').type('Домодедово');
         cy.get('#billing_postcode').type('123456');
         cy.get('#billing_phone').type('+79554567888');
         cy.get('#billing_email').type('fuksis1993@inbox.lv');
         cy.get('.wc_payment_method > label').click();
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');




     })
    })
    





    //<a href="https://testqastudio.me/cart/" class="button wc-forward razzi-button">Посмотреть корзину</a>