-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 19, 2022 at 10:12 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `lexicon_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `sources`
--

CREATE TABLE `sources` (
  `id` int(11) UNSIGNED NOT NULL,
  `description` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `publishedDate` varchar(10) DEFAULT NULL,
  `citation` text,
  `notes` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sources`
--

INSERT INTO `sources` (`id`, `description`, `author`, `publishedDate`, `citation`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, 'Crosbie\'s Dictionary of Puns', 'John S. Crosbie', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(2, 'The Dictionary of Humorous Quotations', 'Evan Esar', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(3, 'The Devil\'s Dictionary', 'Ambrose Bierce', '1911', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(4, 'The Complete Pun Book', 'Art Moger', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(5, 'The Wit of Women', 'Lore and Maurice Cowen', '1970', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(6, 'Words of Women', 'Francine Klangsburn', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(7, 'Riddles, Joke and Other Funny Things', 'Bill Gerler, et al.', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(8, 'A Treasury of Laughter', 'Louis Untermeyer', '1946', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(9, 'A Dictionary of Wit, Wisdom and Satire', 'Herbert Prochow, et al.', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(10, 'The Roycroft Dictionary', 'Elbert Hubbard', '1914', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(11, 'Process and Thought in Composition', 'Frank J. D\'Angelo', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(12, 'Restaurant menu', 'unknown', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(13, 'Reader\'s Digest, Sep. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(14, 'Reader\'s Digest, Oct. 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(15, 'Reader\'s Digest, Jan. 1988', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(16, 'A Child\'s Garden of Misinformation', 'Art Linkletter', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(17, 'Playboy Magazine', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(18, 'Kids Say the Darndest Things', 'Art Linkletter', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(19, 'Happiness is a Warm Puppy', 'Charles M. Schultz', '', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(20, 'Christmas is Together Time', 'Charles M. Schultz', '', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(21, 'Security is a Thumb and a Blanket', 'Charles M. Schultz', '', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(22, 'Happiness is a Dry Martini', 'Johnny Carson', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(23, 'The Wall Street Journal', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(24, 'Quote Magazine', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(25, 'Bartlett\'s Familiar Quotations', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(26, 'The Holy Bible (King James Version)', 'various', '', '', '1', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(27, 'The Public Speaker\'s Treasury Chest', 'Herbert Prochow', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(28, 'Comic Dictionary', 'Evan Esar', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(29, 'A New Dictionary of Thoughts', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(30, 'A Speaker\'s Treasury for Sunday School Teachers', 'Herbert Prochow', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(31, 'A Raft of Riddles', 'Giulio Maestro', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(32, 'Boy\'s Life Magazine', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(33, 'Time Magazine', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(34, 'B.C. comic strip', 'Johnny Hart', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(35, 'The Nuclear Devil\'s Dictionary', 'James J. Farrell', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(36, 'Dictionary of Military and Navel Quotations', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(37, 'Webster\'s Unafraid Dictionary', 'Leonard L. Levinson', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(38, 'Funky Winkerbean comic strip', 'Batuik', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(39, 'The World\'s Worst Jokes', 'Al Boliska', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(40, 'The Stein and Day Dictionary of Definitive Quotations', 'Michael McKenna', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(41, 'Look to Your Stars', 'Louise Bacholder, ed.', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(42, 'The Dictionary According to Mommy', 'Joyce Armor', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(43, 'Dictionary', 'Samuel Johnson', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(44, 'On the Universe', 'Heraclitus', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(45, 'The Great Thoughts', 'George Seldes, ed.', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(46, 'Encyclopedia of Feminism', 'various', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(47, 'A Book of Burlesques', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(48, 'A Mencken Chrestomathy', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(49, 'Predudices, Third Series', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(50, 'A Book of Prefaces', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(51, 'Predudices, First Series', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(52, 'The American Language', 'H.L. Mencken', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(53, 'The Unofficial College Dictionary', 'Larry Cohen and Steve Zweig', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(54, 'The Great Society Dictionary', 'Edward S. Herman', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(55, 'The Left-Handed Dictionary', 'Leonard L. Levinson', '', '', '', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(56, 'Boy\'s Life Magazine, May 1983', 'various', '1983', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(57, 'Boy\'s Life Magazine (unknown date)', 'various', '', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(58, 'Boy\'s Life Magazine, Apr. 1983', 'various', '1983', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(59, 'Boy\'s Life Magazine, Jan. 1983', 'various', '1983', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(60, 'Boy\'s Life Magazine, Jul. 1983', 'various', '1983', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(61, 'Boy\'s Life Magazine, May 1982', 'various', '1982', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(62, 'Boy\'s Life Magazine, Mar. 1986', 'various', '1986', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(63, 'Boy\'s Life Magazine, Mar. 1984', 'various', '1984', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(64, 'Boy\'s Life Magazine, Apr. 1984', 'various', '1984', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(65, 'Boy\'s Life Magazine, Mar. 1981', 'various', '1981', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(66, 'Boy\'s Life Magazine, Apr. 1979', 'various', '1979', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(67, 'Boy\'s Life Magazine, May 1979', 'various', '1979', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(68, 'Boy\'s Life Magazine, Nov. 1979', 'various', '1979', '', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54'),
(69, 'Quiptionary', 'various', '2022', 'Quiptionary Website, unique additions.', '', '2022-10-19 10:07:54', '2022-10-19 10:07:54');
(70, 'Reader\'s Digest, Aug. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(71, 'Reader\'s Digest, Mar. 1974', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(72, 'Reader\'s Digest, Mar. 1977', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(73, 'Reader\'s Digest, Feb. 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(74, 'Omni Magazine, Jul. 1985 v.7, no.10', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(75, 'Reader\'s Digest, Apr. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(76, 'Reader\'s Digest, Jul. 1967', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(77, 'Reader\'s Digest, Jun. 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(78, 'Reader\'s Digest, Oct. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(79, 'American Greetings card', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(80, 'Omni Magazine, Aug. 1985 v.7, no.11', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(81, 'Reader\'s Digest, Aug. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(82, 'Reader\'s Digest, Jan. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(83, 'Reader\'s Digest, Aug. 1967', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(84, 'Reader\'s Digest, Oct. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(85, 'Reader\'s Digest, Jan. 1989', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(86, 'Funky Winkerbean comic strip, Jun. 1, 1984', 'Tom Batiuk', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(87, 'Reader\'s Digest, Jun. 1979', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(88, 'Reader\'s Digest, Jul. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(89, 'Reader\'s Digest, Sep. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(90, 'Reader\'s Digest, Jun. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(91, 'Reader\'s Digest, Oct. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(92, 'Louis I. Kahn', 'Vincent Scully', '', 'Scully, Vincent. <i>Louis I. Kahn</i>. George Braziller: New York, 1962', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(93, 'Reader\'s Digest, Apr. 1979', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(94, 'Reader\'s Digest, Nov. 1961', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(95, 'Reader\'s Digest, Mar. 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(96, 'Reader\'s Digest, Jun. 1986', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(97, 'Reader\'s Digest, Apr. 1952', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(98, 'Reader\'s Digest, Jul. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(99, 'Reader\'s Digest, Dec. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(100, 'Unknown (lost) source', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(101, 'Bible, King James version', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(102, '<i>The Picture of Dorian Gray</i>', 'Oscar Wilde', '18910000', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(103, 'Reader\'s Digest, Jan. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(104, 'Reader\'s Digest, Feb. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(105, 'M*A*S*H television show', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(106, 'Reader\'s Digest, Nov. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(107, 'Reader\'s Digest, May 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(108, 'Harris\' Farmer\'s Almanac 1992', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(109, 'Reader\'s Digest, Jun. 1967', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(110, 'Reader\'s Digest, May 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(111, 'Reader\'s Digest, Mar. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(112, '<i>One-Upmanship</i>', 'Stephen Potter', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(113, 'Reader\'s Digest, Apr. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(114, 'Reader\'s Digest, May 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(115, 'Reader\'s Digest, Sep. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(116, 'Reader\'s Digest, Nov. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(117, 'Reader\'s Digest, Jan. 1979', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(118, 'Reader\'s Digest, Oct. 1960', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(119, 'Reader\'s Digest, Jul. 1966', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(120, 'Reader\'s Digest, Apr. 1973', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(121, 'Reader\'s Digest, Dec. 1953', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(122, 'Reader\'s Digest, Feb. 1953', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(123, 'Reader\'s Digest, Feb. 1970', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(124, 'Reader\'s Digest, Dec. 1966', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(125, 'Reader\'s Digest, Oct. 1961', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(126, 'Reader\'s Digest, Feb. 1974', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(127, 'Reader\'s Digest, Oct. 1966', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(128, 'Reader\'s Digest, Mar. 1979', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(129, 'Reader\'s Digest, Jun. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(130, 'Reader\'s Digest, Jul. 1986', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(131, 'Reader\'s Digest, Dec. 1961', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(132, 'Reader\'s Digest, Apr. 1987', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(133, 'Reader\'s Digest, Dec. 1983', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(134, 'Reader\'s Digest, May 1967', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(135, 'Reader\'s Digest, Feb. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(136, 'Reader\'s Digest, May 1989', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(137, 'Reader\'s Digest, Aug. 1966', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(138, 'Reader\'s Digest, May 1978', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(139, 'Reader\'s Digest, Mar. 1984', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(140, 'Reader\'s Digest, Apr. 1985', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(141, 'Reader\'s Digest, Feb. 1979', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(142, 'Reader\'s Digest, Dec. 1952', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(143, 'Reader\'s Digest, Dec. 1959', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(144, 'Reader\'s Digest, Dec. 1975', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(145, 'Reader\'s Digest, Apr. 1960', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(146, 'Reader\'s Digest, Sep. 1962', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(147, 'Argus poster', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(148, 'Poster in Tri-Chem catalog, vol.II, 1985', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(149, '<i>Gone to Soldiers</i>', 'Marge Piercy', '', 'A novel', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(150, 'Poster', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(151, '"Good Shepherd" needlepoint', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(152, 'Ziggy comic strip', 'Tom Wilson', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(153, '<i>Of Gardens</i>', 'Francis Bacon', '', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(154, 'Omni Magazine, Apr. 1985 v.7, no.7', 'various', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(155, 'Graffiti', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(156, '<i>Beyond Good and Evil</i>', 'Friedrich Nietzsche', '', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(157, '<i>Lives of the Poets</i>', 'Samuel Johnson', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(158, '<i>Work Amongst Working Men</i>', 'Ellice Hopkins', '1870', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(159, '<i>Out of Africa</i>', 'Isak Dinesen', '1937', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(160, '<i>Electra</i>', 'Jean Giraudoux', '1937', 'A play', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(161, '<i>The Tin Trumpet</i>', 'Horace Smith', '', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(162, 'American Greetings calender', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(163, 'A Horse With No Name', 'America (band)', '', 'A song', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(164, 'BrainyQuote.com', '', '', 'https://www.brainyquote.com/quotes/ernest_hemingway_131094?src=t_grace', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(165, 'Desert Moon', 'Dennis DeYoung', '', 'A song', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(166, 'Refigerator magnet', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(167, '<i>De Monarchia</i>', 'Dante Alighieri', '1312', 'A book', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(168, 'R.P.P. mug', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51'),
(169, 'Trivet Wall Hanging', 'unknown', '', '', '0', '2022-10-06 16:57:51', '2022-10-06 16:57:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sources`
--
ALTER TABLE `sources`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
