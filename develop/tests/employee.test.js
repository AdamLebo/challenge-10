const Employee = require("../workers/employee");

describe("Employee class", () => {
  describe("getName", () => {
    it("returns John", () => {
      expect(new Employee("John", "1", "John@gmail").getName()).toBe("John");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Employee("John", "1", "John@gmail.com").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Employee("John", "1", "John@gmail.com").getEmail()).toBe("John@gmail.com");
    });
  });

  describe("getRole", () => {
    it("returns Employee", () => {
      expect(new Employee("John", "1", "John@gmail.com").getRole()).toBe("Employee");
    });
  });
});