const Intern = require("../workers/intern");

describe("Intern subclass", () => {
  describe("getName", () => {
    it("returns Sue", () => {
      expect(new Intern("Sue", "3", "Sue@gmail.com", "Lynn").getName()).toBe("Sue");
    });
  });

  describe("getId", () => {
    it("returns 3", () => {
      expect(new Intern("Sue", "3", "Sue@gmail.com", "Lynn").getId()).toBe("3");
    });
  });

  describe("getEmail", () => {
    it("returns Sue@gmail.com", () => {
      expect(new Intern("Sue", "3", "Sue@gmail.com", "Lynn").getEmail()).toBe("Sue@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("returns Lynn", () => {
      expect(new Intern("Sue", "3", "Sue@gmail.com", "Lynn").getSchool()).toBe("Lynn");
    });
  });

  describe("getRole", () => {
    it("returns Intern", () => {
      expect(new Intern("Sue", "3", "Sue@gmail.com", "Lynn").getRole()).toBe("Intern");
    });
  });
});