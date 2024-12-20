class Charity {
    constructor({ id, name, description, goal, raised, createdAt }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.goal = goal;
      this.raised = raised || 0;
      this.createdAt = createdAt || new Date();
    }
  }
  
module.exports = Charity;