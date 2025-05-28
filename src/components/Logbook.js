import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format, startOfWeek, endOfWeek, parseISO, isWithinInterval } from 'date-fns';
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
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import './Logbook.css';

// PDF Document Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a237e',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    borderBottomStyle: 'solid',
    minHeight: 30,
  },
  tableHeader: {
    backgroundColor: '#1a237e',
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
    flex: 1,
  },
  tableCell: {
    padding: 5,
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: 'grey',
    fontSize: 10,
  },
});

const Logbook = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('logbookEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: '',
    endTime: '',
    status: 'driving', // driving, on-duty, off-duty, sleeper
    location: '',
    notes: '',
  });
  const [warnings, setWarnings] = useState([]);
  const [totalHours, setTotalHours] = useState(0);
  const [view, setView] = useState('daily'); // 'daily', 'weekly', 'monthly'
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [stats, setStats] = useState({
    dailyAverage: 0,
    weeklyTotal: 0,
    monthlyTotal: 0,
    maxHoursDay: 0,
    maxHoursWeek: 0
  });

  // Constants for validation
  const MAX_HOURS_PER_DAY = 14;
  const MAX_HOURS_PER_WEEK = 70;

  useEffect(() => {
    localStorage.setItem('logbookEntries', JSON.stringify(entries));
    calculateTotalHours();
    calculateStats();
  }, [entries]);

  const calculateStats = () => {
    if (entries.length === 0) return;

    const today = new Date();
    const weekStart = startOfWeek(today);
    const weekEnd = endOfWeek(today);

    // Calculate daily average
    const dailyAverage = totalHours / entries.length;

    // Calculate weekly total
    const weeklyEntries = entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, { start: weekStart, end: weekEnd });
    });
    const weeklyTotal = weeklyEntries.reduce((sum, entry) => sum + parseFloat(entry.totalHours), 0);

    // Calculate monthly total
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const monthlyEntries = entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, { start: monthStart, end: monthEnd });
    });
    const monthlyTotal = monthlyEntries.reduce((sum, entry) => sum + parseFloat(entry.totalHours), 0);

    // Calculate max hours per day
    const maxHoursDay = Math.max(...entries.map(entry => parseFloat(entry.totalHours)));

    // Calculate max hours per week
    const maxHoursWeek = Math.max(...weeklyEntries.map(entry => parseFloat(entry.totalHours)));

    setStats({
      dailyAverage: dailyAverage.toFixed(2),
      weeklyTotal: weeklyTotal.toFixed(2),
      monthlyTotal: monthlyTotal.toFixed(2),
      maxHoursDay,
      maxHoursWeek
    });
  };

  const calculateTotalHours = () => {
    const total = entries.reduce((sum, entry) => {
      const start = new Date(`2000-01-01T${entry.startTime}`);
      const end = new Date(`2000-01-01T${entry.endTime}`);
      const breakHours = parseFloat(entry.breakDuration) || 0;
      const hours = (end - start) / (1000 * 60 * 60) - breakHours;
      return sum + (hours > 0 ? hours : 0);
    }, 0);
    setTotalHours(total.toFixed(2));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateHours = (entry) => {
    const hours = calculateEntryHours(entry);
    
    // Check daily limit
    if (hours > MAX_HOURS_PER_DAY) {
      alert(`Warning: Entry exceeds maximum daily hours (${MAX_HOURS_PER_DAY} hours)`);
      return false;
    }

    // Check weekly limit
    const weekStart = startOfWeek(parseISO(entry.date));
    const weekEnd = endOfWeek(parseISO(entry.date));
    const weeklyEntries = entries.filter(e => {
      const entryDate = parseISO(e.date);
      return isWithinInterval(entryDate, { start: weekStart, end: weekEnd });
    });
    const weeklyTotal = weeklyEntries.reduce((sum, e) => sum + parseFloat(e.totalHours), 0) + parseFloat(hours);
    
    if (weeklyTotal > MAX_HOURS_PER_WEEK) {
      alert(`Warning: Entry would exceed maximum weekly hours (${MAX_HOURS_PER_WEEK} hours)`);
      return false;
    }

    return true;
  };

  const calculateHours = (startTime, endTime) => {
    if (!startTime || !endTime) return 0;
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    return (end - start) / (1000 * 60 * 60);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.date || !newEntry.startTime || !newEntry.endTime) {
      alert('Please fill in all required fields');
      return;
    }

    if (!validateHours(newEntry)) {
      return;
    }

    const entry = {
      ...newEntry,
      id: Date.now(),
      totalHours: calculateEntryHours(newEntry)
    };

    setEntries(entries => [...entries, entry]);
    setWarnings(checkHoursOfService([...entries, entry]));
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      startTime: '',
      endTime: '',
      status: 'driving',
      location: '',
      notes: '',
    });
  };

  const calculateEntryHours = (entry) => {
    const start = new Date(`2000-01-01T${entry.startTime}`);
    const end = new Date(`2000-01-01T${entry.endTime}`);
    const breakHours = parseFloat(entry.breakDuration) || 0;
    const hours = (end - start) / (1000 * 60 * 60) - breakHours;
    return hours > 0 ? hours.toFixed(2) : '0.00';
  };

  const deleteEntry = (id) => {
    setEntries(entries => entries.filter(entry => entry.id !== id));
    setWarnings(checkHoursOfService(entries.filter(entry => entry.id !== id)));
  };

  const filterEntries = () => {
    if (!dateRange.start || !dateRange.end) return entries;

    return entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, {
        start: parseISO(dateRange.start),
        end: parseISO(dateRange.end)
      });
    });
  };

  const getFilteredEntries = () => {
    const filtered = filterEntries();
    
    switch (view) {
      case 'weekly':
        return groupEntriesByWeek(filtered);
      case 'monthly':
        return groupEntriesByMonth(filtered);
      default:
        return filtered;
    }
  };

  const groupEntriesByWeek = (entries) => {
    const grouped = {};
    entries.forEach(entry => {
      const weekStart = format(startOfWeek(parseISO(entry.date)), 'yyyy-MM-dd');
      if (!grouped[weekStart]) {
        grouped[weekStart] = [];
      }
      grouped[weekStart].push(entry);
    });
    return grouped;
  };

  const groupEntriesByMonth = (entries) => {
    const grouped = {};
    entries.forEach(entry => {
      const monthStart = format(parseISO(entry.date), 'yyyy-MM');
      if (!grouped[monthStart]) {
        grouped[monthStart] = [];
      }
      grouped[monthStart].push(entry);
    });
    return grouped;
  };

  const renderEntries = () => {
    const filteredEntries = getFilteredEntries();

    if (view === 'daily') {
      return filteredEntries.map(entry => (
        <div key={entry.id} className="entry-card">
          <div className="entry-header">
            <h4>{entry.date}</h4>
            <span className="entry-hours">{entry.totalHours} hours</span>
          </div>
          <div className="entry-details">
            <p><strong>Start:</strong> {entry.startTime}</p>
            <p><strong>End:</strong> {entry.endTime}</p>
            {entry.breakDuration > 0 && (
              <p><strong>Break:</strong> {entry.breakDuration} hours</p>
            )}
            {entry.notes && (
              <p><strong>Notes:</strong> {entry.notes}</p>
            )}
          </div>
          <button
            onClick={() => deleteEntry(entry.id)}
            className="button secondary-button"
          >
            Delete Entry
          </button>
        </div>
      ));
    }

    // Render weekly/monthly grouped entries
    return Object.entries(filteredEntries).map(([period, periodEntries]) => (
      <div key={period} className="period-group">
        <h3>{period}</h3>
        <div className="entries-list">
          {periodEntries.map(entry => (
            <div key={entry.id} className="entry-card">
              <div className="entry-header">
                <h4>{entry.date}</h4>
                <span className="entry-hours">{entry.totalHours} hours</span>
              </div>
              <div className="entry-details">
                <p><strong>Start:</strong> {entry.startTime}</p>
                <p><strong>End:</strong> {entry.endTime}</p>
                {entry.breakDuration > 0 && (
                  <p><strong>Break:</strong> {entry.breakDuration} hours</p>
                )}
                {entry.notes && (
                  <p><strong>Notes:</strong> {entry.notes}</p>
                )}
              </div>
              <button
                onClick={() => deleteEntry(entry.id)}
                className="button secondary-button"
              >
                Delete Entry
              </button>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const checkHoursOfService = (entries) => {
    const warnings = [];
    const today = new Date().toISOString().split('T')[0];
    
    // Calculate total driving time for the day
    const todayDrivingHours = entries
      .filter(entry => entry.date === today && entry.status === 'driving')
      .reduce((total, entry) => total + calculateHours(entry.startTime, entry.endTime), 0);

    // Check 11-hour driving limit
    if (todayDrivingHours > 11) {
      warnings.push('Warning: You have exceeded the 11-hour driving limit for today.');
    }

    // Check 14-hour on-duty limit
    const todayOnDutyHours = entries
      .filter(entry => entry.date === today && (entry.status === 'driving' || entry.status === 'on-duty'))
      .reduce((total, entry) => total + calculateHours(entry.startTime, entry.endTime), 0);

    if (todayOnDutyHours > 14) {
      warnings.push('Warning: You have exceeded the 14-hour on-duty limit for today.');
    }

    // Check 8-hour break requirement
    const lastEntry = entries[entries.length - 1];
    if (lastEntry && lastEntry.status !== 'off-duty' && lastEntry.status !== 'sleeper') {
      warnings.push('Reminder: You need 8 consecutive hours of off-duty or sleeper time.');
    }

    return warnings;
  };

  return (
    <Container maxWidth="lg" className="logbook-container">
      <Typography variant="h4" className="logbook-title">
        Driver's Logbook
      </Typography>

      {warnings.length > 0 && (
        <Box className="warnings-container">
          {warnings.map((warning, index) => (
            <Alert 
              key={index}
              severity="warning"
              icon={<WarningIcon />}
              className="warning-alert"
            >
              {warning}
            </Alert>
          ))}
        </Box>
      )}

      <Paper className="logbook-form">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              type="time"
              label="Start Time"
              value={newEntry.startTime}
              onChange={(e) => setNewEntry({ ...newEntry, startTime: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              type="time"
              label="End Time"
              value={newEntry.endTime}
              onChange={(e) => setNewEntry({ ...newEntry, endTime: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={newEntry.status}
                onChange={(e) => setNewEntry({ ...newEntry, status: e.target.value })}
                label="Status"
              >
                <MenuItem value="driving">Driving</MenuItem>
                <MenuItem value="on-duty">On Duty</MenuItem>
                <MenuItem value="off-duty">Off Duty</MenuItem>
                <MenuItem value="sleeper">Sleeper Berth</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Location"
              value={newEntry.location}
              onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Notes"
              value={newEntry.notes}
              onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
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

      <Box className="logbook-summary">
        <Typography variant="h6">Today's Summary</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Driving Hours</Typography>
              <Typography variant="h4">
                {entries
                  .filter(entry => 
                    entry.date === new Date().toISOString().split('T')[0] && 
                    entry.status === 'driving'
                  )
                  .reduce((total, entry) => total + calculateHours(entry.startTime, entry.endTime), 0)
                  .toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">On-Duty Hours</Typography>
              <Typography variant="h4">
                {entries
                  .filter(entry => 
                    entry.date === new Date().toISOString().split('T')[0] && 
                    (entry.status === 'driving' || entry.status === 'on-duty')
                  )
                  .reduce((total, entry) => total + calculateHours(entry.startTime, entry.endTime), 0)
                  .toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="summary-card">
              <Typography variant="subtitle1">Rest Hours</Typography>
              <Typography variant="h4">
                {entries
                  .filter(entry => 
                    entry.date === new Date().toISOString().split('T')[0] && 
                    (entry.status === 'off-duty' || entry.status === 'sleeper')
                  )
                  .reduce((total, entry) => total + calculateHours(entry.startTime, entry.endTime), 0)
                  .toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper} className="logbook-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.startTime}</TableCell>
                <TableCell>{entry.endTime}</TableCell>
                <TableCell>{entry.totalHours.toFixed(2)}</TableCell>
                <TableCell>{entry.status}</TableCell>
                <TableCell>{entry.location}</TableCell>
                <TableCell>{entry.notes}</TableCell>
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

// PDF Document Component
const LogbookPDF = ({ entries }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Driver Logbook</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Date</Text>
          <Text style={styles.tableHeader}>Start Time</Text>
          <Text style={styles.tableHeader}>End Time</Text>
          <Text style={styles.tableHeader}>Break</Text>
          <Text style={styles.tableHeader}>Total Hours</Text>
          <Text style={styles.tableHeader}>Notes</Text>
        </View>
        {entries.map(entry => (
          <View key={entry.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{entry.date}</Text>
            <Text style={styles.tableCell}>{entry.startTime}</Text>
            <Text style={styles.tableCell}>{entry.endTime}</Text>
            <Text style={styles.tableCell}>{entry.breakDuration}</Text>
            <Text style={styles.tableCell}>{entry.totalHours}</Text>
            <Text style={styles.tableCell}>{entry.notes}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.footer}>
        Generated on {format(new Date(), 'yyyy-MM-dd HH:mm')}
      </Text>
    </Page>
  </Document>
);

export default Logbook; 