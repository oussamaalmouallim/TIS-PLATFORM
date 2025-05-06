function loadScenariosGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Création et gestion des scénarios</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Les scénarios sont au cœur de votre système domotique, ils permettent d'automatiser votre installation et de créer des ambiances personnalisées.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="app_mobile_control.png" alt="Contrôle de scénarios" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Qu'est-ce qu'un scénario ?</h4>
                    <p>Un scénario est un ensemble d'actions automatisées qui s'exécutent simultanément ou séquentiellement suite à un déclencheur défini. Il permet de contrôler plusieurs équipements avec une seule commande.</p>
                    
                    <h4>Les trois composants d'un scénario</h4>
                    <ol>
                        <li><strong>Déclencheurs</strong> : Événement qui lance le scénario (bouton, horaire, capteur...)</li>
                        <li><strong>Conditions</strong> : Critères qui déterminent si le scénario doit s'exécuter (optionnel)</li>
                        <li><strong>Actions</strong> : Commandes envoyées aux équipements</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Types de scénarios</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-play-circle text-primary"></i> Scénarios manuels</h5>
                                    <p>Déclenchés par une action de l'utilisateur</p>
                                    <ul>
                                        <li>Appui sur un bouton physique</li>
                                        <li>Commande depuis l'application</li>
                                        <li>Commande vocale</li>
                                        <li>Widget sur écran d'accueil</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-clock text-primary"></i> Scénarios programmés</h5>
                                    <p>Déclenchés à des moments précis</p>
                                    <ul>
                                        <li>Horaire fixe (8h00 tous les jours)</li>
                                        <li>Horaire relatif (lever/coucher du soleil)</li>
                                        <li>Périodique (toutes les 2 heures)</li>
                                        <li>Calendaire (jours spécifiques)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-random text-primary"></i> Scénarios réactifs</h5>
                                    <p>Déclenchés par un événement du système</p>
                                    <ul>
                                        <li>Détection de mouvement</li>
                                        <li>Ouverture de porte/fenêtre</li>
                                        <li>Changement de température</li>
                                        <li>Réception d'une alerte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Création d'un nouveau scénario</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Étapes de création</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans votre projet, accédez à l'onglet "Scénarios"</li>
                                <li>Appuyez sur "Créer un scénario" ou l'icône "+"</li>
                                <li>Nommez votre scénario (ex: "Départ maison", "Soirée cinéma")</li>
                                <li>Définissez les déclencheurs (étape suivante)</li>
                                <li>Ajoutez des conditions si nécessaire (étape optionnelle)</li>
                                <li>Programmez les actions à exécuter</li>
                                <li>Testez le scénario avec la fonction "Simulation"</li>
                                <li>Enregistrez et activez votre scénario</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Configuration des déclencheurs</h4>
                    <p>Pour ajouter un déclencheur :</p>
                    <ol>
                        <li>Dans la section "Déclencheurs", cliquez sur "Ajouter"</li>
                        <li>Choisissez le type de déclencheur :
                            <ul>
                                <li>Manuel (bouton, application)</li>
                                <li>Horaire (heure précise, lever du soleil)</li>
                                <li>Événement (capteur, autre équipement)</li>
                            </ul>
                        </li>
                        <li>Configurez les paramètres spécifiques au déclencheur choisi</li>
                        <li>Vous pouvez ajouter plusieurs déclencheurs pour le même scénario</li>
                    </ol>
                </div>
                <div class="col-md-6">
                    <h4>Définition des conditions</h4>
                    <p>Les conditions permettent d'affiner l'exécution du scénario :</p>
                    <ol>
                        <li>Dans la section "Conditions", cliquez sur "Ajouter"</li>
                        <li>Choisissez le type de condition :
                            <ul>
                                <li>État d'un équipement (ex: lumière allumée)</li>
                                <li>Valeur d'un capteur (ex: température > 25°C)</li>
                                <li>Plage horaire (ex: entre 18h et 22h)</li>
                                <li>Mode système (ex: mode Présence activé)</li>
                            </ul>
                        </li>
                        <li>Définissez les opérateurs logiques entre conditions (ET, OU)</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Programmation des actions</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Ajout d'actions simples</h5>
                            <ol>
                                <li>Dans la section "Actions", cliquez sur "Ajouter"</li>
                                <li>Sélectionnez l'équipement à contrôler</li>
                                <li>Choisissez la commande à envoyer :
                                    <ul>
                                        <li>On/Off pour un éclairage</li>
                                        <li>Pourcentage pour un variateur</li>
                                        <li>Position pour un volet</li>
                                        <li>Température pour un thermostat</li>
                                    </ul>
                                </li>
                                <li>Définissez la valeur souhaitée</li>
                            </ol>
                        </div>
                        <div class="col-md-6">
                            <h5>Actions avancées</h5>
                            <ul>
                                <li><strong>Temporisation</strong> : Ajoutez un délai entre deux actions</li>
                                <li><strong>Séquence</strong> : Exécutez les actions dans un ordre précis</li>
                                <li><strong>Boucle</strong> : Répétez une série d'actions</li>
                                <li><strong>Condition imbriquée</strong> : Action conditionnelle</li>
                                <li><strong>Notification</strong> : Envoyez une alerte</li>
                                <li><strong>Variable</strong> : Utilisez/modifiez une variable système</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Exemples de scénarios pratiques</h3>
            
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Scénario "Départ maison"</h4>
                        </div>
                        <div class="card-body">
                            <h5>Objectif</h5>
                            <p>Sécuriser et économiser l'énergie lorsque vous quittez votre domicile</p>
                            
                            <h5>Déclencheur</h5>
                            <ul>
                                <li>Bouton "Départ" près de l'entrée</li>
                                <li>Commande dans l'application</li>
                            </ul>
                            
                            <h5>Actions</h5>
                            <ol>
                                <li>Éteindre tous les éclairages</li>
                                <li>Fermer tous les volets</li>
                                <li>Réduire la température (mode Eco)</li>
                                <li>Couper les prises non essentielles</li>
                                <li>Activer le système d'alarme (après délai de 30s)</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Scénario "Réveil progressif"</h4>
                        </div>
                        <div class="card-body">
                            <h5>Objectif</h5>
                            <p>Réveil en douceur avec simulation d'aube et préparation de la maison</p>
                            
                            <h5>Déclencheur</h5>
                            <ul>
                                <li>Horaire programmé (30 minutes avant l'heure de réveil)</li>
                            </ul>
                            
                            <h5>Conditions</h5>
                            <ul>
                                <li>Jours de semaine uniquement</li>
                                <li>Mode "Absence" désactivé</li>
                            </ul>
                            
                            <h5>Actions</h5>
                            <ol>
                                <li>Augmenter progressivement l'éclairage chambre (de 0% à 60% en 20 min)</li>
                                <li>Ouvrir partiellement les volets (à 70%)</li>
                                <li>Démarrer la radio ou playlist (à l'heure exacte)</li>
                                <li>Augmenter la température salle de bain (+2°C)</li>
                                <li>Allumer la cafetière (si configurée)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Scénario "Détection nocturne"</h4>
                        </div>
                        <div class="card-body">
                            <h5>Objectif</h5>
                            <p>Éclairage automatique la nuit lors des déplacements</p>
                            
                            <h5>Déclencheur</h5>
                            <ul>
                                <li>Détection de mouvement dans le couloir</li>
                            </ul>
                            
                            <h5>Conditions</h5>
                            <ul>
                                <li>Période nocturne (entre 22h et 7h)</li>
                                <li>Luminosité faible (< 10 lux)</li>
                            </ul>
                            
                            <h5>Actions</h5>
                            <ol>
                                <li>Allumer éclairage couloir à 30%</li>
                                <li>Si déplacement vers la salle de bain, allumer SDB à 20%</li>
                                <li>Éteindre automatiquement après 3 minutes sans mouvement</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Scénario "Bienvenue à la maison"</h4>
                        </div>
                        <div class="card-body">
                            <h5>Objectif</h5>
                            <p>Accueil personnalisé lors du retour au domicile</p>
                            
                            <h5>Déclencheur</h5>
                            <ul>
                                <li>Détection smartphone sur réseau WiFi</li>
                                <li>Ouverture porte d'entrée quand mode Absence actif</li>
                            </ul>
                            
                            <h5>Actions</h5>
                            <ol>
                                <li>Désactiver l'alarme</li>
                                <li>Allumer éclairage entrée et salon</li>
                                <li>Ouvrir les volets si journée</li>
                                <li>Ajuster la température (mode Confort)</li>
                                <li>Diffuser message de bienvenue ou musique d'ambiance</li>
                                <li>Annoncer informations importantes (si configuré)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Bonnes pratiques et conseils avancés</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4>Organisation efficace</h4>
                                    <ul>
                                        <li>Utilisez un nommage cohérent pour tous vos scénarios</li>
                                        <li>Créez des dossiers thématiques (quotidien, sécurité, confort...)</li>
                                        <li>Documentez le fonctionnement de vos scénarios complexes</li>
                                        <li>Limitez le nombre d'actions par scénario pour faciliter le dépannage</li>
                                        <li>Créez des scénarios modulaires plutôt qu'un seul scénario complexe</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h4>Éviter les erreurs courantes</h4>
                                    <ul>
                                        <li>Évitez les conflits entre scénarios (actions contradictoires)</li>
                                        <li>Prévoyez des scénarios de secours (mode manuel)</li>
                                        <li>Testez régulièrement le bon fonctionnement de vos scénarios</li>
                                        <li>Attention aux boucles infinies dans les déclenchements en chaîne</li>
                                        <li>N'associez pas trop de conditions qui pourraient bloquer l'exécution</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil expert :</strong> Utilisez des variables globales pour créer des modes (Présence, Absence, Nuit, Vacances...) qui serviront de conditions dans plusieurs scénarios, facilitant ainsi la gestion globale de votre installation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous maîtrisez maintenant la création et la gestion des scénarios dans votre système TIS.
            </div>
            <p>N'hésitez pas à expérimenter et à personnaliser vos scénarios selon vos besoins et votre mode de vie.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le guide PDF avancé sur les scénarios</a>
        </div>
    `;
}

