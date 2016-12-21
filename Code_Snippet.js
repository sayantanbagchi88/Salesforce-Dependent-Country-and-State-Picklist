



<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    <!--- Include required libraries --->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js" />
    <script src="/soap/ajax/36.0/connection.js" type="text/javascript"></script>
    <script src="/soap/ajax/36.0/apex.js" type="text/javascript"></script>
    <script src="../static/102010/js/picklist.js"></script>

    <script type="text/javascript">

    var country_arr = new Array("American Samoa", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Australia", "Austria", "Bahamas", "Bangladesh", "Barbados", "Belgium", "Belize", "Bermuda", "Bolivia", "Brazil", "Brunei Darussalam", "Cambodia", "Canada", "Cayman Islands", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica", "Cyprus", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Faroe Islands", "Finland", "France", "French Guiana", "French Polynesia", "Germany", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guyana", "Haiti", "Honduras", "Hong Kong", "India", "Indonesia", "Ireland", "Italy", "Jamaica", "Japan", "Laos", "Liechtenstein", "Macao", "Malaysia", "Maldives", "Martinique", "Mauritania", "Mexico", "Micronesia, Federated States Of", "Monaco", "Montserrat", "Myanmar", "Nepal", "Netherlands", "Norway", "Nepal", "New Zealand", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Portugal", "Paraguay", "Reunion", "Russian Federation", "Solomon Islands", "Sweden", "Suriname", "El Salvador", "Swaziland", "Turks and Caicos Islands", "Thailand", "Timor-Leste", "Trinidad and Tobago", "Taiwan", "United Kingdom", "United States", "Uruguay", "Saint Vincent and the Grenadines", "Venezuela", "Virgin Islands (British)", "Vietnam", "Vanuatu", "Samoa", "South Africa");
    // States
    var s_a = new Array();
    s_a[0]="";
    s_a[1]="";
    s_a[2]="";
    s_a[3]="";
    s_a[4]="BUENOS AIRES|CATAMARCA|CHACO|Chubut|CORDOBA|CORRIENTES|ENTRE RIOS|FORMOSA|JUJUY|LA PAMPA|LA RIOJA|MENDOZA|MISIONES|NEUQUEN|RIO NEGRO|SALTA|SAN JUAN|SAN LUIS|SANTA CRUZ|SANTA FE|SANTIAGO DEL ESTERO|TIERRA DEL FUEGO|TUCUMAN";
    s_a[5]="";
    s_a[6]="AUSTRALIAN CAPITAL TERRITORY|NEW SOUTH WALES|NORTHERN TERRITORY|QUEENSLAND|SOUTH AUSTRALIA|TASMANIA|VICTORIA|WESTERN AUSTRALIA";
    s_a[7]="Burgenland|Salzburg|Vienna|Vorarlberg";
    s_a[8]="";
    s_a[9]="";
    s_a[10]="";
    s_a[11]="ANTWERP|FLEMISH BRABANT|HAINAUT|LIMBURG|LUXEMBOURG|NAMUR|WALLOON BRABANT";
    s_a[12]="";
    s_a[13]="";
    s_a[14]="";
    s_a[15]="ACRE|ALAGOAS|AMAPA|AMAZONAS|BAHIA|CEARA|DISTRITO FEDERAL|ESPIRITO SANTO|GOIAS|MARANHAO|MATO GROSSO|MATO GROSSO DO SUL|MINAS GERAIS|PARA|PARAIBA|PARANA|PERNAMBUCO|PIAUI|RIO DE JANEIRO|RIO GRANDE DO NORTE|RIO GRANDE DO SUL|RONDONIA|RORAIMA|SANTA CATARINA|SAO PAULO|SERGIPE|TOCANTINS";
    s_a[16]="";
    s_a[17]="";
    s_a[18]="ALBERTA|BRITISH COLUMBIA|MANITOBA|NEW BRUNSWICK|NEWFOUNDLAND|NORTHWEST TERRITORIES|NOVA SCOTIA|NUNAVUT|ONTARIO|PRINCE EDWARD ISLAND|QUEBEC|SASKATCHEWAN|YUKON TERRITORY";
    s_a[19]="";
    s_a[20]="AISEN|ANTOFAGASTA|VALPARAISO";
    s_a[21]="Anhui|Beijing|Chongqing|Fujian|Gansu|Guangdong|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xizang|Yunnan|Zhejiang";
    s_a[22]="";
    s_a[23]="";
    s_a[24]="";
    s_a[25]="";
    s_a[26]="";
    s_a[27]="";
    s_a[28]="";
    s_a[29]="";
    s_a[30]="";
    s_a[31]="";
    s_a[32]="AHVENANMAA";
    s_a[33]="";
    s_a[34]="";
    s_a[35]="";
    s_a[36]="";
    s_a[37]="";
    s_a[38]="";
    s_a[39]="";
    s_a[40]="";
    s_a[41]="";
    s_a[42]="";
    s_a[43]="";
    s_a[44]="";
    s_a[45]="";
    s_a[46]="Andhra Pradesh|Arunachal Pradesh|Assam|BIHAR|Chandigarh|Chhattisgarh|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|ORISSA|Puducherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttarakhand|West Bengal";
    s_a[47]="";
    s_a[48]="";
    s_a[49]="AGRIGENTO|ALESSANDRIA|ANCONA|AOSTA|AREZZO|ASCOLI PICENO|ASTI|AVELLINO|BARI|BELLUNO|BENEVENTO|BERGAMO|BIELLA|BOLOGNA|BOLZANO|BRESCIA|BRINDISI|CAGLIARI|CALTANISSETTA|CAMPOBASSO|CARBONIA-IGLESIAS|CASERTA|CATANIA|CATANZARO|CHIETI|COMO|COSENZA|CREMONA|CROTONE|CUNEO|ENNA|FERRARA|FOGGIA|FROSINONE|GORIZIA|GROSSETO|IMPERIA|ISERNIA|LA SPEZIA|LATINA|LECCE|LECCO|LIVORNO|LODI|LUCCA|MACERATA|MATERA|MEDIO CAMPIDANO|MESSINA|MODENA|NOVARA|NUORO|OGLIASTRA|OLBIA-TEMPIO|ORISTANO|PALERMO|PARMA|PAVIA|PERUGIA|PESARO E URBINO|PESCARA|PIACENZA|PISA|PISTOIA|PORDENONE|POTENZA|PRATO|RAGUSA|RAVENNA|RIETI|RIMINI|ROVIGO|SALERNO|SASSARI|SAVONA|SIENA|SONDRIO|TARANTO|TERAMO|TERNI|TRAPANI|TRENTO|TREVISO|TRIESTE|UDINE|VARESE|VERBANO-CUSIO-OSSOLA|VERCELLI|VERONA|VIBO VALENTIA|VICENZA|VITERBO";
    s_a[50]="";
    s_a[51]="AICHI|AKITA|AOMORI|CHIBA|EHIME|FUKUI|FUKUOKA|FUKUSHIMA|GIFU|HIROSHIMA|HOKKAIDO|HYOGO|Ibaraki|ISHIKAWA|IWATE|KAGAWA|KAGOSHIMA|KANAGAWA|KOCHI|KUMAMOTO|KYOTO|MIE|MIYAGI|MIYAZAKI|NAGANO|NAGASAKI|NARA|NIIGATA|OITA|OKAYAMA|OKINAWA|OSAKA|SAGA|SAITAMA|SHIGA|SHIMANE|SHIZUOKA|TOCHIGI|TOKUSHIMA|TOKYO|TOTTORI|TOYAMA|Wakayama|YAMAGATA|YAMAGUCHI|YAMANASHI";
    s_a[52]="";
    s_a[53]="";
    s_a[54]="";
    s_a[55]="";
    s_a[56]="";
    s_a[57]="";
    s_a[58]="";
    s_a[59]="AGUASCALIENTES|BAJA CALIFORNIA|BAJA CALIFORNIA SUR|CAMPECHE|CHIAPAS|CHIHUAHUA|COAHUILA|COLIMA|DISTRITO FEDERAL|DURANGO|GUANAJUATO|GUERRERO|HIDALGO|JALISCO|MICHOACAN|MORELOS|NAYARIT|NUEVO LEON|OAXACA|PUEBLA|QUERETARO|QUINTANA ROO|SAN LUIS POTOSI|SINALOA|SONORA|TABASCO|TAMAULIPAS|TLAXCALA|VERACRUZ|YUCATAN|ZACATECAS";
    s_a[60]="";
    s_a[61]="";
    s_a[62]="";
    s_a[63]="";
    s_a[64]="";
    s_a[65]="DRENTHE|FLEVOLAND|FRIESLAND|GELDERLAND|GRONINGEN|LIMBURG|NOORD-BRABANT|NOORD-HOLLAND|OVERIJSSEL|UTRECHT|ZEELAND|ZUID-HOLLAND";
    s_a[66]="";
    s_a[67]="";
    s_a[68]="";
    s_a[69]="";
    s_a[70]="";
    s_a[71]="";
    s_a[72]="";
    s_a[73]="";
    s_a[74]="";
    s_a[75]="";
    s_a[76]="";
    s_a[77]="";
    s_a[78]="";
    s_a[79]="";
    s_a[80]="";
    s_a[81]="BLEKINGE|DALARNA|GAVLEBORG|GOTLAND|HALLAND|JAMTLAND|JONKOPING|KALMAR|KRONOBERG|NORRBOTTEN|OREBRO|OSTERGOTLAND|SKANE|SODERMANLAND|STOCKHOLM|UPPSALA|VARMLAND|VASTERBOTTEN|VASTERNORRLAND|VASTMANLAND|VASTRA GOTALAND";
    s_a[82]="";
    s_a[83]="";
    s_a[84]="";
    s_a[85]="";
    s_a[86]="";
    s_a[87]="";
    s_a[88]="";
    s_a[89]="";
    s_a[90]="";
    s_a[91]="Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Puerto Rico|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virgin Islands|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
    s_a[92]="";
    s_a[93]="";
    s_a[94]="";
    s_a[95]="";
    s_a[96]="";
    s_a[97]="";
    s_a[98]="";
    s_a[99]="";


    function populateStates( countryElementId, stateElementId ){
        
        var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

        //var stateElement = document.getElementById( stateElementId );
        var stateElement = $("#page\\:MainForm\\:MainPageBlock\\:stateID");
        
        stateElement.length=0;  // Fixed by Julian Woods
        stateElement.options[0] = new Option('Select State','');
        stateElement.selectedIndex = 0;
        
        var state_arr = s_a[selectedCountryIndex].split("|");
        
        for (var i=0; i<state_arr.length; i++) {
            stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
        }
        
        
    }

    function createCountries(){
        var country_sl="{!OpwrapAccBillCountry}";
        var sel=$.inArray(country_sl, country_arr);
        console.log("sel="+sel);
        var countryElement = $("#countryID");    
        countryElement.find('option').remove().end().append('<option value="">--Select--</option>');
        
        var part1='<option value=\"';
        var part2='\">';
        var part3='</option>';  
        
        for (var i=0; i<country_arr.length; i++) {
             
            //countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
            
            //console.log(country_arr[i]);
            countryElement.append(part1+country_arr[i]+part2+country_arr[i]+part3);
        }
        
        countryElement.val(country_sl);
        loadDependentPicklist();
        
        var stateElement = $("#stateID");
        var state_sl="{!OpwrapAccBillState}";
        stateElement.val(state_sl);
    }



    function loadDependentPicklist(){
        var countryElementId = $("#countryID");
        var countryElement_hid = $("#page\\:MainForm\\:MainPageBlock\\:country_hid");
        countryElement_hid.val(countryElementId.val());
        var stateElement = $("#stateID");
        stateElement.find('option').remove().end().append('<option value="">--Select--</option>');
        
        var selectedCountryIndex=countryElementId.prop('selectedIndex');
        var state_arr = s_a[selectedCountryIndex].split("|");
        
        var part1='<option value=\"';
        var part2='\">';
        var part3='</option>';
            
        for (var i=0; i<state_arr.length; i++) {
            //stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
            console.log("state_arr[i]="+state_arr[i]);
            stateElement.append(part1+state_arr[i]+part2+state_arr[i]+part3);
        }
        
        
    }
    function stateSel(){
     
        var stateElement = $("#stateID");
        var stateElement_hid=$("#page\\:MainForm\\:MainPageBlock\\:state_hid");
        stateElement_hid.val(stateElement.val());
    }
    </script>

    <script type="text/javascript">
        $( document ).ready(function() {
            console.log( "ready!" );
            createCountries();
        });
    </script>

<!-- end snippet -->

