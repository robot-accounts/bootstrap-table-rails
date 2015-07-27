/*
* bootstrap-table - v1.8.1 - 2015-05-29
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2015 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b=!1,c=function(a){var b=arguments,c=!0,d=1;return a=a.replace(/%s/g,function(){var a=b[d++];return"undefined"==typeof a?(c=!1,""):a}),c?a:""},d=function(b,c,d,e){if("string"==typeof c){var f=c.split(".");f.length>1?(c=window,a.each(f,function(a,b){c=c[b]})):c=window[c]}return"object"==typeof c?c:"function"==typeof c?c.apply(b,d):e},e=function(b,d,e,g){if(a("#avdSearchModal").hasClass("modal"))a("#avdSearchModal").modal();else{var h='<div id="avdSearchModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">';h+='<div class="modal-dialog modal-xs">',h+=' <div class="modal-content">',h+='  <div class="modal-header">',h+='   <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>',h+=c('   <h4 class="modal-title">%s</h4>',d),h+="  </div>",h+='  <div class="modal-body modal-body-custom">',h+='   <div class="container-fluid" id="avdSearchModalContent" style="padding-right: 0px;padding-left: 0px;" >',h+="   </div>",h+="  </div>",h+="  </div>",h+=" </div>",h+="</div>",a("body").append(a(h));var i=f(b,e,g),j=0;a("#avdSearchModalContent").append(i.join("")),a("#"+g.options.idForm).off("keyup blur","input").on("keyup blur","input",function(a){clearTimeout(j),j=setTimeout(function(){g.onColumnAdvancedSearch(a)},g.options.searchTimeOut)}),a("#btnCloseAvd").click(function(){a("#avdSearchModal").modal("hide")}),a("#avdSearchModal").modal()}},f=function(a,b,d){var e=[];e.push(c('<form class="form-horizontal" id="%s" action="%s" >',d.options.idForm,d.options.actionForm));for(var f in a){var g=a[f];!g.checkbox&&g.visible&&g.searchable&&(e.push('<div class="form-group">'),e.push(c('<label class="col-sm-4 control-label">%s</label>',g.title)),e.push('<div class="col-sm-6">'),e.push(c('<input type="text" class="form-control input-md" name="%s" placeholder="%s" id="%s">',g.field,g.title,g.field)),e.push("</div>"),e.push("</div>"))}return e.push('<div class="form-group">'),e.push('<div class="col-sm-offset-9 col-sm-3">'),e.push(c('<button type="button" id="btnCloseAvd" class="btn btn-default" >%s</button>',b)),e.push("</div>"),e.push("</div>"),e.push("</form>"),e};a.extend(a.fn.bootstrapTable.defaults,{advancedSearch:!1,idForm:"advancedSearch",actionForm:"",idTable:void 0,onColumnAdvancedSearch:function(){return!1}}),a.extend(a.fn.bootstrapTable.defaults.icons,{advancedSearchIcon:"glyphicon-chevron-down"}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"column-advanced-search.bs.table":"onColumnAdvancedSearch"}),a.extend(a.fn.bootstrapTable.locales,{formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"}}),a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales);var g=a.fn.bootstrapTable.Constructor,h=g.prototype.initToolbar,i=g.prototype.load,j=g.prototype.initSearch;g.prototype.initToolbar=function(){if(h.apply(this,Array.prototype.slice.apply(arguments)),this.options.search&&this.options.advancedSearch){var a=this,b=[];b.push(c('<div class="columns columns-%s btn-group pull-%s" role="group">',this.options.buttonsAlign,this.options.buttonsAlign)),b.push(c('<button class="btn btn-default%s" type="button" name="advancedSearch" title="%s">',void 0===a.options.iconSize?"":" btn-"+a.options.iconSize,a.options.formatAdvancedSearch())),b.push(c('<i class="%s %s"></i>',a.options.iconsPrefix,a.options.icons.advancedSearchIcon)),b.push("</button></div>"),a.$toolbar.prepend(b.join("")),a.$toolbar.find('button[name="advancedSearch"]').off("click").on("click",function(){e(a.options.columns,a.options.formatAdvancedSearch(),a.options.formatAdvancedCloseButton(),a)})}},g.prototype.load=function(){if(i.apply(this,Array.prototype.slice.apply(arguments)),"undefined"!=typeof this.options.idTable&&!b){var c=parseInt(a(".bootstrap-table").height());c+=10,a("#"+this.options.idTable).bootstrapTable("resetView",{height:c}),b=!0}},g.prototype.initSearch=function(){j.apply(this,Array.prototype.slice.apply(arguments));var b=this,c=a.isEmptyObject(this.filterColumnsPartial)?null:this.filterColumnsPartial;this.data=c?a.grep(this.data,function(e,f){for(var g in c){var h=c[g].toLowerCase(),i=e[g];if(i=d(b.header,b.header.formatters[a.inArray(g,b.header.fields)],[i,e,f],i),-1===a.inArray(g,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||-1===(i+"").toLowerCase().indexOf(h))return!1}return!0}):this.data},g.prototype.onColumnAdvancedSearch=function(b){var c=a.trim(a(b.currentTarget).val()),d=a(b.currentTarget)[0].id;a.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),c?this.filterColumnsPartial[d]=c:delete this.filterColumnsPartial[d],this.options.pageNumber=1,this.onSearch(b),this.updatePagination(),this.trigger("column-advanced-search",d,c)}}(jQuery);