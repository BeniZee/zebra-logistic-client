import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './TimeSheet.css';

const TimeSheet = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('timesheetEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: '',
    endTime: '',
    type: 'regular', // regular, overtime, holiday
    description: '',
  });
  const [summary, setSummary] = useState({
    regularHours: 0,
    overtimeHours: 0,
    holidayHours: 0,
    totalHours: 0,
  });

  useEffect(() => {
    localStorage.setItem('timesheetEntries', JSON.stringify(entries));
    calculateSummary();
  }, [entries]);

  const calculateHours = (startTime, endTime) => {
    if (!startTime || !endTime) return 0;
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    return (end - start) / (1000 * 60 * 60);
  };

  const calculateSummary = () => {
    const summary = entries.reduce((acc, entry) => {
      const hours = calculateHours(entry.startTime, entry.endTime);
      switch (entry.type) {
        case 'regular':
          acc.regularHours += hours;
          break;
        case 'overtime':
          acc.overtimeHours += hours;
          break;
        case 'holiday':
          acc.holidayHours += hours;
          break;
        default:
          break;
      }
      acc.totalHours += hours;
      return acc;
    }, {
      regularHours: 0,
      overtimeHours: 0,
      holidayHours: 0,
      totalHours: 0,
    });

    setSummary(summary);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.date || !newEntry.startTime || !newEntry.endTime) {
      alert('Please fill in all required fields');
      return;
    }

    const entry = {
      ...newEntry,
      id: Date.now(),
      hours: calculateHours(newEntry.startTime, newEntry.endTime),
    };

    setEntries(entries => [...entries, entry]);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      startTime: '',
      endTime: '',
      type: 'regular',
      description: '',
    });
  };

  const deleteEntry = (id) => {
    setEntries(entries => entries.filter(entry => entry.id !== id));
  };

  return (
    <Container maxWidth="lg" className="timesheet-container">
      <Typography variant="h4" className="timesheet-title">
        Time Sheet
      </Typography>

      <Paper className="timesheet-form">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="time"
              label="Start Time"
              value={newEntry.startTime}
              onChange={(e) => setNewEntry({ ...newEntry, startTime: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="time"
              label="End Time"
              value={newEntry.endTime}
              onChange={(e) => setNewEntry({ ...newEntry, endTime: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={newEntry.type}
                onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value })}
                label="Type"
              >
                <MenuItem value="regular">Regular Hours</MenuItem>
                <MenuItem value="overtime">Overtime</MenuItem>
                <MenuItem value="holiday">Holiday</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={newEntry.description}
              onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleSubmit}
              fullWidth
            >
              Add Entry
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Box className="timesheet-summary">
        <Typography variant="h6">Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Regular Hours</Typography>
              <Typography variant="h4">{summary.regularHours.toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Overtime Hours</Typography>
              <Typography variant="h4">{summary.overtimeHours.toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Holiday Hours</Typography>
              <Typography variant="h4">{summary.holidayHours.toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Total Hours</Typography>
              <Typography variant="h4">{summary.totalHours.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper} className="timesheet-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.startTime}</TableCell>
                <TableCell>{entry.endTime}</TableCell>
                <TableCell>{entry.hours.toFixed(2)}</TableCell>
                <TableCell>{entry.type}</TableCell>
                <TableCell>{entry.description}</TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => deleteEntry(entry.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TimeSheet; 