import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';

import DesignList from './DesignList';
import DesignEdit from './DesignEdit';

const Dashboard = () => {
  const match = useMatch('/dashboard');

  return (
    <Routes>
      <Route path={`/`} exact={true} element={<DesignList />} />
      <Route path={`new`} exact={true} element={<DesignEdit />} />
      <Route
        path={`/edit/:designId`}
        exact={true}
        element={<DesignEdit />}
      />
    </Routes>
  );
};

export default Dashboard;
