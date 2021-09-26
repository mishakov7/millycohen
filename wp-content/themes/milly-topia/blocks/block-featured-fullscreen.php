<section id="featured-video">

    <iframe src="<?php echo block_field('video'); ?>" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <div class="title">
        <h2>Featured</h2>
        <span><?php echo block_field('title'); ?></span>
    </div>

    <div class="shirt-left">
        <img id="drag-shirt" draggable="true" ondragstart="drag(event)" width="50" src="https://icons.iconarchive.com/icons/google/noto-emoji-people-clothing-objects/256/12177-t-shirt-icon.png" />
    </div>

    <div id="drop-frog" ondrop="drop(event)" ondragover="allowDrop(event)" class="frog-right">
        <a href="drawings"><img width="50" src="https://cdn.iconscout.com/icon/free/png-256/frog-face-animal-aquatic-33968.png" alt=""></a>

        <p>Drag the shirt over here!</p>
    </div>

    <script src="http://localhost/millycohen-com/wp-content/themes/milly-topia/js/drag.js"></script>

</section>