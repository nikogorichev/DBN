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

     let themeQ = await fs.readFile(path.join(process.env.PWD, 'themeQA','them.txt'),'utf-8');
     let quesQ = await fs.readFile(path.join(process.env.PWD, 'themeQA','questions.txt'),'utf-8');
     let answQ = await fs.readFile(path.join(process.env.PWD, 'themeQA','answers.txt'),'utf-8');
     let themeQA = themeQ.split('\n').filter((el) => el.length > 1)
     let quesQA = quesQ.split('\n').filter((el) => el.length > 1)
     let answQA = answQ.split('\n').filter((el) => el.length > 1)

     

     for(let i = 0; i < themeQA.length;i+=1){
       if(themeQA[i] === 'Еда'){
         themeQA[i] = 1
       } else if (themeQA[i] === 'Путушествия'){
         themeQA[i] = 2
       } else {
        themeQA[i] = 3
       }
      await queryInterface.bulkInsert('Questions', [{
        id_theme: themeQA[i],
        quest: quesQA[i],
        answer: answQA[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {})
      };

    

        // for(let i = 0; i < answQA.length;i+=1){
        // await queryInterface.bulkInsert('Questions', [{
        //     answer: answQA[i],
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //   }], {})
        //   }
      
     
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
