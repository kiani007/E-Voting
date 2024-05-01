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
      <Box>
        <Typography variant="h6">Electoral Result Matrix</Typography>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Candidate</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.candidateName}</TableCell>
                  <TableCell>{candidate.candidateParty}</TableCell>
                  <TableCell>{candidate.candidateVote}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Chart */}
        <Typography variant="h6">Vote Distribution</Typography>
        <Box sx={{ height: 300, width: '100%' }}>
          <BarChart width={600} height={300} data={data.slice(0, 5)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="candidateName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="candidateVote" fill="#8884d8" />
          </BarChart>
        </Box>
        <Typography>
          Leading Candidate: {leadingCandidate.candidateName} (
          {leadingCandidate.candidateParty}) with{' '}
          {leadingCandidate.candidateVote} votes
        </Typography>
        <Typography variant="h6" sx={{ mb: 6 }}>
          Total Votes Cast:{' '}
          {data.reduce((acc, curr) => acc + curr.candidateVote, 0)}
        </Typography>
      </Box>
    </Container>
  );
};

export default ElectoralResult;
