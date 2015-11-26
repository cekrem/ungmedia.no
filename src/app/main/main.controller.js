'use strict';

class MainCtrl {
  constructor ($http, $sce) {
    this.content = {};
    this.loaded = false;
    
    $http.get('https://ungmedia.firebaseio.com/content/.json')
      .then(res => {
        console.log('Content loaded!');
        
        this.loaded = true;
        let data = res.data;
        
        this.content.hvem = $sce.trustAsHtml(data.hvem);
        this.content.hva = $sce.trustAsHtml(data.hva);
        this.content.hvor = $sce.trustAsHtml(data.hvor);
        this.content.hvordan = $sce.trustAsHtml(data.hvordan);
      })
  }
}

MainCtrl.$inject = ['$http', '$sce'];

export default MainCtrl;
