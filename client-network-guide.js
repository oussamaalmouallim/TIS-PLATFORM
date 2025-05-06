function loadNetworkGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Configuration réseau et mises à jour</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Une configuration réseau optimale est essentielle pour le bon fonctionnement de votre système domotique TIS, notamment pour l'accès à distance et les mises à jour.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="schema_ipport.png" alt="Configuration réseau" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Principes fondamentaux</h4>
                    <p>Le système TIS peut être connecté à votre réseau de plusieurs façons :</p>
                    <ul>
                        <li><strong>Connexion filaire (Ethernet)</strong> : La plus stable et recommandée</li>
                        <li><strong>Connexion WiFi</strong> : Pratique mais un peu moins stable</li>
                        <li><strong>Module IP Port</strong> : La passerelle entre le TIS BUS et votre réseau</li>
                        <li><strong>Point d'accès dédié</strong> : Pour les grands systèmes ou environnements sécurisés</li>
                    </ul>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Prérequis et considérations</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Configuration réseau recommandée</h5>
                            <ul>
                                <li>Routeur avec DHCP (attribution automatique d'adresses IP)</li>
                                <li>Connexion internet haut débit pour l'accès à distance</li>
                                <li>Un minimum de 2 Mbps en upload pour les caméras</li>
                                <li>Réseau WiFi sécurisé (WPA2 ou WPA3)</li>
                                <li>Possibilité de réserver des adresses IP (recommandé)</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Points importants à considérer</h5>
                            <ul>
                                <li>L'accès à distance nécessite une configuration de routeur</li>
                                <li>Les mises à jour requièrent une connexion internet</li>
                                <li>Prévoyez un réseau séparé pour la domotique (VLAN) dans les grandes installations</li>
                                <li>Utilisez un onduleur (UPS) pour protéger le système en cas de coupure</li>
                                <li>Une adresse IP fixe pour le contrôleur principal simplifie la maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration du module IP Port</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Étapes de configuration</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration initiale</h5>
                                    <ol>
                                        <li>Connectez le module IP Port à votre réseau via un câble Ethernet</li>
                                        <li>Alimentez le module et attendez que les voyants s'initialisent</li>
                                        <li>Sur votre appareil mobile ou ordinateur, ouvrez l'application TIS</li>
                                        <li>Accédez à "Outils" puis "Découverte réseau"</li>
                                        <li>L'application détectera automatiquement le module IP Port</li>
                                        <li>Sélectionnez-le pour accéder à ses paramètres</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Paramètres réseau</h5>
                                    <ol>
                                        <li>Dans les paramètres du module, accédez à "Configuration réseau"</li>
                                        <li>Choisissez le mode d'attribution d'adresse IP :
                                            <ul>
                                                <li><strong>DHCP</strong> : Attribution automatique (simple)</li>
                                                <li><strong>IP statique</strong> : Configuration manuelle (recommandé)</li>
                                            </ul>
                                        </li>
                                        <li>Si vous choisissez IP statique, configurez :
                                            <ul>
                                                <li>Adresse IP (ex: 192.168.1.100)</li>
                                                <li>Masque de sous-réseau (généralement 255.255.255.0)</li>
                                                <li>Passerelle (l'adresse IP de votre routeur)</li>
                                                <li>Serveurs DNS (utilisez ceux de votre FAI ou 8.8.8.8)</li>
                                            </ul>
                                        </li>
                                        <li>Définissez un mot de passe d'accès sécurisé</li>
                                        <li>Enregistrez les paramètres</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention :</strong> Notez soigneusement les paramètres réseau configurés. En cas d'oubli, une réinitialisation d'usine sera nécessaire.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration de l'accès à distance</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Accès externe sécurisé</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration via TIS Cloud (recommandé)</h5>
                                    <ol>
                                        <li>Créez un compte sur le portal TIS Cloud si ce n'est déjà fait</li>
                                        <li>Dans l'application, allez dans "Paramètres" puis "Accès à distance"</li>
                                        <li>Sélectionnez "Activer l'accès via TIS Cloud"</li>
                                        <li>Connectez-vous avec vos identifiants TIS</li>
                                        <li>Suivez l'assistant de configuration</li>
                                        <li>Le système établira une connexion sécurisée sans configuration de routeur</li>
                                        <li>Vous pourrez ensuite accéder à votre système depuis n'importe où via l'application ou le portal web</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration manuelle (avancé)</h5>
                                    <ol>
                                        <li>Accédez à l'interface d'administration de votre routeur</li>
                                        <li>Configurez une redirection de port :
                                            <ul>
                                                <li>Port externe : 8443 (personnalisable)</li>
                                                <li>Adresse IP interne : celle du module IP Port</li>
                                                <li>Port interne : 443</li>
                                                <li>Protocole : TCP</li>
                                            </ul>
                                        </li>
                                        <li>Activez le service DDNS si votre IP publique est dynamique</li>
                                        <li>Dans l'application, activez l'accès direct et configurez :
                                            <ul>
                                                <li>Adresse d'accès (IP publique ou nom DDNS)</li>
                                                <li>Port d'accès (celui configuré dans le routeur)</li>
                                                <li>Identifiants sécurisés</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-shield-alt"></i> <strong>Sécurité :</strong> L'accès via TIS Cloud est plus sécurisé car il utilise un tunnel chiffré et ne nécessite pas d'ouvrir de ports sur votre routeur, réduisant ainsi les risques de vulnérabilité.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Gestion des mises à jour</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Mise à jour du système</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Mise à jour de l'application</h5>
                                    <ol>
                                        <li>Consultez régulièrement les mises à jour disponibles sur l'App Store (iOS) ou Google Play (Android)</li>
                                        <li>Alternativement, l'application vous notifiera lorsqu'une mise à jour est disponible</li>
                                        <li>Avant de mettre à jour, assurez-vous de sauvegarder vos projets</li>
                                        <li>Suivez les instructions pour mettre à jour l'application</li>
                                        <li>Au premier lancement après la mise à jour, vérifiez que vos projets fonctionnent correctement</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Mise à jour du firmware des modules</h5>
                                    <ol>
                                        <li>Dans l'application, accédez à "Système" puis "Mises à jour firmware"</li>
                                        <li>L'application recherchera automatiquement les mises à jour disponibles pour vos modules</li>
                                        <li>Pour chaque module avec mise à jour, vous verrez :
                                            <ul>
                                                <li>Version actuelle et version disponible</li>
                                                <li>Notes de version et améliorations</li>
                                                <li>Importance de la mise à jour</li>
                                            </ul>
                                        </li>
                                        <li>Sélectionnez les modules à mettre à jour</li>
                                        <li>Lancez la mise à jour et suivez les instructions</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Important :</strong> Ne débranchez jamais l'alimentation pendant une mise à jour firmware. Cela pourrait endommager définitivement le module concerné.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Stratégie de mise à jour recommandée</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Pour les installations résidentielles</h5>
                                    <ul>
                                        <li>Mettez à jour l'application dès qu'une nouvelle version est disponible</li>
                                        <li>Pour les mises à jour firmware :
                                            <ul>
                                                <li>Mises à jour critiques : appliquez immédiatement</li>
                                                <li>Mises à jour normales : appliquez dans les 2 semaines</li>
                                                <li>Mises à jour mineures : appliquez lors d'une maintenance régulière</li>
                                            </ul>
                                        </li>
                                        <li>Configurez les notifications de mise à jour</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Pour les installations professionnelles</h5>
                                    <ul>
                                        <li>Créez un calendrier de maintenance régulier</li>
                                        <li>Testez les mises à jour sur un système non critique avant déploiement</li>
                                        <li>Réalisez une sauvegarde complète avant chaque mise à jour</li>
                                        <li>Documentez toutes les mises à jour effectuées</li>
                                        <li>Envisagez un contrat de maintenance avec TIS pour les mises à jour gérées</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Résolution des problèmes réseau</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Problèmes courants et solutions</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Problème</th>
                                        <th>Causes possibles</th>
                                        <th>Solutions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Impossible de se connecter au module IP Port</td>
                                        <td>
                                            <ul>
                                                <li>Problème d'adresse IP</li>
                                                <li>Module hors ligne</li>
                                                <li>Problème de câblage</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez le câble Ethernet</li>
                                                <li>Redémarrez le module</li>
                                                <li>Utilisez la découverte réseau</li>
                                                <li>Vérifiez les LED d'état sur le module</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Accès à distance non fonctionnel</td>
                                        <td>
                                            <ul>
                                                <li>Configuration de routeur incorrecte</li>
                                                <li>Service TIS Cloud indisponible</li>
                                                <li>Problème d'identifiants</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez les redirections de port</li>
                                                <li>Contrôlez le statut des services TIS</li>
                                                <li>Reconnectez-vous à votre compte</li>
                                                <li>Testez la connexion en local d'abord</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Échec des mises à jour</td>
                                        <td>
                                            <ul>
                                                <li>Connexion internet instable</li>
                                                <li>Espace de stockage insuffisant</li>
                                                <li>Version incompatible</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Utilisez une connexion plus stable</li>
                                                <li>Libérez de l'espace de stockage</li>
                                                <li>Contactez le support pour mise à jour manuelle</li>
                                                <li>Vérifiez les prérequis de version</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-tools"></i> <strong>Outil de diagnostic :</strong> Utilisez l'outil "Diagnostic réseau" intégré à l'application pour identifier précisément les problèmes de connectivité.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous maîtrisez maintenant la configuration réseau et la gestion des mises à jour de votre système TIS.
            </div>
            <p>Pour toute assistance complémentaire, n'hésitez pas à contacter notre support technique.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le guide réseau complet</a>
        </div>
    `;
}

