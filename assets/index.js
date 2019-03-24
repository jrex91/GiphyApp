$(".searchButton").on("click", function (event) {

    event.preventDefault();

    var search = $(".gifSearch").val()

    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=5&api_key=iz1z1zOpBg0O1wF7euT9e29bffT8TxR8`
    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function (response) {
        console.log(response)

        var gifsArr = response.data
        for (var i = 0; i < gifsArr.length; i++) {
            console.log(gifsArr[i].images.fixed_width.url)
            console.log(gifsArr[i].images.fixed_width_still.url)
            var imgStill = gifsArr[i].images.fixed_width_still.url
            var imgAnimate = gifsArr[i].images.fixed_width.url
            var img = $("<img>")
            img.attr("src", imgStill)
            img.attr("data-state", "still")
            img.attr("data-animate", imgAnimate)
            img.attr("data-still", imgStill)
            img.addClass("gif")

            $(".gifDisplay").append(img)

        }
    })

    $(document).on("click", ".gif", function (event) {
        event.preventDefault()
        console.log("hello")
        console.log($(this).attr("data-state"))
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");


        }
    })
})