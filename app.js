// JS Practice App.js

$(document).ready(function(){

	$('.btn').click(function(){
		$('.btn').removeClass('btn-success');
		$('.btn').addClass('btn-default');
		$(this).addClass('btn-success');
	});

	$('#details').click(function(){
		if( $('#details').hasClass('up') ){
			$('#details').removeClass('up').addClass('down');
			$('.credits').animate( { top: "-15px"}, 200);
			$('#menu').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
		} else {
			$('#details').removeClass('down').addClass('up');
			$('.credits').animate( { top: "-90px"}, 200);
			$('#menu').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
		}
		
	});

		

	function clear(){
		$('#substringStart, #substringEnd, #replaceStr, #replaceStrNew, #matchStr, #localeCompareStr2, #linkURL, #anchorName, #charCodeAtIndex, #indexOfString, #indexOfStart, #lastIndexOfString, #lastIndexOfStart, #splitLimit, #splitSeparator, #substrStart, #substrLength, #charAtIndex, #concatString, #searchString').val('');
	}

	function entryError(){
		$('.inputText').attr('placeholder', 'TYPE SOMETHING');
		$('.code, .yourCode').empty();
	}

	function result(x){ 				// Result function
		this.x = x;
		$('.result').empty().text(x);

		/*
		if (x.length > 24){
			var z = x.substr(0,24);
			$('.result').empty().text(z + '...');
			console.log(z);
		} else {
			$('.result').empty().text(x);	// Places result in DOM
		}
		*/

		//console.log('result ran');
		$('.redBox').removeClass('redBox');

	}

	var inputText = $('.inputText').val(),
		inputTextLength = inputText.length;
	if ( inputTextLength > 1 ){
		console.log('inputTextLength');
	}

	$('#charAt').click(function(){
		var str = $('.inputText').val(),
			index = $('#charAtIndex').val();
			x = str.charAt(index);
		if ( str.length === 0 || index.length === 0) {
			entryError();
			$('#charAtIndex').attr('placeholder', 'INDEX');
		}
		if ( (str.length >= 1) && (index.length >= 1) ){
			result(x);
			clear();
		}
	});

	$('#charCodeAt').click(function(){
		var str = $('.inputText').val(),
			index = $('#charCodeAtIndex').val(),
			x = str.charCodeAt(index);

		if (str.length === 0 || index.length === 0){
			entryError();
			$('#charCodeAtIndex').attr("placeholder", "INDEX");
		} else {
			result(x);
			clear();
		}
	});

	$('#concat').click(function(){
		var str = $('.inputText').val(),
			concatString = $('#concatString').val(),
			x = str.concat(concatString);

		if ( str.length === 0 || concatString.length === 0){
			entryError();
			$('#concatString').attr('placeholder', 'STRING');
		} else {
			result(x);
			clear();
		}
	});

	$('#endsWith').click(function(){
		var str = $('.inputText').val(),
			index = $('#endsWithString').val(),
			end = $('#endsWithPosition').val();

		if (str.length === 0 || index.length === 0){
			entryError();
			$('#endsWithString').attr('placeholder', 'STRING');
			$('#endsWithPosition').attr('placeholder', 'POSITION');
		} else if ( str.length > 0 && index.length > 0 && end.length > 0){
			var x = str.endsWith(index, end);
			result(x);
		} else if ( str.length > 0 && index.length ){
			var x = str.endsWith(index);
			result(x);
		}
	});

	$('#indexOf').click(function(){
		var str = $('.inputText').val(),
			string = $('#indexOfString').val(),
			string2 = string.toString(),
			start = $('#indexOfStart').val(),
			startNum = parseInt(start),
			x = str.indexOf(string2, startNum);

		if ( str.length === 0 || string.length === 0){
			entryError();
			$('#indexOfString').attr('placeholder', 'STRING');
			$('#indexOfStart').attr('placeholder', 'START (OPTIONAL)');
		} else {
			result(x);
			clear();
		}
	});

	$('#lastIndexOf').click(function(){
		var str = $('.inputText').val(),
			string = $('#lastIndexOfString').val(),
			string2 = string.toString(),
			start = $('#lastIndexOfStart').val(),
			startNum = parseInt(start),
			x = str.lastIndexOf(string2, startNum);

		if ( str.length === 0 || string.length === 0){
			entryError();
			$('#lastIndexOfString').attr('placeholder', 'STRING');
			$('#lastIndexOfStart').attr('placeholder', 'START (OPTIONAL)');
		} else {
			result(x);
			clear();
		}
	});

	$('#localeCompare').click(function(){
		var str = $('.inputText').val(),
			str2 = $('#localeCompareStr2').val(),
			x = str.localeCompare(str2);

		if ( str.length === 0 || str2.length === 0){
			entryError();
			$('#localeCompareStr2').attr('placeholder', 'START');
		} else {
			result(x);
			clear();
		}
	});

	$('#match').click(function(){
		var str = $('.inputText').val(),
			str2 = $('#matchStr').val(),
			x = str.match(str2);

		if ( str.length === 0 || str2.length === 0){
			entryError();
			$('#matchStr').attr('placeholder', 'STRING');
		} else {
			result(x);
			clear();
		}
	});

	$('#replace').click(function(){
		var str = $('.inputText').val(),
			str2 = $('#replaceStr').val(),
			str3 = $('#replaceStrNew').val(),
			x = str.replace(str2, str3);

		if ( str.length === 0 || str2.length === 0 || str3.length === 0){
			entryError();
			$('#replaceStr').attr('placeholder', 'STRING');
			$('#replaceStrNew').attr('placeholder', 'STRING');
		} else {
			result(x);
			clear();
		}
	});

	$('#search').click(function(){
		var str = $('.inputText').val(),
			searchString = $('#searchString').val(),
			x = str.search(searchString);

		if ( str.length === 0 || searchString.length === 0 ){
			entryError();
			$('#searchString').attr('placeholder', 'REGEXP');
		} else {
			result(x);
			clear();
		}
	});

	$('#slice').click(function(){
		var str = $('.inputText').val(),
			start = $('#sliceStart').val(),
			end = $('#sliceEnd').val(),
			x = str.slice(start,end);

		if (str.length === 0 || start.length === 0 || end.length === 0){
			entryError();
			$('#sliceStart').attr("placeholder", "BEGINSlice");
			$('#sliceEnd').attr("placeholder", "ENDSlice");
		} else {
			result(x);
			clear();
		}
	});

	$('#split').click(function(){
		var str = $('.inputText').val(),
			separator = $('#splitSeparator').val(),
			limit2 = $('#splitLimit').val(),
			limit = parseInt(limit2);
			
		if (str.length === 0){
			entryError();
		} else if (separator.length  > 0 && limit2.length > 0){
			var x = str.split(separator, limit2);
			result(x);
			clear();
		} else if(separator.length > 0){
			var x = str.split(separator);
			result(x);
			clear();
		} else {
			var x = str.split();
			result(x);
			clear();
		}
	});

	$('#substr').click(function(){
		var str = $('.inputText').val(),
			start = $('#substrStart').val(),
			length = $('#substrLength').val(),
		    x = str.substr(start,length);

		if (str.length === 0 || start.length === 0 || length.length === 0){
			$('#substrStart').attr("placeholder", "START");
			$('#substrLength').attr("placeholder", "LENGTH");
			entryError();
		} 
		if ( (str.length >= 1) && (start.length >= 1) && (length.length >= 1) ) {
			result(x);
			clear();
		}
	});

	$('#substring').click(function(){
		var str = $('.inputText').val(),
			start = $('#substringStart').val(),
			end = $('#substringEnd').val(),
		    x = str.substring(start,end);

		if (str.length === 0 || start.length === 0 || end.length === 0){
			$('#substringStart').attr("placeholder", "START");
			$('#substringEnd').attr("placeholder", "LENGTH");
			entryError();
		} 
		if ( (str.length >= 1) && (start.length >= 1) && (end.length >= 1) ) {
			result(x);
			clear();
		}
	});

	$('#toLocaleLowerCase').click(function(){
		var str = $('.inputText').val(),
			x = str.toLocaleLowerCase();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#toLocaleUpperCase').click(function(){
		var str = $('.inputText').val(),
			x = str.toLocaleUpperCase();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#toUpperCase').click(function(){
		var str = $('.inputText').val(),
			x = str.toUpperCase();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#toLowerCase').click(function(){
		var str = $('.inputText').val(),
			x = str.toLowerCase();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#toString').click(function(){
		var str = $('.inputText').val(),
			x = str.toString();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#trim').click(function(){
		var str = $('.inputText').val(),
			x = str.trim();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	$('#valueOf').click(function(){
		var str = $('.inputText').val(),
			x = str.valueOf();

		if ( str.length === 0 ){
			entryError();
		} else {
			result(x);
			clear();
		}
	});

	// String HTML Wrapper Methods ---------------------------------------------

	$('#anchor').click(function(){
		var str = $('.inputText').val(),
			name = $('#anchorName').val(),
			x = str.anchor(name);

		if (str.length === 0 || name.length === 0){
			entryError();
			$('#anchorName').attr("placeholder", "NAME");
		} else {
			result(x);
			clear();
		}
	});

	$('#link').click(function(){
		var str = $('.inputText').val(),
			url = $('#linkURL').val(),
			x = str.link(url);

		if (str.length === 0 || url.length === 0 ){
			entryError();
			$('#linkURL').attr('placeholder', 'URL');
		} else {
			result(x);
			clear();
		}
	});

});