const Engineer = require("../workers/engineer");

describe("Engineer subclass", () => {
  describe("getName", () => {
    it("returns Dave", () => {
      expect(new Engineer("Dave", "2", "Dave@gmail.com", "Davegithub").getName()).toBe("Dave");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Engineer("Dave", "2", "Dave@gmail.com", "Davegithub").getId()).toBe("2");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Engineer("Dave", "2", "Dave@gmail.com", "Davegithub").getEmail()).toBe("Dave@gmail.com");
    });
  });

  describe("getGithub", () => {
    it("returns Davegithub", () => {
      expect(new Engineer("Dave", "2", "Dave@gmail.com", "Davegithub").getGithub()).toBe("Davegithub");
    });
  });

  describe("getRole", () => {
    it("returns Engineer", () => {
      expect(new Engineer("Dave", "2", "Dave@gmail.com", "Davegithub").getRole()).toBe("Engineer");
    });
  });
});