/*
* bootstrap-table - v1.8.1 - 2015-05-29
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2015 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{editable:!0,onEditableInit:function(){return!1},onEditableSave:function(){return!1}}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"editable-init.bs.table":"onEditableInit","editable-save.bs.table":"onEditableSave"});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.initTable,d=b.prototype.initBody;b.prototype.initTable=function(){var b=this;c.apply(this,Array.prototype.slice.apply(arguments)),this.options.editable&&a.each(this.options.columns,function(a,c){if(c.editable){var d=c.formatter;c.formatter=function(a,e,f){var g=d?d(a,e,f):a;return['<a href="javascript:void(0)"',' data-name="'+c.field+'"',' data-pk="'+e[b.options.idField]+'"',' data-value="'+g+'"',"></a>"].join("")}}})},b.prototype.initBody=function(){var b=this;d.apply(this,Array.prototype.slice.apply(arguments)),this.options.editable&&(a.each(this.options.columns,function(c,d){d.editable&&b.$body.find('a[data-name="'+d.field+'"]').editable(d.editable).off("save").on("save",function(c,e){var f=b.getData(),g=a(this).parents("tr[data-index]").data("index"),h=f[g],i=h[d.field];h[d.field]=e.submitValue,b.trigger("editable-save",d.field,h,i,a(this))})}),this.trigger("editable-init"))}}(jQuery);