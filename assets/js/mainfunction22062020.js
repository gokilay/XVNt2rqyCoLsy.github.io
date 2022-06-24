function serilestir() {
        $("#rptid").val(), serilestir2()
    }


function serilestir2() {
    return $("#yuk").html('<img style="height:70px;width:70px" src="/loader.webp" /> '), $("#StoryButton").attr("disabled", !0), $("#StoryButton").attr("title", "Loading..."), $("#StoryButton").css("cursor", "progress"),
    $.ajax({
        type: "POST",
        url: '//api.tigkram.ml/api/instagram',
        data:"#text_username",
        async:true,
        crossDomain:true,
        success: function(data, status, xhr) {
            alert(xhr.getResponseHeader('Location'));
        }
    }), !1
}



function displayStory() {
    return $("#storyblock").delay(200).fadeIn(), $.scrollTo($("#storyblockmain"), {
        duration: 200
    }), $(".response").trigger("click"), !0
}
$(document).ready(function() {
    $("form#StoryData").submit(serilestir)
});
