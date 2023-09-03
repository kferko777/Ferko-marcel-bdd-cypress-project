/// <reference types="cypress" />
import Base_PO from "./Base_PO";
import Homepage_PO from "./Homepage_PO";
const homePage = new Homepage_PO;

class Search_PO extends Base_PO {
  navigateTo_Search_Page() {
    super.navigate('');
  }

  clickOn_SearchFilter(filter) {
    cy.get("input[placeholder='Szukaj...']").eq(0).type(filter);
    cy.get('.hidden-xs > form > [type="submit"]').click();
    
  }

  clickOn_moreLearning() {
    cy.get('#post-158 > div > a').click();
  }

  show_Szkolenia() {
    cy.get('h1').contains(' Szkolenia administratorów ').invoke("show").click();
  }

  
  show_javaResults() {
    cy.get('h1').contains('Wyniki wyszukiwania dla "Programista Java"').invoke("show").click();
  }

  show_jobOffers() {
    cy.xpath("//a[contains(text(),'Aktualne oferty pracy')]").click();
  }

  show_programistaJava() {
    cy.xpath("//a[contains(text(),'Programista Java')]").trigger('mouseover');
  }

  
}

export default Search_PO;