Vstup programu:

Zada sa sirka a dlzka hracieho planu:
  Maximalne 100x100, minimalne 10x10
  Vytvori sa takto "sachovnica" obdlznikoveho tvaru ktora bude sluzit na rozmiestnenie hracov
  
Inicializacia hracov
  Do hracieho planu sa vygeneruju hraci podla nasledujucich pravidiel
    Prvy vytvoreny hrac je typu A (mozeme pridelit farbu) na nahodnej pozicii
    Kazdy dalsi hrac bude mat nahodne generovanu poziciu.
    Pozicia noveho hraca nesmie susedit s existujucimi hracmi. Za susediacich hracov sa povazuju taki ktory zdielaju hranu alebo vrchol sachovnice.
    Striedavo sa generuje typ hraca B a A, az pokial uz nieje mozne vytvorit dalsieho hraca.
    Vtedy sa generovanie konci. 
    Kazdy hrac zabera presne jedno hracie pole. 
    Zobrazit rozostavenie hracov akymkolvek vizualnym sposobom.
