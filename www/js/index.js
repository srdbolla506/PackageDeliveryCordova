/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

// var loginPage;
// document.addEventListener('deviceready', app.onDeviceReady, false);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// var app = {
// 	onDeviceReady: function() {
// 		    document.getElementById('deviceready').classList.add('ready');

// 			// loginPage = loginPage(document.getElementById('loginButtonSubmit'));

// 			// loginPage.initialize();

// 		    // setTimeout(function(){
//                         // alert('Hello!! This is a splash screen.');
//                         // window.location.href = 'views/loginPage.html';
//              // }, 2);
// 	}
// }


// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
//     // loginpage.
// }


// var loginpage;
// var app = {
//     // Application Constructor
//     initialize: function() {
//         if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)) {
//             document.addEventListener("deviceready", this.onDeviceReady, false);
//         } else {
//             this.onDeviceReady();
//         }
//     },

//     onDeviceReady: function() {
//         loginpage = new loginPage();
//         app.overrideBrowserAlert();
//     },

//     overrideBrowserAlert: function() {
//         if (navigator.notification) { // Override default HTML alert with native dialog
//             window.alert = function (message) {
//                 navigator.notification.alert(
//                     message,    // message
//                     null,       // callback
//                     "Toptal", // title
//                     'OK'        // buttonName
//                 );
//             };
//         }
//     },

// };

// app.initialize();