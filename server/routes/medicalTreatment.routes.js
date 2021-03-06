import { Router } from 'express';
import * as MedicalTreatmentController from '../controllers/medicalTreatment.controller';

const router = new Router();

// Get all medicalTreatments
router.route('/medicalTreatments').get(MedicalTreatmentController.getMedicalTreatments);

// Get medicalTreatments by patientID
router.route('/medicalTreatments/:patientID').get(MedicalTreatmentController.getMedicalTreatmentByPatientID);

// Add a new MedicalTreatment
router.route('/medicalTreatments').post(MedicalTreatmentController.addMedicalTreatment);

// Edit a medicalTreatment by cuid
router.route('/medicalTreatments/:cuid').post(MedicalTreatmentController.editMedicalTreatment);

// Delete a medicalTreatment by cuid
router.route('/medicalTreatments/:cuid').delete(MedicalTreatmentController.deleteMedicalTreatment);

export default router;
