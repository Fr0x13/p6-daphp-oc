(self.webpackChunk=self.webpackChunk||[]).push([[143],{5843:(t,e,n)=>{"use strict";n(5306),n(4916),n(9826);function a(){var t=$("div.videos"),e=$('<div class="btn btn-primary">Ajouter une video</div>');function n(e,n){e.parent().remove(),t.data("index",n-1)}t.after(e),t.data("index",t.find("input").length),e.on("click",(function(){!function(t){var e=t.data("index"),a=$('<span class="btn btn-danger deleteButton">X</span>').on("click",(function(t){n($(t.target,e))})),i=$(t.data("prototype").replace(/__name__/g,e));i.css("width","100%").append(a),i.children(":first").addClass("col-10").css("display","inline-block"),t.data("index",e+1).append(i)}(t)}))}n(1058),n(9554),n(4747),n(3123),n(7042);function i(t){if(t.length>12){var e=t.split(" "),n="";return e.forEach((function(t){n.length<9&&(n+=" "+t)})),n+="..."}return t}function r(t,e){t===$($(".jumbotron")[0]).css("background-image").split("/")[5].slice(0,-2)&&$($(".jumbotron")[0]).css("background-image",'url("http://localhost:8000/uploads/pictures/'+e+'")')}function c(t){var e=$(document.getElementsByClassName("card")[0]).clone(!0),n=$(e.find(".card-header-link")),a=$(e.find(".card-img-index")),r=$(e.find(".card-title-index")),c=$(e.find(".edit-link"));n.attr("href","/trick/"+t.id),a.attr("src","/uploads/pictures/"+t.pictureOne),r.attr("href","/trick/"+t.id).text(i(t.title)),1===c.length&&(c.attr("href","/admin/trick/"+t.id+"/modifier"),e.find("form").attr("action","/admin/trick/"+t.id)),$("#homeTricksContainer").append(e)}$(".card-title-index").each((function(t,e){$(e).text(i($(e).text()))}));n(285),n(1539),n(8783),n(6992),n(3948),n(7327);var o=n(9669).default;$((function(){a(),function(t){$("#homeTricksLoaderButton").click((function(){var e=$(this),n=parseInt(e.val());t.get("/charger-tricks/"+n).then((function(t){var a=t.data;a.forEach(c),e.val(n+8),a.length<8&&e.off("click").removeClass("btn-primary").addClass("btn-secondary").addClass("disabled").text("Tout est là...")})).catch((function(t){console.log(t)}))}))}(o),function(t){function e(t){var e=$(document.getElementsByClassName("comment-card")[0]).clone(!0),n=$(e.find(".comment-user-avatar")),a=$(e.find(".comment-username")),i=$(e.find(".comment-content"));n.attr("src","/uploads/avatars/"+t.userAvatar),a.text(t.userName),i.text(t.content),$("#comment-form-container").append(e)}$("#commentsLoaderButton").click((function(){var n=$(this),a=parseInt(n.val()),i=parseInt($("#commentsLoaderButton").attr("data-id-trick"));t.get("/trick/"+i+"/comments/"+a).then((function(t){var i=t.data;i.forEach(e),n.val(a+5),i.length<5&&n.off("click").removeClass("btn-primary").addClass("btn-secondary").addClass("disabled").text("Tout est là...")})).catch((function(t){console.log(t)}))}))}(o),function(t){$(".delete-media-btn").click((function(e){if(e.preventDefault(),e.stopPropagation(),confirm("Êtes-vous sûr de vouloir supprimer ce media ?")){var n=$($(this).parent()),a=$(n.find("input")[1]).val(),i=new URLSearchParams;i.append("_method","DELETE"),i.append("_token",a),t.post(n.attr("action"),i).then((function(t){$(n.parents()[2]).remove();var e=$($(n.parents()[2]).children()[0]).attr("src"),a=$($($("#edit-card-container").children()[0]).children()[0]).attr("src").split("/")[3];r(e.split("/")[3],a),$("input").filter((function(){return this.value==e})).remove(),console.log(t)})).catch((function(t){console.log(t)}))}}))}(o),function(t){$(".edit-video-btn").click((function(e){e.preventDefault(),e.stopPropagation();var n=$(this),a=n.attr("href"),i=$($(n.parents()[2]).children()[0]),r=i.attr("src"),c=$($("#editVideoModal").modal("toggle").find("#videoURL")),o=$("#videoToken").val();c.css("display","inline-flex").val(r),$("#videoErrorFlash").css("display","none"),$("#submitVideoURL").click((function(){var e=$(this),n=c.val(),s=new URLSearchParams;s.append("videoURL",n),s.append("_token",o),t.post(a,s).then((function(t){i.attr("src",n),$('input[value="'+r+'"]').val(n),$("#editVideoModal").modal("hide"),e.unbind()})).catch((function(t){$($("#videoErrorFlash").css("display","block").children()[1]).text(t.response.data)}))}))}))}(o),function(t){$(".edit-picture-btn").click((function(e){e.preventDefault(),e.stopPropagation();var n=$(this),a=n.attr("href");$($("#editPictureModal").modal("toggle").find("#picture")).val(""),$("#pictureErrorFlash").css("display","none"),$("#submitPicture").click((function(){var e=document.getElementById("picture").files[0],i=$(this),c=new FormData;c.append("picture",e),e?t.post(a,c).then((function(t){var e=t.data;r($($(n.parents()[2]).children()[0]).attr("src").split("/")[3],e),$($(n.parents()[2]).children()[0]).attr("src","/uploads/pictures/"+e),$("#editPictureModal").modal("hide"),i.unbind()})).catch((function(t){$($("#pictureErrorFlash").css("display","block").children()[1]).text(t.response.data)})):$($("#pictureErrorFlash").css("display","block").children()[1]).text("Veuillez ajouter une image à uploader")}))}))}(o)}))}},t=>{"use strict";t.O(0,[484],(()=>{return e=5843,t(t.s=e);var e}));t.O()}]);