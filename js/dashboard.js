'use strict';

const siblings = el => [].slice.call(el.parentNode.parentNode.children).filter(child => (child !== el));

const tabs = document.querySelectorAll('._js_tabs_list');

if(tabs) {
	tabs.forEach((e)=> {
		const tabs_list = e.querySelectorAll('a');
	
		tabs_list.forEach(li => {
			li.addEventListener('click', (event) => {
				event.preventDefault();

				const parent = event.target.closest('li');

				if(parent !== null) {
					const items = [...parent.parentElement.children];
					var indexLi = items.indexOf(parent);
					
				}

				siblings(li).forEach((el, index) => {
					if(index !== indexLi) {
						el.classList.remove('active');
					}
				});


				li.parentElement.classList.add('active');
			});
		});
	});
	
}

// popup

const button_active = document.querySelectorAll('.button[data-role]');

if(button_active) {
	button_active.forEach(e => {
		e.addEventListener('click', () => {
			const modal_name = e.getAttribute('data-role');
			const modal_event = document.querySelector(`.modal[data-toggle=${modal_name}]`);

			modal_event.classList.add('active');
			
		});
	});

	const modal_close = document.querySelectorAll('.close__modal');

	modal_close.forEach(e => {
		e.addEventListener('click', () => document.querySelector(`.modal.active`).classList.remove('active'));
	});
}

const button_section = document.querySelectorAll('button[data-section]');

if(button_section) {
	button_section.forEach(e => {
		e.addEventListener('click', () => {
			const section_name = e.getAttribute('data-section');
			const section_event = document.querySelector(`.section_toggle[data-section-toggle=${section_name}]`);

			e.classList.toggle('active');
			section_event.classList.toggle('active');
			
		});
	});
}


// checkbox table

const checkbox_all_button = document.querySelector('input[name=checked_all]');

if(checkbox_all_button) {
	checkbox_all_button.addEventListener('click', () => {
		const checkbox_list = document.querySelectorAll('input[name=checked_item]');

		checkbox_list.forEach(e => {
			e.toggleAttribute('checked');
		});
	});
}

// toggle

const filter = document.querySelector('[data-toggle=filter]');
const filter_content = document.querySelector('[data-content=filter]');
if(filter) {
	filter.addEventListener('click', (event) => {
		
		const p = 253 - filter.clientWidth;
		const c = filter.getBoundingClientRect();

		let posRight = document.body.scrollLeft + c.left - p;
		let posBottom = document.body.scrollTop + c.bottom + 8;

		filter_content.classList.add('active');

		filter_content.setAttribute('style', `left: ${posRight}px; top: ${posBottom}px`);
	
	});

	window.addEventListener('click', (event) => {
		if(filter_content.classList.contains('active')) {
			let tg = event.target,
				its_select = tg == filter_content || filter_content.contains(tg),
				its_btnSelect = tg == filter;

			if (!its_select && !its_btnSelect) {
				filter_content.classList.remove('active');
			}
		}
	});
}


// chart

const labels_chart1 = ['Jun 30', 'Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5', 'Today'];
const labels_chart2 = ['', '', '', '', '', '', ''];
const labels_chart3 = ['', '', '', '', '', '', ''];
const labels_chart4 = ['', '', '', '', '', '',''];
const labels_chart5 = ['', ''];
const labels_chart6 = ['', '', '', '', '', '', ''];
const labels_chart7 = ['', '', '', '', '', '', ''];
const labels_chart8 = ['', '', '', '', '', '', ''];
const labels_chart9 = ['', ''];

const data_chart1 = {
  labels: labels_chart1,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 6, 5, 7, 4, 30, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [2, 4, 3, 0, 5, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart2 = {
  labels: labels_chart2,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [0, 12, 6, 5, 4, 30, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [2, 3, 9, 0, 5, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart3 = {
  labels: labels_chart3,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 24, 15, 0, 0, 6, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [26, 15, 26, 4, 15, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart4 = {
  labels: labels_chart4,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 20, 15, 12, 8, 11, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [18, 15, 22, 4, 13, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart5 = {
  labels: labels_chart5,
  datasets: [
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [10, 10],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart6 = {
  labels: labels_chart6,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 20, 15, 12, 8, 11, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [18, 15, 22, 4, 13, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart7 = {
  labels: labels_chart7,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 20, 15, 12, 8, 11, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [18, 15, 22, 4, 13, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart8 = {
  labels: labels_chart8,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [3, 20, 15, 12, 8, 11, 0],
		pointRadius: 0,
		borderWidth: 1
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [18, 15, 22, 4, 13, 20, 0],
		pointRadius: 0,
		borderWidth: 1
	}
]
};

const data_chart9 = {
  labels: labels_chart9,
  datasets: [
	{
		backgroundColor: '#6a7486',
		borderColor: '#6a7486',
		data: [1, 1],
		pointRadius: 0,
		borderWidth: 0
	},
	{
		backgroundColor: '#635cff',
		borderColor: '#635cff',
		data: [0, 0],
		pointRadius: 0,
		borderWidth: 2
	}
]
};

let chart1 = document.querySelector('#chart1');
if(chart1) {
	chart1.getContext("2d");
	var chart1Canvas = new Chart(chart1, {
		type: 'line',
		data: data_chart1,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}


let chart2 = document.querySelector('#chart2');
if(chart2) {

	chart2.getContext("2d");

	var chart2Canvas = new Chart(chart2, {
		type: 'line',
		data: data_chart2,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}


let chart3 = document.querySelector('#chart3');
if(chart3) {
	chart3.getContext("2d");

	var chart3Canvas = new Chart(chart3, {
		type: 'line',
		data: data_chart3,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}


let chart4 = document.querySelector('#chart4');

if(chart4) {
	chart4.getContext("2d");

	var chart4Canvas = new Chart(chart4, {
		type: 'line',
		data: data_chart4,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}



let chart5 = document.querySelector('#chart5');

if(chart5) {
	chart5.getContext("2d");

	var chart5Canvas = new Chart(chart5, {
		type: 'line',
		data: data_chart5,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}


let chart6 = document.querySelector('#chart6');

if(chart6) {
	chart6.getContext("2d");

	var chart6Canvas = new Chart(chart6, {
		type: 'line',
		data: data_chart6,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}

let chart7 = document.querySelector('#chart7');

if(chart7) {
	chart7.getContext("2d");

	var chart7Canvas = new Chart(chart7, {
		type: 'line',
		data: data_chart7,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}

let chart8 = document.querySelector('#chart8');

if(chart8) {
	chart8.getContext("2d");

	var chart8Canvas = new Chart(chart8, {
		type: 'line',
		data: data_chart8,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}

let chart9 = document.querySelector('#chart9');

if(chart9) {
	chart9.getContext("2d");

	var chart9Canvas = new Chart(chart9, {
		type: 'line',
		data: data_chart9,

		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				},
			},
			scales: {
				y: {
					display: false,
				},
				x: {
					display: false
				}
			},
		}
	});
}

// masked

const price_mask = document.querySelector('.mask-price');
const percent_mask = document.querySelector('.mask-percent');

if(price_mask) {
	var numberMask = IMask(price_mask,
	{
		mask: Number,
		min: 0,
		max: 100000,
		scale: 2,
		signed: true,
		radix: '.',
		mapToRadix: [','],
		thousandsSeparator: ' '
	});
}

if(percent_mask) {
	var numberMask = IMask(percent_mask,
	{
		mask: Number,
		min: 0,
		max: 100,
		scale: 2,
		signed: true,
		radix: '.',
		mapToRadix: [','],
		thousandsSeparator: ' '
	});
}


// form add

const field_percent = document.querySelector('input#radio1');
const field_fixed = document.querySelector('input#radio2');

if(field_percent) {
	field_percent.addEventListener('input', (event) => {
		document.querySelector('[data-toggle=form_percentage]').classList.remove('hide');
		document.querySelector('[data-toggle=form_fixed]').classList.add('hide');
	});
}

if(field_fixed) {
	field_fixed.addEventListener('input', (event) => {
		document.querySelector('[data-toggle=form_percentage]').classList.add('hide');
		document.querySelector('[data-toggle=form_fixed]').classList.remove('hide');
	});
}

