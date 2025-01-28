import homePage from "../support/folder/pages/homePage"
import loginPage from "../support/folder/pages/loginPage"

describe('Dado que o usuário acessa a página de login', function () {

    it('Então deve ser possível acessar e visualizar o formulário de login', function(){

        loginPage.go()
    })

    context('Quando ele envia o formulário sem preencher algum dos campos obrigatórios', function () {

        const requiredMessage = [
            { field: 'Username', username: '', password: 'secret_sauce', msg: 'Epic sadface: Username is required' },
            { field: 'Password', username: 'standard_user', password: '', msg: 'Epic sadface: Password is required' },
        ]

        requiredMessage.forEach(function (required) {

            it(`Então o sistema deve retornar uma mensagem de obrigatoriedade para o campo: ${required.field}`, function () {

                loginPage.go()
                loginPage.form(required)
                loginPage.submit()
                loginPage.errorMsgShouldBe(required.msg)
            })
        })
    })

    context('Quando ele preenche o formulário com dados válidos', function () {

        const user = {
            username: 'standard_user',
            password: 'secret_sauce',
        }

        it('Então o sistema deve realizar o login com sucesso', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            homePage.shelfShouldBeVisible()
        })
    })

    context('Quando ele preenche o formulário com dados inválidos', function () {

        const user = {
            username: 'usuario_invalido',
            password: 'senha_invalida',
        }

        it('Então o sistema deve retornar mensagem de usuário inexistente', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.errorMsgShouldBe("Epic sadface: Username and password do not match any user in this service")
        })
    })

    context('Quando ele preenche o formulário com dados de usuário bloqueado', function () {

        const user = {
            username: 'locked_out_user',
            password: 'secret_sauce',
        }

        it('Então o sistema deve retornar uma mensagem informando que o usuário está bloqueado', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.errorMsgShouldBe('Epic sadface: Sorry, this user has been locked out.')
        })
    })

    context('Quando ele preenche o campo Username com dado incorreto', function () {

        const user = {
            username: 'username_incorreto',
            password: 'secret_sauce',
        }

        it('Então o sistema deve retornar uma mensagem de usuário inexistente', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.errorMsgShouldBe("Epic sadface: Username and password do not match any user in this service")
        })
    })

    context('Quando ele preenche o campo Password com dado incorreto', function () {

        const user = {
            username: 'standard_user',
            password: 'senha_incorreta',
        }

        it('Então o sistema deve retornar uma mensagem de usuário inexistente', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.errorMsgShouldBe("Epic sadface: Username and password do not match any user in this service")
        }
        )
    })

    context('Quando ele está com problemas de performance, preenche e submete o formulário', function () {

        const user = {
            username: 'performance_glitch_user',
            password: 'secret_sauce',
        }

        it('Então o sistema deve demorar um pouco mais para ser carregado', function () {

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            homePage.shelfShouldBeVisible()

        })
    })
})