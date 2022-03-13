/*------- Previous - Go from page 1 to page 0 -------*/
function previous_1(){
    document.getElementById('section_0').classList.remove("d-none");
    document.getElementById('section_1').classList.add("d-none");
    document.getElementById('nabar1').classList.add("d-none");
};
/*------- Go from page 0 to page 1 -------*/
function page_1(){
    document.getElementById('section_1').classList.remove("d-none");
    document.getElementById('section_0').classList.add("d-none");
    document.getElementById('nabar1').classList.remove("d-none");
}
/*------- Previous - Go from page 2 to page 1 -------*/
function previous_2(){
    document.getElementById('section_1').classList.remove("d-none");
    document.getElementById('section_2').classList.add("d-none");
    document.getElementById('nabar1').classList.remove("d-none");
    document.getElementById('nabar2').classList.add("d-none");
};
/*------- Previous - Go from page 3 to page 2 -------*/
function previous_3(){
    document.getElementById('section_3').classList.add("d-none");
    document.getElementById('section_2').classList.remove("d-none");
    document.getElementById('nabar3').classList.add("d-none");
    document.getElementById('nabar2').classList.remove("d-none");
};
