import React from 'react';
import LeftNav from '../../Dashboard_Admin/Include/LeftNav';
import TopNav from '../../Dashboard_Admin/Include/TopNav';
import AddWorkerFormOneAdmin from './AddWorkerFormOneAdmin/AddWorkerFormOneAdmin';

const AddWorkerAdmin = () => {
  return (
    <>
    <TopNav />
     <LeftNav /><br /><br />
    <AddWorkerFormOneAdmin />
    </>
  );
};

export default AddWorkerAdmin;
