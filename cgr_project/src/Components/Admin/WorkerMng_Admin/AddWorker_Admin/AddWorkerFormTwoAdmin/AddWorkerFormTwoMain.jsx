import React from 'react';
import LeftNav from '../../../Dashboard_Admin/Include/LeftNav';
import TopNav from '../../../Dashboard_Admin/Include/TopNav';
import AddWorkerFormTwoAdmin from './AddWorkerFormTwoAdmin';

const AddWorkerFormTwoMain = () => {
  return (
    <>
    <TopNav />
     <LeftNav /><br /><br />
    <AddWorkerFormTwoAdmin />
    </>
  );
};

export default AddWorkerFormTwoMain;
