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
-- Table structure for table `tbl_bookings`
--

DROP TABLE IF EXISTS `tbl_bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_bookings` (
  `bookingid` int NOT NULL AUTO_INCREMENT,
  `date_and_time` datetime DEFAULT NULL,
  `id` int DEFAULT NULL,
  `customerid` int DEFAULT NULL,
  `siteid` int DEFAULT NULL,
  PRIMARY KEY (`bookingid`),
  KEY `FKp8jhhk1yf86oynunm0pqyi526` (`id`),
  KEY `FKlof98suk0jhuiwalb14vuthel` (`customerid`),
  KEY `FK40frrvne8suvk4w5lw5ibv65t` (`siteid`),
  CONSTRAINT `FK40frrvne8suvk4w5lw5ibv65t` FOREIGN KEY (`siteid`) REFERENCES `tbl_testing_center` (`siteid`),
  CONSTRAINT `FKlof98suk0jhuiwalb14vuthel` FOREIGN KEY (`customerid`) REFERENCES `tbl_customer` (`id`),
  CONSTRAINT `FKp8jhhk1yf86oynunm0pqyi526` FOREIGN KEY (`id`) REFERENCES `tbl_customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_bookings`
--

LOCK TABLES `tbl_bookings` WRITE;
/*!40000 ALTER TABLE `tbl_bookings` DISABLE KEYS */;
INSERT INTO `tbl_bookings` VALUES (11,'2025-12-22 10:30:00',NULL,NULL,NULL),(12,'2029-03-28 09:30:00',NULL,NULL,NULL),(13,'2023-05-30 23:32:00',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_bookings` ENABLE KEYS */;
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
