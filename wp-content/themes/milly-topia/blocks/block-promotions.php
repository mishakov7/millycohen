<div class="promotion__card" style="background-color: <?php echo block_field('bg-color'); ?>">
    <img src="<?php echo block_field('image'); ?>"/>

    <p><?php echo block_field('promo-txt'); ?></p>

    <?php if (block_value('btn-choice') == 'text') : ?>

        <a class="bold-black-button" target="_blank" href="<?php echo block_field('btn-link'); ?>"><span><?php echo block_field('btn-text'); ?></span></a>

    <?php elseif (block_value('btn-choice') == 'logo') : ?>

        <a class="bold-black-button" target="_blank" href="<?php echo block_field('btn-link'); ?>"><img src="<?php echo block_field('btn-logo'); ?>" alt="logo text" /></a>

    <?php endif; ?>

</div>