const main = document.querySelector('main');
const upcomingBtn = document.querySelector('.btn-2');
const popularBtn = document.querySelector('.btn-1');
window.onload = makeMainPage();

async function makeMainPage() {
	const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=873925b7d3cfa7bab5d72ff9e7b059c3');
	const data = await res.json();

	for (let i = 0; i < data.results.length; i++) {
		const card = document.createElement('div');
		const image = document.createElement('img');
		const filmInfo = document.createElement('div');
		const filmTitle = document.createElement('h2');
		const filmRate = document.createElement('span');
		const filmDescription = document.createElement('div');

		filmDescription.classList.add('film__review');
		filmDescription.hidden = true;
		filmTitle.classList.add('film__title');
		filmRate.classList.add('film__rate');
		card.classList.add('films__card');
		filmInfo.classList.add('film__info');
		[filmTitle, filmRate].forEach((elem) => filmInfo.append(elem));

		image.src = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
		image.alt = `Постер к фильму `;
		image.width = 300;
		image.height = 450;
		image.classList.add('films__image');
		filmTitle.innerText = data.results[i].title;
		filmRate.innerText = data.results[i].vote_average;
		filmDescription.innerText = data.results[i].overview;

		main.append(card);
		card.append(image);
		card.append(filmInfo);
		card.append(filmDescription);

		card.addEventListener('mouseover', function () {
			this.children[2].hidden = false;
		});
		card.addEventListener('mouseout', function () {
			this.children[2].hidden = true;
		})
	}
}


async function getUpcoming() {
	const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=873925b7d3cfa7bab5d72ff9e7b059c3');
	const data = await res.json();

	let image = document.querySelectorAll('.films__image');
	let filmTitle = document.querySelectorAll('.film__title');
	let filmRate = document.querySelectorAll('.film__rate');
	let review = document.querySelectorAll('.film__review');

	for (let i = 0; i < data.results.length; i++) {
		image[i].src = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
		image[i].alt = `Постер к фильму `;
		image[i].width = 300;
		image[i].height = 450;
		image[i].classList.add('films__image');
		filmTitle[i].innerText = data.results[i].title;
		filmRate[i].innerText = data.results[i].vote_average;
		review[i].innerText = data.results[i].overview;
	}
}

async function getPopular() {
	const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=873925b7d3cfa7bab5d72ff9e7b059c3');
	const data = await res.json();

	let image = document.querySelectorAll('.films__image');
	let filmTitle = document.querySelectorAll('.film__title');
	let filmRate = document.querySelectorAll('.film__rate');
	let review = document.querySelectorAll('.film__review');

	for (let i = 0; i < data.results.length; i++) {
		image[i].src = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
		image[i].alt = `Постер к фильму `;
		image[i].width = 300;
		image[i].height = 450;
		image[i].classList.add('films__image');
		filmTitle[i].innerText = data.results[i].title;
		filmRate[i].innerText = data.results[i].vote_average;
		review[i].innerText = data.results[i].overview;
	}
}


upcomingBtn.addEventListener('click', getUpcoming);
popularBtn.addEventListener('click', getPopular);