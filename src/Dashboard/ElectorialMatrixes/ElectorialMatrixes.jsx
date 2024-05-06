import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Container,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { electionData as data } from './data.js';

const ElectoralResult = () => {
  // Calculate leading candidate
  const leadingCandidate = data.reduce((prev, current) =>
    prev.candidateVote > current.candidateVote ? prev : current
  );

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Electoral Result Matrix
        </Typography>
        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Candidate</TableCell>
                <TableCell align="center">Party</TableCell>
                <TableCell align="center">Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell align="center">
                    {candidate.candidateName}
                  </TableCell>
                  <TableCell align="center">
                    {candidate.candidateParty}
                  </TableCell>
                  <TableCell align="center">
                    {candidate.candidateVote}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Vote Distribution
        </Typography>
        {/* Chart */}
        <Box
          sx={{
            height: 400,
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="candidateName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="candidateVote" fill="#8884d8" />
          </BarChart>
        </Box>
      </Box>

      <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
        Leading Candidate: {leadingCandidate.candidateName} (
        {leadingCandidate.candidateParty}) with {leadingCandidate.candidateVote}{' '}
        votes
      </Typography>
      <Typography variant="h5" align="center">
        Total Votes Cast:{' '}
        {data.reduce((acc, curr) => acc + curr.candidateVote, 0)}
      </Typography>
    </Container>
  );
};

export default ElectoralResult;
