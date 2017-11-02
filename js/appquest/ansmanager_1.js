/**
 * 
 */
var qz1_ans = ["a", "c", "c", "d", "b", "b", "c", "d", "a", "d"];
var qz2_ans = ["b", "a", "c", "d", "c", "d", "c", "a"];
var qz3_ans = ["b", "a", "c", "d", "c", "d", "c", "a"];
function testActividad1() {
    var result = 0;
    var clase;
    var answered = $(".askopt:checked").length;
    if (answered === 10) {
        $(".askopt:checked").each(function(index) {
            if ($(this).val() === qz1_ans[index]) {
                result += 1;
            }
            $(this).prop("checked", false);
        });
        if (result > 7) {
            clase = "success";
        } else if (result < 8 && result > 5) {
            clase = "warning";
        } else {
            clase = "danger";
        }
        $("#res-content").html("<h4  class='text-" + clase + "'>Su calificacion es: " + (result + "/" + 10) + "</h4>")
        $("#modal-launcher").click();
    } else {
        alert("Debe responder a todas las preguntas!\nRepondidas: " + answered + "\nSin responder: " + (10 - answered));
    }
}
function testActividad2() {
    var result = 0;
    var clase;
    var answered = $(".askopt2:checked").length;
    if (answered === 8) {
        $(".askopt2:checked").each(function(index) {
            if ($(this).val() === qz2_ans[index]) {
                result += 1;
            }
            $(this).prop("checked", false);
        });
        if (result > 7) {
            clase = "success";
        } else if (result < 8 && result > 5) {
            clase = "warning";
        } else {
            clase = "danger";
        }
        $("#res-content").html("<h4  class='text-" + clase + "'>Su calificacion es: " + (result + "/" + 8) + "</h4>")
        $("#modal-launcher").click();
    } else {
        alert("Debe responder a todas las preguntas!\nRepondidas: " + answered + "\nSin responder: " + (8 - answered));
    }
}
function testActividad3() {
    var result = 0;
    var clase;
    var answered = $(".askopt3:checked").length;
    if (answered === 8) {
        $(".askopt3:checked").each(function(index) {
            if ($(this).val() === qz2_ans[index]) {
                result += 1;
            }
            $(this).prop("checked", false);
        });
        if (result > 7) {
            clase = "success";
        } else if (result < 8 && result > 5) {
            clase = "warning";
        } else {
            clase = "danger";
        }
        $("#res-content").html("<h4  class='text-" + clase + "'>Su calificacion es: " + (result + "/" + 8) + "</h4>")
        $("#modal-launcher").click();
    } else {
        alert("Debe responder a todas las preguntas!\nRepondidas: " + answered + "\nSin responder: " + (8 - answered));
    }
}