describe('Automate OrangeHrm Website',()=>{

    it('Fixture, Demo test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangehrm').then( (data)=>{
    
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
        
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
        
        })
    
       })
    
    
    
       it('DatadrivenTest',()=>{
        
    
        cy.fixture('orangehrm2').then((data)=>{
    
            cy.visit("https://opensource-demo.orangehrmlive.com/")
             
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
    
            if(userdata.username=='Admin' && userdata.password=='admin123')
            {
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
    
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click()  //logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //logout
    
            }
            else{
                cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                .should('have.text',userdata.expected)
            }
            })
        })
       })
       
    
    //Page Objects
       it('Page ObjectLogin', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    
    
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    
    })
     
    //using pom
    it("Page Object LoginTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    
        const ln=new Login();
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.verifyLogin
    })
             
    })
