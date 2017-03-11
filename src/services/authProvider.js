'use strict'

app
    .service('authProvider', ['$firebaseArray', "$firebaseObject", '$timeout', 'pwdCrypt', function ($firebaseArray, $firebaseObject, $timeout, pwdCrypt){
        var ref = firebase.database().ref('users');
        var users = $firebaseArray(ref);

        this.signUp = function(user){
            //user.password = pwdCrypt.encode(user.password);
            user.privilege = 'user';
            users.$add(user);
            document.getElementById('formSignUp').reset();
            $timeout(function(){
                window.location.href = "#!/";
            }, 1000);
            return {'success': 'You are registered'}
        }
    }])
    .service('pwdCrypt', [function (){
        var keyStr = 'ABCDERZHIJKLMNOGDLSTUVWXYZabcdefghijklmlajpqrstuvwxyz01269756789^~+/=';
    
        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },
            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;
    
                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[a-zA-Z0-9^\+\/\=]*/g; /*/[^A-Za-z0-9\+\/\=]/g;*/
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[a-zA-Z0-9^\+\/\=]*/g, "");
    
                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));
    
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
    
                    output = output + String.fromCharCode(chr1);
    
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
    
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
    
                } while (i < input.length);
    
                return output;
            }
        }
    }])
;