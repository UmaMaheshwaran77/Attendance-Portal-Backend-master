const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const attendanceController = require('../controllers/attendance.controller');
const { authenticateToken } = require('../utils/authMiddleware');

// Signup Endpoint
router.post('/register', userController.register);

// Login Endpoint
router.post('/login', userController.login);

router.get('/dashboard', authenticateToken, userController.dashboard);

// Attendance
router.post('/attendance', authenticateToken, attendanceController.create);

router.get('/attendance', authenticateToken, attendanceController.read);
router.get('/attendance/:id', authenticateToken, attendanceController.readById);
// Route for updating attendance record
router.post('/attendance/:id', authenticateToken, attendanceController.update);

// Route for deleting attendance record
router.delete('/attendance/:id', authenticateToken, attendanceController.delete);

module.exports = router;