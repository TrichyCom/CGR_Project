import React from 'react';
import LeftNav from '../Dashboard_Admin/Include/LeftNav';
import TopNav from '../Dashboard_Admin/Include/TopNav';

import WorkerMngRight from './Include/WorkerMngRight';

const WorkerMng_Admin = () => {
  return (
    <>
    <TopNav />
     <LeftNav /><br /><br />
     <WorkerMngRight />
    </>
  );
};

export default WorkerMng_Admin;
