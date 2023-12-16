import React from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

const Modules = ({ selectedModule }) => {
  return (
    <div className="modules">
      {selectedModule === 'User Form' && <UserForm />}
      {selectedModule === 'User Table' && <UserTable />}
    </div>
  );
};

export default Modules;
