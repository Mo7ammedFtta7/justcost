-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2019 at 03:35 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ccc`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(4) NOT NULL COMMENT 'role id',
  `customerId` int(4) NOT NULL,
  `productId` int(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `customerId`, `productId`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, '2019-05-15 10:44:07', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `group_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `name`, `group_id`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, '2 G', 1, '0000-00-00 00:00:00', NULL, NULL),
(2, '3 G', 1, '0000-00-00 00:00:00', NULL, NULL),
(5, '2 G', 1, '2019-06-01 12:02:59', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attributes_group`
--

CREATE TABLE `attributes_group` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attributes_group`
--

INSERT INTO `attributes_group` (`id`, `name`, `category_id`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, 'Ram', 4, '2019-06-01 11:57:31', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attributes_map`
--

CREATE TABLE `attributes_map` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `value` text CHARACTER SET utf32 NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attributes_map`
--

INSERT INTO `attributes_map` (`id`, `product_id`, `attribute_id`, `value`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, 10, 5, '', '2019-06-01 13:55:38', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `img` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `category_id`, `name`, `img`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, 6, 'sa', 'sas', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `image` text,
  `sort_order` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `views` int(11) DEFAULT NULL,
  `flag` int(11) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `image`, `sort_order`, `status`, `views`, `flag`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 'Computer & Office', NULL, 'http://admin.just-cost.com/storage/imgs/computer.png', 0, 0, NULL, 1, '2019-05-06 20:00:00', NULL, NULL),
(5, 'Office Electronics', 4, NULL, 0, 1, NULL, 1, '2019-05-06 20:00:00', NULL, NULL),
(6, 'Computer Components', 4, NULL, 0, 1, NULL, 1, '2019-05-06 20:00:00', NULL, NULL),
(7, 'Men\'s Watches', 8, NULL, 0, 1, NULL, NULL, '2019-05-06 20:00:00', NULL, NULL),
(8, 'Watches', NULL, 'http://admin.just-cost.com/storage/imgs/computer.png', 0, 0, NULL, NULL, '2019-05-06 20:00:00', NULL, NULL),
(9, 'Women\'s Watches', 8, NULL, 0, 1, NULL, NULL, '2019-05-06 20:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(4) NOT NULL COMMENT 'role id',
  `name` varchar(20) DEFAULT NULL,
  `countryId` int(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `countryId`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'abu dhabi', 1, '0000-00-00 00:00:00', NULL, NULL),
(4, '5555', 1, '2019-05-18 20:06:36', '2019-05-18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `userId` bigint(20) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `productid` int(11) NOT NULL,
  `userId` bigint(20) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `parent_id`, `productid`, `userId`, `comment`, `date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 7, 28, 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb ', '2019-05-17 21:16:52', '2019-04-30 22:00:00', NULL, NULL),
(2, 1, 7, 28, 'zdgvfgdfg rg egertgt aertg t aert ert', '2019-05-17 21:16:52', '2019-04-30 22:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(4) NOT NULL COMMENT 'role id',
  `name` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'sudan', '2019-05-17 23:00:00', '2019-05-17 23:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `keywords`
--

CREATE TABLE `keywords` (
  `keywordsId` tinyint(4) NOT NULL,
  `productId` tinyint(4) NOT NULL,
  `keywords` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `customer_id`, `product_id`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, 15, 7, '2019-05-18 11:01:14', NULL, NULL),
(2, 19, 7, '2019-05-30 07:47:15', NULL, '2019-05-30'),
(3, 28, 7, '2019-05-30 11:49:13', NULL, '2019-05-30'),
(4, 19, 7, '2019-05-31 09:59:14', NULL, '2019-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0009f23d8bee044d34bbbe4f9838dd5e97e1fb7f42daa2f049e1c3aef6f5097f60b8013d22f3ad5d', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:52:37', '2019-05-18 22:52:37', '2020-05-18 23:52:37'),
('04baf669f95a549da767ffed32d506b4fe6c0bc4396d9c8f652e2dd1fa79511a1e38383619991cb6', 19, 7, 'soso', '[]', 0, '2019-05-20 13:47:09', '2019-05-20 13:47:09', '2020-05-20 14:47:09'),
('04dc7f85cac35e14cd3e544ecb2a3a70d7015c4fb2f399b8692405728f63b178757bbe513a308e82', 22, 7, 'MyApp', '[]', 0, '2019-05-19 13:57:50', '2019-05-19 13:57:50', '2020-05-19 14:57:50'),
('05c4bac0031f833e379e20303cb15304bb5b2ed9bccd179594352dadcca71e565f30b2a0f9a1e82f', 19, 7, 'soso', '[]', 0, '2019-05-20 13:38:50', '2019-05-20 13:38:50', '2020-05-20 14:38:50'),
('08a0a7874485edb934e793cae7b9868c5c4ff70873c34595e2929dfa65b0eeb09eca220ed5a3dbda', 28, 7, 'soso', '[]', 0, '2019-05-29 13:31:50', '2019-05-29 13:31:50', '2020-05-29 17:31:50'),
('0e2a479bdc901f05db4cf4ab298a4cf9f191378cd3f7d68b28060fd35abff086fb8c60e12f50e62a', 43, 7, 'MyApp', '[]', 0, '2019-05-31 14:51:46', '2019-05-31 14:51:46', '2020-05-31 18:51:46'),
('0e4a16f500886a53e9ed1ad38912feb59af898411ecb8b84189731d3cdc34194346321cc997f1fb3', 28, 7, 'soso', '[]', 0, '2019-05-26 11:03:55', '2019-05-26 11:03:55', '2020-05-26 15:03:55'),
('0faa4621e503df21c898c23765fd9551ede9596a3437e47402f788c51fa47d264eacaac3d1b6018f', 15, 1, 'MyApp', '[]', 0, '2019-05-18 18:57:27', '2019-05-18 18:57:27', '2020-05-18 19:57:27'),
('11857d9f4576ecda45fd8bbd26392f92e2fae9b9f6bb188b7fb467f30655a3b369426ebcbd59930e', 23, 7, 'MyApp', '[]', 0, '2019-05-19 13:59:41', '2019-05-19 13:59:41', '2020-05-19 14:59:41'),
('11cc065103c7f72f6cda4f572077f7917b60c4e77ceba6a0e809ebe77c374822f5e454586a7b8d74', 15, 1, 'soso', '[]', 0, '2019-05-18 19:15:10', '2019-05-18 19:15:10', '2020-05-18 20:15:10'),
('12d24204a0b995478c1e1f6d0d762cfc4c0dd6bcceba2931e6286d1248be924773d72e1319e3e3a0', 21, 7, 'MyApp', '[]', 0, '2019-05-19 13:57:03', '2019-05-19 13:57:03', '2020-05-19 14:57:03'),
('13c9290f9d0c45509c3036cd172ce0b762d267f9bc30852b1afadd92e34a90e4c25dc000095c4609', 29, 7, 'soso', '[]', 0, '2019-05-26 10:51:50', '2019-05-26 10:51:50', '2020-05-26 14:51:50'),
('17def86465e1b3e944f3d8a61b1ed038360c120e8b2f6c4d274b539f562f9c82e970c45b0de1595d', 21, 7, 'soso', '[]', 0, '2019-05-20 07:16:29', '2019-05-20 07:16:29', '2020-05-20 08:16:29'),
('188cc4906e56fc46b6688c2ad2a4b9c019bf3d3c079276991cf3d900edf548d1430de3fcec28ac1c', 19, 7, 'soso', '[]', 0, '2019-05-20 13:43:10', '2019-05-20 13:43:10', '2020-05-20 14:43:10'),
('18a2b730da7f0e2a07b7bad2ee24ab2bf363d0d47d9de7685a26dd48b751c45216fb0b71fcb1212d', 28, 7, 'soso', '[]', 0, '2019-05-26 10:56:11', '2019-05-26 10:56:11', '2020-05-26 14:56:11'),
('1993e2f71d2d72cfb6858fd6b401ba3f71ec6f6c61e6adaa904a5492aeaca202ba0d1df13c00300e', 28, 7, 'soso', '[]', 0, '2019-05-26 10:59:13', '2019-05-26 10:59:13', '2020-05-26 14:59:13'),
('1b07ebabaaa19574a73f04fdcb28094c05dd8b68d0024e969dfd5873e3a5740ad242f2aadff05839', 41, 7, 'MyApp', '[]', 0, '2019-05-31 14:26:28', '2019-05-31 14:26:28', '2020-05-31 18:26:28'),
('1b9f725500d1d0f4ffc10895b50d5bb48d92ee6e932a0561e8541069e96e71bfcc7db909e3ad03a2', 24, 7, 'MyApp', '[]', 0, '2019-05-19 14:01:28', '2019-05-19 14:01:28', '2020-05-19 15:01:28'),
('1bde7dadd3e766633fe1cc605a053c6316a6471c6f3e36c0d16a4d00ac24414982ab16a2ddc9539e', 28, 7, 'soso', '[]', 0, '2019-05-23 09:24:22', '2019-05-23 09:24:22', '2020-05-23 13:24:22'),
('1d3417ebae7dd1c9162f391e55fe22ca0801cbfe985014d641cbbe02f3c7d1c810bae615a87d057c', 28, 7, 'soso', '[]', 0, '2019-05-24 19:33:15', '2019-05-24 19:33:15', '2020-05-24 23:33:15'),
('1d7148412cf40b887cbf9eb68162647278b17c9e7c4639bcc7a23a557e3c813b7ef85ddb183e725b', 28, 7, 'soso', '[]', 0, '2019-05-24 20:00:57', '2019-05-24 20:00:57', '2020-05-25 00:00:57'),
('1e05aae53ce5fab4ce0d4f48d6bb8bd279543938db6c34a458ae120ae372b6b9f65520119b245b94', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:51:43', '2019-05-18 22:51:43', '2020-05-18 23:51:43'),
('1f4d20d12c44a4be6829a7e00beb2419e88b79b17a6bf37f8b846bac4de941195cb326be2f92376e', 28, 7, 'soso', '[]', 0, '2019-05-26 10:56:22', '2019-05-26 10:56:22', '2020-05-26 14:56:22'),
('1f691d5a6403adba685098e292faa9f530ad1a98276171c946951c9f44a6cc73fd84545ab00e297e', 28, 7, 'soso', '[]', 1, '2019-05-29 13:53:59', '2019-05-29 13:53:59', '2020-05-29 17:53:59'),
('20c2a6901ecf7c1d7a5434bf50f8622a7a466741a8761c59136d4d49f43cad609fd2a1780d7f9f80', 28, 7, 'soso', '[]', 0, '2019-05-24 20:04:06', '2019-05-24 20:04:06', '2020-05-25 00:04:06'),
('215e062a6c2b48f37172eff20f01a6aec9b27d85ad06efc3c95958b1c3418afe61b4453e93a0bb00', 28, 7, 'soso', '[]', 0, '2019-05-30 08:53:55', '2019-05-30 08:53:55', '2020-05-30 12:53:55'),
('21f1fda78e0f5dcec9fab95fcf84cd5f1ba2e8c5b090977b24e60b6c1a0e716903217702ade2db75', 21, 7, 'soso', '[]', 0, '2019-05-21 09:37:29', '2019-05-21 09:37:29', '2020-05-21 10:37:29'),
('2365c0b647321bb2f9f279efd6317e5ff94afe82017da493acc397914ab29e20e59c3e22d8c629d7', 28, 7, 'soso', '[]', 0, '2019-05-26 10:53:23', '2019-05-26 10:53:23', '2020-05-26 14:53:23'),
('251037b5a9fed38871897c10d6411484977f913acceba4ecfede71445588b430ca8236a2dce84c92', 28, 7, 'soso', '[]', 0, '2019-05-28 08:21:18', '2019-05-28 08:21:18', '2020-05-28 12:21:18'),
('25b66c3e31e1be6fe041fadf7c932410b8b7cf6df3fbf9e0491e3722356457c045c1d31cb0ea6750', 28, 7, 'soso', '[]', 0, '2019-05-24 20:19:25', '2019-05-24 20:19:25', '2020-05-25 00:19:25'),
('2707b3af6dc8a035a86699441a95aaf165116534cf4198e35c376cbda4993de0d8d2b340bea67e1d', 19, 7, 'soso', '[]', 0, '2019-05-20 11:01:48', '2019-05-20 11:01:48', '2020-05-20 12:01:48'),
('276371f89b6124a93daac5fdd857f3149e411bb6249984aad1a98f64ce1d8eaf0ce889584f48ba76', 28, 7, 'soso', '[]', 0, '2019-05-26 10:57:29', '2019-05-26 10:57:29', '2020-05-26 14:57:29'),
('27999796b1792d32fd54b2a0c9bf025c34caf3ce4b016428c7c4974f8cd2a3126d99585c8dfc451d', 21, 7, 'soso', '[]', 1, '2019-05-21 09:39:51', '2019-05-21 09:39:51', '2020-05-21 10:39:51'),
('29e82bea6c1b3ee7e679da6f6a928fba2c93fb61edc58cd5d18dd8fd1b748a2b4717c0a70f88ca88', 19, 7, 'soso', '[]', 0, '2019-05-20 09:46:43', '2019-05-20 09:46:43', '2020-05-20 10:46:43'),
('2ba1eb41c022a1aee31a85dcdbc39b77675bdf2b3594aa6710ee59886a1c1389f0a82f60fa9428f5', 19, 7, 'soso', '[]', 0, '2019-05-23 11:23:57', '2019-05-23 11:23:57', '2020-05-23 12:23:57'),
('2cc6794a81a1074d93531cfb274d9f32a4aa152e8874ea333e26a7fa16b6b59a213fa2c03d70daa8', 28, 7, 'soso', '[]', 0, '2019-05-26 16:20:22', '2019-05-26 16:20:22', '2020-05-26 20:20:22'),
('304b3a95bcf8e8db0114497ea23960e91b9ede65eb76679a226d41e772163b5c402293af83eed38d', 28, 7, 'soso', '[]', 0, '2019-05-26 10:47:44', '2019-05-26 10:47:44', '2020-05-26 14:47:44'),
('32b76f485ca51b6c6443309dcde3ea3fd2ca722acd402135ca5f4769d2ccd57912453b0070ded38f', 21, 7, 'soso', '[]', 0, '2019-05-20 09:12:02', '2019-05-20 09:12:02', '2020-05-20 10:12:02'),
('358f2ab6046a0fe1b0576d80eb6b186b832a28d015a964e1de7b0e5eb741b15aa1b5444f81ffffc6', 12, 1, 'MyApp', '[]', 0, '2019-05-18 18:41:36', '2019-05-18 18:41:36', '2020-05-18 19:41:36'),
('36533438eae4c37d40817a1d5495dd15b708743d2b66156cf4f17008c861fc615d517a214f7c2ccd', 28, 7, 'soso', '[]', 0, '2019-05-26 11:05:13', '2019-05-26 11:05:13', '2020-05-26 15:05:13'),
('36d62bd961e9de707b89f9a8ed9e22948a9d73488c6fa94d321c378aa0cdb2c0a3424da8bf51c0b4', 28, 7, 'soso', '[]', 0, '2019-05-23 09:19:46', '2019-05-23 09:19:46', '2020-05-23 13:19:46'),
('394de214a79589b5936b1bd675909bd692fb61876886b28a8e038b862181f9dfebdc32f85725e5e4', 28, 7, 'soso', '[]', 0, '2019-05-26 11:00:54', '2019-05-26 11:00:54', '2020-05-26 15:00:54'),
('3ba15587b8918106c31b63f336cf0aca0a1dd103faf75f378a70f64b89aabe75a9d60c0e5a5e2ef7', 28, 7, 'soso', '[]', 0, '2019-05-26 11:05:41', '2019-05-26 11:05:41', '2020-05-26 15:05:41'),
('3bf1895b377422b8086c46e41bf01fce585a2087b033290a7148945b1581817d2882aec2ba04dbfd', 11, 1, 'MyApp', '[]', 0, '2019-05-18 18:32:40', '2019-05-18 18:32:40', '2020-05-18 19:32:40'),
('3c0e1cf19d6c76363d9d4db0731e1e0b066fae48ba7845ab67d1799a89361a89ffd32fb22c9da6ab', 19, 7, 'soso', '[]', 1, '2019-05-20 11:53:52', '2019-05-20 11:53:52', '2020-05-20 12:53:52'),
('3c8ffb8285a4d9ad2be453d17ce69c799815338a3aacada85b027447880aea58d5e33dd74119bb8b', 28, 7, 'soso', '[]', 0, '2019-05-23 09:42:20', '2019-05-23 09:42:20', '2020-05-23 13:42:20'),
('3cc4139b1205ec5f4010bfddaec4e0d60a89eb5eda151643cc49c16bd211080d272cfff7903900a4', 27, 7, 'soso', '[]', 0, '2019-05-23 11:39:19', '2019-05-23 11:39:19', '2020-05-23 12:39:19'),
('3d6c46370ff147f0195f7e0ef91f4c7fb24923580f4a9a4bedd722870aa77b0d5f5d0da68863e3b5', 28, 7, 'soso', '[]', 0, '2019-05-24 19:32:31', '2019-05-24 19:32:31', '2020-05-24 23:32:31'),
('3f6d1071368d4a0d7f9e8822f23b389b29f9e899d55559cdfee76616c2deb247e3586c8e8523d70c', 40, 7, 'MyApp', '[]', 0, '2019-05-31 14:24:35', '2019-05-31 14:24:35', '2020-05-31 18:24:35'),
('43daa555f7f1c6b86b6a854f23bcd078c68922dab3fd3fd221af40f433f31ede5352fa583dd4a100', 31, 7, 'MyApp', '[]', 0, '2019-05-26 09:49:37', '2019-05-26 09:49:37', '2020-05-26 13:49:37'),
('45b3f1cc4a539125be81046fd2ab1c731036589aa29a438fbe39fb8954af0bf21e77e6f89b3a3413', 21, 7, 'soso', '[]', 0, '2019-05-20 09:12:25', '2019-05-20 09:12:25', '2020-05-20 10:12:25'),
('46535b3e40a219fc81f30347b646c6c454dc1587f1d68390958e5f2fa76d9b5cf11b14e714ea9aa8', 28, 7, 'soso', '[]', 0, '2019-05-26 10:58:43', '2019-05-26 10:58:43', '2020-05-26 14:58:43'),
('47f3541f2970d81d72e23cdd7fc1960a32d4e1a6ef9b290fae225d3e005e6c98046e21a8dfe4c43d', 17, 3, 'MyApp', '[]', 0, '2019-05-18 10:57:20', '2019-05-18 10:57:20', '2020-05-18 11:57:20'),
('481109f3a0bf062f86159877a7eac638ecf4def8077b9d24ae1ef7054c003c678d5137478efefa66', 21, 7, 'soso', '[]', 0, '2019-05-21 11:02:54', '2019-05-21 11:02:54', '2020-05-21 12:02:54'),
('495bd231b1409f004dcbf02ee869928b40e285da7e9c2759ee81a8f277af159c29fa8e98eb8ffabf', 28, 7, 'soso', '[]', 0, '2019-05-24 20:15:25', '2019-05-24 20:15:25', '2020-05-25 00:15:25'),
('4ad09c91eb791ec3aeb34181f042d5763e60ee76675eb52c8478a52127b618335a07221b2376c1a6', 19, 3, 'MyApp', '[]', 0, '2019-05-18 11:03:48', '2019-05-18 11:03:48', '2020-05-18 12:03:48'),
('4ad4a9b9cc34942d4a12ecd90860a6f0ac22cda0d3794ec89f2a09c7c9e368ff519f7a0f87b78704', 28, 7, 'soso', '[]', 0, '2019-05-26 16:41:29', '2019-05-26 16:41:29', '2020-05-26 20:41:29'),
('4b4f72264a58d9567889ccba44615083da5d15dfc2ea1696780bf2cece5ffeda7a7ff1a26ccc1044', 21, 7, 'soso', '[]', 0, '2019-05-20 09:17:36', '2019-05-20 09:17:36', '2020-05-20 10:17:36'),
('4b5025ae98eacc6506eb926436041b679675b329f35d25a6a1ae0ce03cb02e4cd231601b8a14116d', 20, 7, 'MyApp', '[]', 0, '2019-05-19 13:45:53', '2019-05-19 13:45:53', '2020-05-19 14:45:53'),
('4c34c5f24d3fc9d8b162a8d4bbfbeb1d51b96c85f67183d6a3633eb83bcfc3b9ed6fd57ec2638ed2', 28, 7, 'soso', '[]', 0, '2019-05-26 11:04:51', '2019-05-26 11:04:51', '2020-05-26 15:04:51'),
('508babb9def339274f9cc7495b1b1ec8439da069727d3be2dd81eac3e5848504fab90b4af3955a3d', 19, 7, 'soso', '[]', 1, '2019-05-20 11:48:51', '2019-05-20 11:48:51', '2020-05-20 12:48:51'),
('5175ce61ad1832812ca98c27229d8ae2d6ee4c6046a1fb380b5afa3eae5fb92f42d1f71e8289450d', 28, 7, 'soso', '[]', 0, '2019-05-23 09:24:27', '2019-05-23 09:24:27', '2020-05-23 13:24:27'),
('53a711ef0bf3d404e3e01aa30198f558db8fc4ebce93e4be0b458e94cf7ee7cc97320265b9bb7b45', 38, 7, 'MyApp', '[]', 0, '2019-05-31 14:12:57', '2019-05-31 14:12:57', '2020-05-31 18:12:57'),
('53cc2ac260b4531774348ee64a96b5f25b0e0cbbe8728e72589c64dd8190b501bb1b980e9d990da9', 28, 7, 'soso', '[]', 0, '2019-05-26 10:42:38', '2019-05-26 10:42:38', '2020-05-26 14:42:38'),
('54577087211ec641f6f7df3e13496099416940c4de1185557d3b79d6245e040238a75f295513939c', 28, 7, 'soso', '[]', 0, '2019-05-23 09:20:37', '2019-05-23 09:20:37', '2020-05-23 13:20:37'),
('54b15e3a82d6a25388afc87cb56b3a2c31f9534f74062f8d5962fdf6eafa2a623f613ed9153b30af', 34, 7, 'MyApp', '[]', 0, '2019-05-26 10:19:38', '2019-05-26 10:19:38', '2020-05-26 14:19:38'),
('5569dd4850f89ec16cec739ec095d15f5bec826cecbeebd58bdda3325eecea8de2e650ddc59644b5', 28, 7, 'soso', '[]', 0, '2019-05-25 08:37:00', '2019-05-25 08:37:00', '2020-05-25 12:37:00'),
('5790deb1336db38a8077ac97b1dbef8fc2dc33b8c0f7185867c14f39dd6b73b628d5712c37f4ad77', 28, 7, 'soso', '[]', 0, '2019-05-26 11:13:28', '2019-05-26 11:13:28', '2020-05-26 15:13:28'),
('584371f56f9403b96c8f1e1e0bc5acafe502f1b912aa950db632b6d600d790ac2133de1dc5b813cc', 28, 7, 'soso', '[]', 0, '2019-05-30 08:53:42', '2019-05-30 08:53:42', '2020-05-30 12:53:42'),
('5bb87efe9af1da30cdca1eec7078ed12c17a07c6e893dd6636c1fc876a11c60edff1248d79c1223b', 28, 7, 'soso', '[]', 0, '2019-05-23 09:15:58', '2019-05-23 09:15:58', '2020-05-23 13:15:58'),
('5c0359756a70a6e057b7e7118e7126bc5e43c29626e1e8be1bc40e7fac7f889b536bd97e2e61cb5b', 28, 7, 'soso', '[]', 0, '2019-05-26 11:13:44', '2019-05-26 11:13:44', '2020-05-26 15:13:44'),
('5c50a5adc4c5a994564f2cb353428b640d385b7e1b4165b2c0589853de2c76fd8a212790ad14e096', 21, 7, 'soso', '[]', 0, '2019-05-21 09:43:47', '2019-05-21 09:43:47', '2020-05-21 10:43:47'),
('5cf3d53b9365297cfa7b98d665f9b12278f4affb5f7e7c6eef454e4bc051a3140fe541c83500dc0e', 28, 7, 'soso', '[]', 0, '2019-05-23 09:23:10', '2019-05-23 09:23:10', '2020-05-23 13:23:10'),
('5de17ae6886752ce91535f00bb9d8622ed3cbae038592ad046254a1904b85d180ad6f51dec362da3', 28, 7, 'soso', '[]', 0, '2019-05-23 09:31:36', '2019-05-23 09:31:36', '2020-05-23 13:31:36'),
('6086c26c562bbe3999557873ec4c78c8f805ca6269c4fffb30871573b461cc0dff4e2708aed3f9ec', 28, 7, 'soso', '[]', 0, '2019-05-23 09:25:04', '2019-05-23 09:25:04', '2020-05-23 13:25:04'),
('619d5ed0cf287a3137bd966fff8923350040779a62234c48ed2a291c27deec20e9465568a6bed9a9', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:48:52', '2019-05-18 22:48:52', '2020-05-18 23:48:52'),
('6202afecdb3c06486112a9fea1dfb8763d8dd4a99827657d78ef7d27d63eedcd4723f270f782c2ae', 15, 1, 'soso', '[]', 0, '2019-05-18 19:15:20', '2019-05-18 19:15:20', '2020-05-18 20:15:20'),
('622857de09a0fd82ee9cde87d64ee5b014dc94fdf68211f4b65f4f1d1acf9de02950d2af2fee4bd8', 21, 7, 'soso', '[]', 1, '2019-05-21 09:46:45', '2019-05-21 09:46:45', '2020-05-21 10:46:45'),
('680f61c2fe96e56fb9f0529ec5b1ff7cef9d8085c871b2c920b0cdde2a90ec196c472e557cfddf2d', 28, 7, 'soso', '[]', 0, '2019-05-26 10:54:21', '2019-05-26 10:54:21', '2020-05-26 14:54:21'),
('6a12ce0d3e1e3e21c7b27507fd0d0e4b8f41ced46297f71cf57519f65d84b8c1a951626ad8255305', 29, 7, 'MyApp', '[]', 0, '2019-05-26 09:42:11', '2019-05-26 09:42:11', '2020-05-26 13:42:11'),
('6ea9f3a4ec89f1485a8809ffbef8d1386bcc22da43005c33d1db20bdcb37eeaa6303e3d0509135af', 27, 7, 'soso', '[]', 0, '2019-05-23 11:49:17', '2019-05-23 11:49:17', '2020-05-23 12:49:17'),
('7039b5c6edeb16bb8e9eff8eeace191b3dbb05986c25964890c39ed79c2461c29ec5f71f0c2b2f9a', 19, 7, 'soso', '[]', 0, '2019-05-22 10:52:05', '2019-05-22 10:52:05', '2020-05-22 11:52:05'),
('7100f11f56e4a31987ec11159e398589d8305553a662b32eb6b63ae3cd7c5a80cd76c1dc7685455d', 45, 7, 'soso', '[]', 0, '2019-06-01 07:45:08', '2019-06-01 07:45:08', '2020-06-01 11:45:08'),
('742cedc8172d6cf7ba3d53356ab2d64572a1e6475a02de6ee8d58bcb6ac57556c96e6520aff10d67', 28, 7, 'soso', '[]', 0, '2019-05-30 07:47:48', '2019-05-30 07:47:48', '2020-05-30 11:47:48'),
('7830be61a2dc5e6f5e049fdd48e3635ea7e4b465e983e42b781821ad56bddbc80892df00d4ef7b8f', 21, 7, 'soso', '[]', 0, '2019-05-20 09:15:00', '2019-05-20 09:15:00', '2020-05-20 10:15:00'),
('78500af7f3c6dadaaec434526f8f85b15aa1a51265e7a58fc5b12e0f4c7bb0e81eded1153585247e', 21, 7, 'soso', '[]', 0, '2019-05-20 09:12:59', '2019-05-20 09:12:59', '2020-05-20 10:12:59'),
('78907be903be1117861d74558a122bf311f4ef48468a869e45aeff02f3304fb3045cec0a9fbd4bac', 29, 7, 'soso', '[]', 0, '2019-05-26 10:53:45', '2019-05-26 10:53:45', '2020-05-26 14:53:45'),
('7a02722909725ebe10df0a740484f85d16128b6c0d7f7fa77a53a8cd1708c1b108a594da65f46f11', 28, 7, 'soso', '[]', 0, '2019-05-26 10:58:01', '2019-05-26 10:58:01', '2020-05-26 14:58:01'),
('7a248d257e0c0a0b3300d2879c356607ca7ace9a8208d46d538dd7239650104efdebc250670d014e', 28, 7, 'soso', '[]', 0, '2019-05-25 08:36:47', '2019-05-25 08:36:47', '2020-05-25 12:36:47'),
('7b73bde5fa07f505fc4b5a0aebf3d216331f7f42383c698f7bc4255775727807f965ad79bc324dd4', 19, 7, 'soso', '[]', 0, '2019-05-19 18:07:02', '2019-05-19 18:07:02', '2020-05-19 19:07:02'),
('7ebe6df0e096d96adc041d76d8079128d2822163fc1d0e1452c22f1600508d04bd5da4529f016eb0', 28, 7, 'soso', '[]', 0, '2019-05-23 09:51:21', '2019-05-23 09:51:21', '2020-05-23 13:51:21'),
('7edb8e9a922ce1cd69ed38edaaff3089a5b6a79318669d10dfd36125c6bd4f5561fda7848d960817', 34, 7, 'soso', '[]', 0, '2019-05-26 10:52:01', '2019-05-26 10:52:01', '2020-05-26 14:52:01'),
('7fb8fb82b3b736056ef98dcd86efb6ac7bd0f1de48b298db3f4bf2f0ee463ca0bcdb3ad2bc42186f', 28, 7, 'soso', '[]', 0, '2019-05-24 19:29:39', '2019-05-24 19:29:39', '2020-05-24 23:29:39'),
('807829480f8dc4e42662a459c8a28000e70320e34055b91fea370b1c1f179da88c7a69b8ed568e29', 19, 7, 'soso', '[]', 1, '2019-05-20 12:00:06', '2019-05-20 12:00:06', '2020-05-20 13:00:06'),
('82e245057feaabce557248a8fd1617bda00aa54def72c10aefd2d76c3838a4c2fd578f34ec9c2e91', 28, 7, 'soso', '[]', 0, '2019-05-26 10:54:44', '2019-05-26 10:54:44', '2020-05-26 14:54:44'),
('831ac874fde3b311b81898034dbac304c98e50320dc50b4b8a526c8cde7e0487956cb18bbadd7713', 26, 7, 'MyApp', '[]', 0, '2019-05-20 11:40:27', '2019-05-20 11:40:27', '2020-05-20 12:40:27'),
('839e7db1615cc3372da371b043517f499fa41a32c16453965f1e899963feb9ad6d40d62cbdc295e2', 30, 7, 'MyApp', '[]', 0, '2019-05-26 09:47:25', '2019-05-26 09:47:25', '2020-05-26 13:47:25'),
('855fb425b42678ffe844f137c57738b0c2a1daf79ad6361e7740447d11587cfcdff16ee9f57b3a88', 28, 7, 'soso', '[]', 0, '2019-05-24 19:33:22', '2019-05-24 19:33:22', '2020-05-24 23:33:22'),
('85f23762cd3f11250ee61a004668a31d9cfdd5447bf71ea5fca5a81d15b056fa1e35c528ec1902ea', 28, 7, 'soso', '[]', 0, '2019-05-24 19:32:10', '2019-05-24 19:32:10', '2020-05-24 23:32:10'),
('877cbf841464a45b0b8d94fbc004682a89b26616a0d04784a2dd797c3dc295e7fd9ac284174c42a5', 19, 7, 'soso', '[]', 0, '2019-05-19 13:01:35', '2019-05-19 13:01:35', '2020-05-19 14:01:35'),
('890cec9c394af496da739e2bc781cb1b95dd12d0eebd76b214a91f55a0ed0ccf39327703ab25e17a', 28, 7, 'soso', '[]', 0, '2019-05-23 09:23:18', '2019-05-23 09:23:18', '2020-05-23 13:23:18'),
('89942e87e15ef403143968f630a819ed418ca967be5981b7d79e7ef292c6264a7372b5b081be9625', 14, 1, 'MyApp', '[]', 0, '2019-05-18 18:50:04', '2019-05-18 18:50:04', '2020-05-18 19:50:04'),
('89c01a9bc44f05dd9dc5555fabfbea4ad03b8cfa99a95457ae9a46a15388903ada7d056ca58817d7', 43, 7, 'soso', '[]', 0, '2019-05-31 17:35:07', '2019-05-31 17:35:07', '2020-05-31 21:35:07'),
('8b2bb01be30284c0b6d6cc738a86a3909aa1ca9f636069da251d6ee28b8e85da6741bce8fa94dc0f', 28, 7, 'soso', '[]', 0, '2019-05-26 10:39:19', '2019-05-26 10:39:19', '2020-05-26 14:39:19'),
('8bdf66cd2e0eab04f31fc69cd47a6838a5c05eb1fbd89f0530fdbd5b520f0332f74f6f6050ba754f', 13, 1, 'MyApp', '[]', 0, '2019-05-18 18:46:09', '2019-05-18 18:46:09', '2020-05-18 19:46:09'),
('8e45eb64a956e70acdd905a04e6d1dc2bfabc693e12432dee65c612771db70df204fa7da5c9f23ee', 19, 7, 'soso', '[]', 1, '2019-05-20 11:50:55', '2019-05-20 11:50:55', '2020-05-20 12:50:55'),
('8f36a9e1a0dae85661c0d55550b363d106d76bf9b6373ebef276102e83ee52cd95132a796609a4f0', 19, 7, 'soso', '[]', 0, '2019-05-20 10:04:57', '2019-05-20 10:04:57', '2020-05-20 11:04:57'),
('904e30890ad9f54146d690a179635fb789246c051365c548e9aab753aa67bd2d9ed83dc32828e375', 28, 7, 'soso', '[]', 0, '2019-05-23 09:52:16', '2019-05-23 09:52:16', '2020-05-23 13:52:16'),
('94c824e0e4f60cc86d0c9f2d7e334b804d6fb1aaef5b4a8627c0ea97470d39d0413a4394ea4dae69', 19, 7, 'soso', '[]', 0, '2019-05-20 13:42:23', '2019-05-20 13:42:23', '2020-05-20 14:42:23'),
('957118569c0312fbf763ca1773bc808a36df9921ebe619ff2700781eb35da0fc73f5de8b99f1331a', 28, 7, 'soso', '[]', 0, '2019-05-23 09:17:17', '2019-05-23 09:17:17', '2020-05-23 13:17:17'),
('95bad3f748bf4b5eb1267ddc89c23c7847f6162a318ff8c7735bab99ba7772e506a49eea9f9457c1', 19, 7, 'soso', '[]', 1, '2019-05-20 12:01:43', '2019-05-20 12:01:43', '2020-05-20 13:01:43'),
('9a0c1bef1f68a1db5267c024a454e644c04d7bc347881fb76922f4fbbf14a8f7e00811f48f3526ca', 19, 7, 'soso', '[]', 0, '2019-05-19 12:54:03', '2019-05-19 12:54:03', '2020-05-19 13:54:03'),
('9a67603f47bb8286721c8d062b781e61d0e67a9e4247ea3020918ab56d06998a7235573765b01a0c', 28, 7, 'soso', '[]', 0, '2019-05-26 10:55:49', '2019-05-26 10:55:49', '2020-05-26 14:55:49'),
('9b68bb34124e7e5260daa39a1f69ec538b96c529a46691d7c5a4adc4a6e37d5392d736367f57e11e', 21, 7, 'soso', '[]', 0, '2019-05-21 11:34:31', '2019-05-21 11:34:31', '2020-05-21 12:34:31'),
('9b85d48f6eda3bb542967e8bef9ea3c639a32f0418f48af52bc7d105a9c70c28141a894f52382da3', 28, 7, 'soso', '[]', 0, '2019-05-26 11:03:30', '2019-05-26 11:03:30', '2020-05-26 15:03:30'),
('9cb3c4aa1c8f281d7f4e72a97999d7eeb73fff51c3c787dd3d474ad9809f9cfd24351f1b74c8a91b', 28, 7, 'soso', '[]', 0, '2019-05-26 11:01:12', '2019-05-26 11:01:12', '2020-05-26 15:01:12'),
('9d2a87fff98ad923e0df00712353a153ae9dc2c1e1368368dc5be7302a5d9e9c572b30b163248122', 19, 7, 'soso', '[]', 1, '2019-05-20 11:00:44', '2019-05-20 11:00:44', '2020-05-20 12:00:44'),
('9efbfb27e8d2aa480070d77e97f4f4567aec44a86d7d4c244c9b2c0b08d9256419f2033d86314ea4', 19, 7, 'soso', '[]', 0, '2019-05-20 09:17:30', '2019-05-20 09:17:30', '2020-05-20 10:17:30'),
('a11bd0411442a018f5cb35ae512fab7bb86fd659d29518b325de55710000617d89f8ffcf3f14b212', 28, 7, 'soso', '[]', 0, '2019-05-24 20:13:37', '2019-05-24 20:13:37', '2020-05-25 00:13:37'),
('a4c4231d2d4db277e2fd287133370883d59fea0a7cdf7576b92f6151f830e1ea03caeff9465cea7f', 28, 7, 'soso', '[]', 0, '2019-05-26 10:41:45', '2019-05-26 10:41:45', '2020-05-26 14:41:45'),
('a8c01546183f2b6679b4662354b089bc6aedd9f77806f787a1d5f4ef6a25a55e54a958690135dc85', 28, 7, 'soso', '[]', 0, '2019-05-26 16:20:16', '2019-05-26 16:20:16', '2020-05-26 20:20:16'),
('abca6df573891511b025bf31a422f7809778bdb8fe2aa73055f544a605c89ca760c772c58a9d09d7', 28, 7, 'soso', '[]', 0, '2019-05-26 11:02:34', '2019-05-26 11:02:34', '2020-05-26 15:02:34'),
('acc8111fd4bdeadbc261b49b1d056e4c105cadf896f9616b59468441e057450cd0b5e1265879991b', 32, 7, 'MyApp', '[]', 0, '2019-05-26 10:12:35', '2019-05-26 10:12:35', '2020-05-26 14:12:35'),
('ae0596dc746274703e88a935862854d88349561fd27744bb2feea0a722d3d6dd1b6ac8293cffa9c9', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:53:07', '2019-05-18 22:53:07', '2020-05-18 23:53:07'),
('af360ce69af73b1626ee97d36a5b4e96c687616c6f88c8af246bd950f5a4949a4264d4684bafda66', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:48:01', '2019-05-18 22:48:01', '2020-05-18 23:48:01'),
('b3f4b4478ca0ca118c27ee7bd349b2978861a6d007d31f418107a273f70133b5a42922b955fe35a5', 33, 7, 'MyApp', '[]', 0, '2019-05-26 10:17:17', '2019-05-26 10:17:17', '2020-05-26 14:17:17'),
('b561cee6c5e1c054108af1b771d9ad88964f3adf397b6ffe7528025cef498263528a71f50daa0662', 28, 7, 'soso', '[]', 0, '2019-05-26 11:02:55', '2019-05-26 11:02:55', '2020-05-26 15:02:55'),
('b5d1a8b19eb3cb9b4a3d8b8c2837cead6c0643bfa8d96000187409f87ed723a77dad84f8caf28c3f', 21, 7, 'soso', '[]', 0, '2019-05-21 09:42:55', '2019-05-21 09:42:55', '2020-05-21 10:42:55'),
('b67c535b0771a9b3a37bbe585e5e1460b34a674a415d7b0cdbc5b3f753914a6ba7e505b71b979447', 25, 7, 'MyApp', '[]', 0, '2019-05-19 18:21:05', '2019-05-19 18:21:05', '2020-05-19 19:21:05'),
('b953323eaa593e61129b4686c3ea2b784aeb8069eefb656294676f74fd6cac9b32d40798925b9d48', 28, 7, 'soso', '[]', 0, '2019-05-24 19:33:25', '2019-05-24 19:33:25', '2020-05-24 23:33:25'),
('b9717f8b6bd8f0ef33cdde54c793c675125213556a4a411e98b385b146177dfa026d027c77d96a7a', 19, 7, 'soso', '[]', 0, '2019-05-19 18:01:11', '2019-05-19 18:01:11', '2020-05-19 19:01:11'),
('bc227712220a62a7d8472004bdbc163f1a4d4ffa41ee98cc694ff740767e9bb023873007b14bf888', 28, 7, 'soso', '[]', 0, '2019-05-26 10:37:35', '2019-05-26 10:37:35', '2020-05-26 14:37:35'),
('be43606fc9de201367f9327b24cdccfa0f558f5c278fd439313468391f91e909d8de9a86476b6e27', 28, 7, 'soso', '[]', 0, '2019-05-24 19:29:30', '2019-05-24 19:29:30', '2020-05-24 23:29:30'),
('be76d6a5417bd4e681da2de618569a932f082559753c60d784f26444f05a2bb5c02ccc27a7f09648', 19, 7, 'soso', '[]', 0, '2019-05-20 10:46:14', '2019-05-20 10:46:14', '2020-05-20 11:46:14'),
('c325b7506bd86bc1cda75bbe1aefa2a843004157251ebc9065312cdf907fc2c6ce9e396cb42c25bd', 21, 7, 'soso', '[]', 0, '2019-05-21 09:46:01', '2019-05-21 09:46:01', '2020-05-21 10:46:01'),
('c34f447c367c457e57593a7027bf99712cbbb482d5d0fe1d03e762e983ecdd47b90f22cb2f2efd82', 19, 7, 'soso', '[]', 1, '2019-05-20 12:08:02', '2019-05-20 12:08:02', '2020-05-20 13:08:02'),
('c35239b81422dcc434f5f850280623171adc24f5b646868cefd5dae6f2f55868078ceb12cbb81bd0', 21, 7, 'soso', '[]', 0, '2019-05-21 09:42:18', '2019-05-21 09:42:18', '2020-05-21 10:42:18'),
('c45ca676217009146ed4531b40df71ffc8d96777c2f965c579c6cb5467e3046e67f6dde9e225bc2e', 28, 7, 'soso', '[]', 0, '2019-05-24 19:57:54', '2019-05-24 19:57:54', '2020-05-24 23:57:54'),
('c68fcf46f995ac07ddc72d19371d369ec7689e019b2ceaa3686d3d6ea941421c0765ea50be3c00a2', 19, 7, 'soso', '[]', 0, '2019-05-20 13:39:47', '2019-05-20 13:39:47', '2020-05-20 14:39:47'),
('c78ef5418435998d02dd9b7108f203f7aa84c41eb42b92b2d89355d401580224c68efade495a4bd6', 21, 7, 'soso', '[]', 0, '2019-05-20 09:16:38', '2019-05-20 09:16:38', '2020-05-20 10:16:38'),
('cb8d72d84b2421e2fded3907d5b5460a05ddd70177e6e4038d51667ec809177ca60236ed58975689', 28, 7, 'soso', '[]', 0, '2019-05-24 19:57:40', '2019-05-24 19:57:40', '2020-05-24 23:57:40'),
('ce9e178481c59588a91c6621efee91e93d38d10b6a0b8e99add596382400af38b8758991e6af3069', 28, 7, 'soso', '[]', 0, '2019-05-26 10:55:14', '2019-05-26 10:55:14', '2020-05-26 14:55:14'),
('d2cdd4842de4cedcb938b7fe2a7a164d676081df1ec5f5413c749510c321f8fe4d7253bca7dab97d', 45, 7, 'soso', '[]', 0, '2019-06-02 02:22:35', '2019-06-02 02:22:35', '2020-06-02 06:22:35'),
('d4b9d776f4e47961f19fc6042660753ce4e09b3f479cad82ea0dcf93ab95b4e762d231ec7a68e386', 28, 7, 'soso', '[]', 0, '2019-05-23 09:42:28', '2019-05-23 09:42:28', '2020-05-23 13:42:28'),
('d53f6908121aff17216be71c5112162ddbf2ceebf5e9b7c9d1ce876f88a08aa5f858f38cc56a4e1d', 15, 1, 'soso', '[]', 0, '2019-05-18 18:57:51', '2019-05-18 18:57:51', '2020-05-18 19:57:51'),
('d6ab39668617d7af4afb9a4a755e503a2af57cf9b68c1c453614cfa5a3e580a1595c81a2e19500f5', 28, 7, 'soso', '[]', 0, '2019-05-24 20:02:44', '2019-05-24 20:02:44', '2020-05-25 00:02:44'),
('d8fa3b9e00a56098d6d7aa5e3faf942f21fb2b8731a7558f77a8e787b69bb1714e97fbdbb317bcbd', 28, 7, 'soso', '[]', 0, '2019-05-23 09:53:22', '2019-05-23 09:53:22', '2020-05-23 13:53:22'),
('d99943d83865d6fe83a4d75cf5b85f60a8fc7a968d39e5ca867060ccd73e696839b5fd5212cca432', 28, 7, 'soso', '[]', 0, '2019-05-26 10:43:26', '2019-05-26 10:43:26', '2020-05-26 14:43:26'),
('df07fa469e502832831fd47b6393f6ec3847ba6a5364f8be0c5fa76052470b5f91a7c2973431249e', 21, 7, 'soso', '[]', 0, '2019-05-20 11:18:55', '2019-05-20 11:18:55', '2020-05-20 12:18:55'),
('e1e1b2ecf5390af06ffd9d76569f209c252ea8706dc2b8e0b51ba176095a988cee86b2124624991a', 28, 7, 'soso', '[]', 0, '2019-05-26 10:54:47', '2019-05-26 10:54:47', '2020-05-26 14:54:47'),
('e59171a9299a16b26064fef7abc6a86baf2a8626ccfe5d189d9152c9814848a96a1de402ab2286d8', 15, 5, 'MyApp', '[]', 0, '2019-05-18 22:53:32', '2019-05-18 22:53:32', '2020-05-18 23:53:32'),
('e85766f5810d5be1bdd51b8c72bdda89c7cfc487bba4f0633223e1eac434f115d415f5d1c5800150', 19, 7, 'soso', '[]', 1, '2019-05-20 11:52:43', '2019-05-20 11:52:43', '2020-05-20 12:52:43'),
('e8837949eb739f91934cf838670a0b1062cd1ed9f3fc363b92b72a874085dd176dcdd8ca8e1121fa', 28, 7, 'soso', '[]', 0, '2019-05-30 08:52:04', '2019-05-30 08:52:04', '2020-05-30 12:52:04'),
('e9098a5679f3f3d8e9a6e76806e7e2c2cc9f99a139b254d1f7e9b8bfcf818d917b60a6536823d0e0', 19, 7, 'soso', '[]', 0, '2019-05-20 09:11:39', '2019-05-20 09:11:39', '2020-05-20 10:11:39'),
('e971cc8b84a219f3875410b3382f83e497c1042bc5968948eb9e945b83cf8a6f7627e97dcfd5d147', 28, 7, 'soso', '[]', 0, '2019-05-24 19:31:26', '2019-05-24 19:31:26', '2020-05-24 23:31:26'),
('eb0aa80e7b17db25c4d23329b7037301f22a124e685d0b0f034f4351c3e6b00855bd2984674d7e18', 28, 7, 'soso', '[]', 0, '2019-05-25 09:26:15', '2019-05-25 09:26:15', '2020-05-25 13:26:15'),
('eb5a59e24f7c1bd86caf479d960fbe64fdd8d51552811ac1e2a2d1ea5526db662581c010017d595f', 18, 3, 'MyApp', '[]', 0, '2019-05-18 10:59:58', '2019-05-18 10:59:58', '2020-05-18 11:59:58'),
('ee4a58f0f46b2f792abadb0d637d5b2a79cfa02fc3934fba66a429c4ba60ebeec43c4b1f19878bfe', 29, 7, 'soso', '[]', 0, '2019-05-26 10:50:46', '2019-05-26 10:50:46', '2020-05-26 14:50:46'),
('f223f75e6d00ec3ecc1296a3af57462fc849c5a9ea6ba41ba27ac25eb60eb17c0bd3964e779be036', 19, 7, 'soso', '[]', 0, '2019-05-21 09:39:26', '2019-05-21 09:39:26', '2020-05-21 10:39:26'),
('f2cc9e1ae8e1e55a25b97e7e91f7f24464476c88092a0464c2a48b6c8c281b38691257326ec7a182', 28, 7, 'soso', '[]', 0, '2019-05-23 09:17:34', '2019-05-23 09:17:34', '2020-05-23 13:17:34'),
('f2f7c81da6d175df324ad2fcd439c6cc85816dd2e86e470891ce049b2e8e57d25e71f86916137606', 28, 7, 'soso', '[]', 0, '2019-05-24 20:17:35', '2019-05-24 20:17:35', '2020-05-25 00:17:35'),
('f3267d67444fdef9c6df1fc28ad12406f5351dc2e70e189f28f43dd183dc0a1e12af39cf9221c316', 19, 7, 'soso', '[]', 1, '2019-05-20 12:04:41', '2019-05-20 12:04:41', '2020-05-20 13:04:41'),
('f3768783bf96eb169148d9856340bb67557dbb3da9a7b9e3011ae6e6f87e677d90f60a1589215005', 21, 7, 'soso', '[]', 0, '2019-05-20 09:14:33', '2019-05-20 09:14:33', '2020-05-20 10:14:33'),
('f5c1436ecb921b5c52de9ac190a0eb984dbe308209c6f16ae031a81e0d541b2180a06e00dbcbce9a', 42, 7, 'MyApp', '[]', 0, '2019-05-31 14:26:44', '2019-05-31 14:26:44', '2020-05-31 18:26:44'),
('f5f29ed6449bf8152b52cb77827941cc67a16828569d764133671a47ffc5f09712e175b5e0c9f77d', 28, 7, 'soso', '[]', 0, '2019-05-26 10:35:26', '2019-05-26 10:35:26', '2020-05-26 14:35:26'),
('f66a03845b316d903321334cf61d29b4754d4ebe20a015844b084432f16294068c71c560bb69e282', 15, 7, 'soso', '[]', 0, '2019-05-20 20:46:02', '2019-05-20 20:46:02', '2020-05-20 21:46:02'),
('f670649b07211c7e47830569727dbf4b0e7a3693b9872a9386830176722795f98fc301dbe0031310', 28, 7, 'soso', '[]', 0, '2019-05-24 19:38:08', '2019-05-24 19:38:08', '2020-05-24 23:38:08'),
('fa90ae6d2e31dfbb5eca083826f8a53726e26483979864d03871687aa242cc62fe758d6f325101ce', 27, 7, 'MyApp', '[]', 0, '2019-05-23 11:33:42', '2019-05-23 11:33:42', '2020-05-23 12:33:42'),
('fb00a15f942b84bd3df07ffe1195162f6deef730aeea6671455c7c7fec2a7f3148f398c3859ce178', 28, 7, 'soso', '[]', 0, '2019-05-24 19:35:29', '2019-05-24 19:35:29', '2020-05-24 23:35:29'),
('fc358f1b9ee20370401b960e413aa2ff83a4f3f7f5bb95cd33a76fd7c72bbb8f84f8641a812fb468', 28, 7, 'soso', '[]', 0, '2019-05-23 09:19:00', '2019-05-23 09:19:00', '2020-05-23 13:19:00');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '1iMXLd36LcWzsJATsMcgomUv7kDcBbFEDPYNyZHQ', 'http://localhost', 1, 0, 0, '2019-05-15 21:31:18', '2019-05-15 21:31:18'),
(2, NULL, 'Laravel Password Grant Client', '7ZMmDON7RhZ7BkFoxOcyJsiHS6orA6WixPjBvIVM', 'http://localhost', 0, 1, 0, '2019-05-15 21:31:19', '2019-05-15 21:31:19'),
(3, NULL, 'Laravel Personal Access Client', 'KblFWF5EXHXgJfzsNbNqe6BSWuyETH2ofv2Ar1Sd', 'http://localhost', 1, 0, 0, '2019-05-18 10:56:35', '2019-05-18 10:56:35'),
(4, NULL, 'Laravel Password Grant Client', 'lPSnfXX2QbZ1V275cThCYSJuPpxKqetHUUhQi3vc', 'http://localhost', 0, 1, 0, '2019-05-18 10:56:36', '2019-05-18 10:56:36'),
(5, NULL, 'Laravel Personal Access Client', 'Xg6oZO6sornMbRBA3jD3kBSI8IKUMCqO2IZjpe8t', 'http://localhost', 1, 0, 0, '2019-05-18 22:47:45', '2019-05-18 22:47:45'),
(6, NULL, 'Laravel Password Grant Client', '2s86lWD71WZInUKn8yho46QPgMp1cTMkLypmQ684', 'http://localhost', 0, 1, 0, '2019-05-18 22:47:47', '2019-05-18 22:47:47'),
(7, NULL, 'Laravel Personal Access Client', 'UX0HjahLdJ2e5Y58Kj6WPZCd7pfJXHZ3LDXRdV31', 'http://localhost', 1, 0, 0, '2019-05-18 19:58:08', '2019-05-18 19:58:08'),
(8, NULL, 'Laravel Password Grant Client', 'trUdW9WHCEeEhxUN8SQVsCwOec3hOKKDPG9CVata', 'http://localhost', 0, 1, 0, '2019-05-18 19:58:13', '2019-05-18 19:58:13');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-05-15 21:31:19', '2019-05-15 21:31:19'),
(2, 3, '2019-05-18 10:56:36', '2019-05-18 10:56:36'),
(3, 5, '2019-05-18 22:47:46', '2019-05-18 22:47:46'),
(4, 7, '2019-05-18 19:58:13', '2019-05-18 19:58:13');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category_id` int(4) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `description` text,
  `keywordsId` int(4) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `reg_price` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `cityId` int(4) NOT NULL,
  `ispaided` tinyint(1) NOT NULL DEFAULT '0',
  `iswholesale` tinyint(1) NOT NULL DEFAULT '0',
  `qty` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `approved_by` int(11) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `deleted_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `title`, `description`, `keywordsId`, `mobile`, `reg_price`, `sale_price`, `customerId`, `cityId`, `ispaided`, `iswholesale`, `qty`, `status`, `approved_by`, `image`, `brand_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(7, 9, ' aweda dasd ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 3, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-29 10:30:48', NULL),
(8, 9, 'rjghhmv vhjfn ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 3, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-29 10:30:53', NULL),
(9, 9, 'fgxx 87465545 f35', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 1, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-29 10:30:59', NULL),
(10, 9, 'ABC ABC ABC ABC ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 1, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-26 17:54:28', NULL),
(11, 9, 'ABC ABC ABC ABC ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 1, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-26 17:54:28', NULL),
(12, 9, 'ABC ABC ABC ABC ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 1, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-26 17:54:28', NULL),
(13, 9, 'ABC ABC ABC ABC ', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 1, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-26 17:54:28', NULL),
(14, 9, '4156565', ' ABC ABC ABC ABC ABC ABC ABC ', 1, NULL, 100, 90, 15, 1, 0, 0, NULL, 3, 0, 'http://admin.just-cost.com/storage/imgs/products/p1.png', 1, NULL, '2019-05-29 10:31:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products_media`
--

CREATE TABLE `products_media` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `flag` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `customer` int(11) NOT NULL,
  `rate` float NOT NULL,
  `product` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `customer`, `rate`, `product`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 4.5, 7, '2019-05-17 22:22:04', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `deleted_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `deleted_at`, `created_at`) VALUES
(1, 'System Administrator', NULL, '2019-05-19 10:40:25');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  `deleted_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `image_url`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'http://admin.just-cost.com/storage/imgs/slider/slide1.jpg', NULL, '2019-05-21 11:29:44', NULL),
(2, 'http://admin.just-cost.com/storage/imgs/slider/slide1.jpg', NULL, '2019-05-21 11:29:47', NULL),
(3, 'http://admin.just-cost.com/storage/imgs/slider/slide1.jpg', NULL, '2019-05-21 11:29:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `deleted_at` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statuses`
--

INSERT INTO `statuses` (`id`, `name`, `deleted_at`, `created_at`) VALUES
(1, 'Pending', NULL, '2019-05-19 08:35:00'),
(2, 'Rejected', NULL, '2019-05-19 08:36:04'),
(3, 'Approved', NULL, '2019-05-19 08:36:04');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer`
--

CREATE TABLE `tbl_customer` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL COMMENT 'login email',
  `username` varchar(255) NOT NULL,
  `password` varchar(128) NOT NULL COMMENT 'hashed login password',
  `name` varchar(128) DEFAULT NULL COMMENT 'full name of user',
  `mobile` varchar(20) DEFAULT NULL,
  `city` int(4) NOT NULL,
  `gender` int(11) NOT NULL DEFAULT '1',
  `image` varchar(191) DEFAULT NULL,
  `verificationCode` varchar(10) NOT NULL,
  `isVerified` tinyint(1) NOT NULL DEFAULT '0',
  `firebaseToken` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_customer`
--

INSERT INTO `tbl_customer` (`id`, `email`, `username`, `password`, `name`, `mobile`, `city`, `gender`, `image`, `verificationCode`, `isVerified`, `firebaseToken`, `created_at`, `updated_at`, `deleted_at`) VALUES
(15, 'mess@gmail.com', 'ali', '$2y$10$ihhqBhmvy0IGZsBVJAnUa.7xk6OHRfRzfUBT3i5.oRU0lMiizdSCW', 'meeeee', '2495656353452', 1, 1, NULL, '363026', 0, NULL, '2019-05-18 18:57:21', '2019-05-18 22:53:31', NULL),
(16, 'm@m.com', 'username', '$2y$10$b3sV/2hYeZ.dfj5Gt1twOePOoJrcj/Y0RghsiEbNghDnfhfhgmvta', 'name', '0123456798', 1, 1, NULL, '363026', 0, NULL, '2019-05-18 10:53:45', '2019-05-18 10:53:45', NULL),
(17, 'm@admin.com', 'mohammed', '$2y$10$Jn68NAhBpa1c8N2SxlAERu007mzP5Pk.LtnIqpUpp5hYkGDk5fMsW', 'name', '0123456798', 1, 1, NULL, '363026', 0, NULL, '2019-05-18 10:57:18', '2019-05-18 10:57:18', NULL),
(18, 'm11@admin.com', 'mohammed11', '$2y$10$UP1fUY/ETn8uFo7TIK5JnO7.aHXsmQPdHI1TMK6xlQfLqnLc8yvgq', 'name', '0123456798', 1, 1, NULL, '363026', 0, NULL, '2019-05-18 10:59:56', '2019-05-18 10:59:56', NULL),
(19, 'sa@ja.com', 'ali55', '$2y$10$lrSwuU4FmNFAMqn/5lZYFO3LYEB91J7892Igi8NQupDLcJpNw6L0q', 'xxxxxx', '02315498733', 1, 1, NULL, '796077', 1, NULL, '2019-05-18 11:03:46', '2019-06-01 08:42:25', NULL),
(20, 'm1211@5a1ds5in.com', 'msoham51', '$2y$10$uA/1EH1.NkovYoM4MrFBle4Y/nSd6pm4mAJPiECW6ZX9ivIFwAMXy', 'name', '0123456798', 1, 1, NULL, '363026', 0, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-19 13:45:52', '2019-05-19 13:45:52', NULL),
(21, 'megs@mail.com', 'megs', '$2y$10$Bt5A/LrV6rCMeDIQJbJB0OwL.0lk9OfIqY1Agp2c3q5XMglhlG/Yq', 'mega', '54645645', 1, 1, NULL, '711986', 1, 'cR3T_BObxR4:APA91bFtciy6wHkCxYEZSfhgFU05o9cF8hgkkkwyvPmG0W_EihXFD2cmxUs3xnqSVE8qFwKmJupsZMyHhnLjFUoWQPKnNEBi5xIft2sNvIHWECQkJc8U2Tv_75nNOJePbXAwdI39mZTM', '2019-05-19 13:57:03', '2019-05-20 11:35:43', NULL),
(22, 'mega3@mail.com', 'mega3', '$2y$10$oWFW20zxhjhBMNpajrXGzOhv2xu/pkbkNbf3orkeXS0oHlPakE1p.', 'mega', '54654648', 1, 1, NULL, '430801', 0, '8798', '2019-05-19 13:57:50', '2019-05-19 13:57:50', NULL),
(23, 'qwe1@mail.com', 'qwe1', '$2y$10$T09m68rP4N5gRv2mouIy0ODO2ElKnXzkLET3hzBPMNj01yO.gHNgW', 'qwe', '5464564', 1, 1, NULL, '619110', 0, 'cR3T_BObxR4:APA91bFtciy6wHkCxYEZSfhgFU05o9cF8hgkkkwyvPmG0W_EihXFD2cmxUs3xnqSVE8qFwKmJupsZMyHhnLjFUoWQPKnNEBi5xIft2sNvIHWECQkJc8U2Tv_75nNOJePbXAwdI39mZTM', '2019-05-19 13:59:41', '2019-05-19 13:59:41', NULL),
(24, 'qwe3@mail.com', 'qwe3', '$2y$10$CExID8yiDEu4Z3/IozxjgO9AXcjoYkkIHIzZHxSs49dAuY3frN1lG', 'qwe3', '45645645', 1, 1, NULL, '168760', 0, 'cR3T_BObxR4:APA91bFtciy6wHkCxYEZSfhgFU05o9cF8hgkkkwyvPmG0W_EihXFD2cmxUs3xnqSVE8qFwKmJupsZMyHhnLjFUoWQPKnNEBi5xIft2sNvIHWECQkJc8U2Tv_75nNOJePbXAwdI39mZTM', '2019-05-19 14:01:28', '2019-05-19 14:01:28', NULL),
(25, 'mooo@5a1ds5in.com', 'mooo', '$2y$10$FOUj.OJVRACLj1GHKaZ8Neb4x8E7HVoUDI0TIywTRpatoovVoA.F2', 'name', '0123456798', 1, 1, NULL, '359235', 0, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-19 18:21:05', '2019-05-19 18:21:05', NULL),
(26, 'eee@mail.com', 'eee', '$2y$10$0xJk/jOf6ImMn0j4KD.oG.DAMhIHZ/etaRmNnToIsJpcm4yUZoUCy', 'eee', '8796789789', 1, 1, NULL, '955716', 1, 'c1AbJH4UjmQ:APA91bErkT5hgyO_TZx7iYh5kUFEddPjkIEhY0tgia0sWUvoudsQhkwLA-KaYKuEYX08pRQP60eepHDOi-ckZrat9z7KCvgCPyfvBoUbNMWegM_QvLPyCf94oKCbff3bl_lqDRyBgpGq', '2019-05-20 11:40:27', '2019-05-20 12:38:06', NULL),
(28, 'x@x.com', 'x@x.com', '$2y$10$43ntqexjOocRqLPi6IFS6e5SLs88V5VAtLvBVtijovUxRTziOhQfS', 'x@x.com', '0123456798', 1, 1, NULL, ' 608444', 1, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-23 09:01:31', '2019-05-23 09:01:31', NULL),
(29, 'admin@admin.com', 'admin@admin.com', '$2y$10$t.ve8YzShbLRYz6uE7nmNOUktCKg3Wyyr15IiVM7nDMddVikEsAaS', 'admin@admin.com', '234234234234', 1, 1, NULL, '403982', 0, '1', '2019-05-26 09:42:10', '2019-05-26 09:42:10', NULL),
(30, 'in@admin.com', 'in@admin.com', '$2y$10$ZJOU4oQS99e6DJDqp6Aub.amrvZ/Hw2z4ppu9HpyifTl9bQMbjKlS', 'in@admin.com', '432423424234', 1, 1, NULL, '654408', 0, '1', '2019-05-26 09:47:25', '2019-05-26 09:47:25', NULL),
(31, 'admin@ain.com', 'admin@ain.com', '$2y$10$2ygPka3l/MyFuhMStpTRgu2QMtX4MmPOOWEG0G.MYPK7nKX4lMbgi', 'admin@ain.com', '234242423424', 1, 1, NULL, '606846', 0, '1', '2019-05-26 09:49:37', '2019-05-26 09:49:37', NULL),
(32, 'admisn@admin.com', 'admisn@admin.com', '$2y$10$oHhzMy8FUvUxZATNlFOAOOJWXznX6C2B6VEajyOCQZOyWeOWR0sLW', 'admisn@admin.com', '234234', 1, 1, NULL, '655876', 0, '1', '2019-05-26 10:12:35', '2019-05-26 10:12:35', NULL),
(33, 'xx@zx.com', 'xx@zx.com', '$2y$10$CctP1FQElM20EjsqT0qtwuWW30.pcSZWjdQHq5mKOmwrm6gRa75gy', 'xx@zx.com', '2342342342423', 1, 1, NULL, '675452', 0, '1', '2019-05-26 10:17:17', '2019-05-26 10:17:17', NULL),
(34, 'zz@xx.com', 'zz@xx.com', '$2y$10$N7sHgjIf78XeydUXMBeTVeMsoSo5YQYjJACNt0N9V4BoS1cWvwv96', 'zz@xx.com', '213123', 1, 1, NULL, '260606', 0, '1', '2019-05-26 10:19:38', '2019-05-26 10:19:38', NULL),
(35, 'xx@x.com', 'xx@x.com', '$2y$10$fCWgv/eu01Sgvon3OorZRu/d8JBkcwue.gMUGqvOV3tjPfSUr//0G', 'x@x.com', '0123456798', 1, 1, NULL, '196874', 0, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-31 10:43:45', '2019-05-31 10:43:45', NULL),
(41, 'o7ammed.ftta7@gmail.com', 'o7ammed.ftta7@gmail.com', '$2y$10$JwgorhHmKqumSa05QtEaQ.3ioRANnJeTgCbnMg6IjYd2soLIq3t6S', 'o7ammed.ftta7@gmail.com', '0123456798', 1, 1, NULL, '806842', 0, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-31 14:26:26', '2019-05-31 14:26:26', NULL),
(45, 'mo7ammed.ftta7@gmail.com', 'mo7ammed.ftta7@gmail.com', '$2y$10$2Fxy.G3Y46GbXPIhHb9f8OmAENUhPMMnrod5ObjfxhDfaFvm.EdMe', 'mo7ammed.ftta7@gmail.com', '0123456798', 1, 1, 'http://localhost:8000/db/images/customers/45.png', '712991', 0, '4k7J2jMOT0LOoEE80WcLHhpvyWs0ZTc2CpoUsPJi', '2019-05-31 17:55:00', '2019-06-02 02:22:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_keys`
--

CREATE TABLE `tbl_keys` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `key` varchar(40) NOT NULL,
  `level` int(2) NOT NULL,
  `ignore_limits` tinyint(1) NOT NULL DEFAULT '0',
  `is_private_key` tinyint(1) NOT NULL DEFAULT '0',
  `ip_addresses` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_last_login`
--

CREATE TABLE `tbl_last_login` (
  `id` bigint(20) NOT NULL,
  `userId` bigint(20) NOT NULL,
  `sessionData` varchar(2048) NOT NULL,
  `machineIp` varchar(1024) NOT NULL,
  `userAgent` varchar(128) NOT NULL,
  `agentString` varchar(1024) NOT NULL,
  `platform` varchar(128) NOT NULL,
  `createdDtm` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_last_login`
--

INSERT INTO `tbl_last_login` (`id`, `userId`, `sessionData`, `machineIp`, `userAgent`, `agentString`, `platform`, `createdDtm`) VALUES
(1, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 13:36:51'),
(2, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 13:52:23'),
(3, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 13:52:55'),
(4, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 13:59:46'),
(5, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:01:47'),
(6, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:02:47'),
(7, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:04:27'),
(8, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:05:35'),
(9, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:08:30'),
(10, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:09:35'),
(11, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:17:22'),
(12, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:37:15'),
(13, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:38:48'),
(14, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:44:45'),
(15, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:50:13'),
(16, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 14:50:49'),
(17, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:33:00'),
(18, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:35:50'),
(19, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:50:07'),
(20, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:50:59'),
(21, 2, '{\"role\":\"2\",\"roleText\":\"Manager\",\"name\":\"Manager\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:52:44'),
(22, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 15:55:15'),
(23, 2, '{\"role\":\"2\",\"roleText\":\"Manager\",\"name\":\"Manager\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 16:01:54'),
(24, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 16:04:40'),
(25, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 16:35:23'),
(26, 2, '{\"role\":\"2\",\"roleText\":\"Manager\",\"name\":\"Manager\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-13 16:49:57'),
(27, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 07:52:30'),
(28, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 11:06:51'),
(29, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 11:08:38'),
(30, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 11:46:18'),
(31, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 12:20:54'),
(32, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"System Administrator\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 12:56:53'),
(33, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 13:02:10'),
(34, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Ayman Osman\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 13:50:00'),
(35, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Ayman Osman\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 13:50:25'),
(36, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 13:50:35'),
(37, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Ayman Osman\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 13:52:58'),
(38, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 14:02:44'),
(39, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Ayman Osman\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 16:18:05'),
(40, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-14 16:19:46'),
(41, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 08:08:04'),
(42, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 14:08:18'),
(43, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 14:25:49'),
(44, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 16:45:45'),
(45, 10, '{\"role\":\"2\",\"roleText\":\"Manager\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 16:47:54'),
(46, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-16 16:50:17'),
(47, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-17 08:12:44'),
(48, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-17 08:45:43'),
(49, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-17 08:45:52'),
(50, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 08:19:25'),
(51, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 13:06:05'),
(52, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 13:18:24'),
(53, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 13:20:54'),
(54, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 13:34:22'),
(55, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Khalid Hassan\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 14:07:20'),
(56, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 14:27:48'),
(57, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Khalid Hassan\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 14:28:40'),
(58, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 14:39:22'),
(59, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 15:49:40'),
(60, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Khalid Hassan\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-18 16:01:42'),
(61, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 08:07:55'),
(62, 3, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Khalid Hassan\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 08:08:22'),
(63, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 09:02:38'),
(64, 13, '{\"role\":\"3\",\"roleText\":\"Employee\",\"name\":\"Hammam\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 09:10:45'),
(65, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 09:11:03'),
(66, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 09:34:46'),
(67, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 12:48:28'),
(68, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-19 13:05:34'),
(69, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-20 08:30:19'),
(70, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-21 11:51:05'),
(71, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-21 15:08:37'),
(72, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-23 11:43:47'),
(73, 1, '{\"role\":\"1\",\"roleText\":\"System Administrator\",\"name\":\"Omer Elbasri\"}', '::1', 'Chrome 72.0.3626.121', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36', 'Windows 10', '2019-03-23 16:08:33');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reset_password`
--

CREATE TABLE `tbl_reset_password` (
  `id` bigint(20) NOT NULL,
  `email` varchar(128) NOT NULL,
  `activation_id` varchar(32) NOT NULL,
  `agent` varchar(512) NOT NULL,
  `client_ip` varchar(32) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `createdBy` bigint(20) NOT NULL DEFAULT '1',
  `createdDtm` datetime NOT NULL,
  `updatedBy` bigint(20) DEFAULT NULL,
  `updatedDtm` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_roles`
--

CREATE TABLE `tbl_roles` (
  `roleId` tinyint(4) NOT NULL COMMENT 'role id',
  `role` varchar(50) NOT NULL COMMENT 'role text'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_roles`
--

INSERT INTO `tbl_roles` (`roleId`, `role`) VALUES
(1, 'System Administrator'),
(2, 'Manager'),
(3, 'Employee');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `userId` int(11) NOT NULL,
  `email` varchar(128) NOT NULL COMMENT 'login email',
  `password` varchar(128) NOT NULL COMMENT 'hashed login password',
  `name` varchar(128) DEFAULT NULL COMMENT 'full name of user',
  `username` varchar(255) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `roleId` tinyint(4) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  `createdBy` int(11) NOT NULL,
  `createdDtm` datetime NOT NULL,
  `updatedBy` int(11) DEFAULT NULL,
  `updatedDtm` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`userId`, `email`, `password`, `name`, `username`, `mobile`, `roleId`, `isDeleted`, `createdBy`, `createdDtm`, `updatedBy`, `updatedDtm`) VALUES
(15, 'amjed@look.com', '$2y$10$KoB84IaHqjmczXclMqfBgOmVQQDxHsjOcDLIa7DBf12FFU8uNRCUS', 'Amjed', '', '0929318793', 3, 1, 1, '2019-03-19 16:27:09', 1, '2019-03-19 16:48:22'),
(14, 'ayman4work44@gmail.com', '$2y$10$76XPtPtPdcqM.riChoElkue0unODlljwOxZV.bASuNuF/V0Ls6miO', 'Ayman', '', '0929318793', 3, 0, 1, '2019-03-19 16:21:28', NULL, NULL),
(13, 'hammam@example.com', '$2y$10$zlv/MG3q/hIvZRZW/r.iE.SdKMMhjvWlPXPtKt9uRlFYUPBaw8vd6', 'Hammam', '', '0929318793', 3, 0, 1, '2019-03-19 16:10:11', NULL, NULL),
(3, 'employee@example.com', '$2y$10$UYsH1G7MkDg1cutOdgl2Q.ZbXjyX.CSjsdgQKvGzAgl60RXZxpB5u', 'Khalid Hassan', 'Khalid22', '9890098900', 3, 0, 1, '2016-12-09 17:50:22', 3, '2018-01-04 07:58:28'),
(2, 'manager@example.com', '$2y$10$quODe6vkNma30rcxbAHbYuKYAZQqUaflBgc4YpV9/90ywd.5Koklm', 'Kamal Suliman', 'Kamal22', '9890098900', 2, 1, 1, '2016-12-09 17:49:56', 1, '2019-03-19 21:56:39'),
(1, 'admin@example.com', '$2y$10$6NOKhXKiR2SAgpFF2WpCkuRgYKlSqFJaqM0NgIM3PT1gKHEM5/SM6', 'Omer Elbasri', 'Omer22', '9890098900', 1, 0, 0, '2015-07-01 18:56:49', 1, '2018-01-05 05:56:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `role`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin@admin.com', 'admin@admin.com', NULL, '$2y$10$32X1YuEpTvYo/7M9LlqDker5fcgnbTcbf3FVxbpyv9LKy/NdAJHhW', NULL, 1, '2019-05-15 06:13:30', '2019-05-15 06:13:30', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`,`productId`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `attributes_group`
--
ALTER TABLE `attributes_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `attributes_map`
--
ALTER TABLE `attributes_map`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `attribute_id` (`attribute_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `countryId` (`countryId`),
  ADD KEY `countryId_2` (`countryId`);

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `last_activity_idx` (`last_activity`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `parent_comment_id` (`parent_id`,`userId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_comment_id` (`parent_id`,`userId`),
  ADD KEY `productid` (`productid`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`,`cityId`),
  ADD KEY `keywordsId` (`keywordsId`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `products_media`
--
ALTER TABLE `products_media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city` (`city`);

--
-- Indexes for table `tbl_keys`
--
ALTER TABLE `tbl_keys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tbl_last_login`
--
ALTER TABLE `tbl_last_login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tbl_reset_password`
--
ALTER TABLE `tbl_reset_password`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_ip` (`client_ip`);

--
-- Indexes for table `tbl_roles`
--
ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'role id', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `attributes_group`
--
ALTER TABLE `attributes_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attributes_map`
--
ALTER TABLE `attributes_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'role id', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'role id', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products_media`
--
ALTER TABLE `products_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attributes`
--
ALTER TABLE `attributes`
  ADD CONSTRAINT `attributes_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `attributes_group` (`id`);

--
-- Constraints for table `attributes_group`
--
ALTER TABLE `attributes_group`
  ADD CONSTRAINT `attributes_group_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `attributes_map`
--
ALTER TABLE `attributes_map`
  ADD CONSTRAINT `attributes_map_ibfk_1` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`),
  ADD CONSTRAINT `attributes_map_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `comment` (`comment_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `tbl_customer` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

--
-- Constraints for table `products_media`
--
ALTER TABLE `products_media`
  ADD CONSTRAINT `products_media_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  ADD CONSTRAINT `tbl_customer_ibfk_1` FOREIGN KEY (`city`) REFERENCES `cities` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
