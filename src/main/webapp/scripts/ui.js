function getHeader(title){
	var html = "<div class='mdl-layout__header-row'>";
    // Title -->
	html += "<span id='aaa_header_title' class='mdl-layout-title'>"+title+"</span>";
	
	html += "<div class='mdl-layout-spacer'></div>";
    
	html += "<button id='aaa_header_logout' class='mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-color-text--accent-contrast'>";
	html += "<i class='material-icons'>exit_to_app</i>";
	html += "</button>";
	html += "<div class='mdl-tooltip' for='aaa_header_logout'>"+Text['logout']+"</div>";
	html += "</div>";

	//html += getDrawerMenu();
    return html;
}

function getFooter(){
	var html =  "<footer class='mdl-mini-footer'>";
	html += "<div class='mdl-mini-footer__left-section'>";
	html += "<div class='mdl-logo'>Title</div>";
	html += "<ul class='mdl-mini-footer__link-list'>";
	html += "<li><a href='coisa'>Help</a></li>";
	html += "<li><a href='#'>Privacy & Terms</a></li>";
	html += "</ul>";
	html += "</div>";
	
	html += "<div class='mdl-layout-spacer'></div>";
	
	html += "<button id='aaa_languages' class='mdl-button mdl-js-button mdl-button--icon aaa-languages'>";
	html += Text.getLanguageCode();
	html += "</button>";

	//TODO shorten this line
	html += "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 75.446' enable-background='new 0 0 100 75.446' xml:space='preserve'><g><path d='M19.198,44.002v-8.201h-8.575c-3.319,0-6.021-2.874-6.021-6.406V10.903c0-3.533,2.701-6.408,6.021-6.408h38.345   c3.319,0,6.019,2.875,6.019,6.408v18.492c0,3.532-2.7,6.406-6.019,6.406v4.496c5.797,0,10.514-4.891,10.514-10.902V10.903   C59.482,4.892,54.766,0,48.968,0H10.623C4.824,0,0.107,4.892,0.107,10.903v18.492c0,6.011,4.717,10.902,10.516,10.902h4.08v7.968   c0,1.223,0.789,2.332,1.963,2.764c0.334,0.123,0.677,0.184,1.014,0.184c0.821,0,1.609-0.354,2.165-1.01l8.369-9.905h8.353v-4.496   H26.128L19.198,44.002z'/><path d='M89.377,24.233h-25.96v4.496h25.96c3.319,0,6.021,2.875,6.021,6.408v18.489c0,3.533-2.701,6.408-6.021,6.408h-8.574v8.205   l-6.931-8.203H51.031c-3.318,0-6.019-2.875-6.019-6.408V35.137c0-3.533,2.701-6.408,6.019-6.408v-4.496   c-5.797,0-10.515,4.892-10.515,10.903v18.491c0,6.014,4.717,10.904,10.515,10.904h20.754l8.372,9.91   c0.555,0.652,1.342,1.004,2.161,1.004c0.337,0,0.68-0.059,1.014-0.182c1.176-0.432,1.967-1.543,1.967-2.768V64.53h4.078   c5.799,0,10.516-4.891,10.516-10.904V35.137C99.893,29.125,95.176,24.233,89.377,24.233z'/><path d='M26.532,7.437l-7.952,20.951h4.665l1.644-4.665h7.834l1.584,4.665h4.782L31.255,7.437H26.532z M26.093,20.29l2.729-7.688   h0.058l2.641,7.688H26.093z'/><path d='M60.12,49.114c0,2.297,1.468,3.787,3.862,3.787c2.876-0.061,5.721-1.887,6.647-2.711c0.926-0.826,3.42-3.693,4.521-5.963   c1.393,0.658,2.053,1.76,2.053,2.98c0,2.639-2.542,4.17-6.599,4.635l1.968,2.725c6.354-0.832,8.516-3.5,8.516-7.408   c0-3.301-2.077-5.305-4.74-6.183c0.049-0.242,0.138-0.495,0.188-0.74l-3.611-0.643c-0.024,0.365-0.097,0.432-0.168,0.798   c-1.297-0.074-2.738,0.121-3.202,0.219c0-0.66,0.024-2.421,0.049-3.055c3.006-0.122,5.962-0.365,8.699-0.781l-0.318-3.566   c-2.81,0.562-5.523,0.856-8.186,1.003c0.072-0.71,0.172-2.717,0.172-2.717l-3.813-0.291c-0.05,0.978-0.072,2.127-0.121,3.128   c-1.688,0.024-3.689,0.024-4.742,0l0.171,3.446h0.414c1.003,0,2.641-0.051,4.109-0.099c0,0.952,0.023,3.005,0.048,3.934   C62.589,43.051,60.12,45.717,60.12,49.114z M71.606,43.59c-0.514,1.025-1.124,1.957-1.808,2.736   c-0.1-0.807-0.148-1.637-0.196-2.516C69.87,43.762,70.945,43.59,71.606,43.59z M66.229,45.008c0.123,1.369,0.27,2.688,0.489,3.885   c-0.634,0.318-1.244,0.514-1.809,0.539c-1.223,0.049-1.223-0.732-1.223-1.076C63.687,47.059,64.689,45.864,66.229,45.008z'/></g></svg>";
	
	html += "<ul class='mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect' for='aaa_languages'>";
	
	for(language in Text.allLanguages()){
		html += "<li class='mdl-menu__item'";
		html += " onClick='swapLanguage(\""+Text.allLanguages()[language].code+"\")' >";
		html += "<button class='mdl-button mdl-js-button mdl-button--icon aaa-languages'>";
		html += Text.allLanguages()[language].code;
		html += "</button>";
		html += Text.allLanguages()[language].name;
		html += "</li>";
	}
	
	html += "</ul>";
	
	html += "</footer>";
	return html;
}

function getLoginCard(){
	var html = "<div class='mdl-cell mdl-cell--middle mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--hide-phone'></div>";
	html += "<div class='mdl-cell mdl-cell--middle mdl-cell--4-col'>";
	html +=  "<div id='login_box' class='mdl-card mdl-shadow--2dp'>";
	html += "<div class='mdl-card__title'" +
			" style='background: url(\"img/random/"+Math.floor(Math.random()*7)+".jpg\") center / cover;'"+
			">";
	html += "</div>";

	html += "<form onsubmit='doLogin();return false'>";
	
	html += "<div class='mdl-card__supporting-text'>";
	
	html += "<div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label aaa-login'>";
	html += "<input class='mdl-textfield__input' type='text' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' id='email' />";
	html += "<label class='mdl-textfield__label' for='email'>"+Text['email']+"</label>";
	html += "<span class='mdl-textfield__error'>"+Text['email_error']+"</span>";
	html += "</div>";
	
	html += "<div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label aaa-login'>";
	html += "<input class='mdl-textfield__input' type='password' id='password' />";
	html += "<label class='mdl-textfield__label' for='password'>"+Text['password']+"</label>";
	html += "</div>";
	
	html += "</div>";
	
	html += "<div class='mdl-card__actions mdl-card--border'>";
	html += "<a id='aaa_sign_up' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effec'>";
	html += "<i class='material-icons'>person_add</i>";
	html += "</a>";
	
	html += "<div class='mdl-tooltip' for='aaa_sign_up'>"+Text['sign_up']+"</div>"; //TODO fix that it is too low.
	
	
	html += "<button type='submit' id='login' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effec'>";
	html += Text['login']+" <i class='material-icons'>chevron_right</i>";
	html += "</button>";
	html += "</div>";
	html += "</form>";
	
	
	html += "</div>";
	html += "</div>";
	
	return html;
}

function doLogin(){
	if(User.processLogin()){
		$("#aaa_content").hide("slide", { direction: "right" }, 1000);
		$("#aaa_header_title").fadeOut(1000,function(){
			$("#aaa_header_title").html("Home");
		});
		$("#aaa_header_title").fadeIn(2000);
		buildHomePage();
	}
	else{
		alert("Error!");
	}
}

function buildLoginPage(){
	$("#aaa_header_title").html("Arkanos Advanced Archery");
	$("#aaa_header_title").fadeIn(2000);
	document.getElementById("aaa_content").innerHTML = getLoginCard();
	$("#aaa_content").show("slide", { direction: "left" }, 1000);
}

function buildHomePage(){
	if($("#aaa_header_title").html() == "") $("#aaa_header_title").html(Text['home']);
	$("#aaa_header_title").fadeIn(2000);
	$("#aaa_header_logout").fadeIn(3000);
	//TODO recheck compliance of the header/layout to see if this hack is necessary.
	//Check whether the structure is exactly like the example, not like the template code.
	if($(".mdl-layout__drawer-button").length <= 0){
		$('#aaa_header').bind('DOMNodeInserted', 
				function() {
					$(".mdl-layout__drawer-button").fadeIn(2000);
				}
		);
	}
	else{
		$(".mdl-layout__drawer-button").fadeIn(3000);
	}
}

function getAvatarHeader(){
	var html = "<header class='aaa-drawer-header mdl-layout__header'>";
	html += "<img src='/avatar' />";
	html += "<div class='aaa-options-dropdown'>";
	html += "<span>"+User['email']+"</span>";
	
	html += "<div class='mdl-layout-spacer'></div>";
	
	html += "<button id='aaa_user_options' class='mdl-button mdl-js-button mdl-button--icon'>";
	html += "<i class='material-icons'>arrow_drop_down</i>";
	html += "</button>";

	html += "<div class='mdl-tooltip' for='aaa_user_options'>"+Text['options']+"</div>"; //TODO fix that it is too low.
	
	html += "<ul class='mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect' for='aaa_user_options'>";
	html += "<li class='mdl-menu__item'><i class='material-icons'>settings</i> "+Text['settings']+"</li>";
	html += "<li class='mdl-menu__item'><i class='material-icons'>exit_to_app</i> "+Text['logout']+"</li>";
	html += "</ul>";
	
	
	html += "</div>";
	html += "</header>";
	return html;
}

function getDrawerMenu(){
	var html =  "<div id='aaa_drawer' class='mdl-layout__drawer'>";
	//document.getElementById("aaa_drawer").className = document.getElementById("aaa_drawer").className.replace(" is-visible","");
	html += getAvatarHeader();
	html += "<nav class='mdl-navigation'>";
	html += "<a class='mdl-navigation__link mdl-color-text--primary-dark' onClick=''><i class='material-icons'>home</i> "+Text['home']+"</a>";
	html += "<a class='mdl-navigation__link mdl-color-text--primary-dark' onClick=''><i class='material-icons'>assignment_ind</i> "+Text['manage_profile']+"</a>";
	html += "<a class='mdl-navigation__link mdl-color-text--primary-dark' onClick=''><i class='material-icons'>create</i> "+Text['manage_trainings']+"</a>";
	html += "<a class='mdl-navigation__link mdl-color-text--primary-dark' onClick=''><i class='material-icons'>history</i> "+Text['performance_history']+"</a>";
	html += "<a class='mdl-navigation__link mdl-color-text--primary-dark' onClick=''><i class='material-icons'>help_outline</i> "+Text['help']+"</a>";
	html += "</nav>";
	html += "</div>";
	
	return html;
}

function buildApplication(){
	initializeApplication();
	var html = "";
	// Always shows a header, even in smaller screens. -->
	html += "<div class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>";
	html += "<header id='aaa_header' class='mdl-layout__header'>";
	html += getHeader("");
	html += "</header>";
	html += getDrawerMenu();
	html += "<main class='mdl-layout__content'>";
	html += "<div id='aaa_content' class='page-content mdl-grid'>";
	html += "</div>";
	html += "</main>";
	html += getFooter();
	html += "</div>";
	document.body.innerHTML = html;
	$("#aaa_content").hide();

	if(User.isLoggedIn()){
		buildHomePage();
	}
	else{
		buildLoginPage();
	}
}

function initializeApplication(){
	var browser_language = navigator.languages[0] || navigator.userLanguage;
	User.processLogin();
	var language = browser_language;
	if(localStorage.getItem("aaa-last-language")){
		language = localStorage.getItem("aaa-last-language");
	}
	if(User.getLanguage()){
		language = User.getLanguage();
	}
	
	Text.loadLanguage(language.substring(0,2));
	
	window.onbeforeunload = function(){
		if(User.getLanguage()){
			localStorage.setItem("aaa-last-language",User.getLanguage());
		}
	}
	//document.body.innerHTML = "";
	//while(!Text.isLoaded());
}

function swapLanguage(code){
	User.setLanguage(code);
	location.reload();
}