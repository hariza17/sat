var servicesModule = angular.module('AppServices');
servicesModule.factory('intervencionesService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAllEstrategias: function () {
            return $http.get(this.apiUrl + 'estrategia/');
        },
        getEstrategiaById: function (estrategiaId) {
            return $http.get(this.apiUrl + 'estrategia/' + estrategiaId);
        },
        createIntervencion: function (intervencion) {
            return $http.post(this.apiUrl + 'intervencion/', intervencion);
        },
        updateEstrategia: function (id, estrategia) {
            console.log(estrategia);
            return $http.put(this.apiUrl + 'estrategia/' + id, estrategia);
        },
        deleteEstrategia: function (estrategiaId) {
            return $http.delete(this.apiUrl + 'estrategia/' + estrategiaId);
        }

    };
}]);
