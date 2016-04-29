
function SelectJurusan(){
// ON selection of category this function will work

removeAllOptions(document.register.jurusan);
//addOption(document.drop_list.SubCat, "", "SubCat", "");

if(document.register.fakultas.value == 'Teknik'){
addOption(document.register.jurusan,"Teknik Informatika", "Teknik Informatika");
addOption(document.register.jurusan,"Teknik Industri", "Teknik Industri");
addOption(document.register.jurusan,"Teknik Elektro", "Teknik Elektro");
addOption(document.register.jurusan,"Mekatronika", "Mekatronika");
addOption(document.register.jurusan,"Manajemen Informatika ", "Manajemen Informatika");
}
if(document.register.fakultas.value == 'FISIB'){
addOption(document.register.jurusan,"Ilmu Komunikasi", "Ilmu Komunikasi");
addOption(document.register.jurusan,"Psikologi", "Psikologi");
addOption(document.register.jurusan,"Sosiologi", "Sosiologi");
}
if(document.register.fakultas.value == 'Hukum'){
addOption(document.register.jurusan,"Pidana", "Pidana");
addOption(document.register.jurusan,"Perdata", "Perdata");
}

if(document.register.fakultas.value == 'Ekonomi'){
addOption(document.register.jurusan,"Akutansi", "Akutansi");
addOption(document.register.jurusan,"Kewirausahaan", "Kewirausahaan");
}

if(document.register.fakultas.value == 'Pertanian'){
addOption(document.register.jurusan,"T. Industri Pertanian", "T. Industri Pertanian");
addOption(document.register.jurusan,"Agroekoteknologi", "Agroekoteknologi");
}

}
////////////////// 

function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=1;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text)
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}
