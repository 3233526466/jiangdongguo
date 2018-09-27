/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50513
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50513
File Encoding         : 65001

Date: 2017-03-04 14:06:30
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `contents`
-- ----------------------------
DROP TABLE IF EXISTS `contents`;
CREATE TABLE `contents` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(11) NOT NULL COMMENT '类型表的外键',
  `uid` int(11) NOT NULL COMMENT '用户表的外键',
  `title` varchar(30) CHARACTER SET utf8 NOT NULL COMMENT '文章标题',
  `addTime` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文章添加时间',
  `description` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '描述',
  `content` varchar(2000) CHARACTER SET utf8 NOT NULL COMMENT '内容',
  `comments` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '评论',
  `views` int(11) NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `ttid` (`tid`),
  KEY `cuid` (`uid`),
  CONSTRAINT `cuid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`),
  CONSTRAINT `ttid` FOREIGN KEY (`tid`) REFERENCES `type` (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of contents
-- ----------------------------
INSERT INTO contents VALUES ('1', '1', '2', '测试1', '2017,2,22 17:14:55:168', '测试1', '测试1', null,0);
INSERT INTO contents VALUES ('2', '1', '2', '测试2', '2017,2,22 17:15:47:520', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('3', '1', '2', '测试2', '2017,2,22 17:16:16:962', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('4', '1', '2', '测试2', '2017,2,22 17:18:11:728', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('5', '1', '2', '测试2', '2017,2,22 17:19:13:277', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('6', '1', '2', '测试2', '2017,2,22 17:19:53:891', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('7', '1', '2', '测试2', '2017,2,22 17:20:22:976', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('8', '1', '2', '测试2', '2017,2,22 17:21:33:120', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('9', '1', '2', '测试2', '2017,2,22 17:23:3:231', '测试2', '测试2', null,0);
INSERT INTO contents VALUES ('10', '6', '2', '小测试', '2017,2,28 14:49:31:648', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('11', '6', '2', '小测试', '2017,2,28 14:50:43:985', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('12', '6', '2', '小测试', '2017,2,28 14:51:6:160', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('13', '6', '2', '小测试', '2017,2,28 14:52:14:569', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('14', '6', '2', '小测试', '2017,2,28 14:54:33:431', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('15', '6', '2', '小测试', '2017,2,28 14:54:48:691', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('16', '6', '2', '小测试', '2017,2,28 14:56:1:616', '小测试小测试小测试小测试', '小测试小测试小测试小测试小测试小测试小测试小测试', null,0);
INSERT INTO contents VALUES ('17', '7', '2', 'zxc', '2017,2,28 15:9:14:101', 'zxczxczxczxczxczxc', 'zxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxc', null,0);
INSERT INTO contents VALUES ('18', '3', '2', 'vcxvcx', '2017,2,28 15:10:44:697', 'vcxvcxvcxvcxvcxvcxvcxvcxvcxvcx', 'vcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcx', null,0);
INSERT INTO contents VALUES ('19', '3', '2', 'vcxvcx', '2017,2,28 15:10:49:983', 'vcxvcxvcxvcxvcxvcxvcxvcxvcxvcx', 'vcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcxvcx', null,0);
INSERT INTO contents VALUES ('20', '2', '2', 'qe', '2017,2,28 15:12:20:253', 'adsa', 'vxcxzxczcxz', null,0);
INSERT INTO contents VALUES ('21', '8', '2', 'zc', '2017,2,28 15:12:44:191', '12312', 'zcxzcxz', null,0);

-- ----------------------------
-- Table structure for `type`
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tname` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `tname` (`tname`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO type VALUES ('3', 'CSS');
INSERT INTO type VALUES ('2', 'HTML5');
INSERT INTO type VALUES ('6', 'JAVA');
INSERT INTO type VALUES ('4', 'JS');
INSERT INTO type VALUES ('7', 'nodejs');
INSERT INTO type VALUES ('8', 'PS');
INSERT INTO type VALUES ('1', '首页');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) CHARACTER SET utf8 NOT NULL,
  `pwd` varchar(20) CHARACTER SET utf8 NOT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO user VALUES ('1', 'fpc', 'a', '0');
INSERT INTO user VALUES ('2', 'leaf', 'a', '1');
INSERT INTO user VALUES ('3', 'wy', 'a', '0');
INSERT INTO user VALUES ('4', 'aaa', 'a', '0');
INSERT INTO user VALUES ('5', 'bbb', 'a', '0');
INSERT INTO user VALUES ('6', 'ccc', 'a', '0');
INSERT INTO user VALUES ('7', 'ddd', 'a', '0');
INSERT INTO user VALUES ('8', 'eee', 'b', '0');
INSERT INTO user VALUES ('9', 'gwx', 'c', '1');
INSERT INTO user VALUES ('10', 'wfx', 'h', '0');
