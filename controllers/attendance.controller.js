const User = require('../models/user.model');
const Attendance = require('../models/attendance.model');

// Create attendance record
exports.create = async (req, res) => {
  try {
    const { date, status, studentId } = req.body;
    const user_id = req.user.userId; 
    const attendance = new Attendance({ date, user_id, status, studentId });
    await attendance.save();
    res.status(201).json({ message: 'Attendance record created successfully', attendance });
  } catch (error) {
    console.error('Error creating attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all attendance records
exports.read = async (req, res) => {
  try {
    const user_id = req.user.userId; 
    const attendanceRecords = await Attendance.find({ user_id });
    res.json(attendanceRecords);
  } catch (error) {
    console.error('Error retrieving attendance records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get attendance record by ID
exports.readById = async (req, res) => {
  try {
    const attendanceRecord = await Attendance.findById(req.params.id);
    if (!attendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    const user_id_string = attendanceRecord.user_id.toString();
    if (user_id_string !== req.user.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    res.json(attendanceRecord);
  } catch (error) {
    console.error('Error retrieving attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update attendance record
exports.update = async (req, res) => {
  try {
    const { date, status, studentId } = req.body;
    const updatedAttendanceRecord = await Attendance.findById(req.params.id);
    if (!updatedAttendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    const user_id_string = updatedAttendanceRecord.user_id.toString();
    if (user_id_string !== req.user.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }
     updatedAttendanceRecord.date = date;
     updatedAttendanceRecord.studentId = studentId;
    updatedAttendanceRecord.status = status;
    await updatedAttendanceRecord.save();
    res.json({ message: 'Attendance record updated successfully', attendance: updatedAttendanceRecord });
  } catch (error) {
    console.error('Error updating attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete attendance record
exports.delete = async (req, res) => {
  try {
    const deletedAttendanceRecord = await Attendance.findById(req.params.id);
    if (!deletedAttendanceRecord) {
      return res.status(404).json({ error: 'Attendance record not found' });
    }
    const user_id_string = deletedAttendanceRecord.user_id.toString();
    if (user_id_string !== req.user.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
