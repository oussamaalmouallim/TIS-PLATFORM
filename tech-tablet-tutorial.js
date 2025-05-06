// Fonction pour charger le tutoriel Tablette pour les techniciens
function loadTechTabletTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Configuration technique de la tablette TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="tablette_home.png" alt="Interface tablette TIS" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>La tablette TIS est une interface fixe stratégique dans l'installation domotique. En tant que technicien, vous devez maîtriser sa configuration avancée, son installation physique, et sa maintenance.</p>
                    <p>Ce guide détaille les aspects techniques spécifiques à la tablette murale TIS.</p>
                </div>
            </div>
            
            <h4>Installation physique</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Prérequis d'installation</h5>
                            <ul>
                                <li><strong>Alimentation</strong> : 12V DC stabilisée ou PoE</li>
                                <li><strong>Connectivité</strong> : Ethernet (conseillé) ou WiFi</li>
                                <li><strong>Emplacement</strong> : À l'abri de la chaleur et de l'humidité</li>
                                <li><strong>Montage</strong> : Boîtier d'encastrement standard ou support surface</li>
                                <li><strong>Câblage</strong> : Prévoir gaine pour alimentation et réseau</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Procédure de montage</h5>
                            <ol>
                                <li>Fixez le boîtier d'encastrement selon les dimensions</li>
                                <li>Tirez les câbles (alimentation + réseau) dans la gaine</li>
                                <li>Connectez l'alimentation (respectez la polarité)</li>
                                <li>Branchez le câble Ethernet si utilisé</li>
                                <li>Fixez le support de tablette au boîtier</li>
                                <li>Insérez la tablette et verrouillez-la</li>
                                <li>Connectez le câble de liaison au TIS BUS (si modèle avec interface)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration système avancée</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Paramètres système</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Accès au mode système</h5>
                                    <ol>
                                        <li>Allumez la tablette et attendez l'initialisation complète</li>
                                        <li>Accédez au mode système avec l'une de ces méthodes :
                                            <ul>
                                                <li>Appuyez sur les 4 coins de l'écran simultanément pendant 5 secondes</li>
                                                <li>Utilisez le code d'accès : appuyez sur le logo TIS 6 fois rapidement</li>
                                                <li>Connectez un clavier USB et appuyez sur Ctrl+Alt+T</li>
                                            </ul>
                                        </li>
                                        <li>Saisissez le code PIN technique (par défaut : 7539)</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration système</h5>
                                    <p>Le mode système permet de configurer :</p>
                                    <ul>
                                        <li>Paramètres réseau avancés (IP fixe, VLAN, proxies)</li>
                                        <li>Calibration de l'écran tactile</li>
                                        <li>Mise à jour du firmware système</li>
                                        <li>Rotation de l'écran</li>
                                        <li>Paramètres de veille et de réveil</li>
                                        <li>Configuration des capteurs intégrés</li>
                                        <li>Débogage et journalisation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Personnalisation de l'interface</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration avancée de l'interface</h5>
                                    <ol>
                                        <li>Accédez à "Configuration interface" dans le mode système</li>
                                        <li>Importez les modèles prédéfinis ou personnalisés</li>
                                        <li>Activez les fonctions spéciales :
                                            <ul>
                                                <li>Intercom vidéo (si compatible)</li>
                                                <li>Surveillance caméras IP</li>
                                                <li>Widgets météo et énergie</li>
                                                <li>Notifications vocales</li>
                                            </ul>
                                        </li>
                                        <li>Configurez les accès aux sous-systèmes</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Personnalisation graphique</h5>
                                    <p>Éléments personnalisables :</p>
                                    <ul>
                                        <li>Thème graphique complet (textures, couleurs, polices)</li>
                                        <li>Images de fond par écran</li>
                                        <li>Animation de transition</li>
                                        <li>Icônes personnalisées par fonction</li>
                                        <li>Logo client (remplace logo TIS)</li>
                                        <li>Économiseur d'écran personnalisé</li>
                                        <li>Sons d'événements et retours tactiles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Integration et programmation</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Intégration avec le TIS BUS</h5>
                                    <p>Configuration de la connexion au système domotique :</p>
                                    <ol>
                                        <li>Dans "Paramètres système > Connexions > TIS BUS", configurez :
                                            <ul>
                                                <li>Mode de connexion (direct ou IP)</li>
                                                <li>Adresse du module IP Port</li>
                                                <li>Paramètres de communication</li>
                                                <li>Comportement en cas de déconnexion</li>
                                            </ul>
                                        </li>
                                        <li>Testez la communication avec les diagnostics intégrés</li>
                                        <li>Configurez la synchronisation automatique</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Intégration systèmes tiers</h5>
                                    <p>La tablette peut intégrer d'autres systèmes :</p>
                                    <ul>
                                        <li>Système d'alarme tiers (protocoles supportés)
                                            <ul>
                                                <li>Contact ID</li>
                                                <li>SIA</li>
                                                <li>API spécifiques</li>
                                            </ul>
                                        </li>
                                        <li>Systèmes audio multiroom</li>
                                        <li>Vidéosurveillance (RTSP, ONVIF)</li>
                                        <li>Contrôle climatisation (RS232, IR, API)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h4 class="mt-4">Programmation avancée</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Macros et scripts</h5>
                                    <p>Création de fonctions avancées :</p>
                                    <ul>
                                        <li>Macros pour opérations combinées</li>
                                        <li>Scripts temporels (planification complexe)</li>
                                        <li>Logique conditionnelle avancée</li>
                                        <li>Variables persistantes</li>
                                        <li>Accès à l'API HTTP du système</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Mode développeur</h5>
                                    <p>Pour les personnalisations avancées :</p>
                                    <ul>
                                        <li>Accès SSH pour configuration avancée</li>
                                        <li>Journalisation détaillée</li>
                                        <li>Éditeur de widgets personnalisés</li>
                                        <li>API WebSocket pour intégration temps réel</li>
                                        <li>Débogage JavaScript</li>
                                    </ul>
                                    <div class="alert alert-warning mt-2">
                                        <i class="fas fa-exclamation-triangle"></i> Le mode développeur peut compromettre la stabilité du système s'il est mal utilisé.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Maintenance et dépannage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Diagnostics et résolution de problèmes</h4>
                        </div>
                        <div class="card-body">
                            <h5>Outils de diagnostic</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <p><strong>Diagnostics matériels</strong></p>
                                    <ul>
                                        <li>Test de l'écran tactile</li>
                                        <li>Vérification connectivité réseau</li>
                                        <li>Test alimentation et batterie</li>
                                        <li>Diagnostics capteurs intégrés</li>
                                        <li>Vérification espace de stockage</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Diagnostics logiciels</strong></p>
                                    <ul>
                                        <li>Visualisation des journaux système</li>
                                        <li>Test connectivité TIS BUS</li>
                                        <li>Vérification intégrité base de données</li>
                                        <li>Test rafraîchissement interface</li>
                                        <li>Analyse performances système</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Procédures de maintenance</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <p><strong>Maintenance préventive</strong></p>
                                    <ol>
                                        <li>Nettoyage périodique de l'écran tactile (produit spécifique)</li>
                                        <li>Redémarrage programmé mensuel (paramétrable)</li>
                                        <li>Vérification ventilation arrière</li>
                                        <li>Validation des sauvegardes</li>
                                        <li>Surveillance température de fonctionnement</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Résolution problèmes courants</strong></p>
                                    <ul>
                                        <li><strong>Écran figé</strong> : Redémarrage forcé (bouton reset arrière)</li>
                                        <li><strong>Problèmes tactiles</strong> : Recalibration via mode système</li>
                                        <li><strong>Déconnexions</strong> : Vérifier qualité réseau et alimentation</li>
                                        <li><strong>Lenteur</strong> : Effacer cache et logs dans maintenance</li>
                                        <li><strong>Erreurs BUS</strong> : Vérifier câblage et module interface</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil technique :</strong> En cas de problème persistant, utilisez la fonction "Snapshot système" dans le menu de diagnostic pour générer un rapport complet à envoyer au support technique.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant la configuration technique et la maintenance de la tablette TIS.
            </div>
            <p>Pour des informations sur les modèles spécifiques ou les fonctionnalités avancées, consultez la documentation technique complète.</p>
            <a href="#" class="btn btn-secondary mt-3"><i class="fas fa-download"></i> Télécharger le manuel technique tablette</a>
        </div>
    `;
}

