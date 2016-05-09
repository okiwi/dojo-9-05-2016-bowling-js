'use strict';
module.exports.Jeu = function() {
	var scores = [];
	return {
		score: 0,
		renverse: function(nombreDeQuilles) {			
			scores.push(nombreDeQuilles);
			if(scores.length >= 4 && scores.length % 2 === 0) {
				this.score = 20;
			}
			if (this.score + nombreDeQuilles === 10){
				this.score = '/';
			}else{
				this.score += nombreDeQuilles;
			}
		}
	}
};
