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
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function loginMain() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;


        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        if (username, password) {
            console.log("User connected");
        } else {
            console.log("User not connected");
        }

    });
}

function test() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocalização não suportada pelo navegador.");
    }
}


function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // Faça algo com as coordenadas de latitude e longitude
    console.log(latitude)
    console.log(longitude)
}
