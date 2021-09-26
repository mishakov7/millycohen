window.addEventListener('load', function(){
    const frog_canvas = document.querySelector("#frogsona-canvas");
    const frog_ctx = frog_canvas.getContext("2d");

    const categoryArray = ['tops', 'bottoms', 'dresses', 'outerwear', 'socks', 'hats', 'glasses', 'necks', 'bags', 'items', 'backdrops'];

    defaultCategory();

    let frogImage = new Image();

    frogImage.onload = function(){
        frog_ctx.drawImage(frogImage, 0, 0, frog_canvas.width, frog_canvas.height);
    }

    frogImage.src = "../../wp-content/themes/milly-topia/assets/nakedfrog.png";

    // // // // // // // // // // // // // // // // // // // // // // // //
    // All canvas layers & contexts
    const top_layer = document.querySelector("#tops-layer");
    const top_ctx = top_layer.getContext("2d");

    const bottom_layer = document.querySelector("#bottoms-layer");
    const bottom_ctx = bottom_layer.getContext("2d");

    const dress_layer = document.querySelector("#dresses-layer");
    const dress_ctx = dress_layer.getContext("2d");

    const outerwear_layer = document.querySelector("#outerwear-layer");
    const outerwear_ctx = outerwear_layer.getContext("2d");

    const socks_layer = document.querySelector("#socks-layer");
    const socks_ctx = socks_layer.getContext("2d");

    const hat_layer = document.querySelector("#hats-layer");
    const hat_ctx = hat_layer.getContext("2d");

    const glasses_layer = document.querySelector("#glasses-layer");
    const glasses_ctx = glasses_layer.getContext("2d");

    const neck_layer = document.querySelector("#necks-layer");
    const neck_ctx = neck_layer.getContext("2d");

    const bag_layer = document.querySelector("#bags-layer");
    const bag_ctx = bag_layer.getContext("2d");

    const item_layer = document.querySelector("#items-layer");
    const item_ctx = item_layer.getContext("2d");

    const backdrop_layer = document.querySelector("#backdrops-layer");
    const backdrop_ctx = backdrop_layer.getContext("2d");

    const canvas_layers = [top_layer, bottom_layer, dress_layer, outerwear_layer, socks_layer, hat_layer, glasses_layer, neck_layer, bag_layer, item_layer, backdrop_layer];

    const ordered_canvas_layers = [backdrop_layer, socks_layer, bottom_layer, dress_layer, hat_layer, glasses_layer, bag_layer, item_layer, top_layer, outerwear_layer, neck_layer];

    const canvas_contexts = [top_ctx, bottom_ctx, dress_ctx, outerwear_ctx, socks_ctx, hat_ctx, glasses_ctx, neck_ctx, bag_ctx, item_ctx, backdrop_ctx];

    // // // // // // // // // // // // // // // // // // // // // // // //// // // // // // // // //

    let chosenCloth = "shirts"; 
    let chosenLayer = 0; 

    const categories = document.querySelectorAll("#categories-container .category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', switchCategory);
    }

    // // // // // // // // // // // // // // // // // // // // // // // //
    // // // // // // // // // // // //
    // NOTE: drawImage() does NOT work for svgs.
    let cloths = document.querySelectorAll(".cloth img");
    for (var i = 0; i < cloths.length; i++) {
        cloths[i].addEventListener('click', selectCloth);
    }    

    function selectCloth() {
            // NOTE: when you get the REAL pictures, uncomment this,....
            var cloth_path = this.src.replace(".png", "on.png");

            let currentContext = canvas_contexts[chosenLayer];
            let currentCanvas = canvas_layers[chosenLayer];

            if (this.classList.contains("none")) {
                
                currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

            } else {
                var path = this.src;
                var cloth_img = new Image();

                currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

                cloth_img.onload = function(){
                    currentContext.drawImage(cloth_img, 0, 0, currentCanvas.width, currentCanvas.height);
                }

                // cloth_img.src = path;
                cloth_img.src = cloth_path;
            }
    }

    function switchCategory() {
        chosenCloth = this.classList[1];
        chosenLayer = findCategoryIndex(chosenCloth);

        for (var i = 0; i < categoryArray.length; i++) {

            if (categoryArray[i] == chosenCloth) {
                let chosenContainer = "#" + chosenCloth + "-container";
                let chosenCategory = "#categories-container ." + chosenCloth + " svg";
                document.querySelector(chosenContainer).style.display = "flex";
                document.querySelector(chosenCategory).style.fill = '#5FBAFF';

            } 
            else {
                let rejectedContainer = "#" + categoryArray[i] + "-container";
                let rejectedCategory = "#categories-container ." + categoryArray[i] + " svg";
                document.querySelector(rejectedContainer).style.display = "none";
                document.querySelector(rejectedCategory).style.fill = "#FFF";
            }

        }

    }

    function defaultCategory() {
        topsContainer = document.querySelector("#tops-container");
        topsCategory = document.querySelector("#categories-container .tops svg");
        topsContainer.style.display = "flex";
        topsCategory.style.fill = '#5FBAFF';
    }

    function findCategoryIndex(category) {
        catIndex = 0;

        for (var i = 0; i < categoryArray.length; i++) {
            if (category == categoryArray[i]) {
                catIndex = i;
            }
        }

        return catIndex;
    }


    const startover = document.querySelector("#startover-btn");
    startover.addEventListener('click', function(){
        for (var i = 0; i < canvas_layers.length; i++) {
            let currentContext = canvas_contexts[i];
            let currentCanvas = canvas_layers[i];

            currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
        }

        frog_ctx.clearRect(0, 0, frog_canvas.width, frog_canvas.height);
        frog_ctx.drawImage(frogImage, 0, 0, frog_canvas.width, frog_canvas.height);
    });

    const download = document.querySelector("#download-btn");
    download.addEventListener('click', function(){
        for (var i = 0; i < canvas_layers.length; i++) {
            let currentCanvas = ordered_canvas_layers[i];
            backdrop_ctx.drawImage(frogImage, 0, 0, backdrop_layer.width, backdrop_layer.height);
            frog_ctx.drawImage(currentCanvas, 0, 0, frog_canvas.width, frog_canvas.height);
        }

        let url = frog_canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

        // NOTE: The method used before only worked in Firefox. 
        // This method is compatible with Chrome.
        var link = document.createElement('a');
        link.download = "drawing.png";
        link.href = url;
        link.click();
    });

});