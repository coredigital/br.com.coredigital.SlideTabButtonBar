# br.com.coredigital.SlideTabButtonBar
SlideTabButtonBar widget for Appcelerator Titanium


## Overview
This widget is pretty TabbedBar to iOS and Android. 

## Use it

* Add the widget to your *Alloy Code*:

	```xml
	<Widget id="slideTabButtonBar" src="br.com.coredigital.SlideTabButtonBar">
        <View>
            <ImageView image="/images/tabbedbar/tab-list.png"></ImageView>
        </View>
        <View>
            <ImageView image="/images/tabbedbar/tab-grid.png"></ImageView>
        </View>
        <View>
            <ImageView image="/images/tabbedbar/tab-map.png"></ImageView>
        </View>
    </Widget>
	```

* Listener the *CHANGE_INDEX event*:
	```javascript

	$.slideTabButtonBar.on('CHANGE_INDEX', function(evt){
	    if(evt.source.index == 0){
	        $.mapMode.visible = false;
	        $.gridMode.visible = false;
	        $.listMode.visible = true;
	    } else if (evt.source.index == 1) {
	        $.mapMode.visible = false;
	        $.listMode.visible = false;
	        $.gridMode.visible = true;
	    } else {
	        $.listMode.visible = false;
	        $.gridMode.visible = false;
	        $.mapMode.visible = true;
	    }
	});
	
	```
## License

<pre>
Copyright 2015 Ítalo Matos

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>


