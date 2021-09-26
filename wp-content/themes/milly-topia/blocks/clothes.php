<?php

// Tops
makeClothes('top', 'tops');

// Bottoms
makeClothes('bottom', 'bottoms');

// Dresses
makeClothes('dress', 'dresses');

// Outerwear
makeClothes('outer', 'outerwear');

// Socks
makeClothes('socks-pair', 'socks');

// Hats
makeClothes('hat', 'hats');

// Glasses
makeClothes('glasses-pair', 'glasses');

// necks
makeClothes('neck', 'necks');

// Bags
makeClothes('bag', 'bags');

// Items
makeClothes('item', 'items');

// Backdrops
makeClothes('backdrop', 'backdrops');

function makeClothes($single, $plural) {
    $master = "wp-content/themes/milly-topia/assets/";

    $dir = $master . "clothes/" . $plural . "/*";


    echo '<div id="' . $plural . '-container" class="cloth-container">';
    echo '<span class="cloth milly-border ' . $single . '">' . '<img class="none" src="' . '../../' . $master . 'clothes/none.png"/>' . '</span>';
    foreach (glob($dir) as $file) {
        $filename = pathinfo($file)['filename'];
        
        if ($filename[-2] . $filename[-1] !== 'on') {
            echo '<span class="cloth milly-border ' . $single . '">' . '<img src="' . '../../' . $master . 'clothes/' . $plural . '/' . $filename . '.png"/>' . '</span>';
        }
    }
    echo '</div>';
}

function console_log($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('$output' );</script>";
}

?>