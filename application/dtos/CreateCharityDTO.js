class CreateCharityDTO {
    constructor({ name, description, goal }) {
      this.name = name;
      this.description = description;
      this.goal = goal;
    }
  
    static fromRequest(requestBody) {
      const { name, description, goal } = requestBody;
      if (!name || !goal) throw new Error("Name and goal are required");
      return new CreateCharityDTO({ name, description, goal });
    }
  }
  
  module.exports = CreateCharityDTO;