'use strict';

var HeadQuarters = function() {
	this.fieldOffices = [];

};
HeadQuarters.prototype.setFieldOffice = function(office) {
	this.fieldOffices.push(office);
};
module.exports = HeadQuarters;