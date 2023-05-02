startPage();


function startPage(){
let cipher_mode = document.getElementById('cipher-mode');
let selector = document.getElementById('sel');
cipher_mode.value = 'encrypt-cipher';
selector.value = 'rot13';


//SHIFT
let shift_option;
let select_shift = document.getElementById('select-shift');
for(let i = 0; i <= 26; i++){
shift_option = '<option>' + i + '</option>';
select_shift.innerHTML += shift_option;
}
//SHIFT


//CUSTOM
let custom_option;
let select_custom1 = document.getElementById('select-custom-first');
let select_custom2 = document.getElementById('select-custom-second');
let select_custom3 = document.getElementById('select-custom-third');
let select_custom4 = document.getElementById('select-custom-fourth');
for(let custom_index = 0; custom_index <= 26; custom_index++){
	custom_option = '<option>' + custom_index + '</option>';
	select_custom1.innerHTML += custom_option;
	select_custom2.innerHTML += custom_option;
	select_custom3.innerHTML += custom_option;
	select_custom4.innerHTML += custom_option;
}
//CUSTOM



}

let global_selector_cipher = "encrypt-cipher";
let global_selector_mode = "rot13";
let global_selector_mode_shift = "0";
let custom_a = "0";
let custom_b = "0";
let custom_c = "0";
let custom_d = "0";
let txtarea_enc = document.getElementById("enc");
let txtarea_dec = document.getElementById("denc");
txtarea_enc.placeholder = "Geben Sie den Text ein um es zu 'verschlüsseln'.";
txtarea_dec.placeholder = "Hier wird der 'verschlüsselte' Text erscheinen. Beachte: Der 'verschlüsselte' TEXT benötigen Sie um es wieder zu entschlüsseln. Also notieren Sie es und die Kombinationen Ihre Verschlüsselung.";















function getcipher(val){
let sel = val.value;


global_selector_cipher = sel;

let title_cipher = document.getElementById("title-cipher");
let title_algorithm = document.getElementById("title-algorithm");
let text_description_top = document.getElementById("text-description-top");
let text_description_bottom = document.getElementById("text-description-bottom");
let enc_button = document.getElementById("enc-button");
let message_encrypt = document.getElementById("message-encrypt");

let select_shift = document.getElementById("select-shift");
let select_custom1 = document.getElementById("select-custom-first");
let select_custom2 = document.getElementById("select-custom-second");
let select_custom3 = document.getElementById("select-custom-third");
let select_custom4 = document.getElementById("select-custom-fourth");
select_shift.value = 0;
select_custom1.value = 0;
select_custom2.value = 0;
select_custom3.value = 0;
select_custom4.value = 0;

  
  
  
if(sel == "encrypt-cipher"){
txtarea_enc.placeholder = "Geben Sie den Text ein um es zu 'verschlüsseln'.";
txtarea_dec.placeholder = "Hier wird der 'verschlüsselte' Text erscheinen. Beachte: Der 'verschlüsselte' TEXT benötigen Sie um es wieder zu entschlüsseln. Also notieren Sie es und die Kombinationen Ihre Verschlüsselung.";
title_cipher.style.color = "white";
title_cipher.style.animation = "titleAnim 5s 1 forwards";
title_cipher.style.textShadow = "0 0 80px green, 0 0 30px green, 0 0 10px white";



title_algorithm.style.color = "white";
title_algorithm.style.animation = "titleAnim 5s 1 forwards";
title_algorithm.style.textShadow = "0 0 80px green, 0 0 30px green, 0 0 10px white";

text_description_top.innerHTML = "Message";
text_description_top.style.color = "rgba(0, 255, 0, 0.5)";
text_description_top.style.animation = "titleAnim 5s 1 forwards";
text_description_top.style.textShadow = "0 0 80px green, 0 0 30px green, 0 0 10px white";


text_description_bottom.innerHTML = "Encrypted";
text_description_bottom.style.color = "rgba(0, 255, 0, 0.5)";
text_description_bottom.style.animation = "titleAnim 5s 1 forwards";
text_description_bottom.style.textShadow = "0 0 80px green, 0 0 30px green, 0 0 10px white";



enc_button.innerHTML = "Encrypt";
message_encrypt.textContent = "Encryptor";
message_encrypt.style.color = "rgba(51, 201, 14)";
message_encrypt.style.animation = "animEncrypt 3s infinite";

}

  
  
  
  
else if(sel === "decrypt-cipher"){
txtarea_enc.placeholder = "Hier müssen Sie die 'verschlüsselte' Nachricht eingeben.";
txtarea_dec.placeholder = "Hier wird die 'entschlüsselte' Nachricht erscheinen.";
  
  
title_cipher.style.color = "rgba(255, 0, 0, 1)";
title_cipher.style.animation = "titleAnimDec 5s 1 forwards";
title_cipher.style.textShadow = "0 0 80px rgb(255, 0, 0, 0), 0 0 30px rgb(255, 0, 0, 0), 0 0 10px black";
title_algorithm.style.color = "rgba(255, 0, 0, 1)";
title_algorithm.style.animation = "titleAnimDec 5s 1 forwards";
title_algorithm.style.textShadow = "0 0 80px rgb(255, 0, 0, 0), 0 0 30px rgb(255, 0, 0, 0), 0 0 10px black";
text_description_top.innerHTML = "Encrypted-Message";
text_description_top.style.color = "rgba(255, 0, 0, 1)";
text_description_top.style.animation = "titleAnimDec 5s 1 forwards";
text_description_top.style.animation = "0 0 80px rgb(255, 0, 0, 0), 0 0 30px rgb(255, 0, 0, 0), 0 0 10px black";
text_description_bottom.innerHTML = "Decrypted";
text_description_bottom.style.color = "rgba(255, 0, 0, 1)";
text_description_bottom.style.textShadow = "0 0 80px rgb(255, 0, 0, 0), 0 0 30px rgb(255, 0, 0, 0), 0 0 10px black";
enc_button.innerHTML = "Decrypt";
message_encrypt.textContent = "Decryptor";
message_encrypt.style.color = "rgba(255, 0, 0, 1)";
message_encrypt.textShadow = "0 0 80px rgb(255, 0, 0, 0), 0 0 30px rgb(255, 0, 0, 0), 00 20px white";
message_encrypt.style.animation = "animDecrypt 3s infinite";

document.getElementById('sel').value = 'rot13';
document.getElementById('custom').style.display= "none";
document.getElementById('select-shift').style.display = "none";
}








}









































function getopt(val){
let sel = val.value;
global_selector_mode_shift = sel;
};


function getcustom1(val){
let sel = val.value;
custom_a = sel;
}
function getcustom2(val){
let sel = val.value;
custom_b = sel;

}

function getcustom3(val){
let sel = val.value;
custom_c = sel;

}

function getcustom4(val){
let sel = val.value;
custom_d = sel;
}



function getval(val){
let sel = val.value;
global_selector_mode = sel;


if(sel == "rot13" ){
document.getElementById('custom').style.display= "none";
document.getElementById('select-shift').style.display = "none";
}

else if (sel == "shift"){
document.getElementById('custom').style.display= "none";
document.getElementById('select-shift').style.display = "inline-block";
}
else if (sel =="custom"){
document.getElementById('select-shift').style.display = "none";
document.getElementById('custom').style.display= "inline-block";
}

}

//encrypt function for Encrypt-button
function change(){


if(global_selector_cipher == "encrypt-cipher"){
//-----------------------||||>>>>>>>>>>>>>>>>>>>>IF USER CHOOSES TO USE ROT13

if(global_selector_mode =="rot13"){
//textarea enc first //textarea denc seond
let convertNum = [];
let encrypted = [];
let letter = document.getElementById("enc").value;
for(let count = 0; count < letter.length; count++){
convertNum.push(letter[count].charCodeAt(0));
}
for(let check = 0; check < letter.length; check++){
	if(convertNum[check] < 65 || convertNum[check] > 90 &&
       convertNum[check] < 97 || convertNum[check] > 122){
    	encrypted.push(String.fromCharCode(convertNum[check]));
 }
	else if(convertNum[check] >= 97 && convertNum[check] <= 122){
if(convertNum[check] < 110)encrypted.push(String.fromCharCode(convertNum[check] + 13));
        
   else{encrypted.push(String.fromCharCode(convertNum[check] - 13));}  
}
  else if(convertNum[check] >= 65 && convertNum[check] <= 90){   
   if(convertNum[check] < 78){
   	encrypted.push(String.fromCharCode(convertNum[check] + 13));}
   else{ encrypted.push(String.fromCharCode(convertNum[check] - 13));}
}
}
let result_rot13 = encrypted.join("");
document.getElementById("denc").innerHTML = result_rot13;


}//------------------------------||||>>>>>>>>>>>>>>>>>>>>>   ENDS ROT13


//------------------------------------------------------> Starts SHIFT ENCRYPTION
else if(global_selector_mode == "shift"){

	let shift = parseInt(global_selector_mode_shift);
	let letter = document.getElementById("enc").value;
	let to_num = [];
  	let hold = [];
for(let count = 0; count < letter.length; count++){
  to_num.push(letter[count].charCodeAt(0));
  }
	for(let count = 0; count < to_num.length; count++){
   let result = to_num[count] + shift;
   	if(to_num[count] >= 65 && to_num[count] <= 90){
    if(result > 90){
 			hold.push(String.fromCharCode(to_num[count] - (26 - shift)));
    }
    else{
hold.push(String.fromCharCode(to_num[count] + shift));
    }
    }
   else if (to_num[count] >= 97 && to_num[count] <= 122){
    	if(result > 122){
      hold.push(String.fromCharCode(to_num[count] - (26 - shift)));
      }
      else{
      hold.push(String.fromCharCode(to_num[count] + shift));
      }
    }
    
    
    else if(to_num[count] < 65 || to_num[count] > 90 || to_num[count] < 97 || to_num[count] > 122){
    hold.push(String.fromCharCode(to_num[count]));
    }
    
    let result_shift = hold.join("");
   
	document.getElementById("denc").innerHTML = result_shift;
}

}//------------------------------------------------------> ENDS SHIFT ENCRYPTION

//------------------------------------------------------> Starts CUSTOM ENCRYPTION
	else if(global_selector_mode == "custom"){
        let letter = document.getElementById("enc").value;
        let custom_a_num = Number(custom_a);
        let custom_b_num = Number(custom_b);
        let custom_c_num = Number(custom_c);
        let custom_d_num = Number(custom_d);
	let combination = [custom_a_num, 
    					custom_b_num, 
                        custom_c_num, 
                        custom_d_num];
  		let comb_count = 0;
        let to_num = [];
  		let hold = [];
for(let count = 0; count < letter.length; count++){
  to_num.push(letter[count].charCodeAt(0));
  }
  
for(let count = 0; count < to_num.length; count++){

for(let counter = comb_count; counter < combination.length; counter++){
  
  let	result = to_num[count] + combination[counter];
    if (to_num[count] >= 97 && to_num[count] <= 122){
    		if(result > 122){
      						hold.push(String.fromCharCode(to_num[count] - (26 - combination[counter])));}
                  
     	 else{
       						hold.push(String.fromCharCode(to_num[count] + combination[counter]));}

					}
	else if(to_num[count] >= 65 && to_num[count] <= 90){
		if(result > 90){
				hold.push(String.fromCharCode(to_num[count] - (26 - combination[counter])));
		}
		else{
				hold.push(String.fromCharCode(to_num[count] + combination[counter] ) );
		}	
	
	}
					
					
    
    else{hold.push(String.fromCharCode(to_num[count]));}
    break;
    }
    ++comb_count;
    if(comb_count == combination.length){
    comb_count = 0;
    }
    
}//custom
        
	let result_custom = hold.join("");
    document.getElementById("denc").innerHTML = result_custom;

}
//------------------------------------------------------> Ends CUSTOM ENCRYPTION

}//IF CIPHER_MODE is ENCRYPT

//--------------------------------------------------->> Falls Decryptor ist ausgewählt
//--------------------------------------------------->> 
//--------------------------------------------------->> 
//--------------------------------------------------->> 

else if(global_selector_cipher == "decrypt-cipher"){

if(global_selector_mode =="rot13"){
//textarea enc first //textarea denc seond
let convertNum = [];
let encrypted = [];
let letter = document.getElementById("enc").value;
for(let count = 0; count < letter.length; count++){
convertNum.push(letter[count].charCodeAt(0));
}
for(let check = 0; check < convertNum.length; check++){
	if(convertNum[check] < 65 || convertNum[check] > 90 &&
       convertNum[check] < 97 || convertNum[check] > 122){
    	encrypted.push(String.fromCharCode(convertNum[check]));
 }
	else if(convertNum[check] >= 97 && convertNum[check] <= 122){
if(convertNum[check] < 110)encrypted.push(String.fromCharCode(convertNum[check] + 13));
        
   else{encrypted.push(String.fromCharCode(convertNum[check] - 13));}  
}
  else if(convertNum[check] >= 65 && convertNum[check] <= 90){   
   if(convertNum[check] < 78){
   	encrypted.push(String.fromCharCode(convertNum[check] + 13));}
   else{ encrypted.push(String.fromCharCode(convertNum[check] - 13));}
}
}
let result_rot13 = encrypted.join("");
document.getElementById("denc").innerHTML = result_rot13;
}//------------------------------||||>>>>>>>>>>>>>>>>>>>>>   ENDS ROT13

else if(global_selector_mode == "shift"){
    shift = global_selector_mode_shift;
	let letter = document.getElementById("enc").value;
	let to_num = [];
  	let hold = [];
for(let count = 0; count < letter.length; count++){
  to_num.push(letter[count].charCodeAt(0));
  }
	for(let count = 0; count < to_num.length; count++){
   let result = to_num[count] - shift;
   	if(to_num[count] >= 65 && to_num[count] <= 90){
    if(result < 65){
 			hold.push(String.fromCharCode(to_num[count] + (26 - shift)));
    }
    else{
hold.push(String.fromCharCode(to_num[count] - shift));
    }
    }
   else if (to_num[count] >= 97 && to_num[count] <= 122){
    	if(result < 97){
      hold.push(String.fromCharCode(to_num[count] + (26 - shift)));
      }
      else{
      hold.push(String.fromCharCode(to_num[count] - shift));
      }
    }
    
    
    else if(to_num[count] < 65 || to_num[count] > 90 || to_num[count] < 97 || to_num[count] > 122){
    hold.push(String.fromCharCode(to_num[count]));
    }
    
    let result_shift = hold.join("");
   
	document.getElementById("denc").innerHTML = result_shift;
  
}
}//else if


	else if(global_selector_mode == "custom"){
        let letter = document.getElementById("enc").value;
	
        let custom_a_num = Number(custom_a);
        let custom_b_num = Number(custom_b);
        let custom_c_num = Number(custom_c);
        let custom_d_num = Number(custom_d);
        
	let combination = [ custom_a_num, 
    					custom_b_num, 
                        custom_c_num, 
                        custom_d_num
					  ];
					  
  		let comb_count = 0;
        let to_num = [];
  		let hold = [];
for(let count = 0; count < letter.length; count++){
  to_num.push(letter[count].charCodeAt(0));
  }
  
for(let count = 0; count < to_num.length; count++){

for(let counter = comb_count; counter < combination.length; counter++){
  
  let	result = to_num[count] - combination[counter];
    if (to_num[count] >= 97 && to_num[count] <= 122){
    		if(result < 97){
      						hold.push(String.fromCharCode(to_num[count] + (26 - combination[counter])));}
                  
     	 else{
       						hold.push(String.fromCharCode(to_num[count] - combination[counter]));}

					}
	else if(to_num[count] >= 65 && to_num[count] <= 90){
		if(result < 65){
				hold.push(String.fromCharCode(to_num[count] + (26 - combination[counter]) ) );
		}
		else{
				hold.push(String.fromCharCode(to_num[count] - combination[counter] ) );
		}	
	
	}
					
    else{hold.push(String.fromCharCode(to_num[count]));}
    break;
    }
    ++comb_count;
    if(comb_count == combination.length){
    comb_count = 0;
    }
    
}//custom
        
	let result_custom = hold.join("");
    document.getElementById("denc").innerHTML = result_custom;

}//ELSE IF custom

}

//--------------------------------------------------->> DECRYPTOR STOPS HERE
//--------------------------------------------------->>  
//--------------------------------------------------->>  
//--------------------------------------------------->>  
//--------------------------------------------------->>  

}//encrypt function

//FUNCTION for RESET Button to page value back to 0
function reloadPage(){
	document.getElementById('cipher-mode').value="encrypt-cipher";
	document.getElementById('sel').value = "rot13";
	document.getElementById('custom').style.display= "none";
	document.getElementById('select-shift').style.display = "none";
	document.getElementById('select-shift').innerHTML = "0";
	document.getElementById('select-custom-first').innerHTML = '0';
	document.getElementById('select-custom-second').innerHTML = '0';
	document.getElementById('select-custom-third').innerHTML = '0';
	document.getElementById('select-custom-fourth').innerHTML = '0';
	document.getElementById('enc').value = "";
	window.location = self.location;
	}
