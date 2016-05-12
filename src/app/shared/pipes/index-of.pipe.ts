import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'indexOf'
})
export class IndexOfPipe implements PipeTransform {

	transform(data: Array<any>, props: Array<string>, target: string): any {

		return data.filter((item) => {

			//one time lowercase
			target = target.toLowerCase();
			
			//property loop with match escape
			let match;
			for(let prop of props) {
				match = item[prop].toLowerCase().indexOf(target) > -1;
				if (match) { break; }
			}

			//return match
			return match;

		});

	}

}
