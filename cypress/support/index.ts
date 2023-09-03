import './commands';

/// <reference types='cypress' />

declare global {
    namespace Cypress {
    interface Chainable {
        clearDownloads(): null;
        setCurrentCookies(cookies:Cypress.Cookie[]):null;
    }
}
}
export {};
