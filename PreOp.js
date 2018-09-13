'use strict'
var app = angular.module('PreOp', ['ngMaterial','ngMessages','ngResource']);
app.controller('Qs',['$scope','$resource','$http', function($scope,$resource,$http) {
    $scope.firstname = "John";
    $scope.lastname = "Doe"; 
    
    console.log('running')
  
    $scope.intake = {}
    $scope.intake.items = [{question:'Any problems with anesthesia in past surgeries'},
                           
                          {question:'Did you parents, siblings or children have ANY problem with' },
                          {question:'Did you ever smoke cigarettes'},
                          {question: 'Did you use any drugs'},
                          {question : 'Do you drink more than 1 beer can a day/1-2 glasses of wine a day '},
                          {question: 'Can you walk two blocks or walk up 1 flight of steps without stopping'},
                          {question:'Do you use a scooter/walker'},
                          {question:'Do you need help getting to or from toiletter'},
                          {question:'Do you need help in preparing meals'},
                          {quesion:'Do you need help to shower or bather'},
                          {question:'Were you hospitalized in the past 3 months ?'},
                          {question:'Any New cought of wheezing in the last 2 weeks?'},
                          {question: 'Do you use an inhaler on a regular basis? (Asthma/COPD/Emphysema)'},
                          {question: 'Do you use CPAP/BiPAP at night'},
                          {question: 'Do you use home oxygen'},
                          {question: 'Do you have chest pain/chest tightness on exersion or at rest?'} ,
                          {question: 'History of an MI (heart attack)/CABG/cardiac catheterization with or without stenting.'},
                          {question: 'History of shortness of breath while reclining/waking  up with shortness of breath'},
                          {question: 'Do you have a history of known congestive heart failure'},
                          {question:'Do you have a histroy of irregular heart beat and palpitations'},
                          {question: 'History of a valvular disease/ known murmur'},
                          {question: 'Do you take an anti-acid'},
                          {question: 'Do you have a known history of liver disease '},
                          {question: 'Did you have variceal bleeding/ ascites drainage/ liver biospy performed. '},
                          {question: 'Do you have a history of stroke in the past 9 months'},
                          {question:  'Did you ever sustain a mini-stroke/ TIA that resolved? '},
                          {question: 'Are you taking prednison on a regular basis?'},
                          {question:'Are you dialysis dependent/ pre-dialysis.?'},
                          {question: 'Did you develop a clot in the past 3 months that required treated?'},
                          {question:'Do you suffer from Glaucoma'},
                          {question: 'Do you suffer from Anxiety/PTSD requiring medication'},
                          {question: 'Do you think this patient needs to be seen in person?'}
                        ] 
  
  
  $scope.formData = {}
  $scope.submitForm = function(){
    console.log($scope.formData)
    var test = $resource('/WritePatientInfo')
    test.save({firstName:$scope.formData.firstName,
                lastName:$scope.formData.lastName},function(data){
      console.log(data)
    })
  }
  //   $http({method:'GET',
  //         url:'/testing'}).then(function(){console.log('Yes')})
  // }
  // $scope.submitForm = function(){
  //   console.log($scope.formData)
  //   var patientInput = $resource('/WritePatientInfo')
  //   patientInput.save({firstName:$scope.formData.firstName,
  //                       lastName:$scope.formData.lastname},function(data){
  //                         $scope.formData.posting = data
  //                         console.log(data)
  //                       })
    
  // }
}]);