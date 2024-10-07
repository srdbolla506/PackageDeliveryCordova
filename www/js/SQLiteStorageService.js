
// //function SQLiteStorageService() {
// //    var sqliteService {}
// //}

// const { exec } = require('../../platforms/android/app/src/main/assets/www/cordova-js-src/android/promptbasednativeapi');

// const usersJsonData = require('../resources/users.json');


function createTables() {
    let sqlStatement = "BEGIN TRANSACTION; \
    CREATE TABLE IF NOT EXISTS User ( " + 
            UserEnum.id + " INTEGER PRIMARY KEY NOT NULL," +
            UserEnum.email + " TEXT UNIQUE NOT NULL, " +
            UserEnum.firstName + " TEXT NOT NULL, " +
            UserEnum.lastName + " TEXT NOT NULL, " +
            UserEnum.password + " TEXT, " +
            UserEnum.user_name + " TEXT NOT NULL, "
            UserEnum.role + " TEXT \
        ); \
        CREATE TABLE IF NOT EXISTS Task ( " +
            TaskEnum.id + " INTEGER PRIMARY KEY NOT NULL, " +
            TaskEnum.barcodeImage + " BLOB NOT NULL, " +
            TaskEnum.taskName + " TEXT, " +
            TaskEnum.scheduledDate + " TEXT, " +
            TaskEnum.state + " TEXT, " +
            TaskEnum.user_id + " INTEGER, \
            FOREIGN KEY(" + TaskEnum.user_id + ") REFERENCES User(" + UserEnum.id + ") \
                ON UPDATE SET NULL \
                ON DELETE SET NULL \
        ); \
        CREATE TABLE IF NOT EXISTS Location ( " +
            LocationEnum.id + " INTEGER PRIMARY KEY NOT NULL, " +
            LocationEnum.date + " TEXT, " +
            LocationEnum.latitude + " FLOAT, " +
            LocationEnum.longitude + " FLOAT, " +
            LocationEnum.task_id + " INTEGER, \
            FOREIGN KEY(" + LocationEnum.task_id + ") REFERENCES Task(" + TaskEnum.id + ") \
                ON UPDATE SET NULL \
                ON DELETE SET NULL \
        ); \
        CREATE TABLE IF NOT EXISTS Log ( " +
            LogEnum.id + " INTEGER PRIMARY KEY NOT NULL, " + 
            LogEnum.datetime + " TEXT, " +
            LogEnum.event_type + " TEXT, " +
            LogEnum.extra_info + " TEXT, " + 
            LogEnum.user_name + " TEXT NOT NULL \
        ); \
        PRAGMA user_version = 1; \
        COMMIT TRANSACTION;";

        cordova.plugins.openDatabase("/Users/sridivyabolla/Documents/CoreDova/DB/SqlitePlugin.sqlite", function(_) {
            cordova.plugins.executeSQLStatement(sqlStatement, function(_) {
                assignUsersData(function(success) {
                    alert(success);
                });
                // let usersJson = JSON.parse(usersJsonData);

                // let sqlStatements = convertJsonToUserObjects();
                // let usersArray = convertJsonToUserObjects();

                //     cordova.plugins.executeSQLStatement(sqlStatements, function(executeSQLSuccess) {
                        // alert(sqlStatements);
                    // }, function(executeSQLSuccessError) {
                    //     alert(executeSQLSuccessError);
                    // });
            }, function(executeSQLSuccessError) {
                alert(executeSQLSuccessError);
            });
        }, function(error) {
            alert(error);
        });
}

function loadUsersDataToSqliteStatement() {
    let usersArray = convertJsonToUserObjects();

        var sqlStatements = "BEGIN TRANSACTION; ";
        for (user in usersArray) {
            let userStatement = "INSERT INTO USER (" + User.id + "," + 
                                                UserEnum.email + "," + 
                                                UserEnum.firstName + "," + 
                                                UserEnum.lastName + "," +
                                                UserEnum.user_name + "," +
                                                UserEnum.password + "," +
                                                UserEnum.role + ") VALUES(" +
    
                                                user.id + "," +
                                                user.email + "," + 
                                                user.firstName + "," + 
                                                user.lastName + "," +
                                                user.user_name + "," +
                                                user.password + "," +
                                                user.role + ");";
                sqlStatements += userStatement;
    
            for (taskValue in user.tasks) {
                let taskStatement = "INSERT INTO TASK (" + TaskEnum.id + "," +
                                                        TaskEnum.taskName + "," +
                                                        TaskEnum.scheduledDate + "," +
                                                        TaskEnum.state + "," +
                                                        TaskEnum.barcodeImage + "," +
                                                        TaskEnum.user_id + ") VALUES(" +
    
                                                        taskValue.id + "," + 
                                                        taskValue.taskName + "," + 
                                                        taskValue.scheduledDate + "," + 
                                                        taskValue.state + "," +
                                                        taskValue.barcodeImage + "," +
                                                        taskValue.user_id + ");";
    
                sqlStatements += taskStatement;
            }
        }
        sqlStatements += " COMMIT TRANSACTION;";

        return sqlStatements;
}

// function createTablesAndInsertIntoTables(sqlStatement, success, error) {
//     cordova.plugins.openDatabase("mmm", function(result) {
//         // alert(result);
//         cordova.plugins.executeSQLStatement(sqlStatement, function(executeSQLSuccess) {
//             loadUsersDataToSqlite(function (successMessage) {
//                 success(successMessage);
//             }, function (errorMessage) {
//                 error(errorMessage);
//             });
//         }, function(executeSQLSuccessError) {
//             error(executeSQLSuccessError);
//         });
//     }, function(error) {
//         error(error, false);
//     });
// }

var usersParsedData = []

function assignUsersData(success) {
    fetch("../resources/users.json")
        .then((response) => response.json())
        .then((data) => {
            success(data);
            // console.log(data);
          // assignUsersData(data);
        //   alert(data);
        //   usersParsedData = data;
        });
}

function convertJsonToUserObjects() {
    var usersArray = [];
    for (singleValue in usersParsedData) {
        let user = class_objects().user(singleValue);
        usersArray.push(user);
    }
    return usersArray;
}








//var exec = require('cordova/exec');
//
//exports.openDatabase = function (arg0, arg1, success, error) {
//
//    exec(success, error, 'SqlitePlugin', 'openDB', [arg0, arg1]);
//};

//
//cordova.plugins.getSubtractResult(first, second, function(result) {
////        document.getElementById('resultValue').value = parseInt(result);
////        document.getElementById('num1').value = 0;
////        document.getElementById('num2').value = 0;
//    setNull();
//});

//function createTables() {
////    var sqlTable: SQLTable = SQLTable()
////
////    var db = cordova.plugins.
//}

//
//
//function SQLiteStorageService() {
//        var sqliteService = {};
//        var db = window.openDatabase('srdbolla', '1.0', 'Database example', 2 * 1024 * 1024);
//
//
//   //     return {
//   //         sqliteService: this,
//
//   //         initializeOnDeviceReady: function() {
//   //             // alert('Im inside sqliteService');
//
//   //             // db = window.sqlitePlugin.openDatabase({
//   //             //     name: 'srdbolla.db',
////                     location: '/Users/sridivyabolla/Documents/CoreDova'
//                 });
//}





// alert('db value ' + SQLitePlugin.openDatabase('srdbolla', '1.0', 'description', 1));



// 			alert('db value' + openDatabase('../../db/test.db', '1.0', 'description', 1000));

//function sqliteStorageService() {
//	return {
//		initialize: function() {
//			// alert('Hellooooooooooooooooo');
//			// let db = window.openDatabase('srdbolla', '1.0', 'Database example', 1000);
//
//			// db = sqlitePlugin.openDatabase({
//			// 	name: 'srdbolla.db',
//			// 	location: '/Users/sridivyabolla/Documents/CoreDova'
//			// });
//			// alert('db value ' + window.openDatabase('srdbolla', '1.0', 'description', 1));
//			// var db = window.sqlitePlugin.openDatabase({name: "test", location: "../../db/"});
//			alert('db value' + window.sqlitePlugin)
//
//			// SQLitePlugin().openDatabase('../../db/test.db', '1.0', 'description', 1000));
//		}
//	};
//}



// SQLiteStorageService = function() {
// 	var service = {};
// 	var db = window.sqlitePlugin ? window.sqlitePlugin.openDatabase({name: "packageDelivery", location: "default"}) : window.openDatabase("packageDelivery", "1.0", "BD para FactAV", 1000000);

// 	service.initialize = function() {
// 		var deferred = $.Deferred();
// 		db.transaction(function(req) {
// 			tx.executeSql(
// 				'CREATE TABLE IF NOT EXISTS users ' + 
// 				'(id integer primary key, firstName text, lastName text, username text, password text, email text)'
// 			,[], function(req, res) {
// 				req.executeSql('DELETE FROM users', [], function(req, res) {
// 					deferred.resolve(service);
// 				}, function(req, res) {
// 					deferred.reject('Error initializing database');
// 				});
// 			}, function(req, res) {
// 				deferred.reject('Error initializing database');
// 			});
// 		});
// 		return deferred.promise();
// 	}

// 	service.getProjects = function() {
// 		var deferred = $.Deferred();

// 		db.transaction(function(tx) {
// 			tx.executeSql('SELECT * FROM users', [], function(tx, res) {
// 				var users = [];

// 				for(var i=0; i<res.rows.length; i++) {
// 					var user = { firstName: res.rows.item(i).firstName, 
// 									lastName: res.rows.item(i).lastName,
// 									username: res.rows.item(i).username, 
// 									password: res.rows.item(i).password,
// 									email: res.rows.item(i).email
// 								};
// 					users.push(user);

// 				}
// 				deferred.resolve(users);
// 			}, function(e) {
// 				deferred.reject(e);
// 			});
// 			return deferred.promise();
// 		})
// 	}


// 	service.addUser = function(firstName, lastName, username password, email) {
// 		var deferred = $.Deferred();

// 		db.transaction(function(tx) {
// 			tx.executeSql('INSERT INTO users (firstName, lastName, username, password, email) VALUES (?,?,?,?,?)',
// 				[firstName, lastName, username, password, email],
// 				function(tx, res) {
// 					// success
// 					deferred.resolve();
// 			}, function(e) {
// 					//Failure
// 					deferred.reject('Error adding a new user');
// 			});
// 		}, function() {
// 			deferred.reject('Error during save process.');
// 		});

// 		return deferred.promise();
// 	}
// 	return service.initialize();
// }

// var db = null;
// var sqliteService = {
// 	thi
// };



// function sQLiteStorageDBService() {
// 	var sqliteService = {};
//     var db = window.openDatabase('srdbolla', '1.0', 'Database example', 2 * 1024 * 1024);
// 	return {
// 		sqliteService: this,
        
// 		initializeOnDeviceReady: function() {
// 			// alert('Im inside sqliteService');
	
// 			// db = window.sqlitePlugin.openDatabase({
// 			// 	name: 'srdbolla.db',
// 			// 	location: '/Users/sridivyabolla/Documents/CoreDova'
// 			// });

// 			alert('db value' + db);
	
// 			// db.transaction(function(tx) {
// 			// 	tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id integer primary key, username text, password text, firstName text, lastName text, email text, role text, taskIds: text)');
// 			// 	tx.executeSql('CREATE TABLE IF NOT EXISTS TASK (id integer primary key, name text, scheduledDate text, state text, barcodeImageEncodedString text, userId integer, lastUpdatedLocationId integer, listOfLocationIds text, logIds text)');
// 			// 	tx.executeSql('CREATE TABLE IF NOT EXISTS LOCATION (id integer primary key, latitude double, longitude double, visitedDate text)');
// 			// 	tx.executeSql('CREATE TABLE IF NOT EXISTS LOG (id integer primary key, dateTime text, eventType text, extraInfo text, taskId integer)');
// 			// });
	
// 		},
	
// 		insertUser: function(username, password, firstName, lastName, email, role, taskIdsString) {
// 			db.transaction(function(tx) {
// 				tx.executeSql('INSERT INTO USER (username, password, firstName, lastName, email, role, taskIds) VALUES (?,?,?,?,?,?,?)', 
// 				[username, password, firstName, lastName, email, role, taskIdsString], function(tx, res) {
// 					alert('Insertion of User ' + firstName + ' is succesful');
// 				}, function(tx, e) {
// 					alert('Error with inserting User ' + firstName + ' ' + lastName);
// 				});
// 			});
// 		},
	
// 		insertTask: function(name, scheduledDate, state, barcodeImageEncodedString, userId, lastUpdatedLocationId, listOfLocationIds, logIds) {
// 			db.transaction(function(tx) {
// 				tx.executeSql('INSERT INTO TASK (name, scheduledDate, state, barcodeImageEncodedString, userId, lastUpdatedLocationId, listOfLocationIds, logIds) VALUES (?,?,?,?,?,?,?,?)',
// 				 [name, scheduledDate, state, barcodeImageEncodedString, userId, lastUpdatedLocationId, listOfLocationIds, logIds], function(tx, res) {
// 					alert('Insertion of Task ' + name + ' is succesful');
// 				}, function(tx, e) {
// 					alert('Error with inserting Task ' + name);
// 				});
// 			});
// 		},
	
// 		getUsers: function(query, parameters) {
// 			db.transaction(function(tx) {
// 				tx.executeSql(query, parameters, function (tx, res) {
// 					var users;
// 					for(var i=0; i<res.rows.length; i++) {
// 						users.push(res.rows.item(i));
// 					}
// 					return users;
// 				}, function(tx, error) {
// 					alert('Error while getting the users from database');
// 				});
// 			}, function(error) {
// 				alert('Error with transaction');
// 			});
// 		},
	
// 		checkUsersAndInsert: function() {
// 			var users = sqliteService.getUsers('SELECT username, password, firstName, lastName, email, role, taskIds FROM USER');
// 			if (users.length == 0) {
// 				sqliteService.insertUser('harry.potter', '1234', 'Harry', 'Potter', 'harry.potter@yopmail.com', 'admin', null);
// 				sqliteService.insertUser('hermoine.granger', '1234', 'Hermoine', 'Granger', 'hermoine.granger@yopmail.com', 'non-admin', null);
// 				sqliteService.insertUser('ron.weasley', '1234', 'Ron', 'Weasley', 'ron.weasley@yopmail.com', 'non-admin', null);
// 			} 
// 		}
// 	};
// }



// import sqlite3 from 'sqlite3';
		// db: 
		// db: new sqlite3.Database('../../db/srdbolla.db'),

















