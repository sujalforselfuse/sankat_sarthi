import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { RegionDropdown } from 'react-country-region-selector';
import { DotSpinner } from '@uiball/loaders'
import { toast } from 'react-toastify';
const Signup = () => {

    const [District, setDistrict] = useState([]);
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")

    const State = {
        "Andaman & Nicobar": ["Alipur ", " Andaman Island ", " Anderson Island ", " Arainj-Laka-Punga ", " Austinabad ", " Bamboo Flat ", " Barren Island ", " Beadonabad ", " Betapur ", " Bindraban ", " Bonington ", " Brookesabad ", " Cadell Point ", " Calicut ", " Chetamale ", " Cinque Islands ", " Defence Island ", " Digilpur ", " Dolyganj ", " Flat Island ", " Geinyale ", " Great Coco Island ", " Haddo ", " Havelock Island ", " Henry Lawrence Island ", " Herbertabad ", " Hobdaypur ", " Ilichar ", " Ingoie ", " Inteview Island ", " Jangli Ghat ", " Jhon Lawrence Island ", " Karen ", " Kartara ", " KYD Islannd ", " Landfall Island ", " Little Andmand ", " Little Coco Island ", " Long Island ", " Maimyo ", " Malappuram ", " Manglutan ", " Manpur ", " Mitha Khari ", " Neill Island ", " Nicobar Island ", " North Brother Island ", " North Passage Island ", " North Sentinel Island ", " Nothen Reef Island ", " Outram Island ", " Pahlagaon ", " Palalankwe ", " Passage Island ", " Phaiapong ", " Phoenix Island ", " Port Blair ", " Preparis Island ", " Protheroepur ", " Rangachang ", " Rongat ", " Rutland Island ", " Sabari ", " Saddle Peak ", " Shadipur ", " Smith Island ", " Sound Island ", " South Sentinel Island ", " Spike Island ", " Tarmugli Island ", " Taylerabad ", " Titaije ", " Toibalawe ", " Tusonabad ", " West Island ", " Wimberleyganj ", " Yadita"],
        "Andhra Pradesh": ["Achampet ", " Adilabad ", " Adoni ", " Alampur ", " Allagadda ", " Alur ", " Amalapuram ", " Amangallu ", " Anakapalle ", " Anantapur ", " Andole ", " Araku ", " Armoor ", " Asifabad ", " Aswaraopet ", " Atmakur ", " B. Kothakota ", " Badvel ", " Banaganapalle ", " Bandar ", " Bangarupalem ", " Banswada ", " Bapatla ", " Bellampalli ", " Bhadrachalam ", " Bhainsa ", " Bheemunipatnam ", " Bhimadole ", " Bhimavaram ", " Bhongir ", " Bhooragamphad ", " Boath ", " Bobbili ", " Bodhan ", " Chandoor ", " Chavitidibbalu ", " Chejerla ", " Chepurupalli ", " Cherial ", " Chevella ", " Chinnor ", " Chintalapudi ", " Chintapalle ", " Chirala ", " Chittoor ", " Chodavaram ", " Cuddapah ", " Cumbum ", " Darsi ", " Devarakonda ", " Dharmavaram ", " Dichpalli ", " Divi ", " Donakonda ", " Dronachalam ", " East Godavari ", " Eluru ", " Eturnagaram ", " Gadwal ", " Gajapathinagaram ", " Gajwel ", " Garladinne ", " Giddalur ", " Godavari ", " Gooty ", " Gudivada ", " Gudur ", " Guntur ", " Hindupur ", " Hunsabad ", " Huzurabad ", " Huzurnagar ", " Hyderabad ", " Ibrahimpatnam ", " Jaggayyapet ", " Jagtial ", " Jammalamadugu ", " Jangaon ", " Jangareddygudem ", " Jannaram ", " Kadiri ", " Kaikaluru ", " Kakinada ", " Kalwakurthy ", " Kalyandurg ", " Kamalapuram ", " Kamareddy ", " Kambadur ", " Kanaganapalle ", " Kandukuru ", " Kanigiri ", " Karimnagar ", " Kavali ", " Khammam ", " Khanapur (AP) ", " Kodangal ", " Koduru ", " Koilkuntla ", " Kollapur ", " Kothagudem ", " Kovvur ", " Krishna ", " Krosuru ", " Kuppam ", " Kurnool ", " Lakkireddipalli ", " Madakasira ", " Madanapalli ", " Madhira ", " Madnur ", " Mahabubabad ", " Mahabubnagar ", " Mahadevapur ", " Makthal ", " Mancherial ", " Mandapeta ", " Mangalagiri ", " Manthani ", " Markapur ", " Marturu ", " Medachal ", " Medak ", " Medarmetla ", " Metpalli ", " Mriyalguda ", " Mulug ", " Mylavaram ", " Nagarkurnool ", " Nalgonda ", " Nallacheruvu ", " Nampalle ", " Nandigama ", " Nandikotkur ", " Nandyal ", " Narasampet ", " Narasaraopet ", " Narayanakhed ", " Narayanpet ", " Narsapur ", " Narsipatnam ", " Nazvidu ", " Nelloe ", " Nellore ", " Nidamanur ", " Nirmal ", " Nizamabad ", " Nuguru ", " Ongole ", " Outsarangapalle ", " Paderu ", " Pakala ", " Palakonda ", " Paland ", " Palmaneru ", " Pamuru ", " Pargi ", " Parkal ", " Parvathipuram ", " Pathapatnam ", " Pattikonda ", " Peapalle ", " Peddapalli ", " Peddapuram ", " Penukonda ", " Piduguralla ", " Piler ", " Pithapuram ", " Podili ", " Polavaram ", " Prakasam ", " Proddatur ", " Pulivendla ", " Punganur ", " Putturu ", " Rajahmundri ", " Rajampeta ", " Ramachandrapuram ", " Ramannapet ", " Rampachodavaram ", " Rangareddy ", " Rapur ", " Rayachoti ", " Rayadurg ", " Razole ", " Repalle ", " Saluru ", " Sangareddy ", " Sathupalli ", " Sattenapalle ", " Satyavedu ", " Shadnagar ", " Siddavattam ", " Siddipet ", " Sileru ", " Sircilla ", " Sirpur Kagaznagar ", " Sodam ", " Sompeta ", " Srikakulam ", " Srikalahasthi ", " Srisailam ", " Srungavarapukota ", " Sudhimalla ", " Sullarpet ", " Tadepalligudem ", " Tadipatri ", " Tanduru ", " Tanuku ", " Tekkali ", " Tenali ", " Thungaturthy ", " Tirivuru ", " Tirupathi ", " Tuni ", " Udaygiri ", " Ulvapadu ", " Uravakonda ", " Utnor ", " V.R. Puram ", " Vaimpalli ", " Vayalpad ", " Venkatgiri ", " Venkatgirikota ", " Vijayawada ", " Vikrabad ", " Vinjamuru ", " Vinukonda ", " Visakhapatnam ", " Vizayanagaram ", " Vizianagaram ", " Vuyyuru ", " Wanaparthy ", " Warangal ", " Wardhannapet ", " Yelamanchili ", " Yelavaram ", " Yeleswaram ", " Yellandu ", " Yellanuru ", " Yellareddy ", " Yerragondapalem ", " Zahirabad "],
        "Arunachal Pradesh": ["Along ", " Anini ", " Anjaw ", " Bameng ", " Basar ", " Changlang ", " Chowkhem ", " Daporizo ", " Dibang Valley ", " Dirang ", " Hayuliang ", " Huri ", " Itanagar ", " Jairampur ", " Kalaktung ", " Kameng ", " Khonsa ", " Kolaring ", " Kurung Kumey ", " Lohit ", " Lower Dibang Valley ", " Lower Subansiri ", " Mariyang ", " Mechuka ", " Miao ", " Nefra ", " Pakkekesang ", " Pangin ", " Papum Pare ", " Passighat ", " Roing ", " Sagalee ", " Seppa ", " Siang ", " Tali ", " Taliha ", " Tawang ", " Tezu ", " Tirap ", " Tuting ", " Upper Siang ", " Upper Subansiri ", " Yiang Kiag "],
        "Assam": [" Abhayapuri ", " Baithalangshu ", " Barama ", " Barpeta Road ", " Bihupuria ", " Bijni ", " Bilasipara ", " Bokajan ", " Bokakhat ", " Boko ", " Bongaigaon ", " Cachar ", " Cachar Hills ", " Darrang ", " Dhakuakhana ", " Dhemaji ", " Dhubri ", " Dibrugarh ", " Digboi ", " Diphu ", " Goalpara ", " Gohpur ", " Golaghat ", " Guwahati ", " Hailakandi ", " Hajo ", " Halflong ", " Hojai ", " Howraghat ", " Jorhat ", " Kamrup ", " Karbi Anglong ", " Karimganj ", " Kokarajhar ", " Kokrajhar ", " Lakhimpur ", " Maibong ", " Majuli ", " Mangaldoi ", " Mariani ", " Marigaon ", " Moranhat ", " Morigaon ", " Nagaon ", " Nalbari ", " Rangapara ", " Sadiya ", " Sibsagar ", " Silchar ", " Sivasagar ", " Sonitpur ", " Tarabarihat ", " Tezpur ", " Tinsukia ", " Udalgiri ", " Udalguri ", " UdarbondhBarpeta"],
        "Bihar": [" Adhaura ", " Amarpur ", " Araria ", " Areraj ", " Arrah ", " Arwal ", " Aurangabad ", " Bagaha ", " Banka ", " Banmankhi ", " Barachakia ", " Barauni ", " Barh ", " Barosi ", " Begusarai ", " Benipatti ", " Benipur ", " Bettiah ", " Bhabhua ", " Bhagalpur ", " Bhojpur ", " Bidupur ", " Biharsharif ", " Bikram ", " Bikramganj ", " Birpur ", " Buxar ", " Chakai ", " Champaran ", " Chapara ", " Dalsinghsarai ", " Danapur ", " Darbhanga ", " Daudnagar ", " Dhaka ", " Dhamdaha ", " Dumraon ", " Ekma ", " Forbesganj ", " Gaya ", " Gogri ", " Gopalganj ", " H.Kharagpur ", " Hajipur ", " Hathua ", " Hilsa ", " Imamganj ", " Jahanabad ", " Jainagar ", " Jamshedpur ", " Jamui ", " Jehanabad ", " Jhajha ", " Jhanjharpur ", " Kahalgaon ", " Kaimur (Bhabua) ", " Katihar ", " Katoria ", " Khagaria ", " Kishanganj ", " Korha ", " Lakhisarai ", " Madhepura ", " Madhubani ", " Maharajganj ", " Mahua ", " Mairwa ", " Mallehpur ", " Masrakh ", " Mohania ", " Monghyr ", " Motihari ", " Motipur ", " Munger ", " Muzaffarpur ", " Nabinagar ", " Nalanda ", " Narkatiaganj ", " Naugachia ", " Nawada ", " Pakribarwan ", " Pakridayal ", " Patna ", " Phulparas ", " Piro ", " Pupri ", " Purena ", " Purnia ", " Rafiganj ", " Rajauli ", " Ramnagar ", " Raniganj ", " Raxaul ", " Rohtas ", " Rosera ", " S.Bakhtiarpur ", " Saharsa ", " Samastipur ", " Saran ", " Sasaram ", " Seikhpura ", " Sheikhpura ", " Sheohar ", " Sherghati ", " Sidhawalia ", " Singhwara ", " Sitamarhi ", " Siwan ", " Sonepur ", " Supaul ", " Thakurganj ", " Triveniganj ", " Udakishanganj ", " Vaishali ", " Wazirganj"],
        "Chandigarh": [" Chandigarh ", " Mani Marja"],
        "Chhattisgarh": [" Ambikapur ", " Antagarh ", " Arang ", " Bacheli ", " Bagbahera ", " Bagicha ", " Baikunthpur ", " Balod ", " Balodabazar ", " Balrampur ", " Barpalli ", " Basana ", " Bastanar ", " Bastar ", " Bderajpur ", " Bemetara ", " Berla ", " Bhairongarh ", " Bhanupratappur ", " Bharathpur ", " Bhatapara ", " Bhilai ", " Bhilaigarh ", " Bhopalpatnam ", " Bijapur ", " Bilaspur ", " Bodla ", " Bokaband ", " Chandipara ", " Chhinagarh ", " Chhuriakala ", " Chingmut ", " Chuikhadan ", " Dabhara ", " Dallirajhara ", " Dantewada ", " Deobhog ", " Dhamda ", " Dhamtari ", " Dharamjaigarh ", " Dongargarh ", " Durg ", " Durgakondal ", " Fingeshwar ", " Gariaband ", " Garpa ", " Gharghoda ", " Gogunda ", " Ilamidi ", " Jagdalpur ", " Janjgir ", " Janjgir-Champa ", " Jarwa ", " Jashpur ", " Jashpurnagar ", " Kabirdham-Kawardha ", " Kanker ", " Kasdol ", " Kathdol ", " Kathghora ", " Kawardha ", " Keskal ", " Khairgarh ", " Kondagaon ", " Konta ", " Korba ", " Korea ", " Kota ", " Koyelibeda ", " Kuakunda ", " Kunkuri ", " Kurud ", " Lohadigundah ", " Lormi ", " Luckwada ", " Mahasamund ", " Makodi ", " Manendragarh ", " Manpur ", " Marwahi ", " Mohla ", " Mungeli ", " Nagri ", " Narainpur ", " Narayanpur ", " Neora ", " Netanar ", " Odgi ", " Padamkot ", " Pakhanjur ", " Pali ", " Pandaria ", " Pandishankar ", " Parasgaon ", " Pasan ", " Patan ", " Pathalgaon ", " Pendra ", " Pratappur ", " Premnagar ", " Raigarh ", " Raipur ", " Rajnandgaon ", " Rajpur ", " Ramchandrapur ", " Saraipali ", " Saranggarh ", " Sarona ", " Semaria ", " Shakti ", " Sitapur ", " Sukma ", " Surajpur ", " Surguja ", " Tapkara ", " Toynar ", " Udaipur ", " Uproda ", " Wadrainagar"],
        "Dadra & Nagar Haveli": [" Amal ", " Amli ", " Bedpa ", " Chikhli ", " Dadra & Nagar Haveli ", " Dahikhed ", " Dolara ", " Galonda ", " Kanadi ", " Karchond ", " Khadoli ", " Kharadpada ", " Kherabari ", " Kherdi ", " Kothar ", " Luari ", " Mashat ", " Rakholi ", " Rudana ", " Saili ", " Sili ", " Silvassa ", " Sindavni ", " Udva ", " Umbarkoi ", " Vansda ", " Vasona ", " Velugam "],
        "Daman & Diu": [" Brancavare ", " Dagasi ", " Daman ", " Diu ", " Magarvara ", " Nagwa ", " Pariali ", " Passo Covo "],
        "Delhi": [" Central Delhi ", " East Delhi ", " New Delhi ", " North Delhi ", " North East Delhi ", " North West Delhi ", " South Delhi ", " South West Delhi ", " West Delhi "],
        "Goa": [" Canacona ", " Candolim ", " Chinchinim ", " Cortalim ", " Goa ", " Jua ", " Madgaon ", " Mahem ", " Mapuca ", " Marmagao ", " Panji ", " Ponda ", " Sanvordem ", " Terekhol "],
        "Gujarat": [" Ahmedabad ", " Ahwa ", " Amod ", " Amreli ", " Anand ", " Anjar ", " Ankaleshwar ", " Babra ", " Balasinor ", " Banaskantha ", " Bansada ", " Bardoli ", " Bareja ", " Baroda ", " Barwala ", " Bayad ", " Bhachav ", " Bhanvad ", " Bharuch ", " Bhavnagar ", " Bhiloda ", " Bhuj ", " Billimora ", " Borsad ", " Botad ", " Chanasma ", " Chhota Udaipur ", " Chotila ", " Dabhoi ", " Dahod ", " Damnagar ", " Dang ", " Danta ", " Dasada ", " Dediapada ", " Deesa ", " Dehgam ", " Deodar ", " Devgadhbaria ", " Dhandhuka ", " Dhanera ", " Dharampur ", " Dhari ", " Dholka ", " Dhoraji ", " Dhrangadhra ", " Dhrol ", " Dwarka ", " Fortsongadh ", " Gadhada ", " Gandhi Nagar ", " Gariadhar ", " Godhra ", " Gogodar ", " Gondal ", " Halol ", " Halvad ", " Harij ", " Himatnagar ", " Idar ", " Jambusar ", " Jamjodhpur ", " Jamkalyanpur ", " Jamnagar ", " Jasdan ", " Jetpur ", " Jhagadia ", " Jhalod ", " Jodia ", " Junagadh ", " Junagarh ", " Kalawad ", " Kalol ", " Kapad Wanj ", " Keshod ", " Khambat ", " Khambhalia ", " Khavda ", " Kheda ", " Khedbrahma ", " Kheralu ", " Kodinar ", " Kotdasanghani ", " Kunkawav ", " Kutch ", " Kutchmandvi ", " Kutiyana ", " Lakhpat ", " Lakhtar ", " Lalpur ", " Limbdi ", " Limkheda ", " Lunavada ", " M.M.Mangrol ", " Mahuva ", " Malia-Hatina ", " Maliya ", " Malpur ", " Manavadar ", " Mandvi ", " Mangrol ", " Mehmedabad ", " Mehsana ", " Miyagam ", " Modasa ", " Morvi ", " Muli ", " Mundra ", " Nadiad ", " Nakhatrana ", " Nalia ", " Narmada ", " Naswadi ", " Navasari ", " Nizar ", " Okha ", " Paddhari ", " Padra ", " Palanpur ", " Palitana ", " Panchmahals ", " Patan ", " Pavijetpur ", " Porbandar ", " Prantij ", " Radhanpur ", " Rahpar ", " Rajaula ", " Rajkot ", " Rajpipla ", " Ranavav ", " Sabarkantha ", " Sanand ", " Sankheda ", " Santalpur ", " Santrampur ", " Savarkundla ", " Savli ", " Sayan ", " Sayla ", " Shehra ", " Sidhpur ", " Sihor ", " Sojitra ", " Sumrasar ", " Surat ", " Surendranagar ", " Talaja ", " Thara ", " Tharad ", " Thasra ", " Una-Diu ", " Upleta ", " Vadgam ", " Vadodara ", " Valia ", " Vallabhipur ", " Valod ", " Valsad ", " Vanthali ", " Vapi ", " Vav ", " Veraval ", " Vijapur ", " Viramgam ", " Visavadar ", " Visnagar ", " Vyara ", " Waghodia ", " Wankaner "],
        "Haryana": [" Adampur Mandi ", " Ambala ", " Assandh ", " Bahadurgarh ", " Barara ", " Barwala ", " Bawal ", " Bawanikhera ", " Bhiwani ", " Charkhidadri ", " Cheeka ", " Chhachrauli ", " Dabwali ", " Ellenabad ", " Faridabad ", " Fatehabad ", " Ferojpur Jhirka ", " Gharaunda ", " Gohana ", " Gurgaon ", " Hansi ", " Hisar ", " Jagadhari ", " Jatusana ", " Jhajjar ", " Jind ", " Julana ", " Kaithal ", " Kalanaur ", " Kalanwali ", " Kalka ", " Karnal ", " Kosli ", " Kurukshetra ", " Loharu ", " Mahendragarh ", " Meham ", " Mewat ", " Mohindergarh ", " Naraingarh ", " Narnaul ", " Narwana ", " Nilokheri ", " Nuh ", " Palwal ", " Panchkula ", " Panipat ", " Pehowa ", " Ratia ", " Rewari ", " Rohtak ", " Safidon ", " Sirsa ", " Siwani ", " Sonipat ", " Tohana ", " Tohsam ", " Yamunanagar "],
        "Himachal Pradesh": [" Amb ", " Arki ", " Banjar ", " Bharmour ", " Bilaspur ", " Chamba ", " Churah ", " Dalhousie ", " Dehra Gopipur ", " Hamirpur ", " Jogindernagar ", " Kalpa ", " Kangra ", " Kinnaur ", " Kullu ", " Lahaul ", " Mandi ", " Nahan ", " Nalagarh ", " Nirmand ", " Nurpur ", " Palampur ", " Pangi ", " Paonta ", " Pooh ", " Rajgarh ", " Rampur Bushahar ", " Rohru ", " Shimla ", " Sirmaur ", " Solan ", " Spiti ", " Sundernagar ", " Theog ", " Udaipur ", " Una"],
        "Jammu & Kashmir": [" Akhnoor ", " Anantnag ", " Badgam ", " Bandipur ", " Baramulla ", " Basholi ", " Bedarwah ", " Budgam ", " Doda ", " Gulmarg ", " Jammu ", " Kalakot ", " Kargil ", " Karnah ", " Kathua ", " Kishtwar ", " Kulgam ", " Kupwara ", " Leh ", " Mahore ", " Nagrota ", " Nobra ", " Nowshera ", " Nyoma ", " Padam ", " Pahalgam ", " Patnitop ", " Poonch ", " Pulwama ", " Rajouri ", " Ramban ", " Ramnagar ", " Reasi ", " Samba ", " Srinagar ", " Udhampur ", " Vaishno Devi "],
        "Jharkhand": [" Bagodar ", " Baharagora ", " Balumath ", " Barhi ", " Barkagaon ", " Barwadih ", " Basia ", " Bermo ", " Bhandaria ", " Bhawanathpur ", " Bishrampur ", " Bokaro ", " Bolwa ", " Bundu ", " Chaibasa ", " Chainpur ", " Chakardharpur ", " Chandil ", " Chatra ", " Chavparan ", " Daltonganj ", " Deoghar ", " Dhanbad ", " Dumka ", " Dumri ", " Garhwa ", " Garu ", " Ghaghra ", " Ghatsila ", " Giridih ", " Godda ", " Gomia ", " Govindpur ", " Gumla ", " Hazaribagh ", " Hunterganj ", " Ichak ", " Itki ", " Jagarnathpur ", " Jamshedpur ", " Jamtara ", " Japla ", " Jharmundi ", " Jhinkpani ", " Jhumaritalaiya ", " Kathikund ", " Kharsawa ", " Khunti ", " Koderma ", " Kolebira ", " Latehar ", " Lohardaga ", " Madhupur ", " Mahagama ", " Maheshpur Raj ", " Mandar ", " Mandu ", " Manoharpur ", " Muri ", " Nagarutatri ", " Nala ", " Noamundi ", " Pakur ", " Palamu ", " Palkot ", " Patan ", " Rajdhanwar ", " Rajmahal ", " Ramgarh ", " Ranchi ", " Sahibganj ", " Saraikela ", " Simaria ", " Simdega ", " Singhbhum ", " Tisri ", " Torpa "],
        "Karnataka": [" Afzalpur ", " Ainapur ", " Aland ", " Alur ", " Anekal ", " Ankola ", " Arsikere ", " Athani ", " Aurad ", " Bableshwar ", " Badami ", " Bagalkot ", " Bagepalli ", " Bailhongal ", " Bangalore ", " Bangalore Rural ", " Bangarpet ", " Bantwal ", " Basavakalyan ", " Basavanabagewadi ", " Basavapatna ", " Belgaum ", " Bellary ", " Belthangady ", " Belur ", " Bhadravati ", " Bhalki ", " Bhatkal ", " Bidar ", " Bijapur ", " Biligi ", " Chadchan ", " Challakere ", " Chamrajnagar ", " Channagiri ", " Channapatna ", " Channarayapatna ", " Chickmagalur ", " Chikballapur ", " Chikkaballapur ", " Chikkanayakanahalli ", " Chikkodi ", " Chikmagalur ", " Chincholi ", " Chintamani ", " Chitradurga ", " Chittapur ", " Cowdahalli ", " Davanagere ", " Deodurga ", " Devangere ", " Devarahippargi ", " Dharwad ", " Doddaballapur ", " Gadag ", " Gangavathi ", " Gokak ", " Gowribdanpur ", " Gubbi ", " Gulbarga ", " Gundlupet ", " H.B.Halli ", " H.D. Kote ", " Haliyal ", " Hampi ", " Hangal ", " Harapanahalli ", " Hassan ", " Haveri ", " Hebri ", " Hirekerur ", " Hiriyur ", " Holalkere ", " Holenarsipur ", " Honnali ", " Honnavar ", " Hosadurga ", " Hosakote ", " Hosanagara ", " Hospet ", " Hubli ", " Hukkeri ", " Humnabad ", " Hungund ", " Hunsagi ", " Hunsur ", " Huvinahadagali ", " Indi ", " Jagalur ", " Jamkhandi ", " Jewargi ", " Joida ", " K.R. Nagar ", " Kadur ", " Kalghatagi ", " Kamalapur ", " Kanakapura ", " Kannada ", " Kargal ", " Karkala ", " Karwar ", " Khanapur ", " Kodagu ", " Kolar ", " Kollegal ", " Koppa ", " Koppal ", " Koratageri ", " Krishnarajapet ", " Kudligi ", " Kumta ", " Kundapur ", " Kundgol ", " Kunigal ", " Kurugodu ", " Kustagi ", " Lingsugur ", " Madikeri ", " Madugiri ", " Malavalli ", " Malur ", " Mandya ", " Mangalore ", " Manipal ", " Manvi ", " Mashal ", " Molkalmuru ", " Mudalgi ", " Muddebihal ", " Mudhol ", " Mudigere ", " Mulbagal ", " Mundagod ", " Mundargi ", " Murugod ", " Mysore ", " Nagamangala ", " Nanjangud ", " Nargund ", " Narsimrajapur ", " Navalgund ", " Nelamangala ", " Nimburga ", " Pandavapura ", " Pavagada ", " Puttur ", " Raibag ", " Raichur ", " Ramdurg ", " Ranebennur ", " Ron ", " Sagar ", " Sakleshpur ", " Salkani ", " Sandur ", " Saundatti ", " Savanur ", " Sedam ", " Shahapur ", " Shankarnarayana ", " Shikaripura ", " Shimoga ", " Shirahatti ", " Shorapur ", " Siddapur ", " Sidlaghatta ", " Sindagi ", " Sindhanur ", " Sira ", " Sirsi ", " Siruguppa ", " Somwarpet ", " Sorab ", " Sringeri ", " Sriniwaspur ", " Srirangapatna ", " Sullia ", " T. Narsipur ", " Tallak ", " Tarikere ", " Telgi ", " Thirthahalli ", " Tiptur ", " Tumkur ", " Turuvekere ", " Udupi ", " Virajpet ", " Wadi ", " Yadgiri ", " Yelburga ", " Yellapur "],
        "Kerala": [" Adimaly ", " Adoor ", " Agathy ", " Alappuzha ", " Alathur ", " Alleppey ", " Alwaye ", " Amini ", " Androth ", " Attingal ", " Badagara ", " Bitra ", " Calicut ", " Cannanore ", " Chetlet ", " Ernakulam ", " Idukki ", " Irinjalakuda ", " Kadamath ", " Kalpeni ", " Kalpetta ", " Kanhangad ", " Kanjirapally ", " Kannur ", " Karungapally ", " Kasargode ", " Kavarathy ", " Kiltan ", " Kochi ", " Koduvayur ", " Kollam ", " Kottayam ", " Kovalam ", " Kozhikode ", " Kunnamkulam ", " Malappuram ", " Mananthodi ", " Manjeri ", " Mannarghat ", " Mavelikkara ", " Minicoy ", " Munnar ", " Muvattupuzha ", " Nedumandad ", " Nedumgandam ", " Nilambur ", " Palai ", " Palakkad ", " Palghat ", " Pathaanamthitta ", " Pathanamthitta ", " Payyanur ", " Peermedu ", " Perinthalmanna ", " Perumbavoor ", " Punalur ", " Quilon ", " Ranni ", " Shertallai ", " Shoranur ", " Taliparamba ", " Tellicherry ", " Thiruvananthapuram ", " Thodupuzha ", " Thrissur ", " Tirur ", " Tiruvalla ", " Trichur ", " Trivandrum ", " Uppala ", " Vadakkanchery ", " Vikom ", " Wayanad "],
        "Lakshadweep": [" Agatti Island ", " Bingaram Island ", " Bitra Island ", " Chetlat Island ", " Kadmat Island ", " Kalpeni Island ", " Kavaratti Island ", " Kiltan Island ", " Lakshadweep Sea ", " Minicoy Island ", " North Island ", " South Island "],
        "Madhya Pradesh": [" Agar ", " Ajaigarh ", " Alirajpur ", " Amarpatan ", " Amarwada ", " Ambah ", " Anuppur ", " Arone ", " Ashoknagar ", " Ashta ", " Atner ", " Babaichichli ", " Badamalhera ", " Badarwsas ", " Badnagar ", " Badnawar ", " Badwani ", " Bagli ", " Baihar ", " Balaghat ", " Baldeogarh ", " Baldi ", " Bamori ", " Banda ", " Bandhavgarh ", " Bareli ", " Baroda ", " Barwaha ", " Barwani ", " Batkakhapa ", " Begamganj ", " Beohari ", " Berasia ", " Berchha ", " Betul ", " Bhainsdehi ", " Bhander ", " Bhanpura ", " Bhikangaon ", " Bhimpur ", " Bhind ", " Bhitarwar ", " Bhopal ", " Biaora ", " Bijadandi ", " Bijawar ", " Bijaypur ", " Bina ", " Birsa ", " Birsinghpur ", " Budhni ", " Burhanpur ", " Buxwaha ", " Chachaura ", " Chanderi ", " Chaurai ", " Chhapara ", " Chhatarpur ", " Chhindwara ", " Chicholi ", " Chitrangi ", " Churhat ", " Dabra ", " Damoh ", " Datia ", " Deori ", " Deosar ", " Depalpur ", " Dewas ", " Dhar ", " Dharampuri ", " Dindori ", " Gadarwara ", " Gairatganj ", " Ganjbasoda ", " Garoth ", " Ghansour ", " Ghatia ", " Ghatigaon ", " Ghorandogri ", " Ghughari ", " Gogaon ", " Gohad ", " Goharganj ", " Gopalganj ", " Gotegaon ", " Gourihar ", " Guna ", " Gunnore ", " Gwalior ", " Gyraspur ", " Hanumana ", " Harda ", " Harrai ", " Harsud ", " Hatta ", " Hoshangabad ", " Ichhawar ", " Indore ", " Isagarh ", " Itarsi ", " Jabalpur ", " Jabera ", " Jagdalpur ", " Jaisinghnagar ", " Jaithari ", " Jaitpur ", " Jaitwara ", " Jamai ", " Jaora ", " Jatara ", " Jawad ", " Jhabua ", " Jobat ", " Jora ", " Kakaiya ", " Kannod ", " Kannodi ", " Karanjia ", " Kareli ", " Karera ", " Karhal ", " Karpa ", " Kasrawad ", " Katangi ", " Katni ", " Keolari ", " Khachrod ", " Khajuraho ", " Khakner ", " Khalwa ", " Khandwa ", " Khaniadhana ", " Khargone ", " Khategaon ", " Khetia ", " Khilchipur ", " Khirkiya ", " Khurai ", " Kolaras ", " Kotma ", " Kukshi ", " Kundam ", " Kurwai ", " Kusmi ", " Laher ", " Lakhnadon ", " Lamta ", " Lanji ", " Lateri ", " Laundi ", " Maheshwar ", " Mahidpurcity ", " Maihar ", " Majhagwan ", " Majholi ", " Malhargarh ", " Manasa ", " Manawar ", " Mandla ", " Mandsaur ", " Manpur ", " Mauganj ", " Mawai ", " Mehgaon ", " Mhow ", " Morena ", " Multai ", " Mungaoli ", " Nagod ", " Nainpur ", " Narsingarh ", " Narsinghpur ", " Narwar ", " Nasrullaganj ", " Nateran ", " Neemuch ", " Niwari ", " Niwas ", " Nowgaon ", " Pachmarhi ", " Pandhana ", " Pandhurna ", " Panna ", " Parasia ", " Patan ", " Patera ", " Patharia ", " Pawai ", " Petlawad ", " Pichhore ", " Piparia ", " Pohari ", " Prabhapattan ", " Punasa ", " Pushprajgarh ", " Raghogarh ", " Raghunathpur ", " Rahatgarh ", " Raisen ", " Rajgarh ", " Rajpur ", " Ratlam ", " Rehli ", " Rewa ", " Sabalgarh ", " Sagar ", " Sailana ", " Sanwer ", " Sarangpur ", " Sardarpur ", " Satna ", " Saunsar ", " Sehore ", " Sendhwa ", " Seondha ", " Seoni ", " Seonimalwa ", " Shahdol ", " Shahnagar ", " Shahpur ", " Shajapur ", " Sheopur ", " Sheopurkalan ", " Shivpuri ", " Shujalpur ", " Sidhi ", " Sihora ", " Silwani ", " Singrauli ", " Sirmour ", " Sironj ", " Sitamau ", " Sohagpur ", " Sondhwa ", " Sonkatch ", " Susner ", " Tamia ", " Tarana ", " Tendukheda ", " Teonthar ", " Thandla ", " Tikamgarh ", " Timarani ", " Udaipura ", " Ujjain ", " Umaria ", " Umariapan ", " Vidisha ", " Vijayraghogarh ", " Waraseoni ", " Zhirnia "],
        "Maharashtra": [" Achalpur ", " Aheri ", " Ahmednagar ", " Ahmedpur ", " Ajara ", " Akkalkot ", " Akola ", " Akole ", " Akot ", " Alibagh ", " Amagaon ", " Amalner ", " Ambad ", " Ambejogai ", " Amravati ", " Arjuni Merogaon ", " Arvi ", " Ashti ", " Atpadi ", " Aurangabad ", " Ausa ", " Babhulgaon ", " Balapur ", " Baramati ", " Barshi Takli ", " Barsi ", " Basmatnagar ", " Bassein ", " Beed ", " Bhadrawati ", " Bhamregadh ", " Bhandara ", " Bhir ", " Bhiwandi ", " Bhiwapur ", " Bhokar ", " Bhokardan ", " Bhoom ", " Bhor ", " Bhudargad ", " Bhusawal ", " Billoli ", " Brahmapuri ", " Buldhana ", " Butibori ", " Chalisgaon ", " Chamorshi ", " Chandgad ", " Chandrapur ", " Chandur ", " Chanwad ", " Chhikaldara ", " Chikhali ", " Chinchwad ", " Chiplun ", " Chopda ", " Chumur ", " Dahanu ", " Dapoli ", " Darwaha ", " Daryapur ", " Daund ", " Degloor ", " Delhi Tanda ", " Deogad ", " Deolgaonraja ", " Deori ", " Desaiganj ", " Dhadgaon ", " Dhanora ", " Dharani ", " Dhiwadi ", " Dhule ", " Dhulia ", " Digras ", " Dindori ", " Edalabad ", " Erandul ", " Etapalli ", " Gadhchiroli ", " Gadhinglaj ", " Gaganbavada ", " Gangakhed ", " Gangapur ", " Gevrai ", " Ghatanji ", " Golegaon ", " Gondia ", " Gondpipri ", " Goregaon ", " Guhagar ", " Hadgaon ", " Hatkangale ", " Hinganghat ", " Hingoli ", " Hingua ", " Igatpuri ", " Indapur ", " Islampur ", " Jalgaon ", " Jalna ", " Jamkhed ", " Jamner ", " Jath ", " Jawahar ", " Jintdor ", " Junnar ", " Kagal ", " Kaij ", " Kalamb ", " Kalamnuri ", " Kallam ", " Kalmeshwar ", " Kalwan ", " Kalyan ", " Kamptee ", " Kandhar ", " Kankavali ", " Kannad ", " Karad ", " Karjat ", " Karmala ", " Katol ", " Kavathemankal ", " Kedgaon ", " Khadakwasala ", " Khamgaon ", " Khed ", " Khopoli ", " Khultabad ", " Kinwat ", " Kolhapur ", " Kopargaon ", " Koregaon ", " Kudal ", " Kuhi ", " Kurkheda ", " Kusumba ", " Lakhandur ", " Langa ", " Latur ", " Lonar ", " Lonavala ", " Madangad ", " Madha ", " Mahabaleshwar ", " Mahad ", " Mahagaon ", " Mahasala ", " Mahaswad ", " Malegaon ", " Malgaon ", " Malgund ", " Malkapur ", " Malsuras ", " Malwan ", " Mancher ", " Mangalwedha ", " Mangaon ", " Mangrulpur ", " Manjalegaon ", " Manmad ", " Maregaon ", " Mehda ", " Mekhar ", " Mohadi ", " Mohol ", " Mokhada ", " Morshi ", " Mouda ", " Mukhed ", " Mul ", " Mumbai ", " Murbad ", " Murtizapur ", " Murud ", " Nagbhir ", " Nagpur ", " Nahavara ", " Nanded ", " Nandgaon ", " Nandnva ", " Nandurbar ", " Narkhed ", " Nashik ", " Navapur ", " Ner ", " Newasa ", " Nilanga ", " Niphad ", " Omerga ", " Osmanabad ", " Pachora ", " Paithan ", " Palghar ", " Pali ", " Pandharkawada ", " Pandharpur ", " Panhala ", " Paranda ", " Parbhani ", " Parner ", " Parola ", " Parseoni ", " Partur ", " Patan ", " Pathardi ", " Pathari ", " Patoda ", " Pauni ", " Peint ", " Pen ", " Phaltan ", " Pimpalner ", " Pirangut ", " Poladpur ", " Pune ", " Pusad ", " Pusegaon ", " Radhanagar ", " Rahuri ", " Raigad ", " Rajapur ", " Rajgurunagar ", " Rajura ", " Ralegaon ", " Ramtek ", " Ratnagiri ", " Raver ", " Risod ", " Roha ", " Sakarwadi ", " Sakoli ", " Sakri ", " Salekasa ", " Samudrapur ", " Sangamner ", " Sanganeshwar ", " Sangli ", " Sangola ", " Sanguem ", " Saoner ", " Saswad ", " Satana ", " Satara ", " Sawantwadi ", " Seloo ", " Shahada ", " Shahapur ", " Shahuwadi ", " Shevgaon ", " Shirala ", " Shirol ", " Shirpur ", " Shirur ", " Shirwal ", " Sholapur ", " Shri Rampur ", " Shrigonda ", " Shrivardhan ", " Sillod ", " Sinderwahi ", " Sindhudurg ", " Sindkheda ", " Sindkhedaraja ", " Sinnar ", " Sironcha ", " Soyegaon ", " Surgena ", " Talasari ", " Talegaon S.Ji Pant ", " Taloda ", " Tasgaon ", " Thane ", " Tirora ", " Tiwasa ", " Trimbak ", " Tuljapur ", " Tumsar ", " Udgir ", " Umarkhed ", " Umrane ", " Umrer ", " Urlikanchan ", " Vaduj ", " Velhe ", " Vengurla ", " Vijapur ", " Vita ", " Wada ", " Wai ", " Walchandnagar ", " Wani ", " Wardha ", " Warlydwarud ", " Warora ", " Washim ", " Wathar ", " Yavatmal ", " Yawal ", " Yeola ", " Yeotmal "],
        "Manipur": [" Bishnupur ", " Chakpikarong ", " Chandel ", " Chattrik ", " Churachandpur ", " Imphal ", " Jiribam ", " Kakching ", " Kalapahar ", " Mao ", " Mulam ", " Parbung ", " Sadarhills ", " Saibom ", " Sempang ", " Senapati ", " Sochumer ", " Taloulong ", " Tamenglong ", " Thinghat ", " Thoubal ", " Ukhrul "],
        "Meghalaya": [" Amlaren ", " Baghmara ", " Cherrapunjee ", " Dadengiri ", " Garo Hills ", " Jaintia Hills ", " Jowai ", " Khasi Hills ", " Khliehriat ", " Mariang ", " Mawkyrwat ", " Nongpoh ", " Nongstoin ", " Resubelpara ", " Ri Bhoi ", " Shillong ", " Tura ", " Williamnagar"],
        "Mizoram": [" Aizawl ", " Champhai ", " Demagiri ", " Kolasib ", " Lawngtlai ", " Lunglei ", " Mamit ", " Saiha ", " Serchhip"],
        "Nagaland": [" Dimapur ", " Jalukie ", " Kiphire ", " Kohima ", " Mokokchung ", " Mon ", " Phek ", " Tuensang ", " Wokha ", " Zunheboto "],
        "Orissa": [" Anandapur ", " Angul ", " Anugul ", " Aska ", " Athgarh ", " Athmallik ", " Attabira ", " Bagdihi ", " Balangir ", " Balasore ", " Baleswar ", " Baliguda ", " Balugaon ", " Banaigarh ", " Bangiriposi ", " Barbil ", " Bargarh ", " Baripada ", " Barkot ", " Basta ", " Berhampur ", " Betanati ", " Bhadrak ", " Bhanjanagar ", " Bhawanipatna ", " Bhubaneswar ", " Birmaharajpur ", " Bisam Cuttack ", " Boriguma ", " Boudh ", " Buguda ", " Chandbali ", " Chhatrapur ", " Chhendipada ", " Cuttack ", " Daringbadi ", " Daspalla ", " Deodgarh ", " Deogarh ", " Dhanmandal ", " Dharamgarh ", " Dhenkanal ", " Digapahandi ", " Dunguripali ", " G. Udayagiri ", " Gajapati ", " Ganjam ", " Ghatgaon ", " Gudari ", " Gunupur ", " Hemgiri ", " Hindol ", " Jagatsinghapur ", " Jajpur ", " Jamankira ", " Jashipur ", " Jayapatna ", " Jeypur ", " Jharigan ", " Jharsuguda ", " Jujumura ", " Kalahandi ", " Kalimela ", " Kamakhyanagar ", " Kandhamal ", " Kantabhanji ", " Kantamal ", " Karanjia ", " Kashipur ", " Kendrapara ", " Kendujhar ", " Keonjhar ", " Khalikote ", " Khordha ", " Khurda ", " Komana ", " Koraput ", " Kotagarh ", " Kuchinda ", " Lahunipara ", " Laxmipur ", " M. Rampur ", " Malkangiri ", " Mathili ", " Mayurbhanj ", " Mohana ", " Motu ", " Nabarangapur ", " Naktideul ", " Nandapur ", " Narlaroad ", " Narsinghpur ", " Nayagarh ", " Nimapara ", " Nowparatan ", " Nowrangapur ", " Nuapada ", " Padampur ", " Paikamal ", " Palla Hara ", " Papadhandi ", " Parajang ", " Pardip ", " Parlakhemundi ", " Patnagarh ", " Pattamundai ", " Phiringia ", " Phulbani ", " Puri ", " Puruna Katak ", " R. Udayigiri ", " Rairakhol ", " Rairangpur ", " Rajgangpur ", " Rajkhariar ", " Rayagada ", " Rourkela ", " Sambalpur ", " Sohela ", " Sonapur ", " Soro ", " Subarnapur ", " Sunabeda ", " Sundergarh ", " Surada ", " T. Rampur ", " Talcher ", " Telkoi ", " Titlagarh ", " Tumudibandha ", " Udala ", " Umerkote "],
        "Pondicherry": [" Bahur ", " Karaikal ", " Mahe ", " Pondicherry ", " Purnankuppam ", " Valudavur ", " Villianur ", " Yanam "],
        "Punjab": [" Abohar ", " Ajnala ", " Amritsar ", " Balachaur ", " Barnala ", " Batala ", " Bathinda ", " Chandigarh ", " Dasua ", " Dinanagar ", " Faridkot ", " Fatehgarh Sahib ", " Fazilka ", " Ferozepur ", " Garhashanker ", " Goindwal ", " Gurdaspur ", " Guruharsahai ", " Hoshiarpur ", " Jagraon ", " Jalandhar ", " Jugial ", " Kapurthala ", " Kharar ", " Kotkapura ", " Ludhiana ", " Malaut ", " Malerkotla ", " Mansa ", " Moga ", " Muktasar ", " Nabha ", " Nakodar ", " Nangal ", " Nawanshahar ", " Nawanshahr ", " Pathankot ", " Patiala ", " Patti ", " Phagwara ", " Phillaur ", " Phulmandi ", " Quadian ", " Rajpura ", " Raman ", " Rayya ", " Ropar ", " Rupnagar ", " Samana ", " Samrala ", " Sangrur ", " Sardulgarh ", " Sarhind ", " SAS Nagar ", " Sultanpur Lodhi ", " Sunam ", " Tanda Urmar ", " Tarn Taran ", " Zira "],
        "Rajasthan": [" Abu Road ", " Ahore ", " Ajmer ", " Aklera ", " Alwar ", " Amber ", " Amet ", " Anupgarh ", " Asind ", " Aspur ", " Atru ", " Bagidora ", " Bali ", " Bamanwas ", " Banera ", " Bansur ", " Banswara ", " Baran ", " Bari ", " Barisadri ", " Barmer ", " Baseri ", " Bassi ", " Baswa ", " Bayana ", " Beawar ", " Begun ", " Behror ", " Bhadra ", " Bharatpur ", " Bhilwara ", " Bhim ", " Bhinmal ", " Bikaner ", " Bilara ", " Bundi ", " Chhabra ", " Chhipaborad ", " Chirawa ", " Chittorgarh ", " Chohtan ", " Churu ", " Dantaramgarh ", " Dausa ", " Deedwana ", " Deeg ", " Degana ", " Deogarh ", " Deoli ", " Desuri ", " Dhariawad ", " Dholpur ", " Digod ", " Dudu ", " Dungarpur ", " Dungla ", " Fatehpur ", " Gangapur ", " Gangdhar ", " Gerhi ", " Ghatol ", " Girwa ", " Gogunda ", " Hanumangarh ", " Hindaun ", " Hindoli ", " Hurda ", " Jahazpur ", " Jaipur ", " Jaisalmer ", " Jalore ", " Jhalawar ", " Jhunjhunu ", " Jodhpur ", " Kaman ", " Kapasan ", " Karauli ", " Kekri ", " Keshoraipatan ", " Khandar ", " Kherwara ", " Khetri ", " Kishanganj ", " Kishangarh ", " Kishangarhbas ", " Kolayat ", " Kota ", " Kotputli ", " Kotra ", " Kotri ", " Kumbalgarh ", " Kushalgarh ", " Ladnun ", " Ladpura ", " Lalsot ", " Laxmangarh ", " Lunkaransar ", " Mahuwa ", " Malpura ", " Malvi ", " Mandal ", " Mandalgarh ", " Mandawar ", " Mangrol ", " Marwar-Jn ", " Merta ", " Nadbai ", " Nagaur ", " Nainwa ", " Nasirabad ", " Nathdwara ", " Nawa ", " Neem Ka Thana ", " Newai ", " Nimbahera ", " Nohar ", " Nokha ", " Onli ", " Osian ", " Pachpadara ", " Pachpahar ", " Padampur ", " Pali ", " Parbatsar ", " Phagi ", " Phalodi ", " Pilani ", " Pindwara ", " Pipalda ", " Pirawa ", " Pokaran ", " Pratapgarh ", " Raipur ", " Raisinghnagar ", " Rajgarh ", " Rajsamand ", " Ramganj Mandi ", " Ramgarh ", " Rashmi ", " Ratangarh ", " Reodar ", " Rupbas ", " Sadulshahar ", " Sagwara ", " Sahabad ", " Salumber ", " Sanchore ", " Sangaria ", " Sangod ", " Sapotra ", " Sarada ", " Sardarshahar ", " Sarwar ", " Sawai Madhopur ", " Shahapura ", " Sheo ", " Sheoganj ", " Shergarh ", " Sikar ", " Sirohi ", " Siwana ", " Sojat ", " Sri Dungargarh ", " Sri Ganganagar ", " Sri Karanpur ", " Sri Madhopur ", " Sujangarh ", " Taranagar ", " Thanaghazi ", " Tibbi ", " Tijara ", " Todaraisingh ", " Tonk ", " Udaipur ", " Udaipurwati ", " Uniayara ", " Vallabhnagar ", " Viratnagar "],
        "Sikkim": [" Barmiak ", " Be ", " Bhurtuk ", " Chhubakha ", " Chidam ", " Chubha ", " Chumikteng ", " Dentam ", " Dikchu ", " Dzongri ", " Gangtok ", " Gauzing ", " Gyalshing ", " Hema ", " Kerung ", " Lachen ", " Lachung ", " Lema ", " Lingtam ", " Lungthu ", " Mangan ", " Namchi ", " Namthang ", " Nanga ", " Nantang ", " Naya Bazar ", " Padamachen ", " Pakhyong ", " Pemayangtse ", " Phensang ", " Rangli ", " Rinchingpong ", " Sakyong ", " Samdong ", " Singtam ", " Siniolchu ", " Sombari ", " Soreng ", " Sosing ", " Tekhug ", " Temi ", " Tsetang ", " Tsomgo ", " Tumlong ", " Yangang ", " Yumtang "],
        "Tamil Nadu": [" Ambasamudram ", " Anamali ", " Arakandanallur ", " Arantangi ", " Aravakurichi ", " Ariyalur ", " Arkonam ", " Arni ", " Aruppukottai ", " Attur ", " Avanashi ", " Batlagundu ", " Bhavani ", " Chengalpattu ", " Chengam ", " Chennai ", " Chidambaram ", " Chingleput ", " Coimbatore ", " Courtallam ", " Cuddalore ", " Cumbum ", " Denkanikoitah ", " Devakottai ", " Dharampuram ", " Dharmapuri ", " Dindigul ", " Erode ", " Gingee ", " Gobichettipalayam ", " Gudalur ", " Gudiyatham ", " Harur ", " Hosur ", " Jayamkondan ", " Kallkurichi ", " Kanchipuram ", " Kangayam ", " Kanyakumari ", " Karaikal ", " Karaikudi ", " Karur ", " Keeranur ", " Kodaikanal ", " Kodumudi ", " Kotagiri ", " Kovilpatti ", " Krishnagiri ", " Kulithalai ", " Kumbakonam ", " Kuzhithurai ", " Madurai ", " Madurantgam ", " Manamadurai ", " Manaparai ", " Mannargudi ", " Mayiladuthurai ", " Mayiladutjurai ", " Mettupalayam ", " Metturdam ", " Mudukulathur ", " Mulanur ", " Musiri ", " Nagapattinam ", " Nagarcoil ", " Namakkal ", " Nanguneri ", " Natham ", " Neyveli ", " Nilgiris ", " Oddanchatram ", " Omalpur ", " Ootacamund ", " Ooty ", " Orathanad ", " Palacode ", " Palani ", " Palladum ", " Papanasam ", " Paramakudi ", " Pattukottai ", " Perambalur ", " Perundurai ", " Pollachi ", " Polur ", " Pondicherry ", " Ponnamaravathi ", " Ponneri ", " Pudukkottai ", " Rajapalayam ", " Ramanathapuram ", " Rameshwaram ", " Ranipet ", " Rasipuram ", " Salem ", " Sankagiri ", " Sankaran ", " Sathiyamangalam ", " Sivaganga ", " Sivakasi ", " Sriperumpudur ", " Srivaikundam ", " Tenkasi ", " Thanjavur ", " Theni ", " Thirumanglam ", " Thiruraipoondi ", " Thoothukudi ", " Thuraiyure ", " Tindivanam ", " Tiruchendur ", " Tiruchengode ", " Tiruchirappalli ", " Tirunelvelli ", " Tirupathur ", " Tirupur ", " Tiruttani ", " Tiruvallur ", " Tiruvannamalai ", " Tiruvarur ", " Tiruvellore ", " Tiruvettipuram ", " Trichy ", " Tuticorin ", " Udumalpet ", " Ulundurpet ", " Usiliampatti ", " Uthangarai ", " Valapady ", " Valliyoor ", " Vaniyambadi ", " Vedasandur ", " Vellore ", " Velur ", " Vilathikulam ", " Villupuram ", " Virudhachalam ", " Virudhunagar ", " Wandiwash ", " Yercaud "],
        "Tripura": [" Agartala ", " Ambasa ", " Bampurbari ", " Belonia ", " Dhalai ", " Dharam Nagar ", " Kailashahar ", " Kamal Krishnabari ", " Khopaiyapara ", " Khowai ", " Phuldungsei ", " Radha Kishore Pur ", " Tripura "],
        "Uttar Pradesh": [" Achhnera ", " Agra ", " Akbarpur ", " Aliganj ", " Aligarh ", " Allahabad ", " Ambedkar Nagar ", " Amethi ", " Amiliya ", " Amroha ", " Anola ", " Atrauli ", " Auraiya ", " Azamgarh ", " Baberu ", " Badaun ", " Baghpat ", " Bagpat ", " Baheri ", " Bahraich ", " Ballia ", " Balrampur ", " Banda ", " Bansdeeh ", " Bansgaon ", " Bansi ", " Barabanki ", " Bareilly ", " Basti ", " Bhadohi ", " Bharthana ", " Bharwari ", " Bhogaon ", " Bhognipur ", " Bidhuna ", " Bijnore ", " Bikapur ", " Bilari ", " Bilgram ", " Bilhaur ", " Bindki ", " Bisalpur ", " Bisauli ", " Biswan ", " Budaun ", " Budhana ", " Bulandshahar ", " Bulandshahr ", " Capianganj ", " Chakia ", " Chandauli ", " Charkhari ", " Chhata ", " Chhibramau ", " Chirgaon ", " Chitrakoot ", " Chunur ", " Dadri ", " Dalmau ", " Dataganj ", " Debai ", " Deoband ", " Deoria ", " Derapur ", " Dhampur ", " Domariyaganj ", " Dudhi ", " Etah ", " Etawah ", " Faizabad ", " Farrukhabad ", " Fatehpur ", " Firozabad ", " Garauth ", " Garhmukteshwar ", " Gautam Buddha Nagar ", " Ghatampur ", " Ghaziabad ", " Ghazipur ", " Ghosi ", " Gonda ", " Gorakhpur ", " Gunnaur ", " Haidergarh ", " Hamirpur ", " Hapur ", " Hardoi ", " Harraiya ", " Hasanganj ", " Hasanpur ", " Hathras ", " Jalalabad ", " Jalaun ", " Jalesar ", " Jansath ", " Jarar ", " Jasrana ", " Jaunpur ", " Jhansi ", " Jyotiba Phule Nagar ", " Kadipur ", " Kaimganj ", " Kairana ", " Kaisarganj ", " Kalpi ", " Kannauj ", " Kanpur ", " Karchhana ", " Karhal ", " Karvi ", " Kasganj ", " Kaushambi ", " Kerakat ", " Khaga ", " Khair ", " Khalilabad ", " Kheri ", " Konch ", " Kumaon ", " Kunda ", " Kushinagar ", " Lalganj ", " Lalitpur ", " Lucknow ", " Machlishahar ", " Maharajganj ", " Mahoba ", " Mainpuri ", " Malihabad ", " Mariyahu ", " Math ", " Mathura ", " Mau ", " Maudaha ", " Maunathbhanjan ", " Mauranipur ", " Mawana ", " Meerut ", " Mehraun ", " Meja ", " Mirzapur ", " Misrikh ", " Modinagar ", " Mohamdabad ", " Mohamdi ", " Moradabad ", " Musafirkhana ", " Muzaffarnagar ", " Nagina ", " Najibabad ", " Nakur ", " Nanpara ", " Naraini ", " Naugarh ", " Nawabganj ", " Nighasan ", " Noida ", " Orai ", " Padrauna ", " Pahasu ", " Patti ", " Pharenda ", " Phoolpur ", " Phulpur ", " Pilibhit ", " Pitamberpur ", " Powayan ", " Pratapgarh ", " Puranpur ", " Purwa ", " Raibareli ", " Rampur ", " Ramsanehi Ghat ", " Rasara ", " Rath ", " Robertsganj ", " Sadabad ", " Safipur ", " Sagri ", " Saharanpur ", " Sahaswan ", " Sahjahanpur ", " Saidpur ", " Salempur ", " Salon ", " Sambhal ", " Sandila ", " Sant Kabir Nagar ", " Sant Ravidas Nagar ", " Sardhana ", " Shahabad ", " Shahganj ", " Shahjahanpur ", " Shikohabad ", " Shravasti ", " Siddharthnagar ", " Sidhauli ", " Sikandra Rao ", " Sikandrabad ", " Sitapur ", " Siyana ", " Sonbhadra ", " Soraon ", " Sultanpur ", " Tanda ", " Tarabganj ", " Tilhar ", " Unnao ", " Utraula ", " Varanasi ", " Zamania "],
        "Uttaranchal": [" Almora ", " Bageshwar ", " Bhatwari ", " Chakrata ", " Chamoli ", " Champawat ", " Dehradun ", " Deoprayag ", " Dharchula ", " Dunda ", " Haldwani ", " Haridwar ", " Joshimath ", " Karan Prayag ", " Kashipur ", " Khatima ", " Kichha ", " Lansdown ", " Munsiari ", " Mussoorie ", " Nainital ", " Pantnagar ", " Partapnagar ", " Pauri Garhwal ", " Pithoragarh ", " Purola ", " Rajgarh ", " Ranikhet ", " Roorkee ", " Rudraprayag ", " Tehri Garhwal ", " Udham Singh Nagar ", " Ukhimath ", " Uttarkashi "],
        "West Bengal": [" Adra ", " Alipurduar ", " Amlagora ", " Arambagh ", " Asansol ", " Balurghat ", " Bankura ", " Bardhaman ", " Basirhat ", " Berhampur ", " Bethuadahari ", " Birbhum ", " Birpara ", " Bishanpur ", " Bolpur ", " Bongoan ", " Bulbulchandi ", " Burdwan ", " Calcutta ", " Canning ", " Champadanga ", " Contai ", " Cooch Behar ", " Daimond Harbour ", " Dalkhola ", " Dantan ", " Darjeeling ", " Dhaniakhali ", " Dhuliyan ", " Dinajpur ", " Dinhata ", " Durgapur ", " Gangajalghati ", " Gangarampur ", " Ghatal ", " Guskara ", " Habra ", " Haldia ", " Harirampur ", " Harishchandrapur ", " Hooghly ", " Howrah ", " Islampur ", " Jagatballavpur ", " Jalpaiguri ", " Jhalda ", " Jhargram ", " Kakdwip ", " Kalchini ", " Kalimpong ", " Kalna ", " Kandi ", " Karimpur ", " Katwa ", " Kharagpur ", " Khatra ", " Krishnanagar ", " Mal Bazar ", " Malda ", " Manbazar ", " Mathabhanga ", " Medinipur ", " Mekhliganj ", " Mirzapur ", " Murshidabad ", " Nadia ", " Nagarakata ", " Nalhati ", " Nayagarh ", " Parganas ", " Purulia ", " Raiganj ", " Rampur Hat ", " Ranaghat ", " Seharabazar ", " Siliguri ", " Suri ", " Takipur ", " Tamluk"]
    };

    function handlestateSelect(e) {
        const stateSel = e.target.value;
        const citySel = stateSel !== "" ? State[stateSel] : "";
        setDistrict(citySel);
        setstate(stateSel);
        setcity("");
        // setselectedDistrict("");
    }

    function handleCitySelect(e) {
        const DistrictSel = e.target.value;
        setcity(DistrictSel);
    }

    const history = useNavigate();

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setname(e.target.value)
        }
        else if (e.target.name == 'number') {
            setnumber(e.target.value)
        }
        else if (e.target.name == 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setpassword(e.target.value)
        }
        else if (e.target.name == 'state') {
            setstate(e.target.value)
        }
        else if (e.target.name == 'city') {
            setcity(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch(`https://sankat-backend.onrender.com/api/auth/usersignup`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ name, email, number, city, state, password }),


        });
        const json = await response.json();
        if (json.success) {
            setLoading(false);
            localStorage.setItem('token', json.authtoken);
            history('/');
        }
        else {
            setLoading(false);
            toast.error("Some Error Occured");
            /* props.showAlert("Invalid Credentials", "danger"); */
        }
    }

    const stateList = Object.keys(State).map((key) => ({
        name: key,
    }));


    return (

        <div className='w-full h-[100vh] flex items-center justify-center'>
            <form ref={form} onSubmit={handleSubmit} className='2xl:w-[1000px] xl:w-[500px] lg:w-[450px] w-full bg-white'>

                {/* Form Container */}

                <div className='flex flex-col w-full h-full justify-start sm:py-10 sm:px-6 px-4 py-8 gap-y-6'>

                    {/* Heading */}

                    <h1 className="2xl:text-7xl sm:text-4xl text-2xl text-green-900 text-center font-bold tracking-wide">Register
                        <span className='text-black'> Yourself For Your <span className='uppercase text-green-900'>sarthi</span></span>
                    </h1>

                    <p class="text-gray-600 text-center">Sign up to your account.</p>

                    {/* Input Fields */}

                    {/* Name */}

                    <div className="relative z-0 w-full group h-[53px]">

                        <input type="text" name="name" id="name" value={name} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />

                        <label htmlFor="name" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>

                    </div>

                    {/* Email */}

                    <div className="relative z-0 w-full group h-[53px]">

                        <input type="email" name="email" id="email" value={email} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />

                        <label htmlFor="email" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

                    </div>

                    {/* Mobile Number */}

                    <div className="relative z-0 w-full group h-[53px]">

                        <input type="number" name="number" id="number" value={number} onChange={handleChange} className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />

                        <label htmlFor="number" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact number</label>

                    </div>

                    {/* Password */}

                    <div className="relative z-0 w-full group h-[53px]">

                        <input type="password" name="password" id="password" value={password} onChange={handleChange} className="block px-0 h-full w-full text-lg 2xl:text-[1.5rem] text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />

                        <label htmlFor="password" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

                    </div>

                    {/* State and City */}

                    <div className='flex flex-row gap-x-4 justify-between items-center'>

                        {/* State */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="state" id="state" value={state} className="pt-4 block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer focus:bg-transparent" placeholder=" " required />

                            <select
                                name="State"
                                onChange={(e) => handlestateSelect(e)}
                                value={state}
                                className='absolute top-[20px] focus:outline-none w-full'
                            >
                                <option value="Select State">Select State</option>
                                {stateList.map((state, key) => (
                                    <option key={key} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="state" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>

                        </div>

                        {/* district */}

                        <div className="relative z-0 w-full group h-[53px]">

                            <input type="text" name="city" id="city" value={city} onChange={handleChange} className="pt-4 block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer focus:bg-transparent" placeholder=" " required />

                            <select
                                name="District"
                                onChange={(e) => handleCitySelect(e)}
                                value={city}
                                className='absolute top-[20px] focus:outline-none w-full'
                            >
                                <option value="Select City">Select City</option>
                                {District.map((city, key) => (
                                    <option key={key} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="district" className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>

                        </div>

                    </div>

                    {/* Submit Button */}

                    <div className='2xl:h-[60px] h-[42px] 2xl:text-[1.5rem] flex sm:justify-between justify-center items-center'>

                        <button type='submit' value='Send' className="relative inline-flex items-center justify-center border-2 border-black px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">

                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-300 via-green-400 to-blue-400 group-hover:opacity-100"></span>

                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>

                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>

                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

                            <span className="relative"> {loading?<DotSpinner size={40} speed={0.9} color="black"/>:"Sign Up"} &rarr;</span>

                        </button>

                        <Link to='/login' className="2xl:text-xl sm:text-lg text-lg text-green-900 text-center font-medium tracking-wide underline">SignIn
                        </Link>

                    </div>

                </div>

            </form>
        </div>
    )
}

export default Signup