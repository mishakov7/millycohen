<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Milly_Topia
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'milly-topia' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$milly_topia_description = get_bloginfo( 'description', 'display' );
			if ( $milly_topia_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $milly_topia_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
			<svg id="hamburger-button" xmlns="http://www.w3.org/2000/svg" width="54" height="35" viewBox="0 0 54 35">
			<g id="Group_48" data-name="Group 48" transform="translate(-596 -46)">
				<rect id="Rectangle_326" data-name="Rectangle 326" width="54" height="13" rx="6.5" transform="translate(596 46)"/>
				<rect id="Rectangle_327" data-name="Rectangle 327" width="54" height="13" rx="6.5" transform="translate(596 68)"/>
			</g>
			</svg>

		</nav>
		
		<nav id="mobile-navigation-container" aria-expanded="false">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-2',
					'menu_id' 		 => 'primary-mobile-menu',
				)
			);
			?>
	
		</nav>
	</header><!-- #masthead -->
