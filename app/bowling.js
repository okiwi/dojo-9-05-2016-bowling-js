'use strict';
module.exports.Jeu = function() {

  return {
	  score: 0,
	  renverse: function(nombreDeQuilles) {
		  this.score += nombreDeQuilles;
	}
}
};
