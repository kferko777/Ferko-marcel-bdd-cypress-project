///<reference types="cypress" />
import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import Form_PO from '../page_objects/Form_PO'

const formPage = new Form_PO()


Given('the user clicks on dropdown arrow down selects first item', () => {
	formPage.clickOn_DropdownArrow();
})

Given('the user type some Address {string} on input address', (address) => {
	formPage.input_Address(address);
})

Given('the user enter first name {} and last name {}', (nameAndLastName) => {
	formPage.input_nameAndLastName(nameAndLastName);
})

Given('the user type some Phone {string} on input phone', (phoneNr) => {
	formPage.input_PhoneNr(phoneNr);
})

Given('the user type a specific {string} address on input email', (email) => {
	formPage.input_email(email);
})

Given('the user enters a message on {string} textarea field', (comment) => {
	formPage.input_comment(comment);
})

Given('the user click on send button', () => {
	formPage.submitButton();
})

Given('the user should be  presented with an alert box which contains text {string}',(expectedAlertText) => {
	formPage.alertText(expectedAlertText);
})

