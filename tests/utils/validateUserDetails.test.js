import { describe, it, expect } from "vitest";
import { validateUserDetails } from "../../src/utils/validateUserDetails.js";

describe("Validate user details", () => {
    it("should accept a valid user", () => {
        const user = {
            username: 'test',
            email: 'test@testing.com',
            password: 'superunhackablepassword'
        };

        const result = validateUserDetails(user);

        expect(result.valid).toBe(true);
    });

    it("Should reject creating the user without a username", () => {
        const user = {
            email: 'test@testing.com',
            password: 'superunhackablepassword'
        }

        const result = validateUserDetails(user);
        expect(result.valid).toBe(false);
        expect(result.error).toBe("Username cannot be empty.")
    })

    it("Should reject a username that is over 30 chars", () => {
        const user = {
            username: 'aowdnaowdnoaiwdhaowidhoawhdoaiwhdoaiwhdoaiwdhoaiwhdoaiwhdoaiwhodahwoidah',
            email: 'test@testing.com',
            password: 'superunhackablepassword'
        };

        const result = validateUserDetails(user);
        expect(result.valid).toBe(false);
        expect(result.error).toBe("Username cannot be longer than 30 characters.")
    })

    it("Should reject usernames shorter than 3 chars", () => {
        const user = {
            username: 'ab',
            email: 'test@testing.com',
            password: 'superunhackablepassword'
        };

        const result = validateUserDetails(user);
        expect(result.valid).toBe(false);
        expect(result.error).toBe("Username cannot be shorter than 3 characters.")
    })

    it("Should reject a user without an email", () => {
        const user = {
            username: 'test',
            password: 'superunhackablepassword'
        };

        const result = validateUserDetails(user);
        expect(result.valid).toBe(false);
        expect(result.error).toBe("Email cannot be empty.")
    })

    it("Should reject a user with a password less than 8 chars", () => {
        const user = {
            username: 'test',
            email: 'test@testing.com',
            password: '1234567'
        }

        const result = validateUserDetails(user);
        expect(result.valid).toBe(false);
        expect(result.error).toBe("Password must be at least 8 characters.")

    })

})
