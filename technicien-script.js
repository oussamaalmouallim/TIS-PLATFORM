// Données FAQ pour les techniciens
const techFAQs = [
    {
        question: "Comment programmer un clavier Luna ?",
        answer: "Pour programmer un clavier Luna, connectez-vous d'abord au module avec DevSearch. Ensuite, accédez à l'onglet 'Programmation > Claviers'. Sélectionnez le modèle Luna et suivez l'assistant de configuration pour définir les fonctions des touches et les scénarios associés."
    },
    {
        question: "Comment configurer une passerelle IP ?",
        answer: "Pour configurer une passerelle IP, assurez-vous qu'elle est connectée au réseau TIS Bus. Dans DevSearch, allez dans 'Découverte de périphériques', localisez la passerelle, puis cliquez sur 'Configurer'. Définissez ensuite l'adresse IP (fixe ou DHCP) et les paramètres de port."
    },
    {
        question: "Comment calculer l'alimentation nécessaire pour une installation ?",
        answer: "Pour calculer l'alimentation, additionnez la consommation de tous les modules en mA. Prévoyez une marge de sécurité de 20%. Pour les grandes installations, répartissez l'alimentation avec plusieurs modules d'alimentation placés stratégiquement pour éviter les chutes de tension sur le bus."
    },
    {
        question: "Comment mettre à jour le firmware des modules ?",
        answer: "Utilisez DevSearch pour mettre à jour le firmware. Connectez-vous au système, allez dans 'Maintenance > Mises à jour firmware', sélectionnez les modules à mettre à jour et suivez les instructions. Ne débranchez pas l'alimentation pendant la mise à jour."
    },
    {
        question: "Comment diagnostiquer les problèmes de communication sur le TIS BUS ?",
        answer: "En cas de problèmes sur le TIS BUS, vérifiez d'abord le câblage (polarité, continuité), puis la présence des résistances de terminaison (120Ω) aux extrémités du bus. Utilisez l'outil de diagnostic dans DevSearch pour analyser le trafic et identifier les collisions ou les périphériques défectueux."
    },
    {
        question: "Comment configurer un variateur pour des LED ?",
        answer: "Pour configurer un variateur LED, accédez au module via DevSearch, puis dans 'Configuration > Variateurs'. Sélectionnez le type de charge 'LED compatible', réglez la courbe de gradation (généralement logarithmique pour les LED), le niveau minimum (pour éviter les scintillements) et maximum."
    },
    {
        question: "Quelle est la longueur maximale recommandée pour le TIS BUS ?",
        answer: "La longueur maximale recommandée est de 1000m pour l'ensemble du réseau. Au-delà, ou pour des installations complexes, utilisez des répéteurs de bus ou des extendeurs IP pour segmenter l'installation."
    }
];

// Navigation Technicien
function showTechSection(sectionId) {
    // Masquer toutes les sections technicien
    document.querySelectorAll('.tech-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionId).classList.add('active');
    
    // Mettre à jour la navigation
    document.querySelectorAll('#navbarTech .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = Array.from(document.querySelectorAll('#navbarTech .nav-link')).find(link => {
        return link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Gestion des claviers pour les techniciens
function openKeyboardGuide(keyboardId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Guide du clavier ${keyboardId} ouvert!`);
}

// Gestion des modules pour les techniciens
function openModuleGuide(moduleId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Guide du module ${moduleId} ouvert!`);
}

// Gestion des schémas de câblage
function openWiringDiagram(diagramId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Schéma de câblage ${diagramId} ouvert!`);
}

// Fonction pour charger le tutoriel DEVsearch
function loadDevsearchTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Introduction à DEVsearch</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <div class="text-center">
                        <i class="fas fa-laptop-code fa-5x text-primary mb-3"></i>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>DEVsearch est le logiciel professionnel de programmation pour les systèmes domotiques TIS. Il vous permet de configurer, programmer et maintenir l'ensemble des installations.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités et vous montrera comment utiliser efficacement cet outil puissant.</p>
                </div>
            </div>
            
            <h4>Installation et première configuration</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <h5>Configuration requise</h5>
                    <ul>
                        <li>Windows 10/11 (64 bits)</li>
                        <li>4 Go de RAM minimum (8 Go recommandés)</li>
                        <li>500 Mo d'espace disque disponible</li>
                        <li>Processeur dual-core 2 GHz ou supérieur</li>
                        <li>Résolution d'écran minimale: 1366 x 768</li>
                    </ul>
                    
                    <h5>Installation du logiciel</h5>
                    <ol>
                        <li>Téléchargez la dernière version depuis la section "Téléchargement et mise à jour"</li>
                        <li>Exécutez le fichier .exe en tant qu'administrateur</li>
                        <li>Suivez les instructions d'installation</li>
                        <li>Lancez DEVsearch et entrez votre licence lors du premier démarrage</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Interface utilisateur de DEVsearch</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Zones principales de l'interface</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>1. Barre d'outils principale</h5>
                                    <ul>
                                        <li>Nouveau projet / Ouvrir / Enregistrer</li>
                                        <li>Outils de diagnostic</li>
                                        <li>Paramètres du logiciel</li>
                                        <li>Recherche de périphériques</li>
                                    </ul>
                                    
                                    <h5>2. Explorateur de projet</h5>
                                    <ul>
                                        <li>Vue arborescente de tous les éléments</li>
                                        <li>Organisation par types de périphériques</li>
                                        <li>Organisation par zones/pièces</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>3. Zone de travail principale</h5>
                                    <ul>
                                        <li>Éditeur de configuration</li>
                                        <li>Programmation logique</li>
                                        <li>Visualisation des états</li>
                                    </ul>
                                    
                                    <h5>4. Fenêtre de propriétés</h5>
                                    <ul>
                                        <li>Paramètres de l'élément sélectionné</li>
                                        <li>Options avancées</li>
                                        <li>Historique des modifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Découverte et configuration des périphériques</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>La première étape pour tout projet consiste à découvrir les périphériques présents sur le TIS BUS.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Processus de découverte</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez votre ordinateur au système via le module IP Port ou un convertisseur USB</li>
                                <li>Dans DEVsearch, cliquez sur l'icône "Découverte" dans la barre d'outils</li>
                                <li>Sélectionnez le port de communication approprié</li>
                                <li>Lancez la découverte et attendez que tous les périphériques soient détectés</li>
                                <li>Vérifiez la liste des périphériques découverts et assurez-vous que tous sont présents</li>
                            </ol>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-info-circle"></i> Si certains périphériques ne sont pas détectés, vérifiez leur alimentation et leur connexion au TIS BUS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h4>Configuration des adresses</h4>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5>Attribution automatique des adresses</h5>
                            <ol>
                                <li>Sélectionnez les périphériques sans adresse</li>
                                <li>Cliquez sur "Attribuer des adresses" dans le menu contextuel</li>
                                <li>DEVsearch proposera des adresses disponibles</li>
                                <li>Validez pour appliquer la configuration</li>
                            </ol>
                            
                            <h5>Attribution manuelle des adresses</h5>
                            <ol>
                                <li>Sélectionnez un périphérique</li>
                                <li>Dans la fenêtre des propriétés, modifiez le champ "Adresse"</li>
                                <li>Vérifiez qu'il n'y a pas de conflit d'adresse</li>
                                <li>Appliquez les modifications</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Programmation des modules</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <h4>Méthodes de programmation</h4>
                    <p>DEVsearch offre plusieurs approches pour programmer les modules:</p>
                    
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-list-ul text-primary"></i> Programmation par paramètres</h5>
                                    <p>Configuration directe des options disponibles pour chaque module via des formulaires dédiés.</p>
                                    <p class="small text-muted">Idéal pour: configurations simples et standards</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-project-diagram text-primary"></i> Programmation logique</h5>
                                    <p>Création graphique de flux logiques utilisant des blocs fonctionnels reliés entre eux.</p>
                                    <p class="small text-muted">Idéal pour: automatisations complexes et scénarios</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-code text-primary"></i> Programmation avancée</h5>
                                    <p>Utilisation du langage TISscript pour des fonctionnalités personnalisées avancées.</p>
                                    <p class="small text-muted">Idéal pour: intégrations spécifiques et cas particuliers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Exemple : Programmation d'un module relais</h4>
                </div>
                <div class="card-body">
                    <ol>
                        <li>Sélectionnez le module relais dans l'explorateur de projet</li>
                        <li>Dans l'onglet "Configuration", définissez pour chaque canal:
                            <ul>
                                <li>Mode de fonctionnement (standard, temporisé, verrouillé)</li>
                                <li>Temporisation (si applicable)</li>
                                <li>État par défaut au démarrage</li>
                                <li>Comportement en cas de perte de communication</li>
                            </ul>
                        </li>
                        <li>Dans l'onglet "Associations", liez les entrées qui contrôleront ce relais</li>
                        <li>Testez la configuration avec le bouton "Simulation"</li>
                        <li>Téléchargez la configuration dans le module</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Débogage et diagnostic</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Les outils de diagnostic de DEVsearch sont essentiels pour résoudre les problèmes d'installation:</p>
                    
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-traffic-light text-warning"></i> Moniteur de bus</h5>
                                    <p>Outil permettant de voir en temps réel les communications sur le TIS BUS:</p>
                                    <ul>
                                        <li>Affichage des trames de données</li>
                                        <li>Filtrage par type ou par adresse</li>
                                        <li>Enregistrement pour analyse ultérieure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-heartbeat text-danger"></i> État des périphériques</h5>
                                    <p>Visualisation de l'état et des performances du système:</p>
                                    <ul>
                                        <li>État de connexion des périphériques</li>
                                        <li>Mesures de qualité du signal</li>
                                        <li>Statistiques d'erreurs et de collisions</li>
                                        <li>Températures et tensions d'alimentation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Mises à jour et sauvegarde</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Gestion des mises à jour firmware</h4>
                        </div>
                        <div class="card-body">
                            <h5>Mise à jour des modules</h5>
                            <ol>
                                <li>Accédez à l'onglet "Maintenance" > "Mises à jour firmware"</li>
                                <li>DEVsearch vérifie automatiquement les versions disponibles</li>
                                <li>Sélectionnez les modules à mettre à jour</li>
                                <li>Cliquez sur "Mettre à jour" et suivez les instructions</li>
                            </ol>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> Ne débranchez jamais l'alimentation pendant une mise à jour firmware. Cela pourrait endommager définitivement le module.
                            </div>
                            
                            <h5>Sauvegarde de projet</h5>
                            <ol>
                                <li>Accédez à "Fichier" > "Sauvegarder sous"</li>
                                <li>Choisissez un emplacement et un nom significatif</li>
                                <li>Sélectionnez les options de sauvegarde (inclure les logs, captures d'écran, etc.)</li>
                                <li>La sauvegarde crée un fichier .tisdb contenant toutes les informations du projet</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de la programmation avec DEVsearch.
            </div>
            <p>Pour approfondir vos connaissances, consultez la documentation complète ou suivez une formation spécialisée.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le manuel complet DEVsearch</a>
        </div>
    `;
}

// Fonction pour charger le tutoriel de câblage
function loadCablageTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Principes fondamentaux du câblage domotique</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="schema_interface.png" alt="Schéma d'interface" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le câblage est l'élément fondamental de toute installation domotique TIS. Un câblage bien réalisé garantit la fiabilité et les performances du système.</p>
                    <p>Ce tutoriel vous guidera à travers les bonnes pratiques et les techniques essentielles pour réaliser un câblage professionnel.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Topologies de câblage</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-minus fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie bus</h5>
                                    <p>Tous les modules sont connectés en série sur une ligne principale</p>
                                    <p class="small text-muted">Avantages: Simple, économique en câble</p>
                                    <p class="small text-muted">Limites: Une rupture peut affecter tous les modules en aval</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-star fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie étoile</h5>
                                    <p>Tous les modules sont reliés directement à un point central</p>
                                    <p class="small text-muted">Avantages: Isolation des défauts, maintenance simplifiée</p>
                                    <p class="small text-muted">Limites: Consommation importante de câble</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-project-diagram fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie hybride</h5>
                                    <p>Combinaison de bus et d'étoiles pour optimiser l'installation</p>
                                    <p class="small text-muted">Avantages: Flexibilité, compromis optimal</p>
                                    <p class="small text-muted">Limites: Nécessite une planification plus rigoureuse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Le TIS BUS - Caractéristiques et câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Spécifications du TIS BUS</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Caractéristiques techniques</h5>
                                    <ul>
                                        <li>Type de bus: RS-485 modifié</li>
                                        <li>Vitesse: 115200 bauds</li>
                                        <li>Distance maximale totale: 1000m</li>
                                        <li>Nombre maximum de périphériques: 255</li>
                                        <li>Tension d'alimentation: 12V DC</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Câble recommandé</h5>
                                    <ul>
                                        <li>Type: Câble 4 conducteurs torsadés</li>
                                        <li>Section: 0,75mm² minimum</li>
                                        <li>Blindage: Recommandé, surtout en environnement perturbé</li>
                                        <li>Résistance maximale par conducteur: 30 Ohms/km</li>
                                        <li>Capacité entre conducteurs: < 100pF/m</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Code couleur standard TIS BUS</h5>
                            <div class="row">
                                <div class="col-md-8">
                                    <ol>
                                        <li>Installez une résistance de 120 Ohms entre DATA A et DATA B (jaune et vert)</li>
                                        <li>Placez ces résistances uniquement aux deux extrémités physiques du bus</li>
                                        <li>Pour la topologie en étoile:
                                            <ul>
                                                <li>Installez des résistances à chaque extrémité de branche</li>
                                                <li>Utilisez un répéteur/hub pour les installations complexes</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-4">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> L'absence ou le mauvais placement des résistances de terminaison peut causer des erreurs de communication intermittentes difficiles à diagnostiquer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Techniques de câblage professionnelles</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexions aux modules</h5>
                                    <ol>
                                        <li>Dénudez le câble sur environ 6mm</li>
                                        <li>Insérez entièrement le conducteur dans le bornier</li>
                                        <li>Serrez fermement la vis du bornier sans excès</li>
                                        <li>Vérifiez que le conducteur ne peut pas être retiré en tirant légèrement</li>
                                        <li>Laissez une petite boucle de marge pour chaque conducteur</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Système de repérage</h5>
                                    <ol>
                                        <li>Étiquetez chaque extrémité du câble</li>
                                        <li>Indiquez l'origine et la destination</li>
                                        <li>Utilisez un système cohérent de numérotation</li>
                                        <li>Documentez le câblage dans le dossier technique</li>
                                        <li>Photographiez les installations complexes</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <h4>Installation des résistances de terminaison</h4>
                    
                    <div class="card">
                        <div class="card-body">
                            <p>Les résistances de terminaison sont essentielles pour éviter les réflexions de signal sur le TIS BUS:</p>
                            
                            <div class="row">
                                <div class="col-md-8">
                                    <ol>
                                        <li>Installez une résistance de 120 Ohms entre DATA A et DATA B (jaune et vert)</li>
                                        <li>Placez ces résistances uniquement aux deux extrémités physiques du bus</li>
                                        <li>Pour la topologie en étoile:
                                            <ul>
                                                <li>Installez des résistances à chaque extrémité de branche</li>
                                                <li>Utilisez un répéteur/hub pour les installations complexes</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-4">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> L'absence ou le mauvais placement des résistances de terminaison peut causer des erreurs de communication intermittentes difficiles à diagnostiquer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Installation des modules spécifiques</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Modules d'alimentation</h4>
                        </div>
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <img src="schema_alim.png" alt="Schéma d'alimentation" class="img-fluid rounded shadow">
                                </div>
                                <div class="col-md-6">
                                    <h5>Points clés d'installation:</h5>
                                    <ul>
                                        <li>Placez les alimentations à proximité des charges importantes</li>
                                        <li>Calculez la consommation totale et prévoyez 30% de marge</li>
                                        <li>Vérifiez la tension aux points les plus éloignés (min. 11V)</li>
                                        <li>Pour les longues distances, utilisez plusieurs alimentations</li>
                                        <li>Connectez toujours les masses (GND) entre les différentes alimentations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-primary text-white">
                                    <h4 class="mb-0">Modules relais</h4>
                                </div>
                                <div class="card-body">
                                    <img src="schema_relais.png" alt="Schéma relais" class="img-fluid rounded mb-3 shadow">
                                    <h5>Recommandations:</h5>
                                    <ul>
                                        <li>Respectez la charge maximale supportée par canal</li>
                                        <li>Utilisez des contacteurs externes pour les charges inductives importantes</li>
                                        <li>Séparez les circuits de puissance et les circuits de commande</li>
                                        <li>Utilisez des sections de câble adaptées à l'intensité</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-primary text-white">
                                    <h4 class="mb-0">Modules variateurs</h4>
                                </div>
                                <div class="card-body">
                                    <img src="schema_variateur.png" alt="Schéma variateur" class="img-fluid rounded mb-3 shadow">
                                    <h5>Points d'attention:</h5>
                                    <ul>
                                        <li>Vérifiez la compatibilité avec le type d'éclairage</li>
                                        <li>Respectez la charge minimale et maximale</li>
                                        <li>Installez à distance des sources de chaleur</li>
                                        <li>Assurez une ventilation suffisante</li>
                                        <li>Pour les LED, utilisez uniquement des modèles dimmables compatibles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage et diagnostic</h3>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Problèmes courants et solutions</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Problèmes de communication</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Symptôme</th>
                                                <th>Causes possibles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Communication intermittente</td>
                                                <td>
                                                    <ul>
                                                        <li>Résistances de terminaison manquantes</li>
                                                        <li>Câble trop long ou de mauvaise qualité</li>
                                                        <li>Interférences électromagnétiques</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Aucune communication</td>
                                                <td>
                                                    <ul>
                                                        <li>Câble coupé ou déconnecté</li>
                                                        <li>Polarité inversée</li>
                                                        <li>Module défectueux ou mal adressé</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h5>Problèmes d'alimentation</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Symptôme</th>
                                                <th>Causes possibles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Redémarrages aléatoires</td>
                                                <td>
                                                    <ul>
                                                        <li>Chute de tension sur le bus</li>
                                                        <li>Alimentation sous-dimensionnée</li>
                                                        <li>Section de câble insuffisante</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Module non alimenté</td>
                                                <td>
                                                    <ul>
                                                        <li>Problème d'alimentation</li>
                                                        <li>Disjoncteur déclenché</li>
                                                        <li>Connexion défectueuse</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Outils de diagnostic</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul>
                                        <li><strong>Multimètre</strong>: Vérification des tensions et continuités</li>
                                        <li><strong>Testeur de bus</strong>: Analyse de la qualité de signal</li>
                                        <li><strong>DEVsearch</strong>: Monitoring et diagnostic logiciel</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-info">
                                        <i class="fas fa-lightbulb"></i> Astuce: Documentez systématiquement vos mesures et observations pour faciliter l'analyse des problèmes récurrents.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les principes fondamentaux du câblage domotique TIS.
            </div>
            <p>Pour approfondir vos connaissances, consultez les schémas détaillés de chaque module et participez à nos formations pratiques.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le guide complet de câblage</a>
        </div>
    `;
}