import React from 'react';
import LeftNav from '../../Dashboard_Admin/Include/LeftNav';
import TopNav from '../../Dashboard_Admin/Include/TopNav';
import ProjectMngDashRight from './Include/ProjectMngDashRight';


const ProjectMngDash = () => {
  return (
    <>
    <TopNav />
    <LeftNav /><br /><br />
    <ProjectMngDashRight />
    </>
  );
};

export default ProjectMngDash;
