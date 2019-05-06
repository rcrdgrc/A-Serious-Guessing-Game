


var audio = new Audio(); // define your audio

btn.click( () => audio.play('212579__pepv__evil-laugh.mp3') ); // that will do the trick !!

$("btn").click(
    function() {
        console.log("clicked...waiting...");

        setTimeout(
            function() {
                alert("Called after delay.");
            },
            5000);
    });