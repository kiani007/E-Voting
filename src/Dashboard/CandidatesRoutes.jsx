import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { PresidentialElection } from './PresidentialElection';
import { PresidentialCandidates } from './PresidentialCandidates';

export const CandidatesRoutes = () => {
  return (
    <Routes>
      <Route path="/presidential-election" element={<PresidentialElection />} />
      <Route
        path="/presidential-election/:candidateId"
        element={<PresidentialCandidates />}
      />
      {/* <Route path="/*" element={<Navigate to="/presidential-election" />} /> */}
    </Routes>
  );
};

export default CandidatesRoutes;
