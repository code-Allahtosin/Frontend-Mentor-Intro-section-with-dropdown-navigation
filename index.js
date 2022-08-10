
// FUNCTION LIST
//******************************************************************************** */
function toggleClass(elementID,className){
    document.getElementById(elementID).classList.toggle(className)
}
function addClass(elementID,className){
    document.getElementById(elementID).classList.add(className)
}
function removeClass(elementID,className){
    document.getElementById(elementID).classList.remove(className)
}
//******************************************************************************** */


document.getElementById('features').addEventListener('click', function(){
    toggleClass('dropdown-1',"hide")
    toggleClass('arrU1',"hide")
    toggleClass('arrD1',"hide")

    addClass('dropdown-2',"hide")
    addClass('arrU2',"hide")
    removeClass('arrD2',"hide")
    
})
document.getElementById('company').addEventListener('click', function(){
    toggleClass('dropdown-2','hide')
    toggleClass('arrU2', "hide")
    toggleClass('arrD2', "hide")

    addClass('dropdown-1',"hide")
    addClass('arrU1',"hide")
    removeClass('arrD1',"hide")

})

document.getElementById('menu').addEventListener('click', function(){
    toggleClass('overlay','erase')
})

document.getElementById('close').addEventListener('click',function(){
    toggleClass('overlay','erase')
})

document.getElementById('features+').addEventListener('mouseover', function(){
    const vw = document.documentElement.clientWidth || window.innerWidth;
    if (vw > 800) {
        removeClass('dropdown-1',"hide")
        removeClass('arrU1',"hide")
        addClass('arrD1',"hide")
    }
})

document.getElementById('features+').addEventListener('mouseout', function(){
    const vw = document.documentElement.clientWidth || window.innerWidth;
    if (vw > 800) {
        addClass('dropdown-1',"hide")
        addClass('arrU1',"hide")
        removeClass('arrD1',"hide")
    }
})

document.getElementById('company+').addEventListener('mouseover', function(){
    const vw = document.documentElement.clientWidth || window.innerWidth;
    if (vw > 800) {
        removeClass('dropdown-2',"hide")
        removeClass('arrU2',"hide")
        addClass('arrD2',"hide")
    }
})

document.getElementById('company+').addEventListener('mouseout', function(){
    const vw = document.documentElement.clientWidth || window.innerWidth;
    if (vw > 800) {
        addClass('dropdown-2',"hide")
        addClass('arrU2',"hide")
        removeClass('arrD2',"hide")
    }
})
