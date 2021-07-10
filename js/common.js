'use strict';

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

// 

let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  }

  let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
      display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }
   let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }

// 

AOS.init({
	disable: 'mobile',
	once: true,
	duration: 600,
});
const siblings = el => [].slice.call(el.parentNode.parentNode.children).filter(child => (child !== el));
const header_nav_item = document.querySelectorAll('.dropmenu-toggle');

let list = document.querySelectorAll('.header__top-nav > ul > li');

if(header_nav_item) {
	header_nav_item.forEach(e => {
		e.addEventListener('click', (event) => {

			event.preventDefault();

			const parent = event.target.closest('li');

			if(parent !== null) {
				const items = [...parent.parentElement.children];
				var indexLi = items.indexOf(parent);
				
			}			

			event.stopPropagation();

			siblings(e).forEach((el, index) => {

				if(index !== indexLi) {
					el.classList.remove('active_menu');
				}
				
			});
			
			if(e.className != 'active') {
				e.classList.toggle('active');
				e.parentElement.classList.toggle('active_menu');
			}

		});
	});
}

const btnMenu = document.querySelector('.dropmenu-toggle');
const menu = document.querySelectorAll('.dropmenu');

menu.forEach(e => {

	window.addEventListener('click', (event) => {
        let tg = event.target,
            isMenuWrap = tg == e || e.contains(tg);

			if (!isMenuWrap) {
				e.parentElement.classList.remove('active_menu');
			}
        
    });
});



const accordion_item = document.querySelectorAll('.accordion__item');

if(accordion_item) {
	accordion_item.forEach(e => {
		e.querySelector('button').addEventListener('click', () => {
			e.classList.toggle('active');

			if(e.classList.contains('active')) {
				slideDown(e.querySelector('.accordion__item-content'), 300);
			} else {
				slideUp(e.querySelector('.accordion__item-content'), 300);
			}

			
		});
	});
}

const language_select = document.querySelector('.language_select__list');

if(language_select) {
	const button_select = language_select.querySelector('.selected');
	const select_list = language_select.querySelector('.list');

	button_select.addEventListener('click', () => {
		select_list.classList.toggle('active');
	});

	
		window.addEventListener('click', (event) => {
			if(select_list.classList.contains('active')) {
				console.log(1);
				let tg = event.target,
					its_select = tg == select_list || select_list.contains(tg),
					its_btnSelect = tg == button_select;

				if (!its_select && !its_btnSelect) {
					select_list.classList.remove('active');
				}
			}
		});
}

// burger menu

const burger = document.querySelector('.header__top-burger'),
	  mobile_menu = document.querySelector('.menu_mobile');

let header = document.querySelector('.header');
const header_scroll = () => {
	if(pageYOffset >= 1) {
		header.classList.add("header_fixed");

	} else {
		header.classList.remove("header_fixed");
	}
}

if(header) {
	header_scroll();

	window.addEventListener('scroll', () => {
		header_scroll();
	});
}

if(burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
}


