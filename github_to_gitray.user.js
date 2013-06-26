// ==UserScript==
// @name        github_to_gitray
// @namespace   github_to_gitray
// @include     https://github.com/*
// @include     http://github.com/*
// @version     1
// ==/UserScript==


$button = $('<button class="github_to_gitray-button">gitray</button>');
$button.bind('click', function() {
	var url = location.href.replace(/.*\:\/\/github.com/, '');
	url = 'http://gitray.com' + url;
	location.href = url;
});
$('.repo-label').before($button);
if ($('.octicon-lock').length > 0) {
	$('.github_to_gitray-button').attr('disabled', true);
}

