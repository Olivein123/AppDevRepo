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
-- Table structure for table `tbl_vehicle`
--

DROP TABLE IF EXISTS `tbl_vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vehicle` (
  `vehicle_id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(45) DEFAULT NULL,
  `plate_num` varchar(45) DEFAULT NULL,
  `vehicle_type_id` int DEFAULT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  UNIQUE KEY `id_UNIQUE` (`vehicle_id`),
  UNIQUE KEY `plateNo_UNIQUE` (`plate_num`),
  KEY `FKkwgfva9coyq5jx0ja53k3a8vx` (`id`),
  CONSTRAINT `FKkwgfva9coyq5jx0ja53k3a8vx` FOREIGN KEY (`id`) REFERENCES `tbl_customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicle`
--

LOCK TABLES `tbl_vehicle` WRITE;
/*!40000 ALTER TABLE `tbl_vehicle` DISABLE KEYS */;
INSERT INTO `tbl_vehicle` VALUES (1,'Ford Raptor','GHIJ-1234',1,NULL),(2,'Ford Ranger','GHIJ-4321',1,NULL),(5,'Forda Ferson+','123213',1,NULL),(6,'Fording','3212',1,NULL),(7,NULL,NULL,0,NULL),(8,NULL,NULL,0,NULL),(9,'Ford Renjur','32132312',1,NULL),(10,'Ford Rapture','321321312',1,NULL),(11,'Ford Renjurr','321323112',1,NULL),(12,'Ford Rapturer','3213211312',1,NULL),(13,'Ford Renjurrr','3213231112',1,NULL),(14,'Ford Rapturerr','32132111312',1,NULL),(15,'Yamaha','ASd90as',255,NULL),(16,'Ford','cXSs',231,NULL),(17,'','',-1,NULL),(21,'Lamborhgighigigni','123131',-1,NULL),(23,'Ferrari','12313',-1,NULL),(24,'yamahay','kasdklad',-1,NULL),(26,'Yamaha','23913SLACMZ',-1,NULL),(27,'Yamahaa','jSMZSS2',-1,NULL),(28,'Yamaho','52m3DS8s',-1,NULL),(29,'Yamato','l2MdJ',-1,NULL),(30,'Yamaha','32MHSXDA',-1,NULL),(31,'Toyota','LKM GED92',-1,NULL),(32,'Yamaha','LMAD G2D',-1,NULL);
/*!40000 ALTER TABLE `tbl_vehicle` ENABLE KEYS */;
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
