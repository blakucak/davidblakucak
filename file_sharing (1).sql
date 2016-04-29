-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 06, 2016 at 09:53 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `file_sharing`
--

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

CREATE TABLE `file` (
  `fid` int(11) NOT NULL,
  `nim` varchar(12) NOT NULL,
  `nama_file` varchar(50) NOT NULL,
  `ukuran` double NOT NULL,
  `tanggal` datetime NOT NULL,
  `deskripsi` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `file`
--

INSERT INTO `file` (`fid`, `nim`, `nama_file`, `ukuran`, `tanggal`, `deskripsi`, `status`) VALUES
(9, '130411100014', 'gauss.asv', 0.3603515625, '2016-01-03 02:09:38', '', 'Public'),
(11, '130411100014', 'diagonal.asv', 0.306640625, '2016-01-03 03:10:51', 'aaa', 'Private'),
(12, '130411100064', 'octave.pdf', 3621.4658203125, '2016-01-03 10:00:55', 'Ini adalah tutorial belajar Octave', 'Private'),
(13, '130411100045', 'chest_x-ray.jpeg', 28.6728515625, '2016-01-03 10:28:41', 'Ini adalah gambar ronsen', 'Private');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `nim` varchar(12) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `fakultas` varchar(20) NOT NULL,
  `jurusan` varchar(20) NOT NULL,
  `kelamin` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`nim`, `nama`, `fakultas`, `jurusan`, `kelamin`, `password`, `status`) VALUES
('130411100014', 'Rizal Nurman Wahyudi', 'Teknik', 'Teknik Informatika', 'Laki-laki', 'pamaloppa', 'admin'),
('130411100045', 'Saya', 'Teknik', 'Teknik Informatika', 'Laki-laki', 'Saya123', 'user'),
('130411100063', 'Alif Wahyu Shodiqin', 'Teknik', 'Teknik Informatika', 'Laki-laki', 'Wahyu123', 'user'),
('130411100064', 'Akh Mubarok', 'Teknik', 'Teknik Informatika', 'Laki-laki', 'K@l1r3j0', 'user'),
('130411100083', 'Girindra Bimantara Putra', 'Teknik', 'Teknik Informatika', 'Laki-laki', 'Bima271094', 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`fid`,`nim`),
  ADD KEY `nim` (`nim`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `file`
--
ALTER TABLE `file`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `file`
--
ALTER TABLE `file`
  ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `user` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
