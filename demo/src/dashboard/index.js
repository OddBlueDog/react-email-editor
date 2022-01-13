import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';

import DesignList from './DesignList';
import DesignEdit from './DesignEdit';

const Dashboard = () => {
  const match = useMatch();

  return (
    <Routes>
      <Route path={match.path} exact={true} element={<DesignList />} />
      <Route path={`${match.path}/new`} exact={true} element={<DesignEdit />} />
      <Route
        path={`${match.path}/edit/:designId`}
        exact={true}
        element={<DesignEdit />}
      />
    </Routes>
  );
};

export default Dashboard;
