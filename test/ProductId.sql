CREATE TABLE `t_zy_productid2` (
    `id`           INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `productId`     varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
    `productName`     varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
    `productCode`     varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
     UNIQUE INDEX `idx_productid` (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;