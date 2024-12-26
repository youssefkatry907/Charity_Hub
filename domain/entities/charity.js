class Charity {
  constructor({ name, description, goal, raised, createdAt }) {
    this.name = name;
    this.description = description;
    this.goal = goal;
    this.raised = raised || 0;
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Charity;
