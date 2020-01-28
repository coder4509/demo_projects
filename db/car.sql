-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 26, 2020 at 08:33 PM
-- Server version: 5.7.28-0ubuntu0.16.04.2
-- PHP Version: 7.0.33-0ubuntu0.16.04.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `apptid` int(100) NOT NULL,
  `packettype` varchar(100) DEFAULT NULL,
  `appdate` date DEFAULT NULL,
  `apptime` varchar(100) DEFAULT NULL,
  `pickupanddrop` varchar(100) DEFAULT NULL,
  `carid` int(100) NOT NULL,
  `custid` int(11) NOT NULL,
  `supid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointments1`
--

CREATE TABLE `appointments1` (
  `appid` int(200) NOT NULL,
  `packettype` varchar(100) NOT NULL,
  `appdate` date NOT NULL,
  `apptime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pickupanddrop` varchar(100) NOT NULL,
  `carid` varchar(100) NOT NULL,
  `custid` int(100) NOT NULL,
  `supid` int(100) NOT NULL,
  `sup_name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments1`
--

INSERT INTO `appointments1` (`appid`, `packettype`, `appdate`, `apptime`, `pickupanddrop`, `carid`, `custid`, `supid`, `sup_name`, `status`) VALUES
(1, 'gold', '2019-12-04', '2019-12-07 15:01:15', 'yes', '1', 2, 2, 'ram', '');

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `billno` int(100) NOT NULL,
  `apptid` int(11) NOT NULL,
  `supid` int(11) NOT NULL,
  `price` double DEFAULT NULL,
  `addprice` double DEFAULT NULL,
  `totalprice` double DEFAULT NULL,
  `carid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cardetails`
--

CREATE TABLE `cardetails` (
  `carid` int(11) NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  `modelno` varchar(100) DEFAULT NULL,
  `enginetype` varchar(100) DEFAULT NULL,
  `rcno` varchar(100) DEFAULT NULL,
  `custid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `carstatus`
--

CREATE TABLE `carstatus` (
  `custid` int(100) NOT NULL,
  `carid` int(11) NOT NULL,
  `workslot` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `extraamount` double DEFAULT NULL,
  `reason` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `custid` int(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactno` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `upassword` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`custid`, `fname`, `lname`, `email`, `contactno`, `address`, `upassword`) VALUES
(2894, 'ram', 'kakaka', 'ra@gmm', '989898', 'gggggg', '12345'),
(3058, 'wertyu', 'wertyu', 'test19@yopmail.com', '2345678', 'wertyui', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `customerreq`
--

CREATE TABLE `customerreq` (
  `cust_id` varchar(100) NOT NULL,
  `cust_name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cust_serv` varchar(100) NOT NULL,
  `req_id` int(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `modelno` varchar(100) NOT NULL,
  `engintype` varchar(100) NOT NULL,
  `rcno` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'pending',
  `rejectedBy` varchar(100) NOT NULL DEFAULT 'none',
  `createdAt` varchar(100) NOT NULL,
  `assignedTo` varchar(100) NOT NULL DEFAULT 'none',
  `appointmentDate` varchar(100) NOT NULL DEFAULT 'none',
  `acceptedBy` varchar(100) NOT NULL DEFAULT 'none',
  `completedOn` varchar(100) NOT NULL DEFAULT 'none',
  `amount` varchar(100) NOT NULL DEFAULT 'none',
  `offercode` varchar(100) NOT NULL DEFAULT 'none',
  `discount` varchar(100) NOT NULL DEFAULT 'none',
  `paid` varchar(100) NOT NULL DEFAULT 'none',
  `paidStatus` varchar(100) NOT NULL DEFAULT 'pending',
  `assignedBy` varchar(100) NOT NULL DEFAULT 'none'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerreq`
--

INSERT INTO `customerreq` (`cust_id`, `cust_name`, `city`, `time`, `cust_serv`, `req_id`, `model`, `modelno`, `engintype`, `rcno`, `status`, `rejectedBy`, `createdAt`, `assignedTo`, `appointmentDate`, `acceptedBy`, `completedOn`, `amount`, `offercode`, `discount`, `paid`, `paidStatus`, `assignedBy`) VALUES
('customer_test19', 'customer_test19', 'eeee', '2020-01-26 10:57:12', 'painting', 21, 'qwer', '23456', 'gv', '123456', 'completed', 'supervisor_sandipkalure6', '2020-01-25 10:50:12 PM', '4580', '2020-01-26 04:25:48 PM', 'admin_testadmin', '2020-01-26 04:27:12 PM', 'none', 'none', 'none', 'none', 'pending', 'admin_testadmin'),
('customer_test19', 'customer_test19', 'eeeee', '2020-01-26 12:32:22', 'painting', 22, 'trdtrcf', '1234', 'trrdt', '12345', 'rejected', 'admin_testadmin', '2020-01-26 04:47:44 PM', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'pending', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `supid` int(100) NOT NULL,
  `supname` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `addedBy` varchar(100) NOT NULL DEFAULT 'none',
  `status` varchar(100) NOT NULL DEFAULT 'offline'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`supid`, `supname`, `contact`, `email`, `role`, `password`, `addedBy`, `status`) VALUES
(1451, 'wertyui', '23456789', 'rrrr2@h.com', 'supervisor', '123456', 'admin_testadmin', 'offline'),
(3212, 'shri', '1234567890', 'testadmin@yopmail.com', 'admin', 'test', 'none', 'offline'),
(4279, 'wertyui', '23456789', 'rrrr@h.com', 'supervisor', '123456', 'admin_testadmin', 'offline'),
(4580, 'Sandip', '9876543123', 'sandipkalure6@gmail.com', 'supervisor', '12345', 'admin_testadmin', 'offline'),
(8916, 'pratik', '9876543', 'pratik@g.com', 'supervisor', '12345', 'admin_testadmin', 'offline');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(100) NOT NULL,
  `upassword` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `offerid` int(100) NOT NULL,
  `offername` varchar(100) NOT NULL,
  `discountoffer` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`apptid`),
  ADD KEY `carid` (`carid`),
  ADD KEY `custid` (`custid`),
  ADD KEY `supid` (`supid`);

--
-- Indexes for table `appointments1`
--
ALTER TABLE `appointments1`
  ADD PRIMARY KEY (`appid`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`billno`),
  ADD KEY `apptid` (`apptid`),
  ADD KEY `supid` (`supid`),
  ADD KEY `carid` (`carid`);

--
-- Indexes for table `cardetails`
--
ALTER TABLE `cardetails`
  ADD PRIMARY KEY (`carid`),
  ADD KEY `custid` (`custid`);

--
-- Indexes for table `carstatus`
--
ALTER TABLE `carstatus`
  ADD PRIMARY KEY (`custid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`custid`);

--
-- Indexes for table `customerreq`
--
ALTER TABLE `customerreq`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`supid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`offerid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments1`
--
ALTER TABLE `appointments1`
  MODIFY `appid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `customerreq`
--
ALTER TABLE `customerreq`
  MODIFY `req_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`carid`) REFERENCES `cardetails` (`carid`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`custid`) REFERENCES `customer` (`custid`),
  ADD CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`supid`) REFERENCES `employee` (`supid`);

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`apptid`) REFERENCES `appointment` (`apptid`),
  ADD CONSTRAINT `bill_ibfk_2` FOREIGN KEY (`supid`) REFERENCES `employee` (`supid`),
  ADD CONSTRAINT `bill_ibfk_3` FOREIGN KEY (`carid`) REFERENCES `cardetails` (`carid`);

--
-- Constraints for table `cardetails`
--
ALTER TABLE `cardetails`
  ADD CONSTRAINT `cardetails_ibfk_1` FOREIGN KEY (`custid`) REFERENCES `customer` (`custid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
