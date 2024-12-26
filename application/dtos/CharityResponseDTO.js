class CharityResponseDTO {
    constructor({ name, description, goal, raised, createdAt }) {
      this.name = name;
      this.description = description;
      this.goal = goal;
      this.raised = raised;
      this.createdAt = createdAt;
    }
  
    static fromDomain(charity) {
      return new CharityResponseDTO({
        name: charity.name,
        description: charity.description,
        goal: charity.goal,
        raised: charity.raised,
        createdAt: charity.createdAt,
      });
    }
  }
  
module.exports = CharityResponseDTO;  