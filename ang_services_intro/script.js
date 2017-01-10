var app = angular.module("myTunes",[]);

app.controller("itunesController", function($http, $log){
    var self = this;
        this.create_url = function() {
                   return 'https://itunes.apple.com/search?term=' + self.artist + '&callback=JSON_CALLBACK';
                };
    this.getItunesData = function(){
        $http({
            url: self.create_url(),
            method:'JSONP',
            cache: false
        })
            .then (
                function(response){
                    $log.info(response);
                    self.data = response.data.results;
                },
                function(response){
                    $log.warn(response);
                    self.data = response.data || "Failed to load";
                });

    };
});