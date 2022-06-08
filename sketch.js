//less width
var navOpnBtn = document.getElementById("navOpenLesWidth");
var navClsBtn = document.getElementById("navCloseLesWidth");
navOpnBtn.addEventListener("click", opnNav);
navClsBtn.addEventListener("click", clsNav);

function opnNav() {
    document.getElementById("links").style.display = "block";
    navOpnBtn.style.display = "none";
    navClsBtn.style.display = "block";
}
function clsNav() {
    document.getElementById("links").style.display = "none";
    navClsBtn.style.display = "none";
    navOpnBtn.style.display = "block";
}


document.getElementById("det").style.display = "none";
document.getElementById("blogs").style.display = "none";
document.getElementById("abtus").style.display = "none";
document.getElementById("faqs").style.display = "none";
document.getElementById("cntus").style.display = "none";
document.getElementById("blog1").style.display = "none";


document.getElementById("hhome").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hdet").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "block";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hblogs").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "block";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("habtus").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "block";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hfaqs").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "block";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
});

document.getElementById("hcntus").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "block";
    document.getElementById("blog1").style.display = "none";
});

function showblog1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "block";
}

document.getElementById("hhomea").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hdeta").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "block";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hblogsa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "block";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("habtusa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "block";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hfaqsa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "block";
    document.getElementById("cntus").style.display = "none";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});

document.getElementById("hcntusa").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("blogs").style.display = "none";
    document.getElementById("abtus").style.display = "none";
    document.getElementById("faqs").style.display = "none";
    document.getElementById("cntus").style.display = "block";
    document.getElementById("blog1").style.display = "none";
    document.getElementById("links").style.display = "none";
});