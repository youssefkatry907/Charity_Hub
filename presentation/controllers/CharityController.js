const CharityRepo = require('../../infrastructure/repositories/CharityRepo');
const CharityService = require('../../application/services/CharityService');
const CreateCharityDTO = require('../../application/dtos/CreateCharityDTO');
const CharityResponseDTO = require('../../application/dtos/CharityResponseDTO');

const charityRepo = new CharityRepo();
const charityService = new CharityService(charityRepo);

module.exports = {
  createCharity: async (req, res) => {
    try {
      const createCharityDTO = CreateCharityDTO.fromRequest(req.body);

      const charity = await charityService.createCharity(createCharityDTO);

      const responseDTO = CharityResponseDTO.fromDomain(charity);
      res.status(201).json(responseDTO);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getCharity: async (req, res) => {
    try {
      const charity = await charityService.getCharityById(req.params.id);

      if (!charity) {
        return res.status(404).json({ error: 'Charity not found' });
      }

      const responseDTO = CharityResponseDTO.fromDomain(charity);
      res.status(200).json(responseDTO);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
