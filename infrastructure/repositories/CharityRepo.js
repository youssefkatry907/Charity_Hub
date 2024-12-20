const CharityRepository = require('../../domain/interfaces/charityRepository');
const CharityModel = require('../db/models/CharityModel');

class CharityRepo extends CharityRepository {
  async create(charity) {
    return await CharityModel.create(charity);
  }

  async findById(id) {
    return await CharityModel.findById(id);
  }

  async findAll() {
    return await CharityModel.find();
  }

  async update(id, updateData) {
    return await CharityModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await CharityModel.findByIdAndDelete(id);
  }
}

module.exports = CharityRepo;
