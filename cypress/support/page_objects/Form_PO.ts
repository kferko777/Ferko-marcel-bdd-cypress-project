/// <reference types="cypress" />
import Base_PO from "./Base_PO";

class Form_PO extends Base_PO {
  navigateTo_Form_Page() {
    super.navigate("");
  }

  clickOn_DropdownArrow() {
    cy.get(".temat").trigger("mousedown");
    cy.get("select").select(1).should("have.value", "Zapytanie ofertowe");
  }

  input_Address(address) {
    const field = cy.get("textarea[name='firma']");
    field.clear();
    field.type(address);
    return this;
  }

  input_nameAndLastName(nameAndLastName) {
    const field = cy.get("input[name='imie_nazwisko']");
    field.clear();
    field.type(nameAndLastName);
    return this;
  }

  input_PhoneNr(phoneNr) {
    const field = cy.get("input[name='telefon']").type(phoneNr);
    field.clear();
    field.type(phoneNr);
    return this;
  }

  input_email(email) {
    const field = cy.get("input[name='email']");
    field.clear();
    field.type(email);
    return this;
  }

  input_comment(comment) {
    cy.get("textarea[name='tresc']").type(comment);
  }

  submitButton() {
    cy.get("input[value='WYŚLIJ']").click();
  }

  alertText(expectedAlertText) {
    cy.get("form > div[role='alert']").trigger("mouseover");
  }
}
export default Form_PO;
