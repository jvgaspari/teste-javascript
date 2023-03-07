// Menu
$(".btn-group-vertical").css({flexDirection: "row", alignItems: "flex-end"});
$(".btn-group-vertical > .btn").css({
    marginRight: "4px",
    width: 'auto',
    borderRadius: "6px",
    height: "100%",
});

// Header
$(".jumbotron").css({
    backgroundColor: "#6c757d", 
    color: "#fff", 
    display: "flex", 
    flexDirection: "Column",
    alignItems: "flex-end"
});
$("a[role='button']").css({backgroundColor: '#47AA2D', border: 'none'})
$("hr").css({
    width: "100%"
});

// Cards
var redElements = document.querySelectorAll('.row > .col-lg-3');
var animais = redElements[0];
var tecnologia = redElements[1];
var pessoas = redElements[2];
var natureza = redElements[3];
$(animais).insertAfter(natureza);
$(pessoas).insertAfter(animais);
$(tecnologia).insertAfter(pessoas);
$(animais).find("a").css({backgroundColor: '#47AA2D', border: 'none'});

// Lista
$(".list-group > li").first().removeClass('active')
$(".list-group").append('<li class="list-group-item active">Quarto item</li>')
$(".list-group").append('<li class="list-group-item">Quinto item</li>')