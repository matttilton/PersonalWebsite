-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.2.7-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for nodeflix
CREATE DATABASE IF NOT EXISTS `nodeflix` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nodeflix`;

-- Dumping structure for table nodeflix.episodes
CREATE TABLE IF NOT EXISTS `episodes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Show` int(11) NOT NULL,
  `Season` int(11) NOT NULL,
  `Number` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `URL` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `URL` (`URL`),
  KEY `FK_show` (`Show`),
  KEY `FK_season` (`Season`),
  CONSTRAINT `FK_season` FOREIGN KEY (`Season`) REFERENCES `seasons` (`ID`) ON DELETE NO ACTION,
  CONSTRAINT `FK_show` FOREIGN KEY (`Show`) REFERENCES `shows` (`ID`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8;

-- Dumping data for table nodeflix.episodes: ~99 rows (approximately)
/*!40000 ALTER TABLE `episodes` DISABLE KEYS */;
INSERT INTO `episodes` (`ID`, `Show`, `Season`, `Number`, `Name`, `Location`, `URL`) VALUES
	(204, 1, 1, 1, 'Rising', 'C:\\media\\media\\Stargate Atlantis S01E01 & S01E02 - Rising', 'StargateAtlantisS01E01'),
	(205, 1, 1, 3, 'Hide and Seek', 'C:\\media\\media\\Stargate Atlantis S01E03 - Hide and Seek', 'StargateAtlantisS01E03'),
	(206, 1, 1, 4, 'Thirty  Eight Minutes', 'C:\\media\\media\\Stargate Atlantis S01E04 - Thirty Eight Minutes', 'StargateAtlantisS01E04'),
	(207, 1, 1, 5, 'Suspicion', 'C:\\media\\media\\Stargate Atlantis S01E05 - Suspicion', 'StargateAtlantisS01E05'),
	(208, 1, 1, 6, 'Childhood\'s  End', 'C:\\media\\media\\Stargate Atlantis S01E06 - Childhood\'s End', 'StargateAtlantisS01E06'),
	(209, 1, 1, 7, 'Poisoning the Well', 'C:\\media\\media\\Stargate Atlantis S01E07 - Poisoning the Well', 'StargateAtlantisS01E07'),
	(210, 1, 1, 8, 'Underground', 'C:\\media\\media\\Stargate Atlantis S01E08 - Underground', 'StargateAtlantisS01E08'),
	(211, 1, 1, 9, 'Home', 'C:\\media\\media\\Stargate Atlantis S01E09 - Home', 'StargateAtlantisS01E09'),
	(212, 1, 1, 10, 'The Storm', 'C:\\media\\media\\Stargate Atlantis S01E10 - The Storm', 'StargateAtlantisS01E10'),
	(213, 1, 1, 11, 'The  Eye', 'C:\\media\\media\\Stargate Atlantis S01E11 - The Eye', 'StargateAtlantisS01E11'),
	(214, 1, 1, 12, 'The Defiant One', 'C:\\media\\media\\Stargate Atlantis S01E12 - The Defiant One', 'StargateAtlantisS01E12'),
	(215, 1, 1, 13, 'Hot Zone', 'C:\\media\\media\\Stargate Atlantis S01E13 - Hot Zone', 'StargateAtlantisS01E13'),
	(216, 1, 1, 14, 'Sanctuary', 'C:\\media\\media\\Stargate Atlantis S01E14 - Sanctuary', 'StargateAtlantisS01E14'),
	(217, 1, 1, 15, 'Before I Sleep', 'C:\\media\\media\\Stargate Atlantis S01E15 - Before I Sleep', 'StargateAtlantisS01E15'),
	(218, 1, 1, 16, 'The Brotherhood', 'C:\\media\\media\\Stargate Atlantis S01E16 - The Brotherhood', 'StargateAtlantisS01E16'),
	(219, 1, 1, 17, 'Letters From Pegasus', 'C:\\media\\media\\Stargate Atlantis S01E17 - Letters From Pegasus', 'StargateAtlantisS01E17'),
	(220, 1, 1, 18, 'The Gift', 'C:\\media\\media\\Stargate Atlantis S01E18 - The Gift', 'StargateAtlantisS01E18'),
	(221, 1, 1, 19, 'The Siege, Part 1', 'C:\\media\\media\\Stargate Atlantis S01E19 - The Siege, Part 1', 'StargateAtlantisS01E19'),
	(222, 1, 1, 20, 'The Siege, Part 2', 'C:\\media\\media\\Stargate Atlantis S01E20 - The Siege, Part 2', 'StargateAtlantisS01E20'),
	(223, 1, 2, 1, 'The Siege, Part 3', 'C:\\media\\media\\Stargate Atlantis S02E01 - The Siege, Part 3', 'StargateAtlantisS02E01'),
	(224, 1, 2, 2, 'The Intruder', 'C:\\media\\media\\Stargate Atlantis S02E02 - The Intruder', 'StargateAtlantisS02E02'),
	(225, 1, 2, 3, 'Runner', 'C:\\media\\media\\Stargate Atlantis S02E03 - Runner', 'StargateAtlantisS02E03'),
	(226, 1, 2, 4, 'Duet', 'C:\\media\\media\\Stargate Atlantis S02E04 - Duet', 'StargateAtlantisS02E04'),
	(227, 1, 2, 5, 'Condemned', 'C:\\media\\media\\Stargate Atlantis S02E05 - Condemned', 'StargateAtlantisS02E05'),
	(228, 1, 2, 6, 'Trinity', 'C:\\media\\media\\Stargate Atlantis S02E06 - Trinity', 'StargateAtlantisS02E06'),
	(229, 1, 2, 7, 'Instinct', 'C:\\media\\media\\Stargate Atlantis S02E07 -  Instinct', 'StargateAtlantisS02E07'),
	(230, 1, 2, 8, 'Conversion', 'C:\\media\\media\\Stargate Atlantis S02E08 - Conversion', 'StargateAtlantisS02E08'),
	(231, 1, 2, 9, 'Aurora', 'C:\\media\\media\\Stargate Atlantis S02E09 - Aurora', 'StargateAtlantisS02E09'),
	(232, 1, 2, 10, 'The Lost Boys', 'C:\\media\\media\\Stargate Atlantis S02E10 - The Lost Boys', 'StargateAtlantisS02E10'),
	(233, 1, 2, 11, 'The Hive', 'C:\\media\\media\\Stargate Atlantis S02E11 - The Hive', 'StargateAtlantisS02E11'),
	(234, 1, 2, 12, 'Epiphany', 'C:\\media\\media\\Stargate Atlantis S02E12 - Epiphany', 'StargateAtlantisS02E12'),
	(235, 1, 2, 13, 'Critical Mass', 'C:\\media\\media\\Stargate Atlantis S02E13 - Critical Mass', 'StargateAtlantisS02E13'),
	(236, 1, 2, 14, 'Grace Under Presure', 'C:\\media\\media\\Stargate Atlantis S02E14 - Grace Under Presure', 'StargateAtlantisS02E14'),
	(237, 1, 2, 15, 'The Tower', 'C:\\media\\media\\Stargate Atlantis S02E15 - The Tower', 'StargateAtlantisS02E15'),
	(238, 1, 2, 16, 'The Long Goodbye', 'C:\\media\\media\\Stargate Atlantis S02E16 - The Long Goodbye', 'StargateAtlantisS02E16'),
	(239, 1, 2, 17, 'Coup D\' tat', 'C:\\media\\media\\Stargate Atlantis S02E17 - Coup D\'Etat', 'StargateAtlantisS02E17'),
	(240, 1, 2, 18, 'Michael', 'C:\\media\\media\\Stargate Atlantis S02E18 -  Michael', 'StargateAtlantisS02E18'),
	(241, 1, 2, 19, 'Inferno', 'C:\\media\\media\\Stargate Atlantis S02E19 - Inferno', 'StargateAtlantisS02E19'),
	(242, 1, 2, 20, 'Allies', 'C:\\media\\media\\Stargate Atlantis S02E20 - Allies', 'StargateAtlantisS02E20'),
	(243, 1, 3, 1, 'No Man\'s Land', 'C:\\media\\media\\Stargate Atlantis S03E01 - No Man\'s Land', 'StargateAtlantisS03E01'),
	(244, 1, 3, 2, 'Misbegotten', 'C:\\media\\media\\Stargate Atlantis S03E02 - Misbegotten', 'StargateAtlantisS03E02'),
	(245, 1, 3, 3, 'Irresistible', 'C:\\media\\media\\Stargate Atlantis S03E03 - Irresistible', 'StargateAtlantisS03E03'),
	(246, 1, 3, 4, 'Sateda', 'C:\\media\\media\\Stargate Atlantis S03E04 - Sateda', 'StargateAtlantisS03E04'),
	(247, 1, 3, 5, 'Progeny', 'C:\\media\\media\\Stargate Atlantis S03E05 - Progeny', 'StargateAtlantisS03E05'),
	(248, 1, 3, 6, 'The Real World', 'C:\\media\\media\\Stargate Atlantis S03E06 - The Real World', 'StargateAtlantisS03E06'),
	(249, 1, 3, 7, 'Common Ground', 'C:\\media\\media\\Stargate Atlantis S03E07 - Common Ground', 'StargateAtlantisS03E07'),
	(250, 1, 3, 8, 'McKay And Mrs. Miller', 'C:\\media\\media\\Stargate Atlantis S03E08 - McKay And Mrs. Miller', 'StargateAtlantisS03E08'),
	(251, 1, 3, 9, 'Phantoms', 'C:\\media\\media\\Stargate Atlantis S03E09 - Phantoms', 'StargateAtlantisS03E09'),
	(252, 1, 3, 10, 'The Return, Part 1', 'C:\\media\\media\\Stargate Atlantis S03E10 - The Return, Part 1', 'StargateAtlantisS03E10'),
	(253, 1, 3, 11, 'The Return, Part 2', 'C:\\media\\media\\Stargate Atlantis S03E11 - The Return, Part 2', 'StargateAtlantisS03E11'),
	(254, 1, 3, 12, 'Echoes', 'C:\\media\\media\\Stargate Atlantis S03E12 - Echoes', 'StargateAtlantisS03E12'),
	(255, 1, 3, 13, 'Irresponsible', 'C:\\media\\media\\Stargate Atlantis S03E13 - Irresponsible', 'StargateAtlantisS03E13'),
	(256, 1, 3, 14, 'Tao of Rodney', 'C:\\media\\media\\Stargate Atlantis S03E14 - Tao of Rodney', 'StargateAtlantisS03E14'),
	(257, 1, 3, 15, 'The Game', 'C:\\media\\media\\Stargate Atlantis S03E15 - The Game', 'StargateAtlantisS03E15'),
	(258, 1, 3, 16, 'The Ark', 'C:\\media\\media\\Stargate Atlantis S03E16 - The Ark', 'StargateAtlantisS03E16'),
	(259, 1, 3, 17, 'Sunday', 'C:\\media\\media\\Stargate Atlantis S03E17 - Sunday', 'StargateAtlantisS03E17'),
	(260, 1, 3, 18, 'Submersion', 'C:\\media\\media\\Stargate Atlantis S03E18 - Submersion', 'StargateAtlantisS03E18'),
	(261, 1, 3, 19, 'Vengeance', 'C:\\media\\media\\Stargate Atlantis S03E19 - Vengeance', 'StargateAtlantisS03E19'),
	(262, 1, 3, 20, 'First Strike', 'C:\\media\\media\\Stargate Atlantis S03E20 - First Strike', 'StargateAtlantisS03E20'),
	(263, 1, 4, 1, 'Adrift', 'C:\\media\\media\\Stargate Atlantis S04E01 - Adrift', 'StargateAtlantisS04E01'),
	(264, 1, 4, 2, 'Lifeline', 'C:\\media\\media\\Stargate Atlantis S04E02 - Lifeline', 'StargateAtlantisS04E02'),
	(265, 1, 4, 3, 'Reunion', 'C:\\media\\media\\Stargate Atlantis S04E03 - Reunion', 'StargateAtlantisS04E03'),
	(266, 1, 4, 4, 'Doppelganger', 'C:\\media\\media\\Stargate Atlantis S04E04 - Doppelganger', 'StargateAtlantisS04E04'),
	(267, 1, 4, 5, 'Travelers', 'C:\\media\\media\\Stargate Atlantis S04E05 - Travelers', 'StargateAtlantisS04E05'),
	(268, 1, 4, 6, 'Tabula Rasa', 'C:\\media\\media\\Stargate Atlantis S04E06 - Tabula Rasa', 'StargateAtlantisS04E06'),
	(269, 1, 4, 7, 'Missing', 'C:\\media\\media\\Stargate Atlantis S04E07 - Missing', 'StargateAtlantisS04E07'),
	(270, 1, 4, 8, 'The Seer', 'C:\\media\\media\\Stargate Atlantis S04E08 - The Seer', 'StargateAtlantisS04E08'),
	(271, 1, 4, 9, 'Miller\'s Crossing', 'C:\\media\\media\\Stargate Atlantis S04E09 - Miller\'s Crossing', 'StargateAtlantisS04E09'),
	(272, 1, 4, 10, 'This Mortal Coil', 'C:\\media\\media\\Stargate Atlantis S04E10 - This Mortal Coil', 'StargateAtlantisS04E10'),
	(273, 1, 4, 11, 'Be All My Sins Remember\'d', 'C:\\media\\media\\Stargate Atlantis S04E11 - Be All My Sins Remember\'d', 'StargateAtlantisS04E11'),
	(274, 1, 4, 12, 'Spoils Of War', 'C:\\media\\media\\Stargate Atlantis S04E12 - Spoils Of War', 'StargateAtlantisS04E12'),
	(275, 1, 4, 13, 'Quaratine', 'C:\\media\\media\\Stargate Atlantis S04E13 - Quaratine', 'StargateAtlantisS04E13'),
	(276, 1, 4, 14, 'Harmony', 'C:\\media\\media\\Stargate Atlantis S04E14 - Harmony', 'StargateAtlantisS04E14'),
	(277, 1, 4, 15, 'Outcast', 'C:\\media\\media\\Stargate Atlantis S04E15 - Outcast', 'StargateAtlantisS04E15'),
	(278, 1, 4, 16, 'Trio', 'C:\\media\\media\\Stargate Atlantis S04E16 - Trio', 'StargateAtlantisS04E16'),
	(279, 1, 4, 17, 'Midway', 'C:\\media\\media\\Stargate Atlantis S04E17 - Midway', 'StargateAtlantisS04E17'),
	(280, 1, 4, 18, 'The Kindred, Part 1', 'C:\\media\\media\\Stargate Atlantis S04E18 - The Kindred, Part 1', 'StargateAtlantisS04E18'),
	(281, 1, 4, 19, 'The Kindred, Part 2', 'C:\\media\\media\\Stargate Atlantis S04E19 - The Kindred, Part 2', 'StargateAtlantisS04E19'),
	(282, 1, 4, 20, 'The Last Man', 'C:\\media\\media\\Stargate Atlantis S04E20 - The Last Man', 'StargateAtlantisS04E20'),
	(283, 1, 5, 1, 'Search and rescue', 'C:\\media\\media\\Stargate Atlantis S05E01 - Search and rescue', 'StargateAtlantisS05E01'),
	(284, 1, 5, 2, 'The Seed', 'C:\\media\\media\\Stargate Atlantis S05E02 - The Seed', 'StargateAtlantisS05E02'),
	(285, 1, 5, 3, 'Broken Ties', 'C:\\media\\media\\Stargate Atlantis S05E03 - Broken Ties', 'StargateAtlantisS05E03'),
	(286, 1, 5, 4, 'The Daedalus Variations', 'C:\\media\\media\\Stargate Atlantis S05E04 - The Daedalus Variations', 'StargateAtlantisS05E04'),
	(287, 1, 5, 5, 'Ghost in the Machine', 'C:\\media\\media\\Stargate Atlantis S05E05 - Ghost in the Machine', 'StargateAtlantisS05E05'),
	(288, 1, 5, 6, 'The Shrine', 'C:\\media\\media\\Stargate Atlantis S05E06 - The Shrine', 'StargateAtlantisS05E06'),
	(289, 1, 5, 7, 'Whispers', 'C:\\media\\media\\Stargate Atlantis S05E07 - Whispers', 'StargateAtlantisS05E07'),
	(290, 1, 5, 8, 'The Queen', 'C:\\media\\media\\Stargate Atlantis S05E08 - The Queen', 'StargateAtlantisS05E08'),
	(291, 1, 5, 9, 'Tracker', 'C:\\media\\media\\Stargate Atlantis S05E09 - Tracker', 'StargateAtlantisS05E09'),
	(292, 1, 5, 10, 'First Contact', 'C:\\media\\media\\Stargate Atlantis S05E10 - First Contact', 'StargateAtlantisS05E10'),
	(293, 1, 5, 11, 'The Lost Tribe', 'C:\\media\\media\\Stargate Atlantis S05E11 - The Lost Tribe', 'StargateAtlantisS05E11'),
	(294, 1, 5, 12, 'Outsiders', 'C:\\media\\media\\Stargate Atlantis S05E12 - Outsiders', 'StargateAtlantisS05E12'),
	(295, 1, 5, 13, 'Inquisition', 'C:\\media\\media\\Stargate Atlantis S05E13 - Inquisition', 'StargateAtlantisS05E13'),
	(296, 1, 5, 14, 'The Prodigal', 'C:\\media\\media\\Stargate Atlantis S05E14 - The Prodigal', 'StargateAtlantisS05E14'),
	(297, 1, 5, 15, 'Remnants', 'C:\\media\\media\\Stargate Atlantis S05E15 - Remnants', 'StargateAtlantisS05E15'),
	(298, 1, 5, 16, 'Brain Storm', 'C:\\media\\media\\Stargate Atlantis S05E16 - Brain Storm ', 'StargateAtlantisS05E16'),
	(299, 1, 5, 17, 'Infection', 'C:\\media\\media\\Stargate Atlantis S05E17 - Infection', 'StargateAtlantisS05E17'),
	(300, 1, 5, 18, 'Identity', 'C:\\media\\media\\Stargate Atlantis S05E18 - Identity', 'StargateAtlantisS05E18'),
	(301, 1, 5, 19, 'Vegas', 'C:\\media\\media\\Stargate Atlantis S05E19 - Vegas', 'StargateAtlantisS05E19'),
	(302, 1, 5, 20, 'Enemy at the Gate', 'C:\\media\\media\\Stargate Atlantis S05E20 - Enemy at the Gate', 'StargateAtlantisS05E20');
/*!40000 ALTER TABLE `episodes` ENABLE KEYS */;

-- Dumping structure for table nodeflix.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  `Location` varchar(255) NOT NULL,
  `URL` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table nodeflix.movies: ~1 rows (approximately)
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`ID`, `Name`, `Description`, `Location`, `URL`, `Image`) VALUES
	(1, 'Star Wars: Episode 1', 'no description', 'C:\\media\\media\\Stargate Atlantis S01E01 & S01E02 - Rising', 'StarWarsEpisode1', 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

-- Dumping structure for table nodeflix.seasons
CREATE TABLE IF NOT EXISTS `seasons` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Number` varchar(255) NOT NULL,
  `Show` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_shows` (`Show`),
  CONSTRAINT `FK_shows` FOREIGN KEY (`Show`) REFERENCES `shows` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- Dumping data for table nodeflix.seasons: ~14 rows (approximately)
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` (`ID`, `Number`, `Show`) VALUES
	(1, '1', 1),
	(2, '2', 1),
	(3, '3', 1),
	(4, '4', 1),
	(5, '5', 1),
	(6, '1', 2),
	(7, '2', 2),
	(8, '3', 2),
	(9, '4', 2),
	(10, '5', 2),
	(11, '6', 2),
	(12, '7', 2),
	(13, '8', 2),
	(14, '9', 2);
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;

-- Dumping structure for table nodeflix.shows
CREATE TABLE IF NOT EXISTS `shows` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `URL` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `URL` (`URL`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table nodeflix.shows: ~2 rows (approximately)
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
INSERT INTO `shows` (`ID`, `Name`, `Image`, `URL`) VALUES
	(1, 'Stargate Atlantis', 'https://upload.wikimedia.org/wikipedia/en/e/ef/Stargate_Atlantis_season_1.jpg', 'StargateAtlantis'),
	(2, 'Stargate SG1', 'http://www.gstatic.com/tv/thumb/tvbanners/184337/p184337_b_v8_ae.jpg', 'StargateSG1');
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;

-- Dumping structure for table nodeflix.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `securitylevel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table nodeflix.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`ID`, `Username`, `Password`, `securitylevel`) VALUES
	(1, 'test', '$2a$06$7VrHFqIurSogcsATsG.uTucRXqmhyvIpYzw82pBKZP..YycR6nMDq', '1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
