// window.onload = function() {
// 	var m = {message: "Hello World!"};
// 	ko.applyBindings(m);
// };

// window.onload = function() {
// 	var viewModel = {
// 		message: ko.observable('ここを書き換える')
// 	};
// 	ko.applyBindings(viewModel);

// 	docume'nt.getElementById('button').onclick = function() {
// 		var t = ('viewModel.message=' + viewModel.message());
// 		ko.applyBindings(t);
// 	};
// };

// window.onload = function() {
// 	var html = function() {
// 		this.message = '<b>binding</b>';
// 	};

// 	var html = new html();
// 	ko.applyBindings(html);
// };

window.onload = function() {

	var viewModel = {
		message: ko.observable('ここを書き換える')
	};
	ko.applyBindings(viewModel);

	document.getElementById('button').onclick = function() {
		var t = ('viewModel.message=' + viewModel.message());
		array.array.push(t);
	}

	var array =  {
		array: ko.observableArray([
			'aaa',
			'bbb',
			'ccc'
		])
	};

	ko.applyBindings(array);

	document.getElementById('remove').onclick = function() {
		array.array.pop();
	};
};