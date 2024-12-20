const Charity = require('../../domain/entities/charity');

class CharityService {
  constructor(charityRepository) {
    this.charityRepository = charityRepository;
  }

  async createCharity(createCharityDTO) {
    const charity = new Charity({
      name: createCharityDTO.name,
      description: createCharityDTO.description,
      goal: createCharityDTO.goal,
    });

    return await this.charityRepository.create(charity);
  }

  async getCharityById(id) {
    return await this.charityRepository.findById(id);
  }

  async donateToCharity(id, amount) {
    const charity = await this.charityRepository.findById(id);
    if (!charity) throw new Error("Charity not found");

    charity.addDonation(amount);

    return await this.charityRepository.update(id, { raised: charity.raised });
  }
}

module.exports = CharityService;