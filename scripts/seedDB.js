const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/digitaldoctor');



const prescriptionSeed = [
  {
    prescriptionName: 'Oxilofrine',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '12/2/19',
    doctorprescibed: 'Dr. Fadi Madain',
    generalinstructions: 'Take about 2 before you eat. and try to overdose by the end of the day.',
  },
  {
    prescriptionName: 'prednisolone',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '12/2/19',
    doctorprescibed: 'Dr. Micheal Zaccaria',
    generalinstructions: 'Prescription dose increased. Take with meds, if youre trying to overdose, just take the whole bottle.',
  },
  {
    prescriptionName: 'singulair',
    amount: '5mL disolvable tablet',
    timesaday: 1,
    dateprescribed: '12/2/19',
    doctorprescibed: 'Dr. Fadi Madain',
    generalinstructions: 'Take before you sleep if youre trying to have some bad dreams.',
  },
  {
    prescriptionName: 'qnasl',
    amount: '1 spray each nostril',
    timesaday: 1,
    dateprescribed: '12/2/19',
    doctorprescibed: 'Dr. Micheal Zaccaria',
    generalinstructions: 'You can figure it out.',
  },
];

db.Prescription
  .remove({})
  .then(() => db.Prescription.collection.insertMany(prescriptionSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' prescription list records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

