--
-- Make the Y/N fields into real BOOLEANS (1/0)
--

ALTER TABLE `definitions` ADD `plural2` TINYINT(1) NOT NULL DEFAULT '0' AFTER `plural`;
ALTER TABLE `definitions` ADD `verify2` TINYINT(1) NOT NULL DEFAULT '0' AFTER `verify`;

UPDATE definitions SET plural2 = 1 WHERE Plural LIKE 'Y';
UPDATE definitions SET verified2 = 1 WHERE verified LIKE 'Y';

ALTER TABLE `definitions` CHANGE `plural2` `plural` TINYINT(1) NOT NULL DEFAULT '0';
ALTER TABLE `definitions` CHANGE `verified2` `verified` TINYINT(1) NOT NULL DEFAULT '0';

--
-- Change some fields to allow for NULL values
--

ALTER TABLE `definitions` CHANGE `source_date` `source_date` VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL;
ALTER TABLE `definitions` CHANGE `source_description` `source_description` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL;
ALTER TABLE `definitions` CHANGE `other_sources` `other_sources` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL; 
ALTER TABLE `definitions` CHANGE `definition_type` `definition_type` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL; 
ALTER TABLE `definitions` CHANGE `keywords` `keywords` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL; 
ALTER TABLE `definitions` CHANGE `categories` `categories` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL; 
ALTER TABLE `definitions` CHANGE `source` `source` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL; 
ALTER TABLE `definitions` CHANGE `context` `context` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL;
ALTER TABLE `definitions` CHANGE `sort` `sort` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL;

--
-- Remove these fields ("foreign" is a reserved word in MySQL anyway)
--

ALTER TABLE `definitions` DROP `foreign`;
ALTER TABLE `definitions` DROP `language`;

--
--
--

ALTER TABLE `definitions` ADD `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `game`;
ALTER TABLE `definitions` ADD `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `game`;

--
-- Changes to definition_index
--

ALTER TABLE `definition_index` DROP `id`;
ALTER TABLE `definition_index` DROP `weight`;

--
-- Changes to sources
--

ALTER TABLE `sources` ADD `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `source`;
ALTER TABLE `sources` ADD `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `createdAt`;

ALTER TABLE `sources` ADD `verified2` TINYINT(1) NOT NULL DEFAULT '0' AFTER `verified`;
ALTER TABLE `sources` DROP `verified`;
ALTER TABLE `sources` CHANGE `verified2` `verified` TINYINT(1) NOT NULL DEFAULT '0';

--
-- Making the definition_source table
-- 

CREATE TABLE definition_source AS SELECT id AS definition_id, source_id FROM `definitions` WHERE source_id <> '';

-- (then I modified it to change the source ID to a number)





