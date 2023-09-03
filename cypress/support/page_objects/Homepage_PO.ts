/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate('');
  }

  clickOn_Cookies_Button() {
    cy.get("#wt-cli-accept-all-btn").click();
  }

  clickOn_oFirmie_Link() {
    cy.get('a[href="https://marcel.pl/agawp/o-firmie/"]').click();
    cy.url().should("include", "o-firmie/");
  }

  hover_On_Content_Company() {
    cy.get(".o-firmie-content").should("be.visible");
  }

  clickOn_Aktualności_Link() {
    cy.get('a[href="https://marcel.pl/agawp/aktualnosci/"]').click();
    cy.get('.title-bottom-line').should('be.visible').contains('Aktualności');
  }

  clickOn_Kariera_Link() {
    cy.get('a[href="https://marcel.pl/agawp/kariera/"]').click();
    cy.get('h1').contains(' Kariera w Marcel S.A. - Dołącz do nas! ').invoke("show").click();
            
  }

  clickOn_Aktualny_Oferty_Pracy() {
    cy.get('.btn').should("be.visible").click(); 
    cy.get('h1').contains(' Aktualne oferty pracy ').invoke("show").click();
  }

  clickOn_Contact_Link() {
    cy.get('a[href="https://marcel.pl/agawp/kontakt/"]').click();
    cy.get('h1').contains('FORMULARZ KONTAKTOWY').invoke("show").click();
  }
   
}
export default Homepage_PO;
