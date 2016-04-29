function validateNama(){
	var a = document.register.nama.value.length;
	if(a < 4 || a > 50){
		document.getElementById("Anama").innerHTML = "* Maaf Nama Harus terdiri dari 4 - 50 karakter";
		return false;
	}else{
		document.getElementById("Anama").innerHTML = "";
		return true;
	}
}

function isNumberKey(evt){
	var charCode = evt.keyCode;
	if (charCode >= 48 && charCode <= 57){
		return true;
	} else {
		return false;
	}
}

function validateNIM(){
	var a = document.register.nim.value.length;
	if(a < 12 || a > 12){
		document.getElementById("Anim").innerHTML = "* Maaf NIM Harus terdiri dari 12 karakter";
		return false;
	}else{
		document.getElementById("Anim").innerHTML = "";
		return true;
	}
}

function validatePassword(){
	var pass = document.register.password.value;
	var panjang = document.register.password.value.length;
	if(panjang < 6 || panjang > 20){
		document.getElementById("Apassword").innerHTML = "Password harus 6 - 20 Karakter";
		return false;
	}else{
		cekHurufKecil = false;
		cekHurufBesar = false;
		cekAngka = false;

		for (var i = 0; i < panjang; i++) {
			kar = pass.charCodeAt(i);
			if(kar >= 97 && kar <= 122  ){
				cekHurufKecil = true;
			}
			if(kar >= 65 && kar <=90){
				cekHurufBesar = true;
			}
			if(kar >= 48 && kar <=57){
				cekAngka = true;
			}
		};
		if(cekAngka && cekHurufBesar && cekHurufKecil){
			document.getElementById("Apassword").innerHTML = "";
			return true;
		}else{
			document.getElementById("Apassword").innerHTML = "Harus mengandung angka, huruf kecil, dan huruf besar";
			return false;
		}
	}
}

function validateForm(){
	if(!validateNama()){
		alert("Harap inputkan Nama sesuai Format");
		return false;
	}else if(!validateNIM()){
		alert("Harap inputkan NIM sesuai Format");
		return false;
	}else if(!validatePassword()){
		alert("Harap inputkan Password sesuai Format");
		return false;
	}else{
		return true;
	}
}
