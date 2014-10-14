var props = require("../properties/all.js");
var BaseObj = require("../BaseObj");
var obj = BaseObj.create("XWiki.StyleSheetExtension");

obj.addProp("cache", props.StaticList.create({
  "prettyName": "Caching policy",
  "values": "long|short|default|forbid"
}));
obj.addProp("code", props.TextArea.create({
  "prettyName": "Code"
}));
obj.addProp("name", props.XString.create({
  "prettyName": "Name",
  "size": "30"
}));
obj.addProp("parse", props.XBoolean.create({
  "prettyName": "Parse content"
}));
obj.addProp("use", props.StaticList.create({
  "prettyName": "Use this extension",
  "values": "currentPage=Always on this page|onDemand=On demand|always=Always on this wiki"
}));

module.exports.create = function () {
    return obj.instance();
};
