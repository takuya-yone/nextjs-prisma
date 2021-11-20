DROP DATABASE IF EXISTS `AccountManagement`;

CREATE DATABASE  `AccountManagement`;

USE `AccountManagement`;

DROP TABLE IF EXISTS `RequestHistory`;

CREATE TABLE `RequestHistory` (
  `RecordId` int(11) NOT NULL AUTO_INCREMENT,  -- レコードのID
  `TenantName` varchar(255) DEFAULT NULL, -- テナント名
  `OfferDate` date DEFAULT NULL, -- 提供日
  `ClaimDate` date DEFAULT NULL, -- 請求月
  `Memo` varchar(255) DEFAULT NULL, -- 備考
  `RequestName` varchar(255) DEFAULT NULL, -- 新規/変更/解約
  `ServiceName` varchar(255) DEFAULT NULL, -- 申し込みサービス名
  `CloudName` varchar(255) DEFAULT NULL, -- AWS/Azure/GCP/OCI
  `isClaimed` boolean NOT NULL DEFAULT false,  -- 提供済みFlg
  PRIMARY KEY (`RecordId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
