class CharityResponseDTO {
    constructor({ id, name, description, goal, raised, createdAt }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.goal = goal;
      this.raised = raised;
      this.createdAt = createdAt;
    }
  
    static fromDomain(charity) {
      return new CharityResponseDTO({
        id: charity.id,
        name: charity.name,
        description: charity.description,
        goal: charity.goal,
        raised: charity.raised,
        createdAt: charity.createdAt,
      });
    }
  }
  
module.exports = CharityResponseDTO;  