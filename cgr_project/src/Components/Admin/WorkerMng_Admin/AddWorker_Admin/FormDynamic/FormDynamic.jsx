import React from 'react';
import LeftNav from '../../../Dashboard_Admin/Include/LeftNav';
import TopNav from '../../../Dashboard_Admin/Include/TopNav';
import AddOptions from './Include/AddOptions/AddOptions';


const FormDynamic = () => {
  return (
    <>
    <TopNav />
    <LeftNav /><br /><br />
    <AddOptions />
    </>
  );
};

export default FormDynamic;
