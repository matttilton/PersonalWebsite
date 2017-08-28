$.ajax({
    url: window.location.origin + "/nodeflix/shows",
    success: function (data) {
        data.forEach(function(each) {
            console.log(each);
            $("<li>", {
                id: "show" + each.ID,
                name: each.Name,
                class: "card effect1 list"
            }).appendTo('#showscontent');
            $("<div>", {
                class: "inside-top",
                id: "showdiv" + each.ID
            }).appendTo("#show" + each.ID);
            $("<img>", {
                src: each.Image,
                click: function () {
                    window.location = "/Nodeflix/" + each.URL
                }
            }).appendTo("#showdiv" + each.ID);
            $("<p>", {
                text: each.Name
            }).appendTo("#show" + each.ID);

        });
    },
    failure: function (err) {
        alert(err);
    }
});

$.ajax({
    url: window.location.origin + "/nodeflix/movies",
    success: function (data) {
        data.forEach(function(each) {
            $("<li>", {
                id: "movie" + each.ID,
                name: each.Name,
                class: "card effect1 list"
            }).appendTo('#moviecontent');
            $("<div>", {
                class: "inside-top",
                id: "moviediv" + each.ID
            }).appendTo("#movie" + each.ID);
            $("<img>", {
                src: each.Image,
                click: function () {
                    window.location = "/Nodeflix/watch/movie/" + each.URL
                }
            }).appendTo("#moviediv" + each.ID);
            $("<p>", {
                text: each.Name
            }).appendTo("#movie" + each.ID);

        });
    },
    failure: function (err) {
        alert(err);
    }
});