
describe('Тестирование форму авторизации', function () {
    it('позитивный кейс авторизации', function () {
         cy.visit('  https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
        
     
     })
    
     it('автотест на проверку логики восстановления пароля', function () {
        cy.visit('  https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('fuksis1993@inbox.lv');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
        
   
    
    })

    it('проверка на негативный кейс авторизации:', function () {
        cy.visit('  https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       
    
    })



    it('проверка на негативный кейс авторизации:', function () {
        cy.visit('  https://login.qa.studio/');
        cy.get('#mail').type('ge@dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       
    
    })


    it('проверка на негативный кейс валидации', function () {
        cy.visit('  https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       
    
    })

    it('проверка на привидение к строчным буквам в логине', function () {
        cy.visit('  https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
       
    
    })





   


 })
 




