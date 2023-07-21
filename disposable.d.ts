// Type definitions for disposable-email 0.2
// Project: https://github.com/disposable/disposable#readme
// Definitions by: Zeeshan Ahmad <https://github.com/ziishaned>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Validates if a domain or email is disposable.
 * @param {string} domainOrEmail - The domain or email to validate.
 * @param {function} callback - The optional callback function to execute after validation.
 * @returns {boolean} - Returns true if the domain or email is not disposable, false otherwise.
 */
export function validate(domainOrEmail: string): boolean;
export function validate(domainOrEmail: string, callback: (error: null, isValid: boolean) => void): void;