const Manager = require("../workers/manager");

describe("Manager subclass", () => {
  describe("getName", () => {
    it("returns Jeff", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com").getName()).toBe("Jeff");
    });
  });

  describe("getId", () => {
    it("returns 4", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com", "7").getId()).toBe("4");
    });
  });

  describe("getEmail", () => {
    it("returns Jeff@gmail.com", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com", "7").getEmail()).toBe("Jeff@gmail.com");
    });
  });

  describe("getRole", () => {
    it("returns Manager", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com", "7").getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber", () => {
    it("returns 7", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com", "7").getOfficeNumber()).toBe("7");
    });
  });
});