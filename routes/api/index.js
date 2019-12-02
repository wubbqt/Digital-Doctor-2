const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const appointmentRoutes = require('./appointments');
const doctorRoutes = require('./doctors');
const clinicRoutes = require('./clinics');
const logRoutes = require('./logs');
const prescriptionRoutes = require('./prescriptions');

module.exports = function(passport){
    router.use('/symptoms', symptomRoutes());
    router.use('/doctors', doctorRoutes());
    router.use('/logs', logRoutes());
    router.use('/clinics', clinicRoutes());
    router.use('/prescriptions', prescriptionRoutes());

    return router;
}

