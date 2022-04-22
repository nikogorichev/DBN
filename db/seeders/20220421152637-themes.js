'use strict';
const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    let themeQ = await fs.readFile(path.join(process.env.PWD, 'themeQA','themQ.txt'),'utf-8');
 
    let themeQA = themeQ.split('\n').filter((el) => el.length > 1)
    
    for(let i = 0; i < themeQA.length;i++){
     
        await queryInterface.bulkInsert('Themes', [{
          title: themeQA[i],
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {})
      }
    
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
