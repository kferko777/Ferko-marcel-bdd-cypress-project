///<reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Search_PO from '../page_objects/Search_PO'

const searchPage = new Search_PO()


Given('the user clicks on search filter {}',  (filter) => {
	searchPage.clickOn_SearchFilter(filter);
})

Given('the user clicks on more below Szkolenia',  () => {
	searchPage.clickOn_moreLearning();
})


Given('results for webinar are displayed',  () => {
	searchPage.show_Szkolenia();
})


Given('the user searches for java programmer jobs',  () => {
	searchPage.show_javaResults();

})

Given('the user clicks on Aktualne oferty pracy Link jobs',  () => {
	searchPage.show_jobOffers();

})

Given('the user should see job with title Programista Java is displayed',  () => {
	searchPage.show_programistaJava();

})








