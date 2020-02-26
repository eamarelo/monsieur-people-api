-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: mysql-bibifr.alwaysdata.net
-- Generation Time: Feb 26, 2020 at 10:00 AM
-- Server version: 10.3.17-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bibifr_mr_people`
--

-- --------------------------------------------------------

--
-- Table structure for table `adresses`
--

CREATE TABLE `adresses` (
  `id` int(11) NOT NULL,
  `ville` varchar(64) DEFAULT NULL,
  `code_postal` varchar(64) DEFAULT NULL,
  `rue` varchar(64) DEFAULT NULL,
  `numero` varchar(64) DEFAULT NULL,
  `complement` text DEFAULT NULL,
  `longitude` int(11) DEFAULT NULL,
  `latitude` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adresses`
--

INSERT INTO `adresses` (`id`, `ville`, `code_postal`, `rue`, `numero`, `complement`, `longitude`, `latitude`) VALUES
(1, 'Paris', '75019', 'rue cambrai', '11', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `nom`) VALUES
(1, 'Sport'),
(2, 'Soirée'),
(3, 'Musique'),
(4, 'Stage'),
(5, 'Alternance'),
(6, 'CDI');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `section` varchar(64) NOT NULL,
  `idPromotion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `nom`, `section`, `idPromotion`) VALUES
(1, 'Développeur web', 'Développeur', 1),
(2, 'Chef de projet digital', 'Chef de projet', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ecoles`
--

CREATE TABLE `ecoles` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `idAdresse` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ecoles`
--

INSERT INTO `ecoles` (`id`, `nom`, `idAdresse`) VALUES
(1, 'My Digital School', 1);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `idAdresse` int(11) NOT NULL,
  `dateEvent` date NOT NULL,
  `idCreateur` int(11) NOT NULL,
  `idCategorie` int(11) NOT NULL,
  `photo` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `nom`, `description`, `idAdresse`, `dateEvent`, `idCreateur`, `idCategorie`, `photo`) VALUES
(1, 'Tournois de tennis', 'ceci est un tournois de tennis venez nombreux', 1, '2020-02-26', 4, 1, 'https://i.eurosport.com/2020/02/12/2773902-57300050-2560-1440.jpg?w=750'),
(2, 'Tournois de foot', 'tournois pour les amateurs de foot.\r\nmotivez et sympathique venez nombreux', 1, '2020-02-29', 4, 1, 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg'),
(3, 'Soiré d\'integration', 'cette soirée a pour but de nous rapprocher et d\'apprendre a tous nous connaitre venez nombreux', 1, '2020-03-18', 4, 2, 'https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree.jpg'),
(4, 'fin. d\'année !!!', 'cette soirée à pour but de fêter  comme il se doit cette fin d\'année scolaire.', 1, '2020-03-31', 4, 2, 'https://lh3.googleusercontent.com/proxy/gogrx8j2ypPWffJlxEaK3-qDRfNT3zPTJgn1l0CHZS2sFfc9RKYntSfnWhIlwqdhfFHdt3r5kS8I30N4a4u9pE5f-9HHokQBPGidheA1vs3itNcPdBof7KGhw5D0tnkEsjkkFfZIyH8yIMpqGYCNOrC4DKTUAkUwnbx1Fw'),
(5, 'concert gratuit', 'le groupe de musique de my digiital school vous invite a venir les voir en concert. Entrer gratuite\r\nles consommations sont a votre charge.', 1, '2020-04-08', 4, 3, 'https://www.saintsebastien.fr/sites/default/files/pmaa-diapo.jpg'),
(6, 'concert de Booba', 'vous voulez allez voir le concert de booba nous avons des place moins cher a vous proposer!!', 1, '2020-04-15', 4, 3, 'https://www.leparisien.fr/resizer/uwIK850Hf9hpl82WYQ8ZBtlZWeU=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/RH6Y7HZPSC7ZAEHTKLAV67WFS4.jpg'),
(7, 'Stage Développeur Web', 'Google cherche un stagiaire pour développer une application de BDE', 1, '2020-02-24', 4, 4, 'https://s3.amazonaws.com/images.seroundtable.com/pastel-haze-Google-1900px--1456937097.jpg'),
(8, 'Stage Chef de Projet', 'nous recherchons un chef de projet au sein de  notre compagny ', 1, '2020-02-24', 4, 4, 'https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/sites/regions_france3/files/styles/top_big/public/assets/images/2019/01/11/maxnewsworldfour578097-4033475.jpg?itok=9g3sjjXU'),
(9, 'Alternance développeur web', 'Capgemini recherche un alternant pour une duré de 2 ans ', 1, '2020-03-26', 4, 5, 'https://www.lerevenu.com/sites/site/files/styles/img_lg/public/field/image/capgemini_entreprise_3.jpg?itok=h8F08UYe'),
(10, 'Alternance chef e produit', 'facebook recherche un alternant pour une duré de 2 ans ', 1, '2020-01-21', 4, 5, 'https://img.phonandroid.com/2019/09/facebook-the-pirate-bay.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `idAdresse` int(11) NOT NULL,
  `code_promo` varchar(64) NOT NULL,
  `idEcole` int(11) NOT NULL,
  `actif` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `grade` varchar(64) NOT NULL,
  `annee` varchar(64) NOT NULL,
  `idEcole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `grade`, `annee`, `idEcole`) VALUES
(1, 'Master 2', '2019', 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nom`) VALUES
(0, 'admin'),
(1, 'student'),
(2, 'professeur');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `prenom` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `idRole` int(11) NOT NULL,
  `idFileul` int(11) DEFAULT NULL,
  `idParain` int(11) DEFAULT NULL,
  `password` varchar(64) NOT NULL,
  `photo` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `idRole`, `idFileul`, `idParain`, `password`, `photo`) VALUES
(2, 'caillet', 'jean philippe', 'jp78920@hotmail.com', 1, NULL, NULL, '$2b$10$.fTGwU27Ztp5QFugKsmjl.UYs2P5PhPEFTOS1z5HvVoFfzPMNhdPi', 'https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg'),
(3, 'moucoukenoff', 'clemence', 'clemence.moucoukenoff@gmail.com', 1, NULL, NULL, '$2b$10$.VIMZbNImagf2waAMp0XaeQ6hqACv4i75/qy16Ziir/kekIkjpkde', 'https://www.athabascau.ca/images/discover-au/woman-studying.jpg'),
(4, 'test', 'test', 'test', 1, NULL, NULL, '$2b$10$CzMUpcezzcpjz1ARlPHaR.MXDY75iGSQMwsNRqgx.fOMAA/rLC9Sy', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_categories`
--

CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users_classes`
--

CREATE TABLE `users_classes` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idClasse` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_classes`
--

INSERT INTO `users_classes` (`id`, `idUser`, `idClasse`) VALUES
(1, 2, 1),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users_ecoles`
--

CREATE TABLE `users_ecoles` (
  `id` int(11) NOT NULL,
  `idClasse` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users_events`
--

CREATE TABLE `users_events` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idEvent` int(11) NOT NULL,
  `end` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_events`
--

INSERT INTO `users_events` (`id`, `idUser`, `idEvent`, `end`) VALUES
(1, 2, 1, 1),
(2, 2, 2, 0),
(3, 2, 3, 1),
(4, 2, 4, 0),
(5, 2, 5, 1),
(6, 2, 6, 0),
(7, 2, 7, 0),
(8, 2, 9, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPromotion` (`idPromotion`);

--
-- Indexes for table `ecoles`
--
ALTER TABLE `ecoles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAdresse` (`idAdresse`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAdresse` (`idAdresse`),
  ADD KEY `idCategorie` (`idCategorie`),
  ADD KEY `idCreateur` (`idCreateur`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAdresse` (`idAdresse`),
  ADD KEY `idEcole` (`idEcole`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEcole` (`idEcole`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFileul` (`idFileul`),
  ADD KEY `idParain` (`idParain`),
  ADD KEY `idRole` (`idRole`);

--
-- Indexes for table `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategories` (`idCategories`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `users_classes`
--
ALTER TABLE `users_classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idClasse` (`idClasse`);

--
-- Indexes for table `users_ecoles`
--
ALTER TABLE `users_ecoles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_events`
--
ALTER TABLE `users_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEvent` (`idEvent`),
  ADD KEY `idUser` (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adresses`
--
ALTER TABLE `adresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ecoles`
--
ALTER TABLE `ecoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_classes`
--
ALTER TABLE `users_classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_ecoles`
--
ALTER TABLE `users_ecoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_events`
--
ALTER TABLE `users_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`idPromotion`) REFERENCES `promotions` (`id`);

--
-- Constraints for table `ecoles`
--
ALTER TABLE `ecoles`
  ADD CONSTRAINT `ecoles_ibfk_1` FOREIGN KEY (`idAdresse`) REFERENCES `ecoles` (`id`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`idAdresse`) REFERENCES `adresses` (`id`),
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`idCategorie`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `events_ibfk_3` FOREIGN KEY (`idCreateur`) REFERENCES `users` (`id`);

--
-- Constraints for table `partners`
--
ALTER TABLE `partners`
  ADD CONSTRAINT `partners_ibfk_1` FOREIGN KEY (`idAdresse`) REFERENCES `adresses` (`id`),
  ADD CONSTRAINT `partners_ibfk_2` FOREIGN KEY (`idEcole`) REFERENCES `ecoles` (`id`);

--
-- Constraints for table `promotions`
--
ALTER TABLE `promotions`
  ADD CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`idEcole`) REFERENCES `ecoles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idFileul`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`idParain`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users_categories`
--
ALTER TABLE `users_categories`
  ADD CONSTRAINT `users_categories_ibfk_1` FOREIGN KEY (`idCategories`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `users_categories_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Constraints for table `users_classes`
--
ALTER TABLE `users_classes`
  ADD CONSTRAINT `users_classes_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_classes_ibfk_2` FOREIGN KEY (`idClasse`) REFERENCES `classes` (`id`);

--
-- Constraints for table `users_events`
--
ALTER TABLE `users_events`
  ADD CONSTRAINT `users_events_ibfk_1` FOREIGN KEY (`idEvent`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `users_events_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
