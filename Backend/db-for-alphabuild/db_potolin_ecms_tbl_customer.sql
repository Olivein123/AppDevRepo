-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_potolin_ecms
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_customer`
--

DROP TABLE IF EXISTS `tbl_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `middlename` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `contact_num` varchar(45) NOT NULL,
  `license_num` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `contactNo_UNIQUE` (`contact_num`),
  UNIQUE KEY `licenseNo_UNIQUE` (`license_num`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customer`
--

LOCK TABLES `tbl_customer` WRITE;
/*!40000 ALTER TABLE `tbl_customer` DISABLE KEYS */;
INSERT INTO `tbl_customer` VALUES (34,'Jonyy','Heyss','Doe','Lapu lapu','3434','license','benbee','12313'),(35,'Bobby','Joe','Hey','Cebu City Labangon','4242','LASdmcX','cowbee','333'),(36,'John','Bing','Lee','Lapu Lapu','12345','SDZXZX','john.lee','123'),(40,'Erica','Jean','Abadinas','Lapu lapu','123131','ASDZC!@3','erica.jean','123'),(42,'asdsad','asd','asds','asdsad','123','dASSa','da','sdsad'),(43,'Bing','Jee','Bing','Beijing China','12313131','dsadadas','bing','chilling'),(45,'Being','Done','Chilling','Beijing','632345112','LSMDAKS','being chilling','12345'),(47,'Jeffrey','Lim','Doe','Beijing','63998822312','32131321sd','Jeffrey.Doe','123'),(48,'Darling','Youre my ','Angel','baby baby angel','6388953','kSADMZXX','Angel','babyangel'),(49,'baby ','dont hurt','me','no more','3123940221','LDkMZNX','whatis','love'),(50,'Bob','John','Doe','Labangon','6398445572','LMS2sD','bobby.joe','123'),(51,'Keith','Brylle','Diamante','Cebu','631234567','JSKLMNA','Keith','123'),(52,'Kim','Ber','Lee','Beijing','63588223','029=3-230','Kim','123'),(53,'Dan','Lee','Doe','Cebu City','63928332','923-32032-302','Dan','123'),(54,'User','Admin','Haha','123','2392382903128','jLSAKDJ','admin','123'),(59,'James','Doe','Ling','Cebu City','6398553','MJAHG53','james.doe','123');
/*!40000 ALTER TABLE `tbl_customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 22:34:52
