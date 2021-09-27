<?php 

function chooseTop() {
    $master = "wp-content/themes/milly-topia/assets/";

    $dir = $master . "clothes/tops/*";

    $max1 = count(glob($dir));
    $max2 = 2;
    $max = intdiv($max1, $max2);

    $index = rand(0, $max);
    $array = glob($dir);

    $filename = pathinfo($array[$index])['filename'];

    if ($filename[-2] . $filename[-1] == 'on') {
        $index++;
        $filename = pathinfo($array[$index])['filename'];
    }

    $url_src = $master . 'clothes/tops/' . $filename . '.png';
    echo $url_src;

}

function console_log($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('$output' );</script>";
}

?>

<section id="featured-video">

    <iframe src="<?php echo block_field('video'); ?>" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <div class="title">
        <h2>Featured</h2>
        <span><?php echo block_field('title'); ?></span>
    </div>

    <div class="shirt-left">
        <img id="drag-shirt" draggable="true" ondragstart="drag(event)" width="75" src="<?php chooseTop(); ?>" />
    </div>

    <div id="drop-frog" ondrop="drop(event)" ondragover="allowDrop(event)" class="frog-right">
        <a href="games/frogsona"><img width="75" src="wp-content/uploads/2021/09/froghead.png" alt=""></a>

        <p>Drag the shirt over here!</p>
    </div>

    <script src="http://localhost/millycohen-com/wp-content/themes/milly-topia/js/drag.js"></script>

</section>