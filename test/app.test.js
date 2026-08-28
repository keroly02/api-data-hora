const request = require("supertest");

const app = require("../src/app");

describe("API Data e Hora", () => {

  test("GET / deve retornar 200", async () => {

    const response = await request(app).get("/");

    expect(response.status).toBe(200);

  });

});