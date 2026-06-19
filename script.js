const ADMIN_EMAIL = "dzakynaufal372@gmail.com";
const ADMIN_PIN = "92733828372873873837387383638474858473736363646464646464738293929292929292929292938837374738382920102928376465776777237283682973726373627383692739273816282638264736473527252642725272682626227262826282528252852822726273628272838277273737338838373647383838374737373737473837737363636363637373637364738263836483648363736373737373737373737373836383738738374837373737927493743846384683638263825262627528252725216181188128225272287272728282637373636337937383638628269273837382738373837384638263927392748273836283738373837363873837373638363724527474746556656565028283737736555837483738263826383638268364746473638362829292929299291929273382693648363836383648363836826937493749374937383748374837383738373838376483638373676687676376373377353385383377335738363737370273837372602839263926382639264826382638238273737273737373737737737837386383638363836383638363863836302849374936382585667676658925602639263925383538263263826388263826337362362397070888897978766767794957485848484105752575284372625353536363735382639263026206425235359237382638363736386383483638363837383730000000887871234567890108978697926382728465777719379273929089710373926275372526281919101279263533464727432622520926383363737373737373737373737373739362836327202722962916292738263823726382637263836483637363778373377267337282782283738368364734576445434393737387296352753724282419292272672662725272762767237373389386356446470979273773699273927446464646859574938887969269262836376327368253837493739362896788991927282739262826998257729202692825262366327737483638227743737374747473983837674799999999283738262039327927392738263826382528141890976534680965462926483647373736363363636363837782782737272628266373746464474673546383929201010192838374746464464647382829010102938475756544780102937464646473839292929283747474747477474384738473852469172537238263826247474747474926382638238363737383738373383848748383833873836883838383838373737379283838338383838374673737373737917737377383737363739273937382732683749373983792847383637252528282736353725272628527262726282628252826272562625262726252552729304044873638353426485648303937302029629272827227262925272927320202020202020202022020201820202903202020201910230393939300303201923040403930303031083038203830283027392628272726262926464645536384950493725261949505050573936492639151615182946393534392428266272727272027292628262962825263637527262626639463936383638363836392637283753826301028373626353848594639374947558578464927338283728738738373873836384748584737363636464646464647382939292929292929292929388373747383829201029283764657767772372836829737263736273836927392738162826382647364735272526427252726826262272628262825282528528227262736282728382772737373388383736473838383747373737374738377373636363636373736373647382638364836483637363737373737373737373738363837387383748373737379274937438463846836382638252626275282527252161811881282252722872727282826373736363379373836386282692738373827383738373846382639273927482738362837383738373638738373736383637245274747465566565650282837377365558374837382638263836382683647464736383628292929292992919292733826936483638363836483638368269374937493749373837483748373837383738383764836383736766876763763733773533853833773357383637373702738373726028392639263826392648263826382382737372737373737377377378373863836383638363836383638638363028493749363825856676766589256026392639253835382632638263882638263373623623970708888979787667677949574858484841057525752843726253535363637353826392630262064252353592373826383637363863834836383638373837300000008878712345678901089786979263827284657777193792739290897103739262753725262819191012792635334647274326225209263833637373737373737373737373737393628363272027229629162927382638237263826372638364836373637783733772673372827822837383683647345764454343937373872963527537242824192922726726627252727627672373733893863564464709792737736992739274464646468595749388879692692628363763273682538374937393628967889919272827392628269982577292026928252623663277374836382277437373747474739838376747999999992837382620393279273927382638263825281418909765346809654629264836473737363633636363638377827827372726282663737464644746735463839292010101928383747464644646473828290101029384757565447801029374646464738392929292837474747474774743847384738524691725372382638262474747474749263826382383637373837383733838487483838338738368838383838383737373792838383383838383746737373737379177373773837373637392739373827326837493739837";

let editIndex = null;

let profile =
JSON.parse(localStorage.getItem("profile")) || {

image:"https://i.imgur.com/6VBx3io.png",
name:"Ray",
bio:"Welcome to my modern split LinkTree ✨"

};

let links =
JSON.parse(localStorage.getItem("links")) || [];

function saveData(){

localStorage.setItem(
"profile",
JSON.stringify(profile)
);

localStorage.setItem(
"links",
JSON.stringify(links)
);

}

function render(){

document.getElementById("profileImage").src =
profile.image;

document.getElementById("profileName").innerText =
profile.name;

document.getElementById("profileBio").innerText =
profile.bio;

const container =
document.getElementById("linksContainer");

container.innerHTML = "";

const categories = [...new Set(
links.map(link => link.category)
)];

categories.forEach(category=>{

container.innerHTML += `
<div class="category-title">
${category}
</div>
`;

links
.filter(link => link.category === category)
.forEach(link=>{

container.innerHTML += `

<a
class="link-card"
href="${link.url}"
target="_blank">

${
link.image
?
`<img class="link-image" src="${link.image}">`
:
`<div class="link-emoji">${link.emoji}</div>`
}

<div>

<div class="link-title">
${link.title}
</div>

${
link.bio
?
`<div class="link-bio">${link.bio}</div>`
:
""
}

</div>

</a>

`;

});

});

document.getElementById("statLinks").innerText =
links.length;

renderAdminLinks();

}

render();

function openLogin(){

document.getElementById("loginModal")
.style.display = "flex";

}

function closeLogin(){

document.getElementById("loginModal")
.style.display = "none";

}

function loginAdmin(){

const email =
document.getElementById("loginEmail").value;

const pin =
document.getElementById("loginPin").value;

if(
email === ADMIN_EMAIL &&
pin === ADMIN_PIN
){

closeLogin();
openAdmin();

}else{

alert("Email atau PIN salah!");

}

}

function toggleInput(id){

const input =
document.getElementById(id);

if(input.type === "password"){
input.type = "text";
}else{
input.type = "password";
}

}

function openAdmin(){

document.getElementById("adminModal")
.style.display = "flex";

document.getElementById("adminProfileImage").value =
profile.image;

document.getElementById("adminProfileName").value =
profile.name;

document.getElementById("adminProfileBio").value =
profile.bio;

}

function closeAdmin(){

document.getElementById("adminModal")
.style.display = "none";

}

function saveProfile(){

profile.image =
document.getElementById("adminProfileImage").value;

profile.name =
document.getElementById("adminProfileName").value;

profile.bio =
document.getElementById("adminProfileBio").value;

saveData();
render();

alert("Profil berhasil disimpan!");

}

function saveLink(){

const category =
document.getElementById("linkCategory").value || "Other";

const emoji =
document.getElementById("linkEmoji").value || "🔗";

const title =
document.getElementById("linkTitle").value || "Untitled Link";

const bio =
document.getElementById("linkBio").value;

const image =
document.getElementById("linkImage").value || "";

let url =
document.getElementById("linkURL").value || "#";

if(
url !== "#" &&
!url.startsWith("http://") &&
!url.startsWith("https://")
){
url = "https://" + url;
}

if(editIndex === null){

links.push({
category,
emoji,
title,
bio,
url,
image
});

}else{

links[editIndex] = {
category,
emoji,
title,
bio,
url,
image
};

editIndex = null;

document.getElementById("formTitle")
.innerText = "Tambah Link";

document.getElementById("saveLinkBtn")
.innerText = "Tambah Link";

}

document.getElementById("linkCategory").value = "";
document.getElementById("linkEmoji").value = "";
document.getElementById("linkTitle").value = "";
document.getElementById("linkBio").value = "";
document.getElementById("linkURL").value = "";
document.getElementById("linkImage").value = "";

saveData();
render();

}

function renderAdminLinks(){

const admin =
document.getElementById("adminLinks");

admin.innerHTML = "";

links.forEach((link,index)=>{

admin.innerHTML += `

<div class="admin-item">

<div class="admin-top">

<div class="admin-title">

<span>${link.emoji}</span>
<span>${link.title}</span>

<span style="
opacity:0.6;
font-size:12px;
">
(${link.category})
</span>

</div>

<div class="admin-actions">

<button
class="small-btn"
onclick="moveUp(${index})">
⬆️
</button>

<button
class="small-btn"
onclick="moveDown(${index})">
⬇️
</button>

<button
class="small-btn"
onclick="editLink(${index})">
Edit
</button>

<button
class="small-btn"
onclick="deleteLink(${index})">
❌
</button>

</div>

</div>
</div>

`;

});

}

function editLink(index){

editIndex = index;

document.getElementById("linkCategory").value =
links[index].category;

document.getElementById("linkEmoji").value =
links[index].emoji;

document.getElementById("linkTitle").value =
links[index].title;

document.getElementById("linkBio").value =
links[index].bio || "";

document.getElementById("linkURL").value =
links[index].url;

document.getElementById("linkImage").value =
links[index].image || "";

document.getElementById("formTitle")
.innerText = "Edit Link";

document.getElementById("saveLinkBtn")
.innerText = "Simpan Edit";

}

function deleteLink(index){

if(confirm("Hapus link ini?")){

links.splice(index,1);

saveData();
render();

}

}

function moveUp(index){

if(index <= 0) return;

[links[index-1], links[index]] =
[links[index], links[index-1]];

saveData();
render();

}

function moveDown(index){

if(index >= links.length-1) return;

[links[index+1], links[index]] =
[links[index], links[index+1]];

saveData();
render();

}

function openPreview(){

const preview =
document.getElementById("previewContent");

preview.innerHTML = "";

links.forEach(link=>{

preview.innerHTML += `

<a
class="preview-link"
href="${link.url}"
target="_blank">

${link.title}

${
link.bio
?
`
<br>

<span style="
opacity:0.7;
font-size:13px;
">
${link.bio}
</span>
`
:
""
}

</a>

`;

});

document.getElementById("previewModal")
.style.display = "flex";

}

function closePreview(){

document.getElementById("previewModal")
.style.display = "none";

}

/* GALERI FOTO LINK */
const galleryInput =
document.getElementById("galleryInput");

galleryInput.addEventListener("change", function(){

const file = this.files[0];

if(!file) return;

const allowedTypes = [
"image/png",
"image/jpeg",
"image/jpg",
"image/webp",
"image/gif"
];

if(!allowedTypes.includes(file.type)){

alert("Format foto tidak didukung!");

return;

}

const reader = new FileReader();

reader.onload = function(e){

document.getElementById("linkImage").value =
e.target.result;

};

reader.readAsDataURL(file);

});

/* GALERI FOTO PROFIL */
const profileGalleryInput =
document.getElementById("profileGalleryInput");

profileGalleryInput.addEventListener("change", function(){

const file = this.files[0];

if(!file) return;

const allowedTypes = [
"image/png",
"image/jpeg",
"image/jpg",
"image/webp",
"image/gif"
];

if(!allowedTypes.includes(file.type)){

alert("Format foto tidak didukung!");

return;

}

const reader = new FileReader();

reader.onload = function(e){

document.getElementById("adminProfileImage").value =
e.target.result;

};

reader.readAsDataURL(file);

});
