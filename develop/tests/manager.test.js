const Manager = require("../workers/manager");

describe("Manager subclass", () => {
  describe("getName", () => {
    it("returns Jeff", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com").getName()).toBe("Jeff");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com").getId()).toBe("4");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com").getEmail()).toBe("Jeff@gmail.com");
    });
  });

  describe("getRole", () => {
    it("returns Manager", () => {
      expect(new Manager("Jeff", "4", "Jeff@gmail.com").getRole()).toBe("Manager");
    });
  });
});