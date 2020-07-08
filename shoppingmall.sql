/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : shoppingmall

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2020-07-08 15:20:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `class1`
-- ----------------------------
DROP TABLE IF EXISTS `class1`;
CREATE TABLE `class1` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `c1name` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class1
-- ----------------------------

-- ----------------------------
-- Table structure for `class2`
-- ----------------------------
DROP TABLE IF EXISTS `class2`;
CREATE TABLE `class2` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `cid` tinyint(3) unsigned NOT NULL,
  `c2name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class2
-- ----------------------------

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sn` char(50) NOT NULL,
  `uid` smallint(5) unsigned NOT NULL,
  `pid` mediumint(8) unsigned NOT NULL,
  `counts` smallint(5) unsigned NOT NULL,
  `datetime` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `poster`
-- ----------------------------
DROP TABLE IF EXISTS `poster`;
CREATE TABLE `poster` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `pid` mediumint(8) unsigned NOT NULL,
  `url` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of poster
-- ----------------------------

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `c1id` tinyint(3) unsigned NOT NULL,
  `c2id` smallint(5) unsigned NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `promotion` varchar(20) NOT NULL,
  `color` varchar(100) NOT NULL,
  `descript` varchar(100) NOT NULL,
  `datetime` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c1id` (`c1id`),
  KEY `c2id` (`c2id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `pwd` char(30) NOT NULL,
  `name` char(5) NOT NULL,
  `tel` char(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `photo` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
