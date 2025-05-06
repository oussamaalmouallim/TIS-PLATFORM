// Fonction pour charger le tutoriel Application Mobile pour les techniciens
function loadTechMobileAppTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Guide technique de l'application mobile TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="app_mobile_screen.png" alt="Écran d'accueil de l'application" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>L'application mobile TIS est l'interface principale pour les utilisateurs finaux. En tant que technicien, vous devez maîtriser ses fonctionnalités avancées pour pouvoir former les clients et assurer la maintenance.</p>
                    <p>Ce guide technique détaille les aspects avancés et la configuration professionnelle de l'application.</p>
                </div>
            </div>
            
            <h4>Configuration professionnelle</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Mode technicien</h5>
                            <ol>
                                <li>Installez l'application depuis l'App Store ou Google Play</li>
                                <li>Lancez l'application et connectez-vous avec vos identifiants pro</li>
                                <li>Accédez au mode technicien :
                                    <ul>
                                        <li>iOS : Appuyez 5 fois rapidement sur le logo dans l'écran À propos</li>
                                        <li>Android : Allez dans Paramètres > Options avancées > Mode technicien</li>
                                    </ul>
                                </li>
                                <li>Saisissez le code PIN professionnel (par défaut : 9876)</li>
                            </ol>
                        </div>
                        <div class="col-md-6">
                            <h5>Options avancées</h5>
                            <p>Le mode technicien débloque ces fonctionnalités :</p>
                            <ul>
                                <li>Diagnostic de communication</li>
                                <li>Configuration basse couche</li>
                                <li>Adressage manuel des modules</li>
                                <li>Éditeur d'alertes système</li>
                                <li>Limites de consommation</li>
                                <li>Logs système détaillés</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration de projet professionnelle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>En tant que technicien, vous pouvez configurer des aspects de l'application non accessibles aux utilisateurs standards.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Configuration avancée</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Droits d'accès et utilisateurs</h5>
                                    <ol>
                                        <li>Créez différents profils d'utilisateurs :
                                            <ul>
                                                <li>Administrateur (contrôle total)</li>
                                                <li>Utilisateur standard (contrôle limité)</li>
                                                <li>Utilisateur restreint (accès à certaines pièces seulement)</li>
                                                <li>Invité (contrôles de base temporaires)</li>
                                            </ul>
                                        </li>
                                        <li>Définissez les restrictions par fonctionnalité et par zone</li>
                                        <li>Configurez l'authentification à deux facteurs pour la sécurité</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Programmation des limites</h5>
                                    <ol>
                                        <li>Configurez les limites de consommation énergétique</li>
                                        <li>Définissez les plages horaires de fonctionnement</li>
                                        <li>Établissez des priorités pour les scénarios</li>
                                        <li>Programmez les réponses aux alertes système</li>
                                        <li>Créez des règles d'interdépendance entre systèmes</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h4>Outils de diagnostic</h4>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Monitoring système</h5>
                                    <p>Les outils de diagnostic permettent de :</p>
                                    <ul>
                                        <li>Visualiser le trafic sur le bus en temps réel</li>
                                        <li>Identifier les modules défaillants ou intermittents</li>
                                        <li>Mesurer les temps de réponse du système</li>
                                        <li>Analyser les pics de consommation</li>
                                        <li>Détecter les interférences réseau</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Résolution de problèmes</h5>
                                    <p>En cas d'anomalie, utilisez ces fonctions :</p>
                                    <ul>
                                        <li>Isolation de module (test individuel)</li>
                                        <li>Réinitialisation sélective</li>
                                        <li>Vérification de l'intégrité du câblage</li>
                                        <li>Validation des mises à jour firmware</li>
                                        <li>Exportation des logs pour analyse approfondie</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Note importante :</strong> Les outils de diagnostic peuvent affecter temporairement les performances. Informez les utilisateurs avant de lancer des diagnostics approfondis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Déploiement et remise client</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>La finalisation de l'installation et la formation du client sont des étapes cruciales.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Checklist de finalisation</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Préparation avant remise client</h5>
                                    <ol>
                                        <li>Vérifiez tous les modules et leur adressage</li>
                                        <li>Testez chaque fonction et scénario</li>
                                        <li>Créez les comptes utilisateurs</li>
                                        <li>Personnalisez l'interface selon les préférences client</li>
                                        <li>Mettez à jour tous les firmwares</li>
                                        <li>Réalisez une sauvegarde complète du système</li>
                                        <li>Préparez la documentation client personnalisée</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Formation client</h5>
                                    <ol>
                                        <li>Démontrez chaque fonctionnalité de base</li>
                                        <li>Expliquez la personnalisation de l'interface</li>
                                        <li>Montrez comment créer et modifier des scénarios simples</li>
                                        <li>Formez à la gestion des alertes et notifications</li>
                                        <li>Expliquez les limites et restrictions du système</li>
                                        <li>Montrez comment contacter le support technique</li>
                                        <li>Configurez l'accès à distance et testez-le avec le client</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Créez une vidéo personnalisée montrant l'utilisation spécifique du système installé. Les clients apprécient cette référence visuelle après votre départ.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Support et maintenance</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Procédures de maintenance préventive</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Maintenance trimestrielle</h5>
                                    <ul>
                                        <li>Vérification des journaux système</li>
                                        <li>Contrôle des temps de réponse</li>
                                        <li>Vérification des sauvegardes</li>
                                        <li>Mise à jour des firmwares non critiques</li>
                                        <li>Optimisation des scénarios</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Maintenance annuelle</h5>
                                    <ul>
                                        <li>Test complet de tous les modules</li>
                                        <li>Vérification physique des connexions</li>
                                        <li>Analyse thermique des modules de puissance</li>
                                        <li>Reconfiguration complète de l'accès distant</li>
                                        <li>Formation de rappel pour le client</li>
                                        <li>Révision et optimisation globale du système</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h4 class="mt-4">Documentation technique</h4>
                            <p>Assurez-vous de maintenir à jour :</p>
                            <ul>
                                <li>Schémas de câblage</li>
                                <li>Liste des modules avec adresses</li>
                                <li>Configuration réseau</li>
                                <li>Identifiants et mots de passe (version technicien)</li>
                                <li>Historique des modifications et mises à jour</li>
                                <li>Rapports d'intervention</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant les aspects techniques de l'application mobile TIS.
            </div>
            <p>Pour des informations plus détaillées, consultez le manuel technique complet ou contactez le support développeur.</p>
            <a href="#" class="btn btn-secondary mt-3"><i class="fas fa-download"></i> Télécharger la documentation technique complète</a>
        </div>
    `;
}

