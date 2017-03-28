var generateApp=angular.module('generateApp',[]);
generateApp.controller('generateCtrl', ['$scope', function($scope){
	$scope.hello="hello";
	$scope.menuStatus=false;

$scope.parameterList = [
    {id:"one", text:'Allow Uppercase?', done:true},
    {id:"two", text:'Allow Lowercase?', done:false},
    {id:"three", text:'Allow Special Characters?', done:false},
    {id: "four", text:'Allow Numbers?', done:true},
    ];

	$scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };
  
  $scope.footerList=[
	{title:'Services',textItem1:'Password Generator', textItem2:'Word Counter', textItem2:'Letter counter'},
    {title:'Products',textItem1:'PasGen', textItem2:'WrdCnt', textItem2:'LtrCnt'},
    {title:'Branches',textItem1:'India', textItem2:'HQ USA', textItem2:'Italy'},
    {title:'Feedback',textItem1:'psgn@pasgen.com'},
  ];
  
  $scope.anyNum="any";
  
  $scope.GetValue = function(value){
	//alert($scope.lengthPwd);
  }
  
   $scope.valuesArr = [];
   $scope.getPassword = function(){
	alert($scope.valuesArr);
	var pwdLength = $scope.lengthPwd;
	var upperLength=$scope.valuesArr[0];
	var lowerLength=$scope.valuesArr[1];
	var specialLength = $scope.valuesArr[2];
	var numberLength= $scope.valuesArr[3];
	var upperFlag =(JSON.stringify($scope.parameterList[0].done));
	var lowerFlag =(JSON.stringify($scope.parameterList[1].done));
	var specialFlag =(JSON.stringify($scope.parameterList[2].done));
	var numberFlag =(JSON.stringify($scope.parameterList[3].done));
	$scope.pwd_text="";
	
   var totalLength = (upperLength+lowerLength+specialLength+numberLength);
  


switch(upperFlag){
	case "true" : 
		var uppertxt="";
		
		$scope.lengthPwd = $scope.lengthPwd - upperLength;
		$scope.psbl_upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			for(var i=0; i < upperLength; i++ ){
			uppertxt += $scope.psbl_upc.charAt(Math.floor(Math.random() * upperLength));
			}
		$scope.pwd_text = $scope.pwd_text+ uppertxt;
		//alert($scope.pwd_text+" "+"new pwdLength"+pwdLength);
		break;
	
	case "false" : upperLength = 0;
	break;
}
	switch(lowerFlag){
	case "true" : 
		var lowertxt="";
		
		$scope.lengthPwd = $scope.lengthPwd - lowerLength;
		$scope.psbl_lwrc = "abcdefghijklmnopqrstuvwxyz";
		for(var i=0; i < lowerLength; i++ ){
			lowertxt += $scope.psbl_lwrc.charAt(Math.floor(Math.random() * lowerLength));
			}
		$scope.pwd_text = $scope.pwd_text+ lowertxt;
		//alert($scope.pwd_text+" "+"new pwdLength"+pwdLength);
	break;
	case "false" : lowerLength = 0;
	break;
}
switch(specialFlag){
	case "true" : 
	var spltxt="";
	
	$scope.lengthPwd = $scope.lengthPwd - specialLength;
	$scope.psbl_spl="!@#$%^&*";
	for(var i=0; i < specialLength; i++ ){
			spltxt += $scope.psbl_spl.charAt(Math.floor(Math.random() * specialLength));
			}
		$scope.pwd_text = $scope.pwd_text+ spltxt;
		//alert($scope.pwd_text+" "+"new pwdLength"+pwdLength);
	
	break;
	case "false" : specialLength = 0;
	break;
}
switch(numberFlag){
	case "true" : 
	var numtxt="";
	numberLength = $scope.valuesArr[3];
	$scope.lengthPwd = $scope.lengthPwd - numberLength;
	$scope.psbl_num="0123456789";
	for(var i=0; i < numberLength; i++ ){
			numtxt += $scope.psbl_num.charAt(Math.floor(Math.random() * numberLength));
			}
		$scope.pwd_text = $scope.pwd_text+ numtxt;
		//alert($scope.pwd_text+" "+"new pwdLength"+pwdLength);
	break;
	case "false" : numberLength = 0;
	break;
}
}

$scope.shuffle=function(){
var shuffled = $scope.pwd_text.split('').sort(function(){return 0.5-Math.random()}).join('');
$scope.pwd_text=shuffled;
}
}])


/* if(pwdLength < totalLength){alert("Please increase the length of your password or decrease the individual specifications length");} else {
*/