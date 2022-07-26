import request from "supertest";

import app, { listen } from "./index";

describe("/", () => {
  test("should return hello world message", () => {
    return request(app)
      .get("/")
      .expect({
        message: "Hello World!",
      })
      .expect(200);
  });
});

afterAll(() => {
  listen.close();
});
