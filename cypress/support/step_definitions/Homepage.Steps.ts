/// <reference types="cypress" />
import { Given, When, Before } from '@badeball/cypress-cucumber-preprocessor'
import Homepage_PO from '../page_objects/Homepage_PO'

const homePage = new Homepage_PO()

Before(() => {
	cy.log('Executing commands inside Homepage Steps')
})

Given('the user visit Marcel app', () => {
	homePage.navigate('')
	homePage.clickOn_Cookies_Button();
	
})

Given('the user clicks on o Firmie Link', () => {
	homePage.clickOn_oFirmie_Link();
})

Given('the user should see content about company', () => {
	homePage.hover_On_Content_Company();
})

Given('the user clicks on Aktualności', () => {
	homePage.clickOn_Aktualności_Link();
})

Given('the user clicks on Kariera Link', () => {
	homePage.clickOn_Kariera_Link();	
})

Given('the user clicks on Aktualny Oferty Pracy Link', () => {
	homePage.clickOn_Aktualny_Oferty_Pracy();
})

Given('the user clicks on Contact Link', () => {
	homePage.clickOn_Contact_Link();
})

