
PageElement.setting.h2 = (function(){ 
    var _ = new PageModel.Tag_();
    
	/* ---------- ---------- ---------- */
	
    _.pageInfo = new PageModel.Object_Info({ 
		id 		: "setting.h2", 
		name	: "タイトル",
		inputs	: ["INPUT"]
	});
	
	/* ---------- ---------- ---------- */

	_.getInitData = function(){
		var o = {};
		o.type = _.pageInfo.id;
		o.data = "タイトル <small>タイトル</small>";
		o.attr = { css:"default" }
		return o;
	}
	
	/* ---------- ---------- ---------- */
	
	_.getPreview = function(_o){
		var data  = _o.data;
		var attr = _o.attrs;
		var tag = ""
		if(data == "") {
			tag += '<span class="_no-input-data">テキストを入力...</span>';
		} else{
			tag += '<h2 class="_setting_h2">' + data.split("\n").join("<br>\n") + '</h2>'
		}
		return tag;
	}
	
	/* ---------- ---------- ---------- */

	_.getHTML = function(_o,_tab){
		return ""
	}
	
	/* ---------- ---------- ---------- */

    return _;
})();