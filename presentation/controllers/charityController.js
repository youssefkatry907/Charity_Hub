const CharityRepo = require('../../infrastructure/repositories/charityRepo.js');
const CharityService = require('../../application/services/charityService');
const createCharityDTO = require('../../application/dtos/createCharityDTO');
const charityResponseDTO = require('../../application/dtos/charityResponseDTO');

const charityRepo = new CharityRepo();
const charityService = new CharityService(charityRepo);

module.exports = {
  createCharity: async (req, res) => {
    try {
      const requestDTO = createCharityDTO.fromRequest(req.body);
      const charity = await charityService.createCharity(requestDTO);

      const responseDTO = charityResponseDTO.fromDomain(charity);
      res.status(201).json({
        success: true,
        statusCode: 201,  
        message: 'Charity created successfully',
        data: responseDTO,
      });
    } catch (err) {
      res.status(400).json({ 
        success: false,
        statusCode: 400,
        message: err.message,
       });
    }
  },

  getCharity: async (req, res) => {
    try {
      const charity = await charityService.getCharityById(req.query.charityId);

      if (!charity) {
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'Charity not found',
        });
      }

      const responseDTO = charityResponseDTO.fromDomain(charity);
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Charity retrieved successfully',
        data: responseDTO,
      });
    } catch (err) {
      res.status(500).json({ 
        success: false,
        statusCode: 400,
        message: err.message,
       });
    }
  },
};
