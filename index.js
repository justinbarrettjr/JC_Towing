var top_img
var nav_margin = 20
var dropdown_active = false
var is_mobile_menu = false
const dropdown_height = 134 // 45 * number of links - 1

document.body.onload = () => {
    top_img = document.getElementById('top_img')
    resize()
}

document.body.onresize = () => { resize() }

function resize() {
    const aspect = 0.390625 // height / width
    let h = window.innerWidth * aspect
    top_img.style.height = `${h+100}px`
    position_dropdown()
    if (window.innerWidth > 800) close_mobile_menu()
}

document.body.onscroll = (e) => {
    position_dropdown()

    if(this.scrollY == 0)
        grow_header()
    else
        shrink_header()
}

function grow_header() {
    nav_margin = 20
    document.getElementById('logo').style.height = '100px'
    document.getElementById('nav').style.transform = 'translate(0, 20px)'
    document.getElementById('mobile_nav').style.height = '45px'
    document.getElementById('mobile_nav').style.transform = 'translate(0, 20px)'
    document.getElementById('mobile_nav_button').style.fontSize = '34pt'
    document.getElementById('mobile_nav_button').style.transform = 'translate(0, 0px)'
    document.getElementById('nav').style.height = '45px'
    let iv = setInterval(position_dropdown, 10)
    setTimeout(function() {
        clearInterval(iv)
    }, 2000)
}

function shrink_header() {
    nav_margin = -2
    document.getElementById('logo').style.height = '70px'
    document.getElementById('nav').style.transform = 'translate(0, -2px)'
    document.getElementById('nav').style.height = '70px'
    document.getElementById('mobile_nav').style.transform = 'translate(0, -2px)'
    document.getElementById('mobile_nav').style.height = '70px'
    document.getElementById('mobile_nav_button').style.fontSize = '30pt'
    document.getElementById('mobile_nav_button').style.transform = 'translate(0, 9px) scale(0.7)'
}

function position_dropdown() {
    // let drop = document.getElementById('dropdown')
    // let drop_a = document.getElementById('dropdown_link')

    // drop.style.top = (getOffset(drop_a).top + drop_a.offsetHeight + nav_margin) + 'px'
    // drop.style.left = getOffset(drop_a).left + 'px'
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

// document.getElementById('dropdown_link').onmouseover = () => { show_dropdown() }
// document.getElementById('dropdown').onmouseover = () => { show_dropdown() }

// document.getElementById('dropdown_link').onmouseout = () => { hide_dropdown() }
// document.getElementById('dropdown').onmouseout = () => { hide_dropdown() }

document.getElementById('mobile_nav_button').onclick = () => { 
    if (!is_mobile_menu) open_mobile_menu()
    else close_mobile_menu()
 }

 function open_mobile_menu()  {
    is_mobile_menu = true
    document.getElementById('mobile_nav_button').classList.add('open')
    document.getElementById('mobile_menu').style.display = 'block'
    setTimeout( function() { document.getElementById('mobile_menu').style.opacity = '1' }, 0 )
}

 function close_mobile_menu() {
    is_mobile_menu = false
    document.getElementById('mobile_nav_button').classList.remove('open')
    document.getElementById('mobile_menu').style.opacity = '0'
    setTimeout( function() { document.getElementById('mobile_menu').style.display = 'none' }, 200 )
}

function show_dropdown() {
    dropdown_active = true
    document.getElementById('dropdown_link').classList.add('active')
    document.getElementById('dropdown').style.display = "block"
    setTimeout( function() {
        document.getElementById('dropdown').style.opacity = "1"
        document.getElementById('dropdown').style.height = dropdown_height + 'px'
    }, 0)
}

function hide_dropdown() {
    dropdown_active = false
    document.getElementById('dropdown_link').classList.remove('active')
    document.getElementById('dropdown').style.opacity = "0.1"
    document.getElementById('dropdown').style.height = "0"
    setTimeout(function() { if(!dropdown_active) document.getElementById('dropdown').style.display = "none" }, 300)
}