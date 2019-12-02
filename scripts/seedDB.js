const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');



const prescriptionSeed = [
  {
    prescriptionName: 'lansiprosole',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '10/16/16',
    doctorprescibed: 'Dr. Kristin King',
    generalinstructions: 'Take half hour before breakfast and dinner.',
  },
  {
    prescriptionName: 'prednisolone',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '10/16/17',
    doctorprescibed: 'Dr. Kristin King',
    generalinstructions: 'Prescription dose increased. Take with meds, be careful about taking too close to bed time.',
  },
  {
    prescriptionName: 'singulair',
    amount: '5mL disolvable tablet',
    timesaday: 1,
    dateprescribed: '10/16/17',
    doctorprescibed: 'Dr. Larry Lungs',
    generalinstructions: 'Take at bed time. Can cause night-terrors',
  },
  {
    prescriptionName: 'qnasl',
    amount: '1 spray each nostril',
    timesaday: 1,
    dateprescribed: '10/16/18',
    doctorprescibed: 'Dr. Sam Sneezy',
    generalinstructions: 'Difficult to take, hurts at first. Do in the morning 15minutes after any other nose sprays',
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

// const appointmentSeed = [
//   {
//     name: 'Appointment1',
//     date: '03/17/2018',
//     time: '11:30am',
//     doctor: 'Dr. Kristin King',
//     clinic: 'Clinic C',
//   },
//   {
//     name: 'Appointment2',
//     date: '03/18/2018',
//     time: '11:30am',
//     doctor: 'Dr. Sam Sneezy',
//     clinic: 'Clinic B',
//   },
//   {
//     name: 'Appointment3',
//     date: '03/19/2018',
//     time: '11:30am',
//     doctor: 'Dr. O',
//     clinic: 'Clinic C',
//   },
// ];

// db.Appointment
//   .remove({})
//   .then(() => db.Appointment.collection.insertMany(appointmentSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' appointment records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const doctorSeed = [
//   {
//     firstname: 'Sally',
//     lastname: 'Stomach',
//     clinic: 'Clinic A',
//     phone: '666-666-6666',
//   },
//   {
//     firstname: 'Larry',
//     lastname: 'Lungs',
//     clinic: 'Clinic B',
//     phone: '555-555-5555',
//   },
//   {
//     firstname: 'Kristin',
//     lastname: 'King',
//     clinic: 'Clinic C',
//     phone: '444-444-4444',
//   },
// ];

// db.Doctor
//   .remove({})
//   .then(() => db.Doctor.collection.insertMany(doctorSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' doctors inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const attachmentSeed = [
//   {
//     doctorname: 'Kristin King',
//     contentdate: '03/17/2018',
//     attachmentsubject: 'chest x-ray',
//   },
// ];

// db.Attachments
//   .remove({})
//   .then(() => db.Attachments.collection.insertMany(attachmentSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' attachment inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
