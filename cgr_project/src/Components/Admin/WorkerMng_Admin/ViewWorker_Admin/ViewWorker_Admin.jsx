import React from 'react';
import LeftNav from '../../Dashboard_Admin/Include/LeftNav';
import TopNav from '../../Dashboard_Admin/Include/TopNav';
import ViewWorkerForm from './Include/ViewWorkerForm';

const ViewWorker_Admin = () => {
  return (
    <>
    <TopNav />
    <LeftNav /><br /><br />
    <ViewWorkerForm />
    </>
  );
};

export default ViewWorker_Admin;
