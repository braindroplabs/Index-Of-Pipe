import { Component } from '@angular/core';

import { IndexOfPipe } from './shared/pipes/index-of.pipe';

@Component({
	moduleId: module.id,
	selector: 'index-of-pipe-app',
	templateUrl: 'index-of-pipe.component.html',
	styleUrls: ['index-of-pipe.component.css'],
	pipes: [IndexOfPipe]
})
export class IndexOfPipeAppComponent {

	//images (this should exist in a service and is in here for demo purposes only)
    imageSettings = {
		selectedImageIndex: 0,
		images: [
			{
				url: "https://images.unsplash.com/photo-1460500063983-994d4c27756c?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Cool Beach",
				author: "Michael Durana",
				location: "Big Sur, United States",
				tags: "water, ocean, rocks, nature, sky, sun"
			}, {
				url: "https://images.unsplash.com/photo-1460378150801-e2c95cb65a50?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Snowscape",
				author: "Joe Reed",
				location: "Hole-in-the-Wall, Penrith, United Kingdom",
				tags: "nature, mountains, snow, sky, cold, winter"
			}, {
				url: "https://images.unsplash.com/photo-1458400411386-5ae465c4e57e?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Lift Chairs",
				author: "Geoffrey Arduini",
				location: "Morillon, France",
				tags: "snow, winter, cold, nature, outside, chairs, ski, snowboard"
			}, {
				url: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Flower Gift",
				author: "Leonardo Wong",
				location: "Singapore",
				tags: "rose, gift, petal, flower, scent"
			}, {
				url: "https://images.unsplash.com/photo-1452215199360-c16ba37005fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&h=100&w=200&fit=max&s=ba433e209f134b4c8b2a7804a3db2b49",
				name: "Mountains Backdrop",
				author: "Caryle Tylkowski",
				location: "Unknown",
				tags: "mountains, sky, blue, rocky, nature"
			}, {
				url: "https://images.unsplash.com/photo-1442551382982-e59a4efb3c86?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "NY Skyline",
				author: "Nirzar Pangarkar",
				location: "New York, United States",
				tags: "sky, skyline, new york, buildings, water"
			}, {
				url: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Bridge in City",
				author: "valor kopeny",
				location: "Dumbo , New York, USA",
				tags: "city, bridge, outside, structures"
			}, {
				url: "https://images.unsplash.com/photo-1432117068802-b224427256a5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&h=100&w=200&fit=max&s=31e38c9cd958fdc0bb00ff6ba05478c4",
				name: "Jagged Mountains",
				author: "Rosan Harmens",
				location: "Unknown",
				tags: "cliffs, nature, outdoors, clouds, rocks"
			}, {
				url: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "iPhone Habit",
				author: "Gilles Lambert",
				location: "Unknown",
				tags: "iphone, tech, habit, people, screen"
			}, {
				url: "https://images.unsplash.com/reserve/imNop2O1Rit190cSkxXv_1-7069.jpg?crop=entropy&fit=crop&fm=jpg&h=100&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=200",
				name: "Flowers on Stand",
				author: "Julia Janeta",
				location: "Unknown",
				tags: "rose, gift, petal, flower, scent, drawer, white"
			}, {
				url: "https://images.unsplash.com/photo-1461409971633-aa0e46732112?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&h=100&w=200&fit=max&s=bb401d13a08d6459b80bc63a0905a091",
				name: "Buildings",
				author: "Vladimir Chuchadeev",
				location: "Vladimir, Russia",
				tags: "building, russia, architecture"
			}, {
				url: "https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&h=100&w=200&fit=max&s=0eee25e1e8252c9ec91aa736760d1a2e",
				name: "Eye of the Plant",
				author: "Erol Ahmed",
				location: "Botanical Garden, København K, Denmark",
				tags: "nature, plant, eye, thorn, green"
			}],
		filterQuery: ''
	};

	//json toggle flag
	isShowJson = false;

	//json toggle
	onToggleJson() {
		this.isShowJson = !this.isShowJson;
	}

	//filter updates
	onKeyUp($event) {
		this.imageSettings.filterQuery = $event.target.value;
	}

}
