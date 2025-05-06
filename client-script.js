// Données FAQ pour les clients
const clientFAQs = [
    {
        question: "Comment puis-je créer un nouveau projet ?",
        answer: "Pour créer un nouveau projet, accédez à l'écran d'accueil de l'application et appuyez sur le bouton '+' en haut à droite. Suivez ensuite les instructions pour nommer votre projet et configurer les paramètres de base."
    },
    {
        question: "Comment ajouter des chambres à mon projet ?",
        answer: "Dans votre projet, allez dans l'onglet 'Pièces', puis appuyez sur 'Ajouter une pièce'. Vous pourrez alors définir le nom, le type et l'emplacement de la pièce dans votre installation."
    },
    {
        question: "Comment puis-je créer un scénario ?",
        answer: "Accédez à l'onglet 'Scénarios' dans votre projet, puis touchez 'Créer un scénario'. Vous pourrez définir les conditions de déclenchement et les actions à exécuter."
    },
    {
        question: "Comment sauvegarder mon projet sur le cloud ?",
        answer: "Dans les paramètres du projet, sélectionnez 'Sauvegarde et synchronisation', puis 'Sauvegarder sur le cloud'. Vous devrez être connecté à votre compte pour utiliser cette fonctionnalité."
    },
    {
        question: "L'application est-elle compatible avec mon système ?",
        answer: "L'application TIS est compatible avec iOS 12+ et Android 8.0+. Pour vérifier la compatibilité avec vos équipements spécifiques, consultez la section 'Compatibilité' dans les paramètres de l'application."
    },
    {
        question: "Comment mettre à jour mon système ?",
        answer: "Allez dans 'Paramètres > Système > Mises à jour' pour vérifier et installer les dernières mises à jour disponibles. Il est recommandé de connecter votre appareil à un réseau Wi-Fi et à une source d'alimentation pendant la mise à jour."
    },
    {
        question: "Puis-je contrôler mon système à distance ?",
        answer: "Oui, vous pouvez contrôler votre système à distance en activant l'accès distant dans les paramètres. Vous devrez créer un compte TIS et configurer la connexion internet de votre installation."
    }
];

// Navigation Client
function showClientSection(sectionId) {
    // Masquer toutes les sections client
    document.querySelectorAll('.client-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionId).classList.add('active');
    
    // Mettre à jour la navigation
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = Array.from(document.querySelectorAll('#navbarNav .nav-link')).find(link => {
        return link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Gestion des tutoriels
function openTutorial(tutorialId) {
    // Masquer l'écran principal
    if (currentUserType === 'client') {
        document.getElementById('client-screen').classList.remove('active');
    } else {
        document.getElementById('technicien-screen').classList.remove('active');
    }
    
    // Afficher l'écran de tutoriel
    document.getElementById('tutorial-content').classList.add('active');
    
    // Définir le titre du tutoriel
    let title = '';
    if (tutorialId === 'app-mobile' || tutorialId === 'app-mobile-tech') {
        title = 'Tutoriel Application Mobile TIS';
        loadMobileAppTutorial();
    } else if (tutorialId === 'tablette' || tutorialId === 'tablette-tech') {
        title = 'Tutoriel Utilisation de la Tablette';
        loadTabletTutorial();
    } else if (tutorialId === 'devsearch-prog') {
        title = 'Tutoriel Programmation DEVsearch';
        loadDevsearchTutorial();
    } else if (tutorialId === 'cablage-domotique') {
        title = 'Tutoriel Câblage Domotique';
        loadCablageTutorial();
    }
    
    document.getElementById('tutorial-title').textContent = title;
}

function closeTutorial() {
    // Masquer l'écran de tutoriel
    document.getElementById('tutorial-content').classList.remove('active');
    
    // Réafficher l'écran principal
    if (currentUserType === 'client') {
        document.getElementById('client-screen').classList.add('active');
    } else {
        document.getElementById('technicien-screen').classList.add('active');
    }
}

// Charger le contenu du tutoriel Application Mobile
function loadMobileAppTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Introduction à l'application mobile TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="app_mobile_screen.png" alt="Écran d'accueil de l'application" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>L'application mobile TIS vous permet de contrôler l'ensemble de votre installation domotique depuis votre smartphone ou tablette. Disponible sur iOS et Android, elle offre une interface intuitive et personnalisable.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités de l'application et vous montrera comment configurer et utiliser efficacement votre système.</p>
                </div>
            </div>
            
            <h4>Installation et connexion</h4>
            <ol class="mb-4">
                <li>Téléchargez l'application depuis l'App Store ou Google Play Store</li>
                <li>Ouvrez l'application et créez un compte ou connectez-vous</li>
                <li>Suivez l'assistant de configuration pour connecter l'application à votre système</li>
            </ol>
            
            <div class="alert alert-info">
                <i class="fas fa-info-circle"></i> Pour une première configuration, assurez-vous d'être sur le même réseau Wi-Fi que votre système TIS.
            </div>
            
            <h4>Navigation principale</h4>
            <div class="row mb-4">
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-home fa-2x mb-3 text-primary"></i>
                            <h5>Accueil</h5>
                            <p class="small">Vue d'ensemble et contrôles rapides</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-door-open fa-2x mb-3 text-primary"></i>
                            <h5>Pièces</h5>
                            <p class="small">Organisation par pièces et zones</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-magic fa-2x mb-3 text-primary"></i>
                            <h5>Scénarios</h5>
                            <p class="small">Automatisations et scènes</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-cog fa-2x mb-3 text-primary"></i>
                            <h5>Paramètres</h5>
                            <p class="small">Configuration et personnalisation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Contrôle des équipements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="app_mobile_control.png" alt="Contrôles dans l'application" class="img-fluid rounded">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Éclairage</h4>
                    <ul>
                        <li>Allumer/éteindre : appuyez sur l'icône de l'ampoule</li>
                        <li>Variation : utilisez le curseur pour ajuster l'intensité</li>
                        <li>Changement de couleur : touchez l'icône palette pour les éclairages RGB</li>
                    </ul>
                    
                    <h4>Volets et stores</h4>
                    <ul>
                        <li>Montée/descente : utilisez les flèches ou le curseur de position</li>
                        <li>Position favorite : appuyez sur l'icône étoile</li>
                    </ul>
                </div>
            </div>
            
            <h4>Thermostat et chauffage</h4>
            <div class="row mb-4">
                <div class="col-md-6">
                    <ul>
                        <li>Réglage de la température : utilisez le thermostat circulaire</li>
                        <li>Programmation : définissez des plages horaires avec températures associées</li>
                        <li>Modes : Confort, Eco, Hors-gel, Absent</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> Les changements de température peuvent prendre quelques minutes avant d'être effectifs sur votre système.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Création et gestion des scénarios</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Les scénarios vous permettent d'automatiser votre installation et de créer des ambiances personnalisées.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Créer un nouveau scénario</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans l'onglet Scénarios, appuyez sur le bouton "+" en haut à droite</li>
                                <li>Donnez un nom au scénario (ex: "Soirée cinéma", "Départ maison")</li>
                                <li>Sélectionnez les équipements à inclure et définissez leur état souhaité</li>
                                <li>Choisissez le mode de déclenchement :
                                    <ul>
                                        <li>Manuel : activation par appui sur un bouton</li>
                                        <li>Horaire : programmation selon jours/heures</li>
                                        <li>Événement : réaction à un capteur ou une condition</li>
                                    </ul>
                                </li>
                                <li>Enregistrez le scénario</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <h4>Exemples de scénarios courants</h4>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Départ maison</h5>
                            <p>Éteint toutes les lumières, ferme les volets, active l'alarme et réduit le chauffage.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Réveil matinal</h5>
                            <p>Ouvre progressivement les volets, allume les lumières en intensité douce et augmente la température.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Soirée cinéma</h5>
                            <p>Tamise les lumières du salon, ferme les volets, ajuste la température pour le confort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de l'application mobile TIS.
            </div>
            <p>N'hésitez pas à explorer les autres tutoriels pour approfondir vos connaissances.</p>
        </div>
    `;
}

// Charger le contenu du tutoriel Tablette
function loadTabletTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Prise en main de la tablette TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="tablette_home.png" alt="Interface tablette TIS" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>La tablette TIS est une interface tactile dédiée qui vous permet de contrôler l'ensemble de votre installation depuis un point central. Son interface intuitive et personnalisable offre un accès rapide à toutes les fonctionnalités de votre système domotique.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités et vous aidera à tirer le meilleur parti de votre tablette TIS.</p>
                </div>
            </div>
            
            <h4>Premier démarrage et configuration</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <ol>
                        <li>Mettez la tablette sous tension en la branchant sur son support mural ou en appuyant sur le bouton d'alimentation</li>
                        <li>L'écran d'accueil apparaît après quelques secondes</li>
                        <li>Lors de la première utilisation, suivez l'assistant de configuration qui vous guidera à travers les étapes initiales</li>
                        <li>Connectez la tablette au réseau Wi-Fi ou au réseau filaire de votre installation</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Interface principale</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>L'écran d'accueil de la tablette est organisé en zones fonctionnelles pour un accès rapide à toutes les commandes.</p>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Barre de navigation supérieure</h4>
                    <ul>
                        <li><strong>Accueil</strong> : Revenir à l'écran principal</li>
                        <li><strong>Pièces</strong> : Accéder aux commandes par pièce</li>
                        <li><strong>Scénarios</strong> : Gérer et activer des scénarios</li>
                        <li><strong>Paramètres</strong> : Configurer la tablette et le système</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h4>Widgets et contrôles rapides</h4>
                    <ul>
                        <li><strong>Météo</strong> : Affichage des conditions actuelles</li>
                        <li><strong>Favoris</strong> : Accès aux commandes fréquemment utilisées</li>
                        <li><strong>Statut système</strong> : Voyants d'état des principaux systèmes</li>
                        <li><strong>Contrôles généraux</strong> : Commandes pour l'ensemble de la maison</li>
                    </ul>
                </div>
            </div>
            
            <div class="alert alert-info mb-4">
                <i class="fas fa-info-circle"></i> L'interface peut être personnalisée selon vos préférences. Maintenez votre doigt appuyé sur une zone pour entrer dans le mode d'édition.
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Contrôle des équipements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="tablette_control.png" alt="Contrôle des équipements" class="img-fluid rounded">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Commandes par pièce</h4>
                    <p>Pour accéder aux commandes d'une pièce spécifique :</p>
                    <ol>
                        <li>Touchez l'onglet "Pièces" dans la barre de navigation</li>
                        <li>Sélectionnez la pièce souhaitée</li>
                        <li>Tous les équipements disponibles dans cette pièce s'affichent</li>
                        <li>Utilisez les contrôles intuitifs pour gérer chaque équipement</li>
                    </ol>
                </div>
            </div>
            
            <h4>Types de contrôles disponibles</h4>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-lightbulb text-warning"></i> Éclairage</h5>
                            <ul>
                                <li>Boutons On/Off</li>
                                <li>Curseurs de variation</li>
                                <li>Sélecteurs de couleur (RGB)</li>
                                <li>Préréglages d'ambiance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-temperature-high text-danger"></i> Chauffage/Clim</h5>
                            <ul>
                                <li>Réglage de température</li>
                                <li>Sélection du mode (Confort, Eco...)</li>
                                <li>Programmation horaire</li>
                                <li>Contrôle multizone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-shield-alt text-primary"></i> Sécurité</h5>
                            <ul>
                                <li>Activation/désactivation alarme</li>
                                <li>Visualisation caméras</li>
                                <li>Historique des événements</li>
                                <li>Contrôle d'accès</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Personnalisation de l'interface</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>La tablette TIS est entièrement personnalisable pour s'adapter à vos besoins et préférences.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Comment personnaliser votre interface</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Accédez aux paramètres en touchant l'icône engrenage</li>
                                <li>Sélectionnez "Personnalisation"</li>
                                <li>Choisissez parmi les options suivantes :
                                    <ul>
                                        <li><strong>Thèmes</strong> : Changez l'apparence globale</li>
                                        <li><strong>Widgets</strong> : Ajoutez/supprimez/déplacez les widgets</li>
                                        <li><strong>Favoris</strong> : Configurez vos commandes préférées</li>
                                        <li><strong>Écran de veille</strong> : Personnalisez l'affichage en veille</li>
                                    </ul>
                                </li>
                                <li>Pour réorganiser l'écran d'accueil, maintenez votre doigt appuyé sur une zone jusqu'à ce que le mode d'édition s'active</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de l'utilisation de la tablette TIS.
            </div>
            <p>Pour plus d'informations, consultez le manuel utilisateur complet ou les vidéos de démonstration.</p>
        </div>
    `;
}

// Gestion des guides
function openGuide(guideId) {
    // Masquer l'écran principal client
    document.getElementById('client-screen').classList.remove('active');
    
    // Afficher l'écran de guide
    document.getElementById('guide-content').classList.add('active');
    
    // Définir le titre du guide
    let title = '';
    switch(guideId) {
        case 'creation-projet':
            title = 'Guide de création de projet';
            loadProjectCreationGuide();
            break;
        case 'ajout-chambres':
            title = 'Guide d\'ajout de chambres et emplacements';
            loadRoomAdditionGuide();
            break;
        case 'eclairage':
            title = 'Configuration des circuits d\'éclairage';
            loadLightingGuide();
            break;
        case 'scenarios':
            title = 'Création de scénarios';
            loadScenariosGuide();
            break;
        case 'upload-download':
            title = 'Upload et download de projets';
            loadUploadDownloadGuide();
            break;
        case 'reseau':
            title = 'Configuration réseau et mises à jour';
            loadNetworkGuide();
            break;
    }
    
    document.getElementById('guide-title').textContent = title;
}

function closeGuide() {
    // Masquer l'écran de guide
    document.getElementById('guide-content').classList.remove('active');
    
    // Réafficher l'écran principal client
    document.getElementById('client-screen').classList.add('active');
}

// Exemple de chargement d'un guide
function loadProjectCreationGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Création d'un nouveau projet</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Un projet bien structuré est la base d'une installation réussie. Prenez le temps de planifier votre projet avant de commencer.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="nouveau_projet.png" alt="Création de projet" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Étapes de création</h4>
                    <ol>
                        <li>Ouvrez l'application et connectez-vous à votre compte</li>
                        <li>Sur l'écran d'accueil, appuyez sur "Nouveau projet" ou sur le bouton "+" dans la liste des projets</li>
                        <li>Renseignez les informations de base du projet :
                            <ul>
                                <li>Nom du projet</li>
                                <li>Type d'installation (résidentielle, commerciale, etc.)</li>
                                <li>Adresse (optionnel)</li>
                                <li>Notes (optionnel)</li>
                            </ul>
                        </li>
                        <li>Appuyez sur "Créer" pour initialiser le projet</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Configuration initiale</h4>
                </div>
                <div class="card-body">
                    <p>Après la création du projet, vous serez guidé à travers les étapes de configuration initiale :</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <h5>1. Structure du bâtiment</h5>
                            <ul>
                                <li>Définissez le nombre d'étages</li>
                                <li>Créez les zones principales</li>
                                <li>Esquissez un plan simplifié (optionnel)</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>2. Modules principaux</h5>
                            <ul>
                                <li>Identifiez le contrôleur principal</li>
                                <li>Configurez la connexion réseau</li>
                                <li>Ajoutez les modules d'alimentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Organisation et structure du projet</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Une bonne organisation de votre projet facilite sa gestion et son évolution future.</p>
                    
                    <h4>Bonnes pratiques</h4>
                    <ul>
                        <li><strong>Nommage cohérent</strong> : Utilisez des noms clairs et descriptifs pour tous les éléments</li>
                        <li><strong>Groupement logique</strong> : Regroupez les équipements par fonction ou par zone</li>
                        <li><strong>Documentation</strong> : Utilisez les champs de notes pour documenter les choix techniques</li>
                        <li><strong>Versions</strong> : Créez des points de sauvegarde réguliers avec des noms explicites</li>
                    </ul>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Structure recommandée</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Étages
                                    <ul>
                                        <li>Pièces
                                            <ul>
                                                <li>Équipements</li>
                                                <li>Circuits</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Systèmes
                                    <ul>
                                        <li>Éclairage</li>
                                        <li>Chauffage/Climatisation</li>
                                        <li>Sécurité</li>
                                        <li>Multimédia</li>
                                    </ul>
                                </li>
                                <li>Utilisateurs
                                    <ul>
                                        <li>Profils</li>
                                        <li>Droits d'accès</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Conseils pour grands projets</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Divisez l'installation en sous-systèmes gérables</li>
                                <li>Créez une hiérarchie claire des contrôleurs</li>
                                <li>Prévoyez une capacité d'extension (20% de réserve)</li>
                                <li>Documentez l'ensemble des adresses IP et identifiants</li>
                                <li>Établissez un plan de maintenance préventive</li>
                                <li>Formez plusieurs administrateurs système</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Importation et exportation</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="import_export.png" alt="Importation et exportation" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Importation de modèles</h4>
                    <p>Pour accélérer la création de votre projet, vous pouvez importer des modèles prédéfinis :</p>
                    <ol>
                        <li>Dans le menu principal du projet, sélectionnez "Importer"</li>
                        <li>Choisissez parmi les modèles disponibles ou importez depuis un fichier</li>
                        <li>Sélectionnez les éléments à importer (structure, équipements, scénarios)</li>
                        <li>Validez et ajustez selon vos besoins</li>
                    </ol>
                    
                    <h4>Création et partage de modèles</h4>
                    <p>Vous pouvez également créer vos propres modèles réutilisables :</p>
                    <ol>
                        <li>Configurez une partie de votre projet (ex: une pièce type)</li>
                        <li>Sélectionnez les éléments et choisissez "Enregistrer comme modèle"</li>
                        <li>Nommez et décrivez votre modèle</li>
                        <li>Choisissez s'il doit être privé ou partagé avec la communauté</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Ressources complémentaires</h3>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-film text-primary"></i> Vidéo tutoriel</h4>
                            <p>Création de projet pas à pas</p>
                            <a href="#" class="btn btn-outline-primary">Regarder</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Modèles gratuits</h4>
                            <p>Bibliothèque de projets types</p>
                            <a href="#" class="btn btn-outline-primary">Télécharger</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide détaillé</h4>
                            <p>Manuel de référence complet</p>
                            <a href="#" class="btn btn-outline-primary">Consulter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous êtes maintenant prêt à créer votre premier projet !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

// Exemple de chargement d'un guide supplémentaire
function loadRoomAdditionGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Ajout de pièces et d'emplacements</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Une bonne organisation des pièces et des emplacements vous permettra de naviguer facilement dans votre installation et de créer des automatisations cohérentes.
            </div>
            
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="ajout_piece.png" alt="Ajout de pièce" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Ajouter une nouvelle pièce</h4>
                    <ol>
                        <li>Dans votre projet, accédez à l'onglet "Structure" ou "Pièces"</li>
                        <li>Appuyez sur le bouton "+" ou "Ajouter une pièce"</li>
                        <li>Renseignez les informations de la pièce :
                            <ul>
                                <li>Nom (ex: Salon, Cuisine, Chambre principale)</li>
                                <li>Type de pièce (sélectionnez dans la liste)</li>
                                <li>Étage (si applicable)</li>
                                <li>Zone (ex: Aile Nord, Espace jour)</li>
                            </ul>
                        </li>
                        <li>Ajoutez une image ou une icône représentative (optionnel)</li>
                        <li>Validez pour créer la pièce</li>
                    </ol>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Types de pièces prédéfinis</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Salon</li>
                                        <li>Cuisine</li>
                                        <li>Salle à manger</li>
                                        <li>Bureau</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Chambre</li>
                                        <li>Salle de bain</li>
                                        <li>WC</li>
                                        <li>Dressing</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Entrée</li>
                                        <li>Couloir</li>
                                        <li>Escalier</li>
                                        <li>Terrasse</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Garage</li>
                                        <li>Cave</li>
                                        <li>Buanderie</li>
                                        <li>Personnalisé</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration des emplacements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="emplacements.png" alt="Configuration des emplacements" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Qu'est-ce qu'un emplacement ?</h4>
                    <p>Les emplacements sont des points spécifiques au sein d'une pièce où des équipements sont installés ou des fonctions sont disponibles. Ils permettent de préciser la position exacte des éléments dans votre installation.</p>
                    
                    <h4>Ajouter un emplacement</h4>
                    <ol>
                        <li>Sélectionnez une pièce dans votre projet</li>
                        <li>Appuyez sur "Ajouter un emplacement"</li>
                        <li>Définissez les propriétés :
                            <ul>
                                <li>Nom (ex: Mur Nord, Entrée principale)</li>
                                <li>Type d'emplacement</li>
                                <li>Position sur le plan (si disponible)</li>
                            </ul>
                        </li>
                        <li>Validez pour créer l'emplacement</li>
                    </ol>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Exemples d'emplacements typiques</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <h5>Salon</h5>
                                    <ul>
                                        <li>Canapé principal</li>
                                        <li>Zone TV</li>
                                        <li>Fenêtre</li>
                                        <li>Entrée</li>
                                        <li>Table basse</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5>Cuisine</h5>
                                    <ul>
                                        <li>Plan de travail</li>
                                        <li>Îlot central</li>
                                        <li>Zone cuisson</li>
                                        <li>Réfrigérateur</li>
                                        <li>Table</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5>Chambre</h5>
                                    <ul>
                                        <li>Lit</li>
                                        <li>Bureau</li>
                                        <li>Dressing</li>
                                        <li>Fenêtre</li>
                                        <li>Porte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Utilisation du plan interactif</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Le plan interactif vous permet de visualiser et d'organiser vos pièces et emplacements de manière graphique.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Fonctionnalités du plan</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Création du plan</h5>
                                    <ol>
                                        <li>Accédez à l'onglet "Plan" dans votre projet</li>
                                        <li>Choisissez une option :
                                            <ul>
                                                <li>Dessiner manuellement</li>
                                                <li>Importer une image de plan existant</li>
                                                <li>Utiliser un modèle de base</li>
                                            </ul>
                                        </li>
                                        <li>Ajustez les dimensions et l'échelle</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Placement des éléments</h5>
                                    <ol>
                                        <li>Sélectionnez une pièce dans la liste</li>
                                        <li>Dessinez sa forme sur le plan</li>
                                        <li>Ajoutez des emplacements en les faisant glisser depuis la barre d'outils</li>
                                        <li>Positionnez les équipements à l'emplacement exact</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Astuce :</strong> Pour les grandes installations, créez un plan par étage et utilisez les points de connexion pour les lier entre eux.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Organisation avancée</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Groupes et zones</h4>
                    <p>Au-delà des pièces individuelles, vous pouvez créer des groupes logiques :</p>
                    <ul>
                        <li><strong>Zones</strong> : Regroupement spatial (Étage, Aile, Extérieur)</li>
                        <li><strong>Groupes fonctionnels</strong> : Ensemble d'équipements ayant une fonction commune</li>
                    </ul>
                    
                    <h5>Créer une zone</h5>
                    <ol>
                        <li>Dans "Structure", sélectionnez "Gérer les zones"</li>
                        <li>Créez une nouvelle zone en lui donnant un nom</li>
                        <li>Assignez les pièces concernées à cette zone</li>
                    </ol>
                </div>
                <div class="col-md-6">
                    <h4>Étiquettes et filtres</h4>
                    <p>Les étiquettes permettent de catégoriser les éléments selon vos propres critères :</p>
                    <ul>
                        <li>Créez des étiquettes personnalisées (ex: "Souvent utilisé", "À rénover")</li>
                        <li>Assignez-les aux pièces et emplacements</li>
                        <li>Utilisez les filtres pour afficher uniquement certaines étiquettes</li>
                    </ul>
                    
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Les étiquettes sont particulièrement utiles pour les grands projets ou les installations complexes avec de nombreux équipements.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Ressources complémentaires</h3>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-film text-primary"></i> Vidéo tutoriel</h4>
                            <p>Organisation optimale des pièces</p>
                            <a href="#" class="btn btn-outline-primary">Regarder</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Modèles de plans</h4>
                            <p>Plans types pour différents logements</p>
                            <a href="#" class="btn btn-outline-primary">Télécharger</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide d'organisation</h4>
                            <p>Bonnes pratiques et exemples</p>
                            <a href="#" class="btn btn-outline-primary">Consulter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous savez maintenant comment organiser efficacement les pièces et emplacements de votre installation !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

// Fonction pour charger les autres guides
function loadLightingGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="alert alert-primary">
            <i class="fas fa-info-circle"></i> Guide de configuration des circuits d'éclairage en cours de chargement...
        </div>
        <p>Ce guide sera bientôt disponible.</p>
    `;
}

function loadScenariosGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="alert alert-primary">
            <i class="fas fa-info-circle"></i> Guide de création de scénarios en cours de chargement...
        </div>
        <p>Ce guide sera bientôt disponible.</p>
    `;
}

function loadUploadDownloadGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="alert alert-primary">
            <i class="fas fa-info-circle"></i> Guide d'upload et download de projets en cours de chargement...
        </div>
        <p>Ce guide sera bientôt disponible.</p>
    `;
}

function loadNetworkGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="alert alert-primary">
            <i class="fas fa-info-circle"></i> Guide de configuration réseau et mises à jour en cours de chargement...
        </div>
        <p>Ce guide sera bientôt disponible.</p>
    `;
}