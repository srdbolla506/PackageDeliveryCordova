
//let submitButton = document.getElementById('loginButtonSubmit');
//submitButton.addEventListener('click', onLoginSubmitClick, false);
//
//
//function onLoginSubmitClick() {
//	//  alert('Helloooooooooo');
//	sqliteStorageService().initialize();
//
//
//
//}
//
//function currentUser(username) {
//
//}
//
//function

function onLoginClick() {
	createTables();
}





	// alert('Welcome Divya!!!!!!!');

	// let sqliteStorgate = (new SQLiteStorageDBService());
	// sqliteStorgate.initializeOnDeviceReady();

	// let sqliteStorgate = sQLiteStorageDBService();
	// sqliteStorgate.initializeOnDeviceReady();

	// let sqliteStorage = sqliteStorageService();
	// sqliteStorage.initialize();

	// alert('db value ' + sqliteStorgate.db);
	
// }


// function login_page() {
// 	return {
// 		initialize: function() {
// 			this.bindEvents()
// 		},

// 		bindEvents: function() {
// 			document.getElementById('loginButtonSubmit').addEventListener('click', onLoginSubmitClick, false);
// 		},

// 		onLoginSubmitClick: function() {
// 			alert('Wohooooooooooooooo Hello I am Divya');
// 		}
// 	}
// }

// login_page().initialize();








// // document.create





// var login_page = function() {

	// var loginPage = {
	// 	initialize: function() {
	// 		document.getElementById('loginButtonSubmit').addEventListener('click', onLoginSubmitClick, false);
	// 	// },

	// 	function onLoginSubmitClick() {
	// 		alert('Welcome Divya!!!!!!!');
	// 	}
	// // }
	// loginPage.initialize();
	// return loginPage;
// }

// login_page().loginPage;




	// function loginPage(submitButton) {
	// 	return {
	// 		initialize: function() {
	// 			submitButton.addEventListener('click', onLoginSubmitClick, false);
	// 		},

	// 		onLoginSubmitClick: function() {
	// 			alert('Hurrayyyyyyyy Hello Helooo');
	// 		}
	// 	}
	// }



		// this.submitButton = submitButton;
		// this.initialize = function() {
		// 	this.submitButton.addEventListener('click', )
		// }




	// submitButton: document.getElementById('loginButtonSubmit'),
	// initialize: function() {
	// 	this.submitButton.addEventListener('click', onLoginSubmitClick, false);
	// },

	// onLoginSubmitClick: function() {
	// 	alert('Ahooooooooo hjsdhjh');
	// }

// }

// loginPageVariable.initialize();



// // function initialize() {
// // 	// submitButton: document.getElementById('loginButtonSubmit'),
// // 	// initialize: function() {
		
// // 	// }
// // }







// // login_page = function() {
// 	var loginpage = {
// 		self = null,
// 		initialize: function() {
// 			self = this;
			// new SQLiteStorageDBService().done(function(service) {
			// 	self.storageService = service;
			// 	self.storageService.checkUsersAndInsert();
			// 	self.bindEvents();
			// });
// 			self.alert('Welcomeeeebjcbejbvjbvebvbvnevnevnejvnjvnkevnekvnk');
// 		},

// 		bindEvents: function() {
// 			let submitButton = document.getElementById('loginButtonSubmit');
// 			submitButton.addEventListener('click', self.onLoginSubmitClick(), false);
// 		},

// 		onLoginSubmitClick: function() {
// 			let username = document.getElementById('username-text-field');
// 			let password = document.getElementById('password-text-field');

// 			let users = self.storageService.getUsers('SELECT username, password, firstName, lastName, email, role, taskIds FROM USER');
// 			var credentialsMatched = false;
// 			for(var user in users) {
// 				if((user.username == username) && (username.password == password)) {
// 					credentialsMatched = true;
// 					break;
// 				}
// 			}
// 			if(credentialsMatched == true) {
// 				alert(' Login Successful');
// 			} else {
// 				alert('Login unsuccessful');
// 			}
// 		}
// 	}

// 	loginpage.initialize();
// 	// return loginpage;
// // }

// // login_page();


