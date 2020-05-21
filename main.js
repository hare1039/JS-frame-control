let show_sequence = {
    "1-small.png": 2300.5, // milliseconds
    "2-small.png": 2400.5, // milliseconds
    "3-small.png": 2500.5  // milliseconds
};

function init()
{
    let delta = 0;
    for (let [imgsrc, duration] of Object.entries(show_sequence)) {
        console.log(imgsrc);
        let new_img = $("<img>", {id: imgsrc, src: imgsrc});
        new_img.hide();
        $("#display").prepend(new_img);

        setTimeout(function() {
            $("img").hide();
            new_img.show();
            console.log(performance.now());
        }, delta);
        delta += duration;
    }
}

$(document).ready(init);
