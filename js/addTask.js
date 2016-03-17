(function(){
	'use strict'

	var myApp = angular.module('app', ['angularMoment']);
	 
	myApp.service('commentService', function () {
	    
	    var comments = [];
	    this.save = function (comment) {
	        comment.time = new Date();
	        comment.active = false;
	        comments.push(comment);
	    }
	 
	    
	 
	    //simply returns the comments list
	    this.list = function () {
	        return comments;
	    }
	});

	myApp.controller('commentController', ['commentService', function(cs) {
	 	var vm = this;
	 	vm.filterType = null;

	 	//get list of comment
	    vm.comments = cs.list();
	 
	 	//save comment
	    vm.savecomment = function () {
	    	
	        cs.save(vm.newcomment);
	        vm.newcomment = {};
	    }

	    vm.SetfilterType = function(data){
	    	if(typeof data == 'undefined'){
	    		vm.filterType = null;
	    	}
	    	else
	    	{
	    		vm.filterType = data;
	    	}
	    }
	}]);

	myApp.filter('filterdComment', function() {
  		return function(arr, type) {
  			if(type != null)
  			{
	  			var ret = [];

				for(var i = 0 ; i < arr.length; i++)
				{
					if(arr[i].active == type)
					{
						ret.push(arr[i]);
					}
				}
				return ret;
  			}
  			else
  			{
  				return arr;
  			}

  		};
});
	 
}());
