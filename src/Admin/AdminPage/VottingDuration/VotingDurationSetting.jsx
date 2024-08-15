import React, { useEffect, useState } from 'react';
import {
    Container,
    Grid,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    CircularProgress,
} from '@mui/material';
import { useApiCall } from '../../hooks/index.js';
import {convertTime} from "../../../utils/helpers/helpers.js";

const VotingDurationSetting = () => {
    const [duration, setDuration] = useState(null);
    const { fetchData, error, loading } = useApiCall();

    useEffect(() => {
        const fetchDuration = async () => {
            try {
                const res = await fetchData('/duration/get-duration');
                if (res.status === 200) {
                    const {startTime, endTime} = res;
                    const scheduleTime = convertTime(startTime,endTime);
                    setDuration(scheduleTime);
                } else {
                    setDuration(null);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchDuration();
    }, []);

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        Voting Duration Setting
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ display: 'flex', backgroundColor: 'grey.200', borderRadius: '5px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                            <Typography variant="h5" align="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                                Voting Duration
                            </Typography>

                            <TimeForm duration={duration} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

const TimeForm = ({duration}) => {
    const { fetchData, error, loading } = useApiCall();
    const [formData, setFormData] = useState({
        date: '',
        startHour: '10AM',
        startMinute: '0',
        endHour: '2PM',
        endMinute: '30',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetchData('/duration/add-duration', 'POST', formData);
            console.log('Form Data:', res);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        if (duration!==null){
            setFormData(duration)
        }
    },[duration])

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Schedule Form
            </Typography>
            {loading && <CircularProgress color="secondary" />}
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            Date:
                        </Typography>
                        <TextField
                            type="date"
                            label="Date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            Start Hour:
                        </Typography>
                        <Select
                            label="Start Hour"
                            name="startHour"
                            value={formData.startHour}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            {generateTimeOptions('AM')}
                            {generateTimeOptions('PM')}
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            Start Min:
                        </Typography>
                        <Select
                            label="Start Minute"
                            name="startMinute"
                            value={formData.startMinute}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            {generateMinuteOptions()}
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            End Hour:
                        </Typography>
                        <Select
                            label="End Hour"
                            name="endHour"
                            value={formData.endHour}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            {generateTimeOptions('AM')}
                            {generateTimeOptions('PM')}
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            End Min:
                        </Typography>
                        <Select
                            label="End Minute"
                            name="endMinute"
                            value={formData.endMinute}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            {generateMinuteOptions()}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

// Helper functions
const generateTimeOptions = (period) => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
        options.push(
            <MenuItem key={i} value={`${i}${period}`}>
                {i} {period}
            </MenuItem>
        );
    }
    return options;
};

const generateMinuteOptions = () => {
    const options = ['0', '15', '30', '45', '50', '55'];
    return options.map((minute) => (
        <MenuItem key={minute} value={minute}>
            {minute.padStart(2, '0')}
        </MenuItem>
    ));
};

export default VotingDurationSetting;
