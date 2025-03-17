create database cgr;
use cgr;

-- create table addworker(Id int primary key auto_increment,EmpId varchar(100) not null,CompanyName varchar(200) not null,FullName varchar(200),
-- ExpYear varchar(200),ContNum varchar(20),BankAccNum varchar(200),SelectFeilds varchar(200),Department varchar(200),Age varchar(200),Gender varchar(100),
-- EmergencyContNum varchar(200),PanTaxId varchar(200),SelectRole varchar(200),FinNo varchar(200),DOA varchar(200),DOI varchar(200),DO_Onboard varchar(200),
-- WP_No varchar(200),PP_No varchar(200),DOB varchar(200),DO_ThumbPrint varchar(200),DO_Renewal varchar(200),WP_Expiry varchar(200),PP_Expiry varchar(200),
-- SelectCourse varchar(200),Category varchar(200),Cert_No varchar(200),DOE varchar(200),SMSE varchar(200),Rigger varchar(200),ssrc_sssrc varchar(200),
-- Levels varchar(200),DOI_Two varchar(200),BalanceDays varchar(200),WAHA_M varchar(200),Singnel_Man varchar(200),CurrentTime DATETIME DEFAULT CURRENT_TIMESTAMP );


CREATE TABLE addworker (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    EmpId VARCHAR(100) NOT NULL,
    EmpPosition VARCHAR(100) NOT NULL,
    CompanyName VARCHAR(200) NOT NULL,
    FirstName VARCHAR(200) NOT NULL,
	LastName VARCHAR(200) NOT NULL,
    ExpYear VARCHAR(200) NULL,
    ContNum VARCHAR(20) NULL,
    BankAccNum VARCHAR(200) NULL,
    SelectFeilds VARCHAR(200) NULL,
    Department VARCHAR(200) NULL,
    Age VARCHAR(200) NULL,
    Gender VARCHAR(100) NULL,
    EmergencyContNum VARCHAR(200) NULL,
    PanTaxId VARCHAR(200) NULL,
    SelectRole VARCHAR(200) NULL,
    FinNo VARCHAR(200) NULL,
    DOA VARCHAR(200) NULL,
    DOI VARCHAR(200) NULL,
    DO_Onboard VARCHAR(200) NULL,
    WP_No VARCHAR(200) NULL,
    PP_No VARCHAR(200) NULL,
    DOB VARCHAR(200) NULL,
    DO_ThumbPrint VARCHAR(200) NULL,
    DO_Renewal VARCHAR(200) NULL,
    WP_Expiry VARCHAR(200) NULL,
    PP_Expiry VARCHAR(200) NULL,
    SelectCourse VARCHAR(200) NULL,
    Category VARCHAR(200) NULL,
    Cert_No VARCHAR(200) NULL,
    DOE VARCHAR(200) NULL,
    SMSE VARCHAR(200) NULL,
    Rigger VARCHAR(200) NULL,
    ssrc_sssrc VARCHAR(200) NULL,
    Levels VARCHAR(200) NULL,
    DOI_Two VARCHAR(200) NULL,
    BalanceDays VARCHAR(200) NULL,
    WAHA_M VARCHAR(200) NULL,
    Singnel_Man VARCHAR(200) NULL,
    CurrentTime DATETIME DEFAULT CURRENT_TIMESTAMP
);


drop table addworker;

select * from addworker;
