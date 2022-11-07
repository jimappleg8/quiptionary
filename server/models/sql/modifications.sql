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

CREATE TABLE definition_source AS SELECT id AS definition_id, source_id FROM `definitions` WHERE source_id <> '';

--
-- Modifying the sources table
--

ALTER TABLE `sources` DROP `verified`;
ALTER TABLE `sources` MODIFY `source_date` varchar(10) AFTER `author`;
ALTER TABLE `sources` MODIFY `citation` text AFTER `source_date`;
ALTER TABLE `sources` CHANGE `source_date` `publishedDate` VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;
ALTER TABLE `sources` CHANGE `source` `notes` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;

--
-- Modifying the definitions table
--

ALTER TABLE `definitions` CHANGE `entry_word` `entryWord` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;
ALTER TABLE `definitions` CHANGE `part_of_speech` `partOfSpeech` VARCHAR(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;
ALTER TABLE `definitions` CHANGE `original_quote` `originalQuote` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;
ALTER TABLE `definitions` CHANGE `author` `attributedTo` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;
ALTER TABLE `definitions` DROP `verified`;
ALTER TABLE `definitions` CHANGE `definition_type` `definitionType` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;
ALTER TABLE `definitions` DROP `sort`;

--
-- Making the definition_source table
-- 

ALTER TABLE `definitionSources` ADD `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `sourceId`;
ALTER TABLE `definitionSources` ADD `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `createdAt`;
ALTER TABLE `definitionSources` ADD UNIQUE `definitionSources_sourceId_definitionId_unique` (`definitionId`, `sourceId`);
ALTER TABLE `definitionSources` ADD PRIMARY KEY (`definitionId`, `sourceId`);
ALTER TABLE `definitionSources` ADD FOREIGN KEY (`definitionId`) REFERENCES `definitions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `definitionSources` ADD FOREIGN KEY (`sourceId`) REFERENCES `sources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO definitionSources SELECT id AS definitionId, source_id AS sourceId, createdAt, updatedAt FROM `definitions`;



--
-- Fixing the Source IDs
--

SELECT * FROM `definitions` WHERE source_id LIKE '';

UPDATE `definitions` SET `source_id` = 2 WHERE `other_sources` LIKE '(2)';
UPDATE `definitions` SET `source_id` = 5 WHERE `other_sources` LIKE '(5)';
UPDATE `definitions` SET `source_id` = 7 WHERE `other_sources` LIKE '(7)';
UPDATE `definitions` SET `source_id` = 8 WHERE `other_sources` LIKE '(8)';
UPDATE `definitions` SET `source_id` = 9 WHERE `other_sources` LIKE '(9)';
UPDATE `definitions` SET `source_id` = 10 WHERE `other_sources` LIKE '(10)';
UPDATE `definitions` SET `source_id` = 11 WHERE `other_sources` LIKE '(11)';
UPDATE `definitions` SET `source_id` = 12 WHERE `other_sources` LIKE '(12)';
UPDATE `definitions` SET `source_id` = 25 WHERE `other_sources` LIKE '(25)';
UPDATE `definitions` SET `source_id` = 28 WHERE `other_sources` LIKE '(28)';
UPDATE `definitions` SET `source_id` = 28 WHERE `other_sources` LIKE '28';
UPDATE `definitions` SET `attributedTo` = 'Evan Esar' WHERE source_id = 28 AND attributedTo LIKE 'unknown';
UPDATE `definitions` SET `source_id` = 29 WHERE `other_sources` LIKE '(29)';
UPDATE `definitions` SET `source_id` = 30 WHERE `other_sources` LIKE '(30)';
UPDATE `definitions` SET `source_id` = 35 WHERE `other_sources` LIKE '(35)';
UPDATE `definitions` SET `source_id` = 35 WHERE `other_sources` LIKE '35';
UPDATE `definitions` SET `source_id` = 36 WHERE `other_sources` LIKE '(36)';
UPDATE `definitions` SET `source_id` = 37 WHERE `other_sources` LIKE '(37)';
UPDATE `definitions` SET `source_id` = 40 WHERE `other_sources` LIKE '(40)';
UPDATE `definitions` SET `source_id` = 41 WHERE `other_sources` LIKE '(41)';
UPDATE `definitions` SET `source_id` = 100 WHERE `other_sources` LIKE '(?)';
UPDATE `definitions` SET `source_id` = 69 WHERE `attributedTo` LIKE 'James B. Applegate, Jr.';


--
--
--

INSERT INTO `definitionSources` (`definitionId`, `sourceId`, `details`, `attributedTo`, `citedSource`, `isPrimary`, `createdAt`, `updatedAt`) VALUES ('2110', '40', '', 'Elbert Hubbard', NULL, '0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--
--
--

SELECT * FROM `definitions` WHERE `other_sources` <> '';
SELECT * FROM `definitions` WHERE `source_description` <> '';

UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '9' AND `other_sources` LIKE '(9)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '28' AND `other_sources` LIKE '(28)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '29' AND `other_sources` LIKE '(29)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '37' AND `other_sources` LIKE '(37)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '40' AND `other_sources` LIKE '(40)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '36' AND `other_sources` LIKE '(36)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '2' AND `other_sources` LIKE '(2)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '7' AND `other_sources` LIKE '(7)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '8' AND `other_sources` LIKE '(8)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '25' AND `other_sources` LIKE '(25)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '35' AND `other_sources` LIKE '(35)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '5' AND `other_sources` LIKE '(5)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '30' AND `other_sources` LIKE '(30)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '41' AND `other_sources` LIKE '(41)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '28' AND `other_sources` LIKE '28';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '12' AND `other_sources` LIKE '(12)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '10' AND `other_sources` LIKE '(10)';
UPDATE `definitions` SET `other_sources` = '' WHERE `source_id` LIKE '11' AND `other_sources` LIKE '(11)';


UPDATE definitions SET source_date = '', source_description = '' WHERE source_id = '3' AND source_date = "19110000" AND source_description = "The Devil's Dictionary"

UPDATE definitions SET source_date = '', source_description = '' WHERE source_id = '35' AND source_date = "19850000" AND source_description = "The Nuclear Devil's Dictionary"

UPDATE definitions SET source_description = '' WHERE source_id = '37' AND source_description = "Webster's Unafraid Dictionary";
UPDATE definitions SET source_description = '' WHERE source_id = '42' AND source_description = "The Dictionary According to Mommy";
UPDATE definitions SET source_description = '' WHERE source_id = '16' AND source_description = "A Child's Garden of Misinformation";






