         Pentru a porni programul trebuie sa fie instalat Node.js
         si GoLive. Facem click pe GoLive si pornim Proiectul.
       In acest proiect am folosit urmatoarele Design Patternuri
   
    Singleton - este utilizat in clasa CarDepot. Acest pattern permite
    crearea unei singure instante a unei clase si accesul la acea instanta 
    din orice parte a programului. In acest exemplu, clasa CarDepot este 
    singleton deoarece trebuie sa existe o singura instanta a acesteia in 
    aplicatie, iar aceasta instanta poate fi accesata din orice loc din cod.
    
    Factory Method - este utilizat in clasa CarListViewFactory. Acest pattern 
    permite crearea unui obiect fara a specifica clasa exacta a obiectului care 
    va fi creat. In acest exemplu, clasa CarListViewFactory este un factory 
    method pentru crearea de obiecte de tip CarListView.
    
    Builder - este utilizat in clasa CarListViewBuilder. Acest pattern permite 
    crearea unui obiect complex prin intermediul unui pas cu pas. In acest 
    exemplu, clasa CarListViewBuilder este un builder pentru obiecte de tip 
    CarListView.
    
    Observer - este utilizat in clasele CarDepot si CarDepotRenderer. Acest 
    pattern permite notificarea altor obiecte atunci cand se produce o schimbare 
    de stare intr-un obiect. In acest exemplu, clasa CarDepot notifica clasa 
    CarDepotRenderer atunci cand se adauga sau se sterge un obiect Car.
    
    Abstract Factory - este utilizat in clasele BasicCarListViewFactory si 
    ColorfulCarListViewFactory. Acest pattern permite crearea unei familii 
    de obiecte conexe fara a specifica clasa exacta a obiectelor care vor fi create. 
    In acest exemplu, clasele BasicCarListViewFactory si ColorfulCarListViewFactory 
    sunt abstract factory pentru crearea de obiecte de tip CarListView.
