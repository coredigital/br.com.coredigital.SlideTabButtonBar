(function constructor(args){
	var currentIndex = 0;
	//$.slideTabButtonBar = _.extend($.slideTabButtonBar, args);
	
	// refactory it: this is need to be a property of widget
	var hasOpacityEffect = true;

	//refactory it
	$.slideTabButtonBar.backgroundColor = args.backgroundColor;
	$.slideTabButtonBar.height = args.height;
	$.slideBar.backgroundColor = args.slideBarColor;
	$.viewSlideFocus.backgroundColor = args.selectItemColor;

	if (args.slideBarheight) {
		$.slideBar.height = args.slideBarheight;
	}

	$.buttonArea.removeAllChildren();
	var buttonWidth = OS_ANDROID ? Math.round(px2dpi(Ti.Platform.displayCaps.platformWidth) / args.children.length) :  Math.round(Ti.Platform.displayCaps.platformWidth / args.children.length);
	_.each(args.children, function(view, index){
		//Refactory this calc
		view.width = ((100 - 1) / args.children.length) + '%';
		//Refactory this calc
		$.viewSlideFocus.width = ((100) / args.children.length) + '%';
		view.height = Ti.UI.FILL;
		view.index = index;
		if (hasOpacityEffect == true) { 
			if (view.index == 0) {
				view.opacity = 1;
			} else {
				view.opacity = 0.5;
			}
		}
		view.addEventListener('click', function(e) {
			if (currentIndex != view.index) {
				if (hasOpacityEffect == true) {
					args.children[currentIndex].opacity = 0.5;
					view.opacity = 1;
				}
				var animateBar = Ti.UI.createAnimation({
					left : view.index * buttonWidth,
					duration : 350
				});
				$.viewSlideFocus.animate(animateBar);
				$.trigger('CHANGE_INDEX', {
					source: view
				});
				currentIndex = view.index;	
			} 
		});
		$.buttonArea.add(view);

		if (index < args.children.length - 1) {
			var btnBorder = Ti.UI.createView({
				backgroundColor : args.separatedColor,
				width : 1,
				top : 0,
				bottom : 0,
				right : 0
			});
			$.buttonArea.add(btnBorder);
		}
	});

	function px2dpi(px) {
		return Math.ceil(px / (Titanium.Platform.displayCaps.dpi / 160));
	};

	function dpi2px(dpi) {
	    return Math.ceil(dpi * (Titanium.Platform.displayCaps.dpi / 160));
	};
})(arguments[0] || {});

