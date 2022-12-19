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
-- Table structure for table `tbl_customer_vehicles`
--

DROP TABLE IF EXISTS `tbl_customer_vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_customer_vehicles` (
  `customer_entity_id` int NOT NULL,
  `vehicles_vehicle_id` int NOT NULL,
  PRIMARY KEY (`customer_entity_id`,`vehicles_vehicle_id`),
  UNIQUE KEY `UK_nf5ose8r3omwki6p5w439gof5` (`vehicles_vehicle_id`),
  CONSTRAINT `FK1vt06nq6u2s2tcbeeypuf5xve` FOREIGN KEY (`vehicles_vehicle_id`) REFERENCES `tbl_vehicle` (`vehicle_id`),
  CONSTRAINT `FKalrxtaig2eqr5g07xts4cebhy` FOREIGN KEY (`customer_entity_id`) REFERENCES `tbl_customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customer_vehicles`
--

LOCK TABLES `tbl_customer_vehicles` WRITE;
/*!40000 ALTER TABLE `tbl_customer_vehicles` DISABLE KEYS */;
INSERT INTO `tbl_customer_vehicles` VALUES (28,9),(28,10),(29,11),(29,12),(30,13),(30,14),(34,15),(35,16),(36,17),(40,21),(42,23),(43,24),(45,26),(47,27),(48,28),(49,29),(50,30),(51,31),(52,32);
/*!40000 ALTER TABLE `tbl_customer_vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 22:34:53
