create database cgr;
use cgr;

create table addworker(Id int primary key auto_increment,EmpId varchar(100) not null,CompanyName varchar(200) not null,FullName varchar(200),
ExpYear varchar(200),ContNum varchar(20),BankAccNum varchar(200),SelectFeilds varchar(200),Department varchar(200),Age varchar(200),Gender varchar(100),
EmergencyContNum varchar(200),PanTaxId varchar(200),SelectRole varchar(200),FinNo varchar(200),DOA varchar(200),DOI varchar(200),DO_Onboard varchar(200),
WP_No varchar(200),PP_No varchar(200),DOB varchar(200),DO_ThumbPrint varchar(200),DO_Renewal varchar(200),WP_Expiry varchar(200),PP_Expiry varchar(200),
SelectCourse varchar(200),Category varchar(200),Cert_No varchar(200),DOE varchar(200),SMSE varchar(200),Rigger varchar(200),ssrc_sssrc varchar(200),
Levels varchar(200),DOI varchar(200),BalanceDays varchar(200),WAHA_M varchar(200),Singnel_Man varchar(200),CurrentTime DATETIME DEFAULT CURRENT_TIMESTAMP );
