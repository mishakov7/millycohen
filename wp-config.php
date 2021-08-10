<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'milly' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Gon!!405' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<T.Z}b*i[~|wU1G9K~)7WT)CrnRx]Mr9,KvO.mOm#RBcy9@Nd3cWB~en}gf$!,wU' );
define( 'SECURE_AUTH_KEY',  '-z}.DRwl!rj5zqfxv88mC$.XkdGx-~QQV#A8/8~554nAs+2O>e+werla9$iSh[p[' );
define( 'LOGGED_IN_KEY',    'j >vDa[Q_*b=ZIh@Q+ita1A-%S.;K{>Jd6q{BH:{hg*~p|uT<nhA^K=8^C**hk2&' );
define( 'NONCE_KEY',        'Ks|Ld&.Le(#V>P,kyBD1GHaT4reSV0)wNpYUKnf@jha+2nN.mOzTd-u2eZu6Q99.' );
define( 'AUTH_SALT',        'kJF3i[D$hr`!tppONBE]<t-j:X|UV6kzW;q&]A~d{!DmjPfV qDHTskH0sJ7/]v|' );
define( 'SECURE_AUTH_SALT', 'oje?,{SAmcwS&`|RSNCfn>}G*F*?#XS8~)bCVPt8/ZqGzK(+XWd5l$)+1m:m(M{b' );
define( 'LOGGED_IN_SALT',   'DO|xC&noznP5[`P&]AnD:NB9+6C)_#*UL+V^}Y]9!@pTi^m;*HOA9<Y9T8cU^(R?' );
define( 'NONCE_SALT',       ':WTWm2[;&-&eDy#8n6w>~ #n38/8L[~@nqy9>G@k3twVi?SF#6(:~N` b(*0@s6o' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
