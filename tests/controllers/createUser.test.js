import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../../src/app.js";

describe("POST /users/", () => {
  it("Should create a user", async () => {
    const payload = {
      username: "test-user",
      email: "test@test.com",
      password: "12345678",
    };

    const response = await request(app).post("/users/").send(payload);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      data: {
        id: 0,
        username: "test-user",
        email: "test@test.com",
      }
    });
  });

  it("Should fail to create a user with invalid email", async () => {
    const payload = {
      username: "test-user",
      email: "invalidemail",
      password: "12345678",
    };

    const response = await request(app).post("/users/").send(payload);

    expect(response.status).toBe(400);
    expect(response.body.errors.fieldErrors.body).toStrictEqual([
      "Email must be a valid email.",
    ]);
  });
});



/* 


me /
    - servers/
        - id:
            - <KodeHode />

servers /
    - id:
        - 






me /
    - businesses/
        - id:
            - menu

businesses /
    - id:
        - menu
        - 

*/