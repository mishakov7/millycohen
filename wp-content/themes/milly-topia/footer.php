<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Milly_Topia
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<span>
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Copyright %s Milly Cohen | All Rights Reserved' ), '&copy;' );
				?>
			</span>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Built by %s'), '<a href="http://mishafolio.com/">Misha Khlioustov</a>' );
				?>
		</div><!-- .site-info -->

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
